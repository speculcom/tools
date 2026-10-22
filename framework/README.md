# AI 工具 · 框架与运行时

> 运行时、编排框架、SDK

**tools.specul.com/framework/** · 独立信息项目（非厂商官方榜单）

Agent 运行时 / 编排框架 / SDK 的责任边界、状态持久化能力与权限模型。收录标准：提供 Agent 运行时或编排层、有官方文档可回溯、近 30 天有实质更新。

本站共 10 个大类（`coding` / `chat` / `image` / `video` / `audio` / `research` / `automation` / `framework` / `mcp` / `runner`），本 README 描述「框架与运行时」这一个。

## 这个大类提供什么

- **22 个对象**，按固定 8 个维度记录
- 每个维度都能回溯到官方一手源，附来源类型与核验日期
- **不给总分排名**——缺少跨工具的统一实测，排名会误导
- **「未知」是合法答案**——查不到就写未知并说明原因，不用推测填充

## 收录对象

| 对象 | 形态 | 厂商 | 可信度 | 核验日 |
|---|---|---|---|---|
| [AG2](./ag2.html) | 框架 / SDK | ag2ai | partial | 2026-10-08 |
| [AgentScope](./agentscope.html) | 框架 / SDK | 阿里巴巴（魔搭社区） | partial | 2026-10-21 |
| [Claude Agent SDK](./claude-agent-sdk.html) | 框架 / SDK | Anthropic | partial | 2026-09-30 |
| [Codex SDK](./codex-sdk.html) | 框架 / SDK | OpenAI | partial | 2026-10-01 |
| [CrewAI](./crewai.html) | 框架 / SDK | CrewAI Inc | partial | 2026-10-08 |
| [Deep Agents](./deepagents.html) | 框架 / SDK | LangChain | partial | 2026-09-30 |
| [DSPy](./dspy.html) | 框架 / SDK | Stanford NLP / Databricks | partial | 2026-10-21 |
| [Google ADK（Agent Development Kit）](./google-adk.html) | 框架 / SDK | Google | partial | 2026-10-01 |
| [Haystack](./haystack.html) | 框架 / SDK | deepset | partial | 2026-10-21 |
| [Hermes Agent](./hermes-agent.html) | 框架 / SDK | Nous Research | partial | 2026-10-01 |
| [LangChain](./langchain.html) | 框架 / SDK | LangChain, Inc. | partial | 2026-10-21 |
| [LangGraph](./langgraph.html) | 框架 / SDK | LangChain Inc | partial | 2026-10-01 |
| [Letta / MemGPT](./letta.html) | 框架 / SDK | Letta, Inc. | partial | 2026-10-21 |
| [LlamaIndex Framework](./llamaindex.html) | 框架 / SDK | LlamaIndex（run-llama） | partial | 2026-10-01 |
| [Mastra](./mastra.html) | 框架 / SDK | Mastra AI | partial | 2026-10-08 |
| [Microsoft Agent Framework](./microsoft-agent-framework.html) | 框架 / SDK | Microsoft | partial | 2026-10-08 |
| [OpenAI Agents SDK](./openai-agents-sdk.html) | 框架 / SDK | OpenAI | partial | 2026-09-30 |
| [OpenHands Agent Canvas](./openhands.html) | 框架 / SDK | OpenHands（All-Hands-AI） | partial | 2026-10-01 |
| [Pydantic AI](./pydantic-ai.html) | 框架 / SDK | Pydantic | partial | 2026-10-08 |
| [smolagents](./smolagents.html) | 框架 / SDK | Hugging Face | partial | 2026-10-08 |
| [Strands Agents SDK](./strands-agents.html) | 框架 / SDK | AWS | partial | 2026-10-21 |
| [SWE-agent](./swe-agent.html) | 框架 / SDK | Princeton / Stanford（学术团队） | partial | 2026-10-21 |

## 可信度标记

| 标记 | 含义 |
|---|---|
| `verified` | all 8 dimensions backed by official sources, checked within 90 days |
| `partial` | some dimensions unknown, or official docs unreachable, or checked over 90 days ago |
| `stale` | 官方已发布重大变化，本站尚未核验 |

当前 22 个对象中，**0 个为 verified**。

## 数据来源

全部数据来自 **[speculcom/ai-handbook](https://github.com/speculcom/ai-handbook)**（CC BY 4.0），
由 `tools/sites/build.mjs` 从该仓库的 Markdown + frontmatter 构建，本仓库只存产物。

发现错误或有新证据，欢迎去数据仓库提 Issue 或 PR。

## 站内大类

| 大类 | 主题 | 对象数 |
|---|---|---|
| [AI 编程](/coding/) | 装在编辑器、终端，或厂商云里 | 33 |
| [AI 对话助手](/chat/) | 通用对话产品，含国产 | 14 |
| [AI 图像创作](/image/) | 文生图与图像工作台 | 13 |
| [AI 视频创作](/video/) | 文生视频与数字人 | 12 |
| [AI 音频与语音](/audio/) | 音乐生成、语音合成与转写 | 10 |
| [AI 搜索与研究](/research/) | AI 搜索、学术检索与研究工作台 | 11 |
| [AI 自动化与工作流](/automation/) | 可视化搭 AI 工作流与 agent | 14 |
| [框架与运行时](/framework/) | 运行时、编排框架、SDK | 22 |
| [MCP 工具](/mcp/) | 缺什么，装什么 —— 给 agent 装的 MCP 工具 | 24 |
| [本地模型运行器](/runner/) | 在自己机器上跑开源模型 | 12 |

---

© 2026 Specul · 投机 · 推演
