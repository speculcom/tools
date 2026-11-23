# AI 工具 · 办公与写作

> 文档、表格、演示、会议、翻译与邮件

**tools.specul.com/office/** · 独立信息项目（非厂商官方榜单）

普通办公场景的 AI 产品：文档写作、表格分析、演示生成、会议记录、翻译与邮件日程。按「交付物是什么、数据会去哪、能否商用」来读；同一功能可能藏在通用助手或办公套件里，档案只收以办公为主轴的产品，并与 chat / research / automation 互链。

本站共 12 个大类（`coding` / `chat` / `image` / `video` / `audio` / `research` / `office` / `automation` / `framework` / `mcp` / `runner` / `safety`），本 README 描述「办公与写作」这一个。

## 这个大类提供什么

- **15 个对象**，按固定 8 个维度记录
- 每个维度都能回溯到官方一手源，附来源类型与核验日期
- **不给总分排名**——缺少跨工具的统一实测，排名会误导
- **「未知」是合法答案**——查不到就写未知并说明原因，不用推测填充

## 收录对象

| 对象 | 形态 | 厂商 | 可信度 | 核验日 |
|---|---|---|---|---|
| [Adobe Acrobat AI Assistant](./adobe-acrobat-ai.html) | 桌面/移动应用 | Adobe | verified | 2026-11-19 |
| [Beautiful.ai](./beautiful-ai.html) | 网页服务 | Beautiful.ai | verified | 2026-11-19 |
| [Canva Magic Studio](./canva-magic-studio.html) | 网页服务 | Canva | verified | 2026-11-19 |
| [DeepL Pro](./deepl-pro.html) | 网页服务 | DeepL | verified | 2026-11-19 |
| [钉钉 AI 助理](./dingtalk-ai.html) | 厂商云形态 | 钉钉 | verified | 2026-11-19 |
| [飞书智能伙伴](./feishu-ai.html) | 厂商云形态 | 飞书 | verified | 2026-11-19 |
| [Fireflies.ai](./fireflies-ai.html) | 厂商云形态 | Fireflies.ai | verified | 2026-11-19 |
| [Gamma](./gamma.html) | 网页服务 | Gamma | verified | 2026-11-19 |
| [Google Workspace Gemini](./google-workspace-gemini.html) | 厂商云形态 | Google | verified | 2026-11-19 |
| [Grammarly](./grammarly.html) | 网页服务 | Grammarly | verified | 2026-11-19 |
| [Microsoft 365 Copilot](./microsoft-365-copilot.html) | 厂商云形态 | Microsoft | verified | 2026-11-19 |
| [Notion AI](./notion-ai.html) | 网页服务 | Notion | verified | 2026-11-19 |
| [腾讯文档 AI](./tencent-docs-ai.html) | 网页服务 | 腾讯 | verified | 2026-11-19 |
| [tl;dv](./tldv.html) | 厂商云形态 | tl;dv | verified | 2026-11-19 |
| [WPS AI](./wps-ai.html) | 网页服务 | 金山办公 | verified | 2026-11-19 |

## 状态标记

| 标记 | 含义 |
|---|---|
| `verified` | 八维都有官方依据，且核验日在 90 天内（只讲证据，不讲产品是否活跃） |
| `partial` | 有维度没核清、官方文档打不开，或核验超过 90 天 |
| `stale` | 官方已发生重大变化，本站尚未复核 |

`lifecycle` 单独表示产品状态（`active` / `maintenance` / `archived` / `unknown`），不参与 `confidence` 封顶。一个已归档产品可以有完整的证据；一个每天发版的产品也可能因为官方不披露而只有 `partial`。

当前 15 个对象中，**15 个为 verified**。

## 数据来源

全部数据来自 **[speculcom/ai-handbook](https://github.com/speculcom/ai-handbook)**（CC BY 4.0），
由 `tools/sites/build.mjs` 从该仓库的 Markdown + frontmatter 构建，本仓库只存产物。

发现错误或有新证据，欢迎去数据仓库提 Issue 或 PR。

## 站内大类

| 大类 | 主题 | 对象数 |
|---|---|---|
| [AI 编程](/coding/) | 装在编辑器、终端，或厂商云里 | 42 |
| [AI 对话助手](/chat/) | 通用对话产品，含国产 | 23 |
| [AI 图像创作](/image/) | 文生图与图像工作台 | 15 |
| [AI 视频创作](/video/) | 文生视频与数字人 | 14 |
| [AI 音频与语音](/audio/) | 音乐生成、语音合成与转写 | 17 |
| [AI 搜索与研究](/research/) | AI 搜索、学术检索与研究工作台 | 11 |
| [办公与写作](/office/) | 文档、表格、演示、会议、翻译与邮件 | 15 |
| [AI 自动化与工作流](/automation/) | 可视化搭 AI 工作流与 agent | 24 |
| [框架与运行时](/framework/) | 运行时、编排框架、SDK、机器人软件栈 | 43 |
| [MCP 工具](/mcp/) | 缺什么，装什么 —— 给 agent 装的 MCP 工具 | 32 |
| [本地模型运行器](/runner/) | 在自己机器上跑开源模型 | 21 |
| [AI 安全与评测](/safety/) | 拦得住、测得出、追得回 | 25 |

---

© 2026 Specul · 投机 · 推演
