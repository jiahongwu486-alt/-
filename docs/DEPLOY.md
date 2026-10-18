# 发布到公网（Render 免费版，保姆级步骤）

发布到公网需要两样东西，而且都只能你自己做：一个免费托管账号、以及以后收真实钱时 Waffo 的生产密钥和商户审核。我没有你的账号权限，也无法从当前沙箱访问托管平台，所以下面是给你照做的步骤。

## 1. 准备（一次性）

- 注册 GitHub 账号：https://github.com/signup
- 注册 Render 账号（用 GitHub 登录）：https://render.com

## 2. 把 `outputs` 文件夹传到 GitHub

1. 打开 GitHub，新建仓库（New repository），名字随意，如 `historical-persona`，选 Public 或 Private 都行。
2. 仓库建好后，页面会显示上传文件的入口：点「uploading an existing file」（上传现有文件）。
3. 把本机 `outputs` 文件夹里的内容**整个拖进去**（不要拖 outputs 这个外层文件夹本身，要拖它里面的文件：`middle-east/`、`server/`、`docs/`、`render.yaml`、`README.md`、`.gitignore` 等）。
4. 点 Commit 提交。

注意：`server/.env` 里现在有你的测试私钥，**不要上传它**。第 3 步拖文件时跳过 `server/.env`（`.gitignore` 已经会忽略它，但手动上传时也要注意别把 .env 拖进去）。

## 3. 在 Render 部署

1. Render 控制台点「New +」→「Blueprint」。
2. 连接你刚建的 GitHub 仓库。
3. Render 会自动读 `render.yaml` 并创建一个 web service（名字 `historical-persona`）。
4. 环境变量里，`WAFFO_PRIVATE_KEY` 和 `WAFFO_WEBHOOK_PUBLIC_KEY` 是空的，需要在 Render 的 Environment 里手动粘贴（值就是 `outputs/server/.env` 里那两行的内容）。
5. 点「Apply」部署。几分钟后 Render 会给你一个网址：`https://historical-persona.onrender.com/`。

## 4. 配置 Webhook

1. 打开 `https://historical-persona.onrender.com/` 确认网站能显示。
2. 去 Waffo 后台「设置 → Webhooks」添加：URL 填 `https://historical-persona.onrender.com/api/webhook/waffo`，事件 `order.completed`，勾选测试环境。
3. 把 `render.yaml` 里的 `WAFFO_SUCCESS_URL` 改成你的真实网址（如果 Render 给的网址和示例不同）。

## 5. 测试

用测试卡 `4576 7500 0000 0110`（成功）和 `4576 7500 0000 0220`（拒绝）各走一遍。

## 上线前必须注意

- 现在用的是 **测试环境** Key 和测试商品，只能收测试卡，不是真实收款。
- 正式收钱前：在 Waffo 创建生产 Key、把商品 `publish` 到生产、完成商户 KYB 审核，并把 Render 的环境变量全部换成生产值。
- 测试私钥已经在聊天里出现过，正式上线务必换新 Key。
- Render 免费版长时间没访问会休眠，冷启动约 30–60 秒；正式商用建议升级付费实例。

## 排查

- 部署后打不开：Render 的 Logs 里看报错，发给我。
- 支付后不解锁：确认 Webhook 注册的 URL 是 `https://你的域名/api/webhook/waffo`，且 `WAFFO_WEBHOOK_PUBLIC_KEY` 是测试环境公钥。
