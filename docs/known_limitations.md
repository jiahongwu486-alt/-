# 已知限制与待办

## 1. 来源与审核状态

- 当前环境无联网检索，所有人物史料来源仅记录「标准文献名 + 作者 + 支持论断」，均标记 `verification_status: needs_verification`，未填写 URL/DOI，避免伪造标识符。
- 所有 AI 生成内容 `review_status` 均为待审，未被自动标记 `approved`。正式商用前需完成：`draft → fact_checked → cultural_reviewed → approved → published`。

## 2. 维度评分覆盖不均

36 题 × 4 选项 = 144 个评分映射，各维度实际可得分次数：

| 维度 | 选项出现次数 |
| --- | --- |
| planning | 31 |
| decisiveness | 33 |
| collaboration | 34 |
| independence | 15 |
| exploration | 21 |
| risk_assessment | 10 |

计分按「该维度实际可得分」归一化到 0–1，因此不存在维度权重偏差；但 risk_assessment 与 independence 的测量项偏少，稳定性弱于其它维度。下一步应补写候选题，把各维度拉平到约 24。

## 3. 心理测量声明

本产品是自我认知的解读性练习，未做信度/效度研究，不具备临床或科学有效性。报告内与页面页脚均已声明。

## 4. 收费安全

- Payment Link 模式的 `?paid=1` 解锁仍可被懂技术的用户绕过，仅建议用于内测。
- 正式收费请使用 `server/webhook.mjs` + Stripe Checkout 的服务端核验（`config.js` 的 `verifyEndpoint`）。

## 5. 数量目标

- 候选题目目标 60，当前启用 36；候补 24 道未编写。
- 人物候选目标 30–40，当前 21；正式匹配目标 20–30，当前 20。

## 6. 其它

- 无内容管理后台；审核、启用/停用通过编辑 `data-*.js` 的 `status` / `allowed_match` 字段 + 重跑脚本完成。
- 30 天行动计划为模板化生成，非个性化深度方案。
