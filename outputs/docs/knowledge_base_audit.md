# 知识库审计报告（Arabian Archetypes）

审计时间：2026-10-18（Asia/Shanghai） · 环境：Windows，无联网检索

## 一、审计前现状（v1）

| 项目 | v1 实际状态 |
| --- | --- |
| 题目数量 | 12 道，每题 2 选项 |
| 维度 | 3 个（能量 E/I、决策 R/F、驱动 O/N） |
| 人物 | 8 位，存于 `content.js` |
| 数据形态 | 纯前端静态 JS 字面量，无 ID、无版本、无审核状态 |
| 数据库 | 无（无后端、无导入脚本、无后台） |
| 来源体系 | 无（人物无来源字段） |
| 重复处理 | 无 |
| 测试 | 无自动化测试 |
| 收费 | 仅前端 `?paid=1` 解锁，可被绕过；无服务端核验 |

## 二、发现的问题与风险

1. 数据内嵌在 `content.js`，与逻辑耦合，扩容和版本管理困难。
2. 维度模型为 3 维，与任务要求的 6 维不一致（非一一对应，需整体迁移）。
3. 每题仅 2 选项，无法覆盖 6 维评分映射。
4. 人物无史料来源、无身份分类、无史实/解读分离，存在把波斯人物误标为阿拉伯人的风险。
5. 宗教人物（拉比娅·阿达维娅）曾进入娱乐性匹配，违反本次政策。
6. 无去重、无备份、无幂等导入、无自动化测试。
7. 支付解锁可被直接改 URL 绕过。

## 三、迁移与映射

- 旧 3 维模型整体替换为 6 维模型：`planning / decisiveness / collaboration / independence / exploration / risk_assessment`。旧模型不复用，属结构性升级而非字段改名。
- 旧 8 位人物保留并迁移至新结构，分配稳定 `person_id`（P-001…P-008）：萨拉丁、伊本·白图泰、哈伦·拉希德、鲁米、伊本·西那、伊本·鲁世德、拉比娅·阿达维娅（转为排除记录）、奥马尔·海亚姆。
- 身份分类字段区分：`arab_historical` / `arab_cultural_sphere` / `related_civilization` / `disputed_identity`；鲁米、伊本·西那、海亚姆、花拉子米等不再被误标为阿拉伯人。

## 四、本次执行内容

1. 备份：`outputs/backups/20261018-*`（content.js / app.js / config.js / index.html / styles.css）。
2. 新数据层：`js/data.js`（UI、6 维定义、报告模块）、`js/data-questions.js`、`js/data-characters.js`，均为结构化、带版本与审核状态、可由 Node 脚本直接读取。
3. 引擎重写：`js/app.js` 改为 4 选项、6 维评分归一化、欧氏距离最近邻匹配、主/次匹配、模块化报告。
4. 收费通道：`config.js` 支持 Payment Link 与 Checkout + 服务端核验；`server/webhook.mjs` 提供 Webhook 与 `/verify`。
5. 脚本：`scripts/validate_knowledge_base.mjs`、`scripts/deduplicate_knowledge_base.mjs`。
6. 审核状态：所有新增内容 `review_status` 为待审（题目 `needs_cultural_review`、人物 `needs_fact_check`），AI 内容未自动标记为 approved。

## 五、扩容前后数量

| 指标 | 扩容前 | 扩容后 |
| --- | --- | --- |
| 启用题目 | 12 | 36（6 维 × 6） |
| 人物档案 | 8 | 21 |
| 正式匹配人物 | 8 | 20（另 1 位宗教人物排除） |
| 重复候选 | 未检测 | 0 |
| 自动化测试 | 0 | 校验脚本 + 去重脚本 |

## 六、已执行测试及结果

- `validate_knowledge_base.mjs`：PASS（题目/人物 ID 唯一、双语文案完整、评分字段合法、6 维覆盖达标、人物画像与来源齐全、匹配确定性通过）。
- `deduplicate_knowledge_base.mjs`：PASS（精确 + 近似重复检测，0 候选；幂等可重复运行）。

## 七、未完成项

- 所有史料来源未联网核实（`needs_verification`）；未完成 `fact_checked → cultural_reviewed → approved` 全流程。
- 题目候选池目标 60 道，当前启用 36 道，余 24 道候补未编写。
- 人物目标 30–40 候选 / 20–30 正式，当前 21 档案 / 20 正式。
- 无后台管理界面，审核通过编辑数据文件 + 脚本完成。
- 维度评分选项覆盖不均（详见 known_limitations）。

## 八、回滚方法

将 `outputs/backups/20261018-*` 中的 `content.js / app.js / config.js / index.html / styles.css` 覆盖回 `outputs/middle-east/` 对应位置即可回到 v1；数据层与引擎同版本一起回滚，避免混用。
