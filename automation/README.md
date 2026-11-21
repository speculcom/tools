# AI 工具 · AI 自动化与工作流

> 可视化搭 AI 工作流与 agent

**tools.specul.com/automation/** · 独立信息项目（非厂商官方榜单）

可视化/低代码搭 AI 工作流与 agent 的产品——交付物是「搭出来的应用/流程」，运行在平台的运行时上。给程序用的编排 SDK 归 framework；传统 RPA（无 LLM 主轴）归 nav。

本站共 12 个大类（`coding` / `chat` / `image` / `video` / `audio` / `research` / `office` / `automation` / `framework` / `mcp` / `runner` / `safety`），本 README 描述「AI 自动化与工作流」这一个。

## 这个大类提供什么

- **24 个对象**，按固定 8 个维度记录
- 每个维度都能回溯到官方一手源，附来源类型与核验日期
- **不给总分排名**——缺少跨工具的统一实测，排名会误导
- **「未知」是合法答案**——查不到就写未知并说明原因，不用推测填充

## 收录对象

| 对象 | 形态 | 厂商 | 可信度 | 核验日 |
|---|---|---|---|---|
| [Activepieces](./activepieces.html) | 网页服务 | Activepieces Inc. | verified | 2026-11-21 |
| [Salesforce Agentforce](./agentforce.html) | 网页服务 | Salesforce | verified | 2026-10-30 |
| [AutoGPT（现 Experts AI 团队平台）](./autogpt.html) | 网页服务 | AutoGPT（Determinist Ltd 运营） | verified | 2026-10-30 |
| [Bedrock Agents / AgentCore](./bedrock-agents.html) | 网页服务 | AWS | verified | 2026-10-30 |
| [Botpress](./botpress.html) | 网页服务 | Botpress | verified | 2026-10-30 |
| [Microsoft Copilot Studio](./copilot-studio.html) | 网页服务 | Microsoft | verified | 2026-10-30 |
| [扣子 / Coze](./coze.html) | 网页服务 | 字节跳动 | verified | 2026-10-30 |
| [Dify](./dify.html) | 网页服务 | LangGenius（国产出海） | verified | 2026-10-30 |
| [FastGPT](./fastgpt.html) | 网页服务 | labring（环际云，国产） | verified | 2026-11-21 |
| [Flowise](./flowise.html) | 网页服务 | FlowiseAI, Inc. | verified | 2026-10-30 |
| [Gumloop](./gumloop.html) | 网页服务 | Gumloop | verified | 2026-10-30 |
| [Langflow](./langflow.html) | 网页服务 | DataStax（原 Langflow AI） | verified | 2026-10-30 |
| [Lindy](./lindy.html) | 网页服务 | Lindy | verified | 2026-10-30 |
| [Make](./make.html) | 网页服务 | Make（原 Integromat） | verified | 2026-10-30 |
| [MaxKB](./maxkb.html) | 网页服务 | 飞致云（国产） | verified | 2026-10-30 |
| [n8n](./n8n.html) | 网页服务 | n8n GmbH | verified | 2026-10-30 |
| [Google Opal](./opal.html) | 网页服务 | Google Labs | partial | 2026-11-04 |
| [Pipedream（Connect / Workflows）](./pipedream.html) | 网页服务 | Pipedream | verified | 2026-11-21 |
| [Microsoft Power Automate](./power-automate.html) | 网页服务 | Microsoft | verified | 2026-11-17 |
| [Relevance AI](./relevance-ai.html) | 网页服务 | Relevance AI（悉尼） | verified | 2026-10-30 |
| [SmythOS](./smythos.html) | 网页服务 | SmythOS | partial | 2026-10-30 |
| [Vertex AI Agent Builder（Gemini Enterprise 平台线）](./vertex-agent-builder.html) | 网页服务 | Google | verified | 2026-10-30 |
| [Voiceflow](./voiceflow.html) | 网页服务 | Voiceflow | verified | 2026-10-30 |
| [Zapier](./zapier.html) | 网页服务 | Zapier | verified | 2026-11-21 |

## 状态标记

| 标记 | 含义 |
|---|---|
| `verified` | 八维都有官方依据，且核验日在 90 天内（只讲证据，不讲产品是否活跃） |
| `partial` | 有维度没核清、官方文档打不开，或核验超过 90 天 |
| `stale` | 官方已发生重大变化，本站尚未复核 |

`lifecycle` 单独表示产品状态（`active` / `maintenance` / `archived` / `unknown`），不参与 `confidence` 封顶。一个已归档产品可以有完整的证据；一个每天发版的产品也可能因为官方不披露而只有 `partial`。

当前 24 个对象中，**22 个为 verified**。

## 数据来源

全部数据来自 **[speculcom/ai-handbook](https://github.com/speculcom/ai-handbook)**（CC BY 4.0），
由 `tools/sites/build.mjs` 从该仓库的 Markdown + frontmatter 构建，本仓库只存产物。

发现错误或有新证据，欢迎去数据仓库提 Issue 或 PR。

## 站内大类

| 大类 | 主题 | 对象数 |
|---|---|---|
| [AI 编程](/coding/) | 装在编辑器、终端，或厂商云里 | 41 |
| [AI 对话助手](/chat/) | 通用对话产品，含国产 | 23 |
| [AI 图像创作](/image/) | 文生图与图像工作台 | 15 |
| [AI 视频创作](/video/) | 文生视频与数字人 | 14 |
| [AI 音频与语音](/audio/) | 音乐生成、语音合成与转写 | 17 |
| [AI 搜索与研究](/research/) | AI 搜索、学术检索与研究工作台 | 11 |
| [办公与写作](/office/) | 文档、表格、演示、会议、翻译与邮件 | 15 |
| [AI 自动化与工作流](/automation/) | 可视化搭 AI 工作流与 agent | 24 |
| [框架与运行时](/framework/) | 运行时、编排框架、SDK、机器人软件栈 | 42 |
| [MCP 工具](/mcp/) | 缺什么，装什么 —— 给 agent 装的 MCP 工具 | 32 |
| [本地模型运行器](/runner/) | 在自己机器上跑开源模型 | 21 |
| [AI 安全与评测](/safety/) | 拦得住、测得出、追得回 | 25 |

---

© 2026 Specul · 投机 · 推演
