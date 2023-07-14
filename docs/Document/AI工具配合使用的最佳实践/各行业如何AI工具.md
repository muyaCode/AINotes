# 各行业如何AI工具

## 72个小时靠AI制作的游戏

游戏开发商 Luden.io 最近发布了一款网页游戏， 开发者只花了72个小时就创造了这款免费的网页点击式冒险游戏，它是利用“作者在世面能找到的所有AI生成系统”制作的。游戏的各种元素，包括艺术作品、故事、对话、音乐，都是在 AI 的帮助下生成的。

【72个小时靠AI制作的游戏⬆️ZB高模摆姿势轻松？】<https://www.bilibili.com/video/BV1ek4y1W77i?vd_source=36c9491a7fa2ab8a22ca060af01b7472>

72小时用AI制作出来的游戏
游戏链接：<https://ludenio.itch.io/generated-adventure>

## AI工作流 | 全程使用AI工具设计一款桌游』飞越极限

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e23494855f904d0ea2e6a1525cb6c412~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

> 说明：只介绍项目落地过程中的工具组合与使用方法，不代表推荐产品，请谨慎消费

创作者团队使用ChatGPT、New Bing、Segment Anything、Adobe Firefly等AI工具，开发了一款名为「飞越极限 (Flying Limit)」的 2-4 人策略桌游。

在游戏中，玩家扮演奇幻世界中的飞行生物驯养师，通过操控飞行生物在赛道上竞速，并利用升级卡对自己的飞行生物进行强化或对对手造成干扰。

游戏的所有元素均由AI打造，因此有着独特的游戏玩法和美术元素，风格与想象力也天马行空，构建了有着天马行空般想象力的奇幻世界。

> *1*. chatgpt:：通过自然语言生成的游戏规则
>
> *2*. New Bing：通过自然语言绘制的卡牌和图案
>
> *3*. Segment Anything：对图案进行切割，来组成卡牌
>
> *4*. Adobe Firefly：对文字图案等内容进行排版和设计

[**⋙ 过程与效果展示**](https://mp.weixin.qq.com/s/iqZPbyJwQo8jIC3L4hOJtw)

## 『字幕翻译自动化流程』使用 AI 自动生成与翻译字幕

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/686c55ae62d74e17a0d6ebfc3c089fbb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

乃木坂46(以及坂道系)字幕组开源了一套基于 🌍[**Google Drive + Google Colab + ChatGPT**](https://github.com/Ayanaminn/N46Whisper/blob/main/README_CN.md) 的日语视频字幕翻译制作流程。**借助各种 AI 工具和 Colab 代码平台，让原本繁琐的工作完全实现了自动化，节省了生产成品字幕的时间和精力**：

先将视频上传到 **Google Drive**，然后在 **Google Colab** 打开 🌍[**N46Whisper**](https://colab.research.google.com/github/Ayanaminn/N46Whisper/blob/main/N46Whisper.ipynb) 这个应用并运行代码，加载整个 **Whisper** 模型，快速完成转录后生成 ass 字幕文件，再借助 ChatGPT 的 API 对字幕进行逐行翻译，最后人工参与一次校对就可以了。

> 作者说道： 根据我们使用若干视频的测试结果，**输出原文字幕的识别准确率可以达到90%以上，这无疑能极大地节省听译及打轴所需的人手和时间**。
>
> **Whisper 模型有其本身的应用场景限制**，例如视频中出现明显的背景音，长时间空白和多人对话，都可能影响识别准确度。**AI翻译的质量也还不能尽如人意**。

## 只用AI工具制作视频短片』作者还出了视频教程，逐步详细讲解工作流

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03bf5e456f3e4b5d9e1555261858f0a1~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

推上一位小哥 Matt Wolfe (@mreflow) 使用AI工具搭建工作流，制作了一支1分钟的视频。视频看起来有模有样的，当然距离优质还有一段距离。

以下是他的工具清单，手把手的分步详细教程也分享在了油管：

> *1*. 脚本和镜头列表：ChatGPT
>
> *2*. 画外音：ElevenLabs
>
> *3*. 背景音乐：Mubert
>
> *4*. 视频生成：Gen2 / MidJourney / LeiaPix / Genmo 👉 [**1分钟样片**](https://twitter.com/mreflow/status/1650669361311674368) | [**教程视频**](https://www.youtube.com/watch%3Fv%3Dh3AhYJ8YVss)

## 『如何调教AI写出一本精彩小说』再顺手搞定封面和插画

### 🔔 先用 ChatGPT 写短篇

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/775a31622e97470e8d742b3697015579~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

如果让 ChatGPT 直接生成一部小说或者剧本，那简直是天方夜谭。但是如果用好提示词，将复杂的问题一步步拆解，那么ChatGPT将是得力助手。接下来分步拆解如何让 ChatGPT 写一个短篇小说。

**第一步：明确撰写小说的类型与基本要素**

> *▢* 言情小说：以爱情为主题，通常涉及浪漫、情感、亲密关系等方面的情节
>
> *▢* 历史小说：以历史事件、人物和时代为主题，通常通过虚构的故事来描绘历史背景和人物形象
>
> *▢* 科幻小说：以科学和技术为主题，通常涉及未来、外星人、时间旅行等元素
>
> *▢* 校园小说：以校园生活和学生为主题，通常涉及学生的成长、友情和爱情等元素
>
> *▢* ……

**第二步：使用ChatGPT确定故事大纲**

> *▢* 开端剧情
>
> *▢* 推进剧情
>
> *▢* 高潮剧情
>
> *▢* 潮后剧情
>
> *▢* 结尾剧情

**第三步：使用ChatGPT设计鲜明的人物形象**

> *▢* 人物描述
>
> *▢* 关系
>
> *▢* 目标

**第四步：使用ChatGPT设计合理的故事情节**

> *▢* 时间段
>
> *▢* 地点
>
> *▢* 文化
>
> *▢* 历史

**第五步：明确故事讲述视角 (最好单一视角)**

> *▢* 第一人称
>
> *▢* 第二人称
>
> *▢* 第三人称

**第六步：使用ChatGPT设计明确的故事主题**

> *▢* 简单易懂
>
> *▢* 晦涩难懂
>
> *▢* 二者结合

**第七步：使用ChatGPT设计人物之间的对话**

> *▢* 内在性格特征 (个性、思想和情感)
>
> *▢* 外部性格特征 (说话方式、方言和口语)
>
> *▢* 场景语境

**第八步：使用ChatGPT加入作者的独特风格**

> *▢* 情绪 (读者对场景主题的感受)
>
> *▢* 语气 (人物如何表现和感受场景的主题)
>
> *▢* 故事类型

**第九步：加入更多提示以生成满意的作品**

> *▢* 提供背景信息
>
> *▢* 构建情节
>
> *▢* 培养出色的角色形象
>
> *▢* 设计引人入胜的对话
>
> *▢* 增强 ChatGPT 写作风格的技巧
>
> *▢* 结合感官细节
>
> *▢* 使用机器学习微调 ChatGPT 的写作

### 🔔 熟能生巧再练习中长篇

**需要克服的两个问题**

> *▢* ChatGPT 文本输出长度有限，会出现输出截断问题
>
> *▢* ChatGPT 长期记忆能力有限，到后期会出现遗忘问题，会开始胡说八道

**可以参考的解决方案**

> *▢* 输入「请接着上文最后一个字继续生成并保持原格式」继续生成
>
> *▢* 用总-分结构，先让 ChatGPT 生成书籍大纲，出现遗忘问题时将大纲再次提供给它

### 🔔 或者试试这个一键成书的App

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e92b03b52faa4cca8573b87bb57e810a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

AInspiration是基于ChatGPT API的一款应用，可以根据选定的书籍类型 (如玄幻、科幻、传记、童话、神秘、爱情、历史等) 生成相应主题的内容，还能够完成封面、封底、插画等一本完整图书所需要的所有要素。

只需填写给定的设置选项，点击按钮，就可以等待成书了！系统会自动完成所有的交互和设计过程，非常方便。还与图书的出版流程进行了整合，便于进行自定义修改和版本管理。目前开放申请，可以排队试试看~ [**短篇教程**](https://www.luckydesigner.space/let-chatgpt-help-you-to-write-awesome-fiction/) | [**即刻@云中江树**](https://web.okjike.com/originalPost/64485f0e205bd8b62e9fd145) | [**AInspiration App**](https://ainspiration.netlify.app/) | [**AInspiration 使用教程中文版**](https://mp.weixin.qq.com/s/rSmR3JehOkuEcIhqxgOxYg)

## 🤖 『用Notion/Cubox/HiFlow/滴答清单实现P.A.R.A工作流』 新时代的**知识管理**

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0c4cb905fdc4e959b69153e7604d06e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

P.A.R.A. 是指 **Projects项目 - Areas领域 - Resources资源 - Archives归档** 四个能概括从生活到工作遇到所有信息的一级分类。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69885e17e0b247308a4ddeb42f3fd63a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

作者 @高拉 探索多个 App 工具，构建了一条自动化的知识和事项管理工作流，实时提醒重要事项的进展：首先将 **Cubox** 的星标推送到 **Notion**，通过 **HiFlow**(腾讯千帆连接器)继续推向**滴答清单**，就在手机桌面上能时刻查看重要待办了。当然也可以构建连接器，将 **Notion** 中的资源推送到**飞书多维列表中**，并通过**飞书机器人**将知识推送至**飞书对话提醒**，也可以实现相同的提醒功能。

> **Cubox** 是一款跨平台的网络收藏工具，通过浏览器扩展、客户端、手机应用、微信转发等方式，将网页、文字、图片、语音、视频、文件等内容保存起来，再经过自动整理、标签、分类之后，就可以随时阅读、搜索。
>
> 点击 🌍[**原文**](https://mp.weixin.qq.com/s/DkSFPq4TUlZRpdnvCUJDsQ) 可以查看操作的执行细节。

## 🤖 『将 AI 绘画融合于工作流』写完被抽干！控制 AI 魔法的案例与经验大公开

全文：🌍[**控制名为 AI 的魔法，关于将 AI 绘画融合于工作流的案例和经验。**](https://mp.weixin.qq.com/s/U-ks7Fs0fSDHJp6rCmAYoA)

作者 @海辛 分享了使用 AI 在画风、角色和应用上三个维度的可能性尝试，囊括了最新完成8个 Demo 和X个AI工具。

**🧰 画风尝试：从 “美影厂” 模型 到 “敦煌”**

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ebd017f199ae49509c5b4e45dff12264~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

作者用 70 多张上海美影厂早期作品的截图，以 Deliberate 模型作为底模，通过 LoRA 的微调方式做了一个**上海美影厂的 LoRA**，并且用其生成了一些迪士尼的公主和王子。效果还不错！并且现在已经有很多很好的绘画产品能够仿制出敦煌的风格。

**🧰 角色尝试： “恋与制作人” 真人卡牌**

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/035440da4a3f4c169eba25f984bb5c6d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

左图是基于 ChilloutMix 模型，用二次元男性角色的立绘提取角色特征训练 LoRA，进行生成得到的二次元男性角色的立绘。

LoRA 的神奇之处还在于，**可以叠加不同的 LoRA 来一起使用**。除了写实模型以外，作者还结合上图右所示的『贴纸模型 waves-chibi-style』等进行了多种尝试。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b0381914476e4f00a20274d74a4ee200~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

同期，**ControlNet 新技术出现，赋予了创作者在与 AI 协同工作的过程中更大的控制力**。AI 可以根据提供的线稿、深度图、姿势图等，进行完全遵循个人创作思路的生成。

图片左边是卡牌原图，右边是**结合 LoRA+ControlNet Canny 模式**，进行的赛博 coser 卡牌生成。

**🧰 应用尝试： “永劫无间” 二创美宣到 AI Bubbles 虚拟时尚杂志**

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e6914728c4d43ef850d5dddef0e0978~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

作者为游戏永劫无间的新角色胡为，创建了二创美宣图，工作流程是：**LoRA 模型训练好后，在结合 ControlNet 的基础上生成指定姿势的写实风格的人像，再用 Midjourney 生成了虎纹和背景火焰的元素充实画面，最后在 Photoshop 里叠加了一些布料做旧和火花的特效**。

而作者的另一项应用尝试，是**让 AI 学习指定风格的服装，然后让赛博模特来穿出效果图**。右图是一个虚拟时尚杂志，实现了一个以 y2k 风格为主的服装搭配 LoRA 模型，并让该模型成为 AI 模特的造型师。
