# AI 工具 · 本地模型运行器

> 在自己机器上跑开源模型

**tools.specul.com/runner/** · 独立信息项目（非厂商官方榜单）

本地模型运行器：把开源权重模型跑在自己的机器上——Ollama / LM Studio / llama.cpp / vLLM 这类。档案的 model_access / runtime 维写「格式 × 量化档」口径，具体量化数据在 models 站，两边互链不重复。

本站共 10 个大类（`coding` / `chat` / `image` / `video` / `audio` / `research` / `automation` / `framework` / `mcp` / `runner`），本 README 描述「本地模型运行器」这一个。

## 这个大类提供什么

- **12 个对象**，按固定 8 个维度记录
- 每个维度都能回溯到官方一手源，附来源类型与核验日期
- **不给总分排名**——缺少跨工具的统一实测，排名会误导
- **「未知」是合法答案**——查不到就写未知并说明原因，不用推测填充

## 收录对象

| 对象 | 形态 | 厂商 | 可信度 | 核验日 |
|---|---|---|---|---|
| [GPT4All](./gpt4all.html) | 本机应用 | Nomic AI | partial | 2026-10-30 |
| [Jan](./jan.html) | 本机应用 | Menlo Research | partial | 2026-10-30 |
| [KoboldCpp](./koboldcpp.html) | 本机应用 | LostRuins（KoboldAI 社区） | partial | 2026-10-30 |
| [llama.cpp](./llama-cpp.html) | CLI 形态 | ggml-org | partial | 2026-10-30 |
| [LM Studio](./lm-studio.html) | 本机应用 | Element Labs | partial | 2026-10-30 |
| [LocalAI](./localai.html) | CLI 形态 | Mudler T.（mudler） | partial | 2026-10-30 |
| [MLX（mlx-lm）](./mlx.html) | CLI 形态 | Apple | partial | 2026-10-30 |
| [Ollama](./ollama.html) | CLI 形态 | Ollama Inc. | partial | 2026-10-30 |
| [SGLang](./sglang.html) | CLI 形态 | LMSYS / sgl-project | partial | 2026-10-30 |
| [text-generation-webui / textgen](./text-generation-webui.html) | 本机应用 | oobabooga | partial | 2026-10-30 |
| [Text Generation Inference（TGI）](./tgi.html) | CLI 形态 | Hugging Face | partial | 2026-10-30 |
| [vLLM](./vllm.html) | CLI 形态 | vLLM 项目（PyTorch 基金会） | partial | 2026-10-30 |

## 可信度标记

| 标记 | 含义 |
|---|---|
| `verified` | all 8 dimensions backed by official sources, checked within 90 days |
| `partial` | some dimensions unknown, or official docs unreachable, or checked over 90 days ago |
| `stale` | 官方已发布重大变化，本站尚未核验 |

当前 12 个对象中，**0 个为 verified**。

## 数据来源

全部数据来自 **[speculcom/ai-handbook](https://github.com/speculcom/ai-handbook)**（CC BY 4.0），
由 `tools/sites/build.mjs` 从该仓库的 Markdown + frontmatter 构建，本仓库只存产物。

发现错误或有新证据，欢迎去数据仓库提 Issue 或 PR。

## 站内大类

| 大类 | 主题 | 对象数 |
|---|---|---|
| [AI 编程](/coding/) | 装在编辑器、终端，或厂商云里 | 41 |
| [AI 对话助手](/chat/) | 通用对话产品，含国产 | 14 |
| [AI 图像创作](/image/) | 文生图与图像工作台 | 13 |
| [AI 视频创作](/video/) | 文生视频与数字人 | 12 |
| [AI 音频与语音](/audio/) | 音乐生成、语音合成与转写 | 10 |
| [AI 搜索与研究](/research/) | AI 搜索、学术检索与研究工作台 | 11 |
| [AI 自动化与工作流](/automation/) | 可视化搭 AI 工作流与 agent | 14 |
| [框架与运行时](/framework/) | 运行时、编排框架、SDK | 22 |
| [MCP 工具](/mcp/) | 缺什么，装什么 —— 给 agent 装的 MCP 工具 | 28 |
| [本地模型运行器](/runner/) | 在自己机器上跑开源模型 | 12 |

---

© 2026 Specul · 投机 · 推演
