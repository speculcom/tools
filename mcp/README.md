# AI 工具 · MCP 工具

> 缺什么，装什么 —— 给 agent 装的 MCP 工具

**tools.specul.com/mcp/** · 独立信息项目（非厂商官方榜单）

MCP server 的权限范围、传输方式与输出可用性。收录标准：已发布为可安装的 MCP server、有官方仓库或文档可回溯、近 30 天有实质更新。这里是能力缺口查表，不是选型对比。

本站共 10 个大类（`coding` / `chat` / `image` / `video` / `audio` / `research` / `automation` / `framework` / `mcp` / `runner`），本 README 描述「MCP 工具」这一个。

## 这个大类提供什么

- **28 个对象**，按固定 11 个维度记录（8 个通用维度 + 3 个 MCP 特有维度）
- 每个维度都能回溯到官方一手源，附来源类型与核验日期
- **不给总分排名**——缺少跨工具的统一实测，排名会误导
- **「未知」是合法答案**——查不到就写未知并说明原因，不用推测填充

## 收录对象

| 对象 | 形态 | 厂商 | 可信度 | 核验日 |
|---|---|---|---|---|
| [Atlassian Remote MCP Server（Jira/Confluence）](./atlassian-mcp.html) | MCP | Atlassian | partial | 2026-10-30 |
| [Brave Search MCP Server](./brave-search-mcp.html) | MCP | Brave | partial | 2026-10-30 |
| [Chrome DevTools MCP](./chrome-devtools-mcp.html) | MCP | Google（Chrome DevTools 团队） | partial | 2026-10-30 |
| [Cloudflare MCP Server](./cloudflare-mcp.html) | MCP | Cloudflare | partial | 2026-10-30 |
| [Context7](./context7.html) | MCP | Upstash | partial | 2026-10-23 |
| [Datadog MCP Server](./datadog-mcp.html) | MCP | Datadog | partial | 2026-10-23 |
| [Everything MCP Server](./everything.html) | MCP | Model Context Protocol | verified | 2026-10-23 |
| [Exa MCP Server](./exa-mcp.html) | MCP | Exa | partial | 2026-10-23 |
| [Fetch MCP Server](./fetch.html) | MCP | Model Context Protocol | verified | 2026-10-23 |
| [Figma MCP Server](./figma-mcp.html) | MCP | Figma | partial | 2026-10-30 |
| [Filesystem MCP Server](./filesystem.html) | MCP | Model Context Protocol | verified | 2026-10-23 |
| [Firecrawl MCP Server](./firecrawl-mcp.html) | MCP | Firecrawl | partial | 2026-10-23 |
| [Git MCP Server](./git.html) | MCP | Model Context Protocol | verified | 2026-10-23 |
| [GitHub MCP Server](./github-mcp.html) | MCP | GitHub | partial | 2026-10-23 |
| [Grafana MCP Server](./grafana-mcp.html) | MCP | Grafana Labs | partial | 2026-10-23 |
| [Linear MCP](./linear-mcp.html) | MCP | Linear | partial | 2026-10-30 |
| [Knowledge Graph Memory Server](./memory.html) | MCP | Model Context Protocol | verified | 2026-10-23 |
| [MongoDB MCP Server](./mongodb-mcp.html) | MCP | MongoDB | partial | 2026-10-30 |
| [Neon MCP Server](./neon-mcp.html) | MCP | Neon | partial | 2026-10-30 |
| [Notion MCP](./notion-mcp.html) | MCP | Notion | partial | 2026-10-30 |
| [Playwright MCP Server](./playwright.html) | MCP | Microsoft | verified | 2026-10-23 |
| [Sentry MCP / Toolkit](./sentry-mcp.html) | MCP | Sentry | partial | 2026-10-30 |
| [Sequential Thinking MCP Server](./sequential-thinking.html) | MCP | Model Context Protocol | verified | 2026-10-23 |
| [Slack MCP Server](./slack-mcp.html) | MCP | Slack（Salesforce） | partial | 2026-10-30 |
| [Stripe Agent Toolkit / MCP](./stripe-mcp.html) | MCP | Stripe | partial | 2026-10-30 |
| [Supabase MCP](./supabase-mcp.html) | MCP | Supabase | partial | 2026-10-30 |
| [Time MCP Server](./time.html) | MCP | Model Context Protocol | verified | 2026-10-23 |
| [Zapier MCP](./zapier-mcp.html) | MCP | Zapier | partial | 2026-10-30 |

## 可信度标记

| 标记 | 含义 |
|---|---|
| `verified` | all 11 dimensions backed by official sources, checked within 90 days |
| `partial` | some dimensions unknown, or official docs unreachable, or checked over 90 days ago |
| `stale` | 官方已发布重大变化，本站尚未核验 |

当前 28 个对象中，**8 个为 verified**。

## 数据来源

全部数据来自 **[speculcom/ai-handbook](https://github.com/speculcom/ai-handbook)**（CC BY 4.0），
由 `tools/sites/build.mjs` 从该仓库的 Markdown + frontmatter 构建，本仓库只存产物。

发现错误或有新证据，欢迎去数据仓库提 Issue 或 PR。

## 站内大类

| 大类 | 主题 | 对象数 |
|---|---|---|
| [AI 编程](/coding/) | 装在编辑器、终端，或厂商云里 | 41 |
| [AI 对话助手](/chat/) | 通用对话产品，含国产 | 20 |
| [AI 图像创作](/image/) | 文生图与图像工作台 | 15 |
| [AI 视频创作](/video/) | 文生视频与数字人 | 14 |
| [AI 音频与语音](/audio/) | 音乐生成、语音合成与转写 | 17 |
| [AI 搜索与研究](/research/) | AI 搜索、学术检索与研究工作台 | 11 |
| [AI 自动化与工作流](/automation/) | 可视化搭 AI 工作流与 agent | 22 |
| [框架与运行时](/framework/) | 运行时、编排框架、SDK | 27 |
| [MCP 工具](/mcp/) | 缺什么，装什么 —— 给 agent 装的 MCP 工具 | 28 |
| [本地模型运行器](/runner/) | 在自己机器上跑开源模型 | 12 |

---

© 2026 Specul · 投机 · 推演
