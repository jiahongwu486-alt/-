# Historical Persona · 历史人格测试网页（v2）

一个「类似 MBTI」的付费人格测试：用户回答 36 道情景题，系统在 6 个行为维度上评分，并匹配到阿拉伯历史文化圈中的历史人物，给出优势、盲点、决策/协作风格、成长方向与 30 天计划。中东版为首个版本，后续按国家/地区 IP 复制知识库。

## 目录结构

```
outputs/
├── README.md
├── middle-east/                  ← 一个国家版本 = 一个文件夹
│   ├── index.html
│   ├── css/styles.css
│   └── js/
│       ├── config.js            定价、支付、演示开关
│       ├── data.js              UI 文案、6 维定义、报告模块
│       ├── data-questions.js    题库（结构化、带 ID/评分/审核状态）
│       ├── data-characters.js   人物档案库（带来源/身份分类/审核状态）
│       └── app.js               答题、评分、匹配、报告、解锁
├── scripts/                     校验与去重脚本（Node）
├── server/                      Waffo Pancake 支付服务（create-checkout / webhook / verify）
├── docs/                        审计、重复检测、已知限制
├── data/                        脚本输出（重复候选、订单流水等）
└── backups/                     v1 备份，可回滚
```

## 本地预览（Windows）

纯静态站点，双击 `middle-east/index.html` 即可打开。默认阿拉伯语（RTL），右上角可切英文。

## 测试模型

6 个行为维度：planning（规划）、decisiveness（决断）、collaboration（协作）、independence（独立）、exploration（探索）、risk_assessment（风险）。

每题 4 个选项，每个选项向一个维度记 1 分；各维度按「该维度实际可得分」归一化到 0–1，再用欧氏距离做最近邻匹配，取主匹配 + 次匹配（同分时按 `person_id` 字典序确定性排序）。

## 收费通道（$1.99）

使用 Waffo Pancake 托管收银台，服务端验签后才解锁。前端 `js/config.js` 配 `payProvider` 与 `createCheckoutEndpoint` / `verifyEndpoint`；服务端在 `server/waffo-payment.mjs`（Direct API，零依赖）。完整接入与运行步骤见 `server/README.md`。

密钥只在 `server/.env`（已 gitignore），绝不进前端、Local Storage 或仓库。`WAFFO_PRIVATE_KEY`、`WAFFO_WEBHOOK_PUBLIC_KEY`、`WAFFO_PRODUCT_ID` 目前是占位符，填入真实值后才能联调。

演示模式：演示码 `ME-DEMO-2026`，正式上线前把 `previewEnabled` 置 `false`。

## 数据维护（Windows / PowerShell）

校验知识库（题目/人物 ID 唯一、双语完整、评分合法、6 维覆盖、匹配确定性）：

```powershell
node outputs/scripts/validate_knowledge_base.mjs
```

重复检测（精确 + 近似），输出到 `outputs/data/`：

```powershell
node outputs/scripts/deduplicate_knowledge_base.mjs
```

## 审核工作流

目标流程 `draft → fact_checked → cultural_reviewed → approved → published`。当前所有新增内容均为待审状态（题目 `needs_cultural_review`、人物 `needs_fact_check`，来源 `needs_verification`）。正式商用前需人工完成事实核对与文化审核。当前无后台，审核 = 编辑 `data-*.js` 的 `status` / `allowed_match` / `review_status` 字段后重跑脚本。

## 新增国家版本

1. 复制 `middle-east` 文件夹并重命名。
2. 换掉 `data-questions.js`（题目）与 `data-characters.js`（人物知识库），`data.js` 的 UI 文案按需翻译。
3. 改 `config.js` 的支付与语言配置。
4. 如需按 IP 自动分流，在入口加一层地理跳转。

## 说明

- 页面与报告均声明：仅供自我认知的解读性练习，非临床/科学评估。
- 历史事实与现代人格解读分开存储、分开显示；人物画像为 `product_interpretation`，非实测数据。
- 史料来源全部标记 `needs_verification`，未伪造 URL/DOI。

详细审计见 `docs/knowledge_base_audit.md`，已知限制见 `docs/known_limitations.md`。
