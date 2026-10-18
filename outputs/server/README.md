# Waffo Pancake 收费通道（服务端）

前端静态站通过本服务完成 Waffo 支付：创建托管收银台会话、接收并验签 Webhook、复核订单状态、发放解锁凭证。

## 说明：为什么是 Direct API 而不是 SDK

任务要求使用 `@waffo/pancake-ts`，但当前环境没有 `npm`，且 npm registry / CDN 均不可达，无法安装 SDK。因此本实现采用 Waffo 官方同样支持的 **Direct API**（REST 写入 + GraphQL 查询 + 手工 RSA-SHA256 签名/验签），零依赖、只用 Node 内置 `crypto` 和 `fetch`。`lib/waffo-client.mjs` 的方法与官方 SDK 一一对应；等你的机器有 npm 后，可整体替换为：

```js
import { WaffoPancake, verifyWebhook } from "@waffo/pancake-ts";
```

## 目录

```
server/
├── .env.example        变量名模板（只含占位符）
├── .env                本地真实配置（已 gitignore，密钥不提交）
├── waffo-payment.mjs   支付服务入口（create-checkout / webhook / verify / health）
├── lib/env.mjs         .env 读取 + 配置校验
├── lib/waffo-client.mjs  Direct API 客户端（签名/验签/GraphQL）
├── setup/create-product.mjs  创建 $1.99 一次性商品
└── test/waffo-payment.test.mjs  自测（24 项）
```

## 环境变量（名称，值不放这里）

`.env.example` 里已列全：`WAFFO_MERCHANT_ID`、`WAFFO_PRIVATE_KEY`、`WAFFO_WEBHOOK_PUBLIC_KEY`、`WAFFO_ENV`、`WAFFO_STORE_ID`、`WAFFO_PRODUCT_ID`、`PORT`、`ALLOWED_ORIGIN`、`REPORT_PRICE_AMOUNT`、`REPORT_PRICE_CURRENCY`、`WAFFO_SUCCESS_URL`。

## 运行步骤

1. 把 `.env` 里的 `WAFFO_PRIVATE_KEY`、`WAFFO_WEBHOOK_PUBLIC_KEY`（测试环境公钥，Dashboard → Settings → Webhooks）填上。
2. 创建 $1.99 商品并拿到 Product ID：

```powershell
node setup/create-product.mjs
```

   把输出的 `PROD_xxx` 填进 `.env` 的 `WAFFO_PRODUCT_ID`。
3. 启动服务：

```powershell
node waffo-payment.mjs
```

## 流程与安全

- `POST /api/create-checkout`：校验 36 道题答案 → 服务端按固定 $1.99 USD 创建会话（金额/币种由服务端决定，不接受客户端传入）→ 返回 `checkoutUrl`。
- 前端用 `window.open(checkoutUrl, "_blank", "noopener,noreferrer")` 打开托管收银台（官方要求，不要用 `location.href`）。
- `POST /api/webhook/waffo`：读取**原始请求体**验签（`X-Waffo-Signature`）→ 校验事件为 `order.completed`、`orderStatus=completed`、`paymentStatus=succeeded`、金额 `1.99`、币种 `USD` → 按 `event.id` 去重 → 标记订单已支付并发放解锁 token。
- `GET /api/verify?resultId=`：返回解锁 token 与报告快照；未支付时用 GraphQL 按 `orderMerchantExternalId` 复核订单状态后才解锁。
- 失败/取消/伪造跳转不会解锁；浏览器跳回成功页不等于支付成功。

## 账号系统

- `POST /api/auth/signup`：邮箱 + 密码（≥8 位）注册，密码用 scrypt 加盐哈希存储，不存明文。
- `POST /api/auth/login`：登录，返回 30 天有效的会话 token。
- `GET /api/auth/me`：用 `Authorization: Bearer <token>` 校验登录态。
- `POST /api/auth/logout`：注销当前 token。
- 账号数据存 `outputs/data/users.json`（已 gitignore，不含明文密码）。正式上线建议迁移到数据库并加限流。
- 创建支付订单和查询报告时携带 token，订单会绑定到用户；已购报告只能由本人查看。

## 本地测试 Webhook

Waffo 无法访问 `localhost`。用 ngrok 做 HTTPS 隧道（官方推荐；localtunnel 会丢弃 `X-Waffo-Signature` 自定义头）：

```powershell
ngrok http 8787
```

把 ngrok 的 https 地址注册到 Dashboard 的 Webhook（`testMode: true`，事件 `["order.completed"]`）。

测试卡：成功 `4576 7500 0000 0110`，拒绝 `4576 7500 0000 0220`。

## 上线前检查清单

- [ ] 测试环境端到端支付 + Webhook 验签通过
- [ ] 商品 `publish` 到生产；生产 Webhook 用生产公钥；生产 Key 单独创建
- [ ] 商户 KYB / 生产审核通过（否则 prod 返回 403）
- [ ] 部署到 HTTPS 公开域名，`WAFFO_SUCCESS_URL` 换成 https
- [ ] `config.js` 的 `previewEnabled` 置 `false`、换掉演示码、端点改成线上地址
- [ ] 订单存储从 JSONL 迁移到数据库并加限流/日志

## 已实测 / 未实测

- 已实测：24 项单元自测（答案校验、匹配确定性、金额/币种/状态校验、RSA 签名/验签、密钥缺失报错）全部通过；密钥缺失时服务拒绝启动且只列变量名。
- 未实测（需要你的真实私钥 + 测试支付）：创建真实测试订单、真实测试卡支付、Webhook 验签端到端、支付后刷新恢复。这些不能用模拟回调冒充。
