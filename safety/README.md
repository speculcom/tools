# AI 工具 · AI 安全与评测

> 拦得住、测得出、追得回

**tools.specul.com/safety/** · 独立信息项目（非厂商官方榜单）

给 AI 系统做约束、度量与追责的产品：护栏与内容过滤、评测与观测、红队与审计、机密计算与访问控制、数据合规与脱敏、内容溯源与标识。本大类只收四条形态（网页 / 云服务 / 本机应用 / CLI）。安全与护栏的模型本体不收（「模型不是产品」）；六条线在不同层，不做横向排名，档案只回答「什么约束下选谁」。

本站共 11 个大类（`coding` / `chat` / `image` / `video` / `audio` / `research` / `automation` / `framework` / `mcp` / `runner` / `safety`），本 README 描述「AI 安全与评测」这一个。

## 这个大类提供什么

- **25 个对象**，按固定 8 个维度记录
- 每个维度都能回溯到官方一手源，附来源类型与核验日期
- **不给总分排名**——缺少跨工具的统一实测，排名会误导
- **「未知」是合法答案**——查不到就写未知并说明原因，不用推测填充

## 收录对象

| 对象 | 形态 | 厂商 | 可信度 | 核验日 |
|---|---|---|---|---|
| [Content Credentials（内容凭证）](./adobe-content-credentials.html) | 网页服务 | Adobe · Content Authenticity Initiative / C2PA | partial | 2026-11-06 |
| [Arize Phoenix](./arize-phoenix.html) | 本机应用 | Arize AI | partial | 2026-11-06 |
| [Azure AI Content Safety](./azure-ai-content-safety.html) | 厂商云形态 | Microsoft | partial | 2026-11-06 |
| [Amazon Bedrock Guardrails](./bedrock-guardrails.html) | 厂商云形态 | Amazon Web Services | partial | 2026-11-06 |
| [Braintrust](./braintrust.html) | 网页服务 | Braintrust AI | partial | 2026-11-06 |
| [CanaryScan](./canary-scan.html) | CLI 形态 | PSA Intelligence | partial | 2026-11-06 |
| [garak](./garak.html) | CLI 形态 | NVIDIA · Leon Derczynski | partial | 2026-11-06 |
| [GitGuardian](./gitguardian.html) | 网页服务 | GitGuardian | partial | 2026-11-06 |
| [Helicone](./helicone.html) | 厂商云形态 | Helicone | partial | 2026-11-06 |
| [Inspect](./inspect-ai.html) | CLI 形态 | UK AI Security Institute | partial | 2026-11-06 |
| [Lakera](./lakera-ai.html) | 厂商云形态 | Lakera | partial | 2026-11-06 |
| [Langfuse](./langfuse.html) | 本机应用 | Langfuse | partial | 2026-11-06 |
| [LangSmith](./langsmith.html) | 厂商云形态 | LangChain | partial | 2026-11-06 |
| [LangWatch](./langwatch.html) | 厂商云形态 | LangWatch | partial | 2026-11-06 |
| [LiteLLM 网关（Proxy / AI Gateway）](./litellm.html) | 本机应用 | BerriAI · LiteLLM | partial | 2026-11-06 |
| [LLM Guard](./llm-guard.html) | 本机应用 | Protect AI | partial | 2026-11-06 |
| [NeMo Guardrails](./nemo-guardrails.html) | 本机应用 | NVIDIA | partial | 2026-11-06 |
| [Nightfall](./nightfall.html) | 厂商云形态 | Nightfall AI | partial | 2026-11-06 |
| [OpenAI Evals](./openai-evals.html) | CLI 形态 | OpenAI | partial | 2026-11-06 |
| [Presidio](./presidio.html) | 本机应用 | Data Privacy Stack | partial | 2026-11-06 |
| [promptfoo](./promptfoo.html) | CLI 形态 | promptfoo | partial | 2026-11-06 |
| [PyRIT](./pyrit.html) | 本机应用 | Microsoft | partial | 2026-11-06 |
| [Ragas](./ragas.html) | 本机应用 | VibrantLabs | partial | 2026-11-06 |
| [Rebuff](./rebuff.html) | 本机应用 | Protect AI | partial | 2026-11-06 |
| [Truepic Vision / Lens](./truepic.html) | 厂商云形态 | Truepic Inc. | partial | 2026-11-06 |

## 可信度标记

| 标记 | 含义 |
|---|---|
| `verified` | all 8 dimensions backed by official sources, checked within 90 days |
| `partial` | some dimensions unknown, or official docs unreachable, or checked over 90 days ago |
| `stale` | 官方已发布重大变化，本站尚未核验 |

当前 25 个对象中，**0 个为 verified**。

## 数据来源

全部数据来自 **[speculcom/ai-handbook](https://github.com/speculcom/ai-handbook)**（CC BY 4.0），
由 `tools/sites/build.mjs` 从该仓库的 Markdown + frontmatter 构建，本仓库只存产物。

发现错误或有新证据，欢迎去数据仓库提 Issue 或 PR。

## 站内大类

| 大类 | 主题 | 对象数 |
|---|---|---|
| [AI 编程](/coding/) | 装在编辑器、终端，或厂商云里 | 41 |
| [AI 对话助手](/chat/) | 通用对话产品，含国产 | 21 |
| [AI 图像创作](/image/) | 文生图与图像工作台 | 15 |
| [AI 视频创作](/video/) | 文生视频与数字人 | 14 |
| [AI 音频与语音](/audio/) | 音乐生成、语音合成与转写 | 17 |
| [AI 搜索与研究](/research/) | AI 搜索、学术检索与研究工作台 | 11 |
| [AI 自动化与工作流](/automation/) | 可视化搭 AI 工作流与 agent | 23 |
| [框架与运行时](/framework/) | 运行时、编排框架、SDK、机器人软件栈 | 42 |
| [MCP 工具](/mcp/) | 缺什么，装什么 —— 给 agent 装的 MCP 工具 | 32 |
| [本地模型运行器](/runner/) | 在自己机器上跑开源模型 | 21 |
| [AI 安全与评测](/safety/) | 拦得住、测得出、追得回 | 25 |

---

© 2026 Specul · 投机 · 推演
