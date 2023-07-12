# ChatGPT衍生的项目

## Character AI

月访问量2亿、首周170万安装量！声称碾压 ChatGPT

官网：<https://character.ai>

[Character.ai：每个人都可定制自己的个性化AI (baidu.com)](https://baijiahao.baidu.com/s?id=1763251679965944178&wfr=spider&for=pc)

## BLOOMChat: 开源可商用支持多语言的大语言模型

[逼近GPT-4！BLOOMChat: 开源可商用支持多语言的大语言模型 (qq.com)](https://mp.weixin.qq.com/s?__biz=Mzg2MTcwNjc1Mg==&mid=2247484766&idx=1&sn=ccecd302b889a73b46c8d804f713bc25&chksm=ce124a31f965c32749d27391ecbfd185ae48f9a1e30aeed5d5fc2b0de97b3f06e9116d85e61b#rd)

## baichuan-7B: 开源可商用支持中英文的最好大模型

[baichuan-7B: 开源可商用支持中英文的最好大模型 (qq.com)](https://mp.weixin.qq.com/s?__biz=Mzg2MTcwNjc1Mg==&mid=2247484799&idx=1&sn=b485d2cdff0e536436b19697c9d759bb&chksm=ce124a10f965c3061afd5d2919bc34665ee89b0d8abbabb88b434fc3a33282ca260f0d11ed86#rd)

## 轩辕：首个千亿级中文金融对话模型

[轩辕：首个千亿级中文金融对话模型 (qq.com)](https://mp.weixin.qq.com/s?__biz=Mzg2MTcwNjc1Mg==&mid=2247484779&idx=1&sn=d983839154a79a9f0d21e327b5e9a557&chksm=ce124a04f965c3128b3a000182fe4e30c805540dd7bd8340602d749069744556658752c17f5a#rd)

## 剑桥/腾讯提出大语言模型 PandaGPT：一个模型统一六种模态

来自剑桥、NAIST 和腾讯 AI Lab 的研究者推出了一款名为 PandaGPT 的跨模态语言模型，展示了在人工智能领域的创新尝试。

通过结合 ImageBind 的模态对齐能力和 Vicuna 的生成能力，同时实现了六种模态下的指令理解与跟随能力。虽然 PandaGPT 的效果尚有提升空间，但展示了跨模态 AGI 智能的发展潜力 [**⋙ 中文解读**](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FYRbMZb2NCB6sJQZUFSCoug)

> *▢* 项目主页：[panda-gpt.github.io/](https://link.juejin.cn?target=https%3A%2F%2Fpanda-gpt.github.io%2F)
>
> *▢* GitHub项目地址：[github.com/yxuansu/Pan…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fyxuansu%2FPandaGPT)
>
> *▢* 论文：[arxiv.org/abs/2305.16…](https://link.juejin.cn?target=http%3A%2F%2Farxiv.org%2Fabs%2F2305.16355)
>
> *▢* 线上 Demo：[huggingface.co/spaces/GMFT…](https://link.juejin.cn?target=https%3A%2F%2Fhuggingface.co%2Fspaces%2FGMFTBY%2FPandaGPT)



作者：ShowMeAI
链接：https://juejin.cn/post/7241510305367998501
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。来自剑桥、NAIST 和腾讯 AI Lab 的研究者推出了一款名为 PandaGPT 的跨模态语言模型，展示了在人工智能领域的创新尝试。

通过结合 ImageBind 的模态对齐能力和 Vicuna 的生成能力，同时实现了六种模态下的指令理解与跟随能力。虽然 PandaGPT 的效果尚有提升空间，但展示了跨模态 AGI 智能的发展潜力 [**⋙ 中文解读**](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FYRbMZb2NCB6sJQZUFSCoug)

> *▢* 项目主页：[PandaGPT (panda-gpt.github.io)](https://panda-gpt.github.io/)
>
> *▢* GitHub项目地址：<https://github.com/yxuansu/PandaGPT>
>
> *▢* 论文：[2305.16355\] PandaGPT: One Model To Instruction-Follow Them All (arxiv.org)](https://arxiv.org/abs/2305.16355)
>
> *▢* 线上 Demo：[PandaGPT - a Hugging Face Space by GMFTBY](https://huggingface.co/spaces/GMFTBY/PandaGPT)

## 开源大语言模型

### 前言

OpenAI发布的ChatGPT火爆全球以来，全球互联网大厂陆续跟进，纷纷宣布了自家的Chat产品，如Google的Bard，百度的文心一言，阿里的通义千问等等。

这些Chat产品背后都是依赖的大语言模型(Large Language Model)。

如果是做一个垂直领域的Chat产品，有2种方案：

- 直接使用商业化产品，前提是商业化产品支持对模型做fine-tune(微调)。比如OpenAI就支持对它的基础模型做fine-tune来实现个性化的模型。
- 使用开源的大语言模型，对开源模型做fine-tune来实现垂直领域的Chat产品。

本文重点介绍有较大参考价值的开源大语言模型，方便大家快速找到适合自己应用场景的开源模型。

### 开源大语言模型

| Model      | 作者                                        | 参数量                                          | 训练数据量(tokens)                                      | 训练成本                                                     |
| :--------- | :------------------------------------------ | :---------------------------------------------- | :------------------------------------------------------ | :----------------------------------------------------------- |
| LLaMA      | Meta                                        | 包括 70 亿、130 亿、330 亿、650 亿 4 种参数规模 | 1.4万亿                                                 | 2048个A100 GPU                                               |
| Alpaca     | Stanford                                    | 70亿                                            | 52k条问答指令数据，指令数据来源于OpenAI的API返回结果    | 500美元数据成本+100美元训练成本                              |
| Vicuna     | UC Berkeley, CMU, Stanford, UCSD and MBZUAI | 130亿                                           | 70k条问答指令数据，指令数据来源于用户分享出来的对话记录 | 300美元                                                      |
| Koala      | UC Berkeley                                 | 130亿                                           | 500k条问答直录功能数据，指令数据来源于网上公开数据集    | 在公共云计算平台上，预期训练成本不超过100美元。一台 Nvidia DGX 服务器与8个A100 GPU，需要6个小时训练完成2个epochs。 |
| Dolly 2.0  | Databricks                                  | 120亿                                           | 15k条问答指令数据，指令数据来源于Databricks员工         | 不到30美元                                                   |
| ChatGLM    | 清华大学KEG 实验室和智谱AI                  | 60亿和1300亿共2种参数规模                       | 4000亿左右，中文和英文token各2000亿                     | 数百万人民币                                                 |
| 鹏程·盘古α | 鹏程实验室、华为                            | 26亿、130亿和2000亿共3种参数规模                | 2500亿                                                  | 2048 块昇腾处理器                                            |

开源模型有几个注意点：

- 第一，LLaMA由Meta开源，LLaMA目前仅用于学术、社会公益项目，不能用于商业化项目。
- 第二，Alpaca, Vicuna, Koala基于LLaMA衍生而来，是在LLaMA大语言模型基础上做了fine-tune得到的，因此训练成本极低，只需用比较少的指令数据做fine-tune即可。这也是为什么这几个模型的训练成本很低，因为站在了LLaMA这个巨人的肩膀上。另外，这几个模型由于本质上还是LLaMA，受限于LLaMA的license限制，同样不能用于商业化目的。
- Dolly 2.0是在EleutherAI pythia模型衍生而来，指令微调的数据集称为 databricks-dolly-15k，也已开源发布，包含来自数千名 Databricks 员工的 15,000 个高质量的人工生成的问答数据，专为指令调优大型语言模型而设计。且 databricks-dolly-15k 根据（Creative Commons Attribution-ShareAlike 3.0 Unported License）的许可条款，任何人都可以出于任何目的使用、修改或扩展此数据集，包括商业应用。
- 国内目前开源的主要就是清华主导的ChatGLM，以及华为和鹏程实验室主导的盘古alpha模型。

### 训练模型

如果拿大语言模型做训练，而不是简单的指令微调，那训练成本非常高昂，比如ChatGPT训练一次的成本在140万美元左右。

最近微软开源了DeepSpeed，可以加速大语言模型的训练，将ChatGPT 1750亿参数模型的训练成本降低到5120美元左右。

其本质是一个开源深度学习训练优化库，可以加速ChatGPT模型的训练，比目前最快的训练方法快大约15倍，如果想自己训练大语言模型的可以参考下。

### 总结

GPT模型现在真的是日新月异，很多是基于基础模型，结合问答的指令数据对模型做微调而得到的。

现在很多媒体报道的时候喜欢夸大，大家不要看到冒出一个新的开源模型就觉得多么厉害了，绝大部分都是站在巨人肩膀上做了微调而来的。

上面开源大语言模型的表格也会持续更新，欢迎大家关注下面的开源地址。

### 开源地址

持续更新的开源大语言模型开源地址：ChatGPT模型教程。

公众号：coding进阶。

个人网站：Jincheng's Blog。

知乎：无忌。

### References

- https://mp.weixin.qq.com/s/7CW4p8RgAF3jYGmgefB_eg
- https://mp.weixin.qq.com/s/M-ToNk8SABoP2JG0xLUBxQ

## 用fastgpt打造专属知识库

用fastgpt打造专属知识库，可自行部署到服务器或集群

官网：[Fast GPT](https://ai.fastgpt.run/)

开源地址：<https://github.com/c121914yu/FastGPT>

【用fastgpt打造专属知识库，可自行部署到服务器或集群】https://www.bilibili.com/video/BV1wu411e75C?vd_source=36c9491a7fa2ab8a22ca060af01b7472

## Albus自动生成图文知识图谱

Albus官网：<https://www.albus.org/>

完全免费，结合了ChatGPT和Obsidian的功能，可以作为你的专属知识探索引擎，帮你快速出视觉化的知识图谱涵盖各个领域

- 【比思维导图更强大！三分钟学会用GPT自动生成图文知识图谱学遍一切】<https://www.bilibili.com/video/BV1mc41137Bu?vd_source=36c9491a7fa2ab8a22ca060af01b7472>
- 【《ChatGPT自学的正确打开方式 》 小学、初中到成人教育全覆盖】<https://www.bilibili.com/video/BV1h14y127ND?vd_source=36c9491a7fa2ab8a22ca060af01b7472>

## ChatRWKV模型6G显存部署实战

ChatRWKV模型6G显存部署实战，可极限操作1.5GB显存部署14B模型

- 1、项目Git：github.com/BlinkDL/ChatRWKV
- 2、中文在线：modelscope.cn/studios/BlinkDL/RWKV-CHN/summary/
- 3、Raven英语14B在线：huggingface.co/spaces/BlinkDL/ChatRWKV-gradio
- 4、ChatRWKV LoRA微调：github.com/Blealtan/RWKV-LM-LoRA
- 5、ChatRWKV C++：github.com/harrisonvanderbyl/rwkv-cpp-cuda
- 6、Wenda：github.com/l15y/wenda
- 7、模型量化：Use v2/convert_model.py to convert a model for a strategy, for faster loading & saves CPU RAM.
- 8、作者给出的中文教程：zhuanlan.zhihu.com/p/618011122
- 9、1.5GB显存部署14B模型：zhuanlan.zhihu.com/p/616986651

部署视频教程：【ChatRWKV模型6G显存部署实战—凡人之躯, 比肩ChatGPT!!?】<https://www.bilibili.com/video/BV1hm4y1C7Ai?vd_source=36c9491a7fa2ab8a22ca060af01b7472>

## RWKV-Runner可商用的大语言模型

RWKV-Runner发布并开源，可商用的大语言模型，一键启动管理，2-32G显存适配，API兼容，一切前端皆可用

开源仓库地址：<https://github.com/josStorer/RWKV-Runner>

下载地址（RWKV目录）：<https://pan.baidu.com/s/1wchIUHgne3gncIiLIeKBEQ?pwd=1111>

RWKV官方仓库：<https://github.com/BlinkDL/RWKV-LM>

【RWKV-Runner发布并开源，可商用的大语言模型，一键启动管理，2-32G显存适配，API兼容，一切前端皆可用】<https://www.bilibili.com/video/BV1hM4y1v76R?vd_source=36c9491a7fa2ab8a22ca060af01b7472>

## DeepGPT

视频教程：【DeepGPT，可自己部署的类agentGPT/AutoGPT工具，纯前端更轻量，国内可用】<https://www.bilibili.com/video/BV1As4y1k73M?vd_source=36c9491a7fa2ab8a22ca060af01b7472>

官方仓库：<https://github.com/easychen/deepgpt-dist>

在线版本：<https://d.level06.com> (如果无法访问，请到官方仓库查看新域名)

独立部署版下载：<https://github.com/easychen/deepgpt-dist/build.zip>

## 使用 Chato 搭建自己的知识库 | 轻松定制 ChatGPT 智能问答机器人

体验地址：<https://chato.cn/>

Chato是一款强大而易用的工具，能帮助你将垂直行业知识注入AI，并创建属于自己的AI助手。无需编程，通过上传文档或回答问题，Chato自动学习并建立知识库。你可以设定机器人角色、定制个性，并灵活发布到各渠道。

## ChatGLM-6B开源GPT加上自己的知识库

【开源GPT加上自己的知识库比ChatGTP更精准更专业】<https://www.bilibili.com/video/BV19o4y1J7mL?vd_source=36c9491a7fa2ab8a22ca060af01b7472>

开源地址：[THUDM/ChatGLM-6B: ChatGLM-6B: An Open Bilingual Dialogue Language Model | 开源双语对话语言模型 (github.com)](https://github.com/THUDM/ChatGLM-6B)

## langchain+chatGLM的本地知识库项目

教程：【【防坑指南】手把手演示本机部署langchain+chatGLM本地知识库】<https://www.bilibili.com/video/BV1Ah4y1d79a?vd_source=36c9491a7fa2ab8a22ca060af01b7472>

传送门：<https://github.com/imClumsyPanda/langchain-ChatGLM>

Torch版本地址：<https://download.pytorch.org/whl/torch_stable.html>

关于硬件要求方面，作者文档里提到了embedding模型需要使用3G显存，chatglm最低需要6G显存。

## CodeWhisperer AI编程工具

CodeWhisperer官网注册链接：<https://aws.amazon.com/cn/codewhisperer/?trk=a2076b82-2c5d-475a-8b78-f22f4bb4f9a1&sc_channel=display+ads>

2023年度亚马逊云科技中国峰会报名：<https://summit.awsevents.cn/2023/form.html?source=A1Jmo+hFUc3p2QU//2KWmogg5HLpq2+1rdi8UDFl+>

【【AI编程】秒杀LeetCode！以后程序员只用写注释？CodeWhisperer安装使用教程】<https://www.bilibili.com/video/BV1Sg4y1K7iD?vd_source=36c9491a7fa2ab8a22ca060af01b7472>

## chatgpt engineer AI编程工具



## Github Copilot



## ChatGPT实时语音聊天

ChatGPT+VITS+Galgame

【ChatGPT+Galgame 与老婆自由对话！】<https://www.bilibili.com/video/BV1TD4y1E7e8?vd_source=36c9491a7fa2ab8a22ca060af01b7472>

项目地址：<https://github.com/cjyaddone/ChatWaifu>
L2D版本：<https://github.com/cjyaddone/ChatWaifuL2D>
QQ机器人版本：<https://github.com/MuBai-He/ChatWaifu-marai>

## CyberWaifu开源聊天机器人 hatGPT+Claude

【【CyberWaifu开源发布，ChatGPT+Claude】我要给她完整的一生，引入思考链和记忆数据库】<https://www.bilibili.com/video/BV11V4y1z7rS?vd_source=36c9491a7fa2ab8a22ca060af01b7472>

开源地址：<https://github.com/Syan-Lin/CyberWaifu>

## MiniGPT-4

图文生成

本地电脑直接部署运行：要求显存12G

开源地址：<https://github.com/Vision-CAIR/MiniGPT-4>

## 闻达-Wenda 大语言模型调用平台，搭建专属知识库

【【AI知识助理】再也不用读书啦！让收藏夹的文章都秒变知识！用langChain+ChatGLM-6B清华开源模型，附详细安装教程+下载链接】<https://www.bilibili.com/video/BV1NW4y1R7aQ?vd_source=36c9491a7fa2ab8a22ca060af01b7472>

1.闻达Github主页地址：<https://github.com/wenda-LLM/wenda>

2.懒人一键包地址：<https://pan.baidu.com/s/105nOsldGt5mEPoT2np1ZoA?pwd=lyqz>    提取码：lyqz

## MetaGPT

开源地址：[geekan/MetaGPT：多代理元编程框架：给定一行需求，返回 PRD、设计、任务、存储库 (github.com)](https://github.com/geekan/MetaGPT)

## 开源框架LangChain：允许与AI一起工作的开发人员将大型语言模型

- 开源地址：[hwchase17/langchain: ⚡ Building applications with LLMs through composability ⚡ (github.com)](https://github.com/hwchase17/langchain)
- js版开源地址：[hwchase17/langchainjs (github.com)](https://github.com/hwchase17/langchainjs)
- 文档：[Introduction | 🦜️🔗 Langchain](https://python.langchain.com/docs/get_started/introduction.html)

LangChain是一个开源的框架，允许与AI一起工作的开发人员将大型语言模型，如GPT-4，与外部的计算和数据源结合起来。

教程：【AI必学知识点！Langchain到底是什么？开源干货详细解析！赚钱机会和未来展望！】<https://www.bilibili.com/video/BV1GL411e7K4?vd_source=36c9491a7fa2ab8a22ca060af01b7472>

【5分钟学会搭建本地知识库聊天机器人(基于GPT4+Llamaindex+LangChain)】<https://www.bilibili.com/video/BV18o4y1N7Dm?vd_source=36c9491a7fa2ab8a22ca060af01b7472>

## CahtGPT客户端开源项目合集

### chatbox：ChatGPT开源客户端，提示词调试神器

开源的 ChatGPT 桌面客户端，提示词调试与管理工具，支持 Windows、Mac 和 Linux；内置了一些提示词角色，使用体验比较不错

- 项目地址：<https://github.com/Bin-Huang/chatbox>
- web版地址：<https://web.chatboxapp.xyz/>
- 客户端下载地址：<https://github.com/Bin-Huang/chatbox/releases>

【chatbox：ChatGPT开源客户端，提示词调试神器】<https://www.bilibili.com/video/BV1Am4y1t7X4?vd_source=36c9491a7fa2ab8a22ca060af01b7472>
