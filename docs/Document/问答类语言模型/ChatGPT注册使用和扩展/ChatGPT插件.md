# ChatGPT插件

ChatGPT 插件市场 于2023年3月24号推出

## ChatGPT Plugins 最完整列表，136个插件详细介绍

[ChatGPT Plugins (notion.site)](https://chaorens.notion.site/aaaa955cf5294a91b690e7d402bdc453?v=d2b2d3f7c4ec457b9de1de610ef3213d)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/324665ecbdb14b45b540d451f78f9303~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

截止5月26日，ChatGPT Plugins 已经有136个插件了，编者 **@YES I 杜** 将其总结成为一个详细的文档，包含了插件的id、名称、描述、介绍、链接等信息

【这22个ChatGPT插件将在4-5个月内影响每个人 AI应用合集】<https://www.bilibili.com/video/BV1Ph411K7J4?vd_source=36c9491a7fa2ab8a22ca060af01b7472>

- 00:00：Wolfram
- 00:18：Zapier
- 00:30：Ask Your PDF
- 01:01：Instacart
- 01:18：VIDEO INSIGHTS
- 01:39：Kayak
- 01:52：Link Reader
- 02:11：KeyMate AI Search
- 02:31：Lexi Shop
- 02:45：OpenTable
- 03:00：The Golden Plugin
- 03:28：Show Me
- 03:50：Gmail
- 04:10：PlaylistAI
- 04:32：Crypto Prices
- 04:49：Speechki
- 05:10：One Word Domains
- 05:32：Coupert
- 05:50：edX
- 06:05：Tasty
- 06:27：Web Pilot
- 07:01：Code Interpreter

科研插件：

- txyz.ai：【ChatGPT的插件txyz.ai 科研人士值得拥有】<https://www.bilibili.com/video/BV1EW4y1Q7oT?vd_source=36c9491a7fa2ab8a22ca060af01b7472>
- chatpdf

全自动生成视频：Visla

【全自动生成视频？Chatgpt一分钟做一条？人人自媒体时代】<https://www.bilibili.com/video/BV18X4y1874b?vd_source=36c9491a7fa2ab8a22ca060af01b7472>

### VoiceWave - Voice Control

ChatGPT 语音扩展插件，安装好之后，在 ChatGPT 的回答上就会出现一个声音的图标。这样就能够用语音和 GPT 对话了。非常适合通过 ChatGPT 学习外语的朋友。

##  让你的 ChatGPT Plugin Store 插件商店支持搜索查找

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/172fe4e778694ae7a2672f2db7ec9ee5~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

ChatGPT Plugins Searchable 是一个专门为 ChatGPT Plus 用户提供的脚本，可以给 ChatGPT 插件商店添加一个搜索功能，支持使用任何语言快速搜索插件，告别逐页翻找的烦恼  [**⋙ ChatGPT Plugins Searchable GitHub**](https://github.com/banbri/ChatGPT-Plugins-Searchable/blob/main/README_ZH-CN.md)

## 搭建一个自己的 ChatGPT

### Novu - 第一个开源通知基础架构

Novu 是第一个开源 [通知基础架构](https://novu.co/)。我们基本上通过他管理所有产品通知。它可以**集成到应用内**（像你在Facebook中的铃铛图标 - **Websockets**），电子邮件，短信等。

[![诺武](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4533f79be42c46108d3f653a005fcf20~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)](https://res.cloudinary.com//practicaldev//image//fetch//s--nshlTtHJ--//c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880//https://dev-to-uploads.s3.amazonaws.com//uploads//articles//yn90yvsd87tgik03c08v.gif)

### 开源云开发平台

Laf 是一个**完全开源**的一站式云开发平台，提供了开箱即用的云函数，云数据库，对象存储等能力，让你可以像写博客一样写代码。

> GitHub：**[github.com/labring/laf](https://github.com/labring/laf)**

如果你希望快速了解 Laf 的用法，可以参考这篇文章：[三分钟学会 Laf](https://zuofeng59556.github.io/my-blog/pages/quickStart/laf/)。

言归正传，**下面我们开始计时**，三分钟时间用 Laf 实现一个自己的 ChatGPT！

> 前提条件：你需要准备一个 ChatGPT 账号并且生成一个 API Key (这一步可以问 Google )

### 云函数教学

首先需要登录 [laf.dev](https://laf.dev)，然后新建一个应用。

![img](https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-18-22-YLijVo.png)

点击开发按钮进入开发页面。

![img](https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-18-26-NMoDbR.png)

在 NPM 依赖面板中点击右上角的 `+`：

![img](https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-09-23-29-wNbCOt.png)

然后输入 chatgpt 并回车进行搜索，选择第一个搜索结果，**保存并重启：**

![img](https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-09-23-30-ARz9Vu.png)

重启之后，自定义依赖项中便出现了 chatgpt。

![img](https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-09-23-35-WoQaDj.png)

然后就可以像我一样新建一个云函数名字叫 **send**，并写入以下内容：

```typescript
import cloud from '@lafjs/cloud'
export async function main(ctx: FunctionContext) {
  const { ChatGPTAPI } = await import('chatgpt')
  const api = new ChatGPTAPI({ apiKey: cloud.env.CHAT_GPT_API_KEY })

  let res = await api.sendMessage('“鸡你太美”指的是中国大陆哪位男艺人？给你个提示，他喜欢唱、跳、篮球、Rap')
  console.log(res.text)

  return res.text
}
```

![img](https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-18-36-kyCtdE.png)

API Key 是通过环境变量 `CHAT_GPT_API_KEY` 传入的，所以我们还需要创建一个环境变量。点击左下角的设置图标：

![img](https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-18-38-ydsD8h.png)

依次选择「环境变量」--> 「新增环境变量」，输入环境变量的名称和值，然后点击「确定」，再点击「更新」，便会重启应用。

![img](https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-18-46-Hr7VTk.png)

现在点击右上角的「运行」，即可调试运行。

![img](https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-18-49-44vRN2.png)

Perfect！现在我们来试试添加**追踪上下文**的功能。其实也很简单，只需要在对话时传入上一次对话的 ID 即可，代码如下：

```typescript
import cloud from '@lafjs/cloud'
export async function main(ctx: FunctionContext) {
  const { ChatGPTAPI } = await import('chatgpt')
  const api = new ChatGPTAPI({ apiKey: cloud.env.CHAT_GPT_API_KEY })

  let res = await api.sendMessage('“鸡你太美”指的是中国大陆哪位男艺人？给你个提示，他喜欢唱、跳、篮球、Rap')
  console.log(res.text)

  // 传入 parentMessageId 追踪上下文
  res = await api.sendMessage('不对，他姓蔡，请重新回答', {
    parentMessageId: res.id
  })
  console.log(res.text)

  return res.text
}
```

运行一下看看：

![img](https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-18-53-Vavw0w.png)

好厉害，竟然两次就答对了我的问题！

好了，**现在才开始真的计时**，因为刚刚是教学环节，不计入耗时😁

### 云函数

接下来我们就可以开始动手打造自己的 ChatGPT 了，首先把上一节的函数替换为下面的内容：

```typescript
import cloud from '@lafjs/cloud'

export async function main(ctx: FunctionContext) {
  const { ChatGPTAPI } = await import('chatgpt')
  const data = ctx.body

  // 这里需要把 api 对象放入 cloud.shared 不然无法追踪上下文
  let api = cloud.shared.get('api')
  if (!api) {
    api = new ChatGPTAPI({ apiKey: cloud.env.CHAT_GPT_API_KEY })
    cloud.shared.set('api', api)
  }

  let res
  // 这里前端如果传过来 parentMessageId 则代表需要追踪上下文
  if (!data.parentMessageId) {
    res = await api.sendMessage(data.message)
  } else {
    res = await api.sendMessage(data.message, { parentMessageId: data.parentMessageId })
  }
  return res
}
```

现在应该很好理解这个函数了吧？

### 前端

我们要实现的是 Web 版 ChatGPT，所以还需要一个前端页面。首先需要安装 Laf 的 SDK：

```bash
npm install laf-client-sdk
```

接下来，需要创建一个 cloud 对象：

```typescript
import { Cloud } from "laf-client-sdk"; 

// 创建 cloud 对象 这里需要将 <appid> 替换成自己的 App ID
const cloud = new Cloud({
  baseUrl: "https://<appid>.laf.dev",
  getAccessToken: () => "", // 这里不需要授权，先填空
});
```

这里我们看一下前端的核心代码，非常的简单，就是把提问的内容和上下文 id 传入云函数就可以了。

```typescript
async function send() {

// 我们提问的内容
const message = question.value;

let res;
// 与云函数逻辑一样，有上下文 id 就传入
if (!parentMessageId.value) {
  res = await cloud.invoke("send", { message });
} else {
  res = await cloud.invoke("send", { message, parentMessageId: parentMessageId.value });
}

// 回复我们的内容在 res.text 

// 这个是上下文 id
parentMessageId.value = res.id;
}
```

到这一步 我们已经可以发信息给 ChatGPT 并且拿到回复的消息了。

我们只要稍微加**亿点点**细节，就可以变成这样：

![img](https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-12-14-27-POTJQZ.png)

加完这点细节之后，基本开发工作就完成了，接下来就是把项目上线分享给你的朋友，顺便装个杯。

说到上线我们现在应该要去买一台服务器安装 Nginx，配置 Nginx，解析域名，绑定域名...

**NO NO NO 我不允许你浪费年轻而美好的生命，life is short, you need laf**😃

### 上线

打开你的 Laf，点击存储界面 --> 点击上方加号 --> 创建一个权限为 readonly 的存储桶（名字随意）。

![img](https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-19-09-hMcqZu.jpg)

创建完之后，在你的前端项目中运行打包命令。我这里用的是 `npm run build`。

打包完毕之后找到打包好的 `dist` 文件夹，像我一样把 `dist` 文件里面的所有东西都上传到我们刚刚创建的存储桶里面，记住是原封不动的上传哦，文件就是文件，文件夹就是文件夹。

![img](https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-19-11-EE5Ld4.jpg)

上传完毕之后，发现右上角有一个 “开启网站托管”，点一下它！

![img](https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-19-11-N0Ty0Z.jpg)

点完之后出来一个链接，我们点击一下访问看看是啥东西。

![img](https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-19-12-iBZITq.jpg)

**哦！我的老天鹅呀 这不就是我刚刚开发的项目吗？？**

![img](https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-19-12-bFGfCz.jpg)

恭喜，到这里你的项目已经上线了，快分享给你的好朋友吧！

------

- 项目源码：**[github.com/zuoFeng5955…](https://github.com/zuoFeng59556/chatGPT)**
- 示例网站：**[jyf6wk-chat-gpt.site.laf.dev/](https://jyf6wk-chat-gpt.site.laf.dev/)**

## 微信

### WeChat Bot

- 一个基于 OpenAi ChatGPT + WeChaty 实现的微信机器人 ，可以用来帮助你自动回复微信消息，或者管理微信群/好友，检测僵尸好友等。
- 开源地址：[wangrongding/wechat-bot: 🤖一个基于OpenAi ChatGPT + WeChaty 实现的微信机器人 ，可以用来帮助你自动回复微信消息，或者管理微信群/好友，检测僵尸粉等... (github.com)](https://github.com/wangrongding/wechat-bot)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef8d91c675404a5db99822cfba38c78e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### wechat-chatgpt

开源地址：[fuergaosi233/wechat-chatgpt: Use ChatGPT On Wechat via wechaty (github.com)](https://github.com/fuergaosi233/wechat-chatgpt)

通过 wechaty **在微信上使用 ChatGPT**，其支持在实用 OpenAI 账户，支持使用代理登录，支持与 docker 一起使用等。该工具简单易用，安装完依赖后只需要填写 OpenAI 账号密码和微信扫码即可使用。该项目的特性如下：

- 通过 wechaty，将 ChatGPT 接入微信
- 创建 OpenAI 的账户池
- 支持通过代理登陆 OpenAI
- 加入了持续对话的功能
- 加入 Dockerfile
- 发布到 Docker.hub
- 通过 Railway 进行部署
- 实现 OpenAI 账户池的热加载
- 当 OpenAI 返回码为 429/503 时自动重试

> Wechaty 是一个聊天机器人开源项目，提供了开发聊天机器人的 SDK，方便开发人员快速实现聊天机器人。通过 Wechat 可以获取到微信的聊天内容、联系人、群组、好友关系等信息，也可以实现创建群组、发送消息等功能。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f525ab7fee184e1e84fbf6a88a8b99e1~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## 桌面应用

### ChatGPT

开源地址：[lencx/ChatGPT: 🔮 ChatGPT Desktop Application (Mac, Windows and Linux) (github.com)](https://github.com/lencx/ChatGPT)

ChatGPT 桌面应用，适用于 Mac、Windows 和 Linux 平台，该项目只是对 OpenAI ChatGPT 网站的一个包装器，不存在额外的数据收集和上传。该项目具有以下特性：

- 跨平台: macOS、Linux、Windows
- 导出 ChatGPT 聊天记录 (支持 PNG, PDF 和生成分享链接)
- 主窗口和系统托盘支持自定义 URL，将任意网站包装成一个桌面应用
- 应用自动升级通知
- 丰富的快捷键
- 系统托盘悬浮窗
- 应用菜单功能强大
- 支持斜杠命令及其配置
- 自定义全局快捷键
- 划词搜索

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7468f21c1b5d430aa488b50271c872aa~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### chatgpt-mac

开源地址：[vincelwt/chatgpt-mac: ChatGPT for Mac, living in your menubar. (github.com)](https://github.com/vincelwt/chatgpt-mac)

一个简单的 Mac 应用，可让 ChatGPT 在菜单栏中显示，在 Mac 上可以使用 Cmd+Shift+G 快捷键来快速打开它，目前提供了 Mac 的 Arm64 和 Intel 版本的安装包。 ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b88e84f039dd44579f10ac6726a59b76~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### chatgpt-desktop

开源地址：[sonnylazuardi/chat-ai-desktop: Unofficial ChatGPT desktop app for Mac & Windows menubar using Tauri & Rust (github.com)](https://github.com/sonnylazuardi/chat-ai-desktop)

基于 tauri 和 rust 的非官方开源 ChatGPT 桌面应用，适用于 mac、windows 和 linux 菜单栏。 ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/926af1d678f54e149d704f06295e020a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## 浏览器扩展

### ChatGPT for Google

- 开源地址：[wong2/chatgpt-google-extension: A browser extension that enhance search engines with ChatGPT (github.com)](https://github.com/wong2/chatgpt-google-extension)
- ChatGPT for Google 是一个可以显示 ChatGPT 响应和 Google 搜索结果的浏览器扩展，支持 Chrome/Edge/Firefox。该项目主要使用 JavaScript 和 CSS 编写。该扩展具有以下特性：
  - 支持所有主流的搜索引擎
  - 支持OpenAI官方API
  - 从插件弹窗里快速使用ChatGPT
  - 支持Markdown渲染
  - 支持代码高亮
  - 支持深色模式
  - 可自定义ChatGPT触发模式

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df5de045b6d04480a4bc8a84ab89d3a7~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### ChatGPT Chrome Extension

- 开源地址：[gragland/chatgpt-chrome-extension: A ChatGPT Chrome extension. Integrates ChatGPT into every text box on the internet. (github.com)](https://github.com/gragland/chatgpt-chrome-extension)
- 一个 Chrome 扩展，将 ChatGPT 添加到网络上的每个文本框！ 可以使用它来撰写推文、修改电子邮件、修复编码错误或者需要的任何其他内容，所有这些都无需离开所在的网站。 包括一个插件系统，用于更好地控制 ChatGPT 行为和与第三方 API 交互的能力。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aee8a9e37d404699a22e20b5ed96884c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## VS Code 插件

### chatgpt-vscode

开源地址：[mpociot/chatgpt-vscode: A VSCode extension that allows you to use ChatGPT (github.com)](https://github.com/mpociot/chatgpt-vscode)

一个基于 ChatGPT 的 VSCode 扩展，允许使用非官方的 ChatGPT API 直接在编辑器中从 OpenAI 的 ChatGPT 生成问题响应。该插件具有以下特性：

- 提出问题或使用编辑器中的代码片段，通过侧边栏的输入框查询 ChatGPT
- 在代码选择上点击右键，运行上下文菜单中的一个快捷方式
- 在编辑器旁边的面板上查看 ChatGPT 的回答
- 对回答提出后续问题（保持对话上下文）
- 通过点击 AI 的回应将代码片段插入到活动的编辑器中

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9572973c1c3949bc9e69b77c631745b8~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### vscode-chatgpt

开源地址：[gencay/vscode-chatgpt: An unofficial Visual Studio Code - OpenAI ChatGPT integration (github.com)](https://github.com/gencay/vscode-chatgpt)

一个支持 ChatGPT 的 Visual Studio Code 扩展，该扩展可以与 ChatGPT 配对编程。其支持以 Markdown 格式一次导出所有对话历史记录，简单易用，只需登录 OpenAI，或者使用 OpenAI 的官方 GPT3 API。可以单击或使用键盘快捷键创建文件/项目或修复代码，提高开发效率。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f4ab34f748d43dd961255e8ad5fe4f5~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### ChatGPT 中文版

插件地址：[marketplace.visualstudio.com/items?itemName=WhenSunset.chatgpt-china](https://marketplace.visualstudio.com/items?itemName=WhenSunset.chatgpt-china)

一个 VSCode 插件，将 ChatGPT 集成在 VSCode 中，提高开发效率。目前支持的代码功能包括：

- ChatGPT: 请输入问题：直接对 ChatGPT 提问
- ChatGPT: 添加测试代码：为当前选中的代码，或者当前文件添加测试代码
- ChatGPT: 代码为什么有问题(需要同时选中报错)：询问代码出现的问题，需要将报错也一起选中
- ChatGPT: 优化这部分代码：对当前选中的代码，或者当前文件，进行优化或者重构
- ChatGPT: 解释这部分代码：对当前选中的代码，或者当前文件，进行解释
- ChatGPT: 执行自定义命令 1：添加一个对选中代码，或者当前文件执行的自定义命令 1，添加后可以直接执行
- ChatGPT: 执行自定义命令 2：添加一个对选中代码，或者当前文件执行的自定义命令 2，添加后可以直接执行

执行了一个命令之后，侧边栏会弹出一个交互窗口：

- 后续所有的问题、回答、异常。都会在这个窗口中显示。
- 可以在交互窗口的底部输入框中，直接输入问题，询问 ChatGPT
- 也可以执行前面的命令，对代码进行询问。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4215bc358db0403abd825c88bdb28808~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## 其他

### ChatGPT API

开源地址：<https://github.com/transitive-bullshit/chatgpt-api>

一个非官方 ChatGPT API 的 **Node.js 客户端**，主可以使用它来构建由 ChatGPT 支持的项目，例如聊天机器人、网站等。该项目主要使用 TypeScript 编写。 ![demo.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a3568b771f004f008dd2ff42cb9ecff6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### ChatGPT Export and Share

开源地址：<https://github.com/liady/ChatGPT-pdf>

一个用于将 ChatGPT 历史下载为 PNG、PDF 或创建可共享链接的 Chrome 扩展。目前支持 Chrome、Edge、Firefox 浏览器。 ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e44b21d8ec9a4c298d0acb59508cde10~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### Access-chatGPTin-Siri

开源地址：<https://github.com/Daiyimo/Access-chatGPT-in-Siri>

Siri 接入ChatGPT指南。目前仅限iPhone端及其他支持快捷指令的Apple产品， ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e3607fc8ff54ab5a9bd18e0503ae674~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## bob-plugin-openai-translator

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd64de0b5b744ee1b2d13bef3d5bfcbd~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

基于 ChatGPT API 的文本翻译、文本润色、语法纠错 Bob 插件，让我们一起迎接不需要巴别塔的新时代！

<https://github.com/yetone/bob-plugin-openai-translator>

此插件已支持使用 ChatGPT API 对句子进行润色和语法修改，只需要把目标语言选成跟源语言一样即可，全面替代 Grammarly！而且理论上任何语言都可以润色，不只是英语。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/40be9c57768e4cef87575605fdc710ae~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

目前仅支持macOS用户，非 macOS 用户可以使用基于 ChatGPT API 的划词翻译浏览器插件 openai-translator 以解燃眉之急。

开源地址：<https://github.com/yetone/openai-translator>

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b77e88ece423465d9d48d1ea9460d04c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## 🤖 『70 款 ChatGPT 插件评测』惊艳的开发过程与宏大的商业化愿景

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a807b4f9241e4cb4b1aa542894aa38f5~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

作者团队探索了整个插件开发的流程，从场景、功能、商业化、使用体验、推荐程度等角度全面评测了现有的70款 ChatGPT 插件，并为每个插件提供了一句话简介和使用样例分析。

以下是作者团队的基本测评结果，详细内容可以 [**⋙ 知乎原文**](https://zhuanlan.zhihu.com/p/629337429) | [**微信公众号转载**](https://mp.weixin.qq.com/s/vHwAk63ukRteF1u1myrTlA)

> *1*. 约八成插件集中于购物、餐饮、旅行、住房和求职场景，其余分布在教育、财经咨讯、内容社区和编程技术场景
>
> *2*. 商业分析、游戏、身体/心理健康、社交以及家庭和育儿场景是蓝海
>
> *3*. 约七成插件用于已有平台的商业导流，同质化严重，或许意味着OpenAI成为新的流量分发平台的雄心
>
> *4*. 联网、实时信息获取和阅读网页/PDF功能是刚需
>
> *5*. 以下插件值得一试：
>
> - Wolfram（数学计算）
> - WebPilot（网页阅读）
> - Speak（专业翻译）
> - Prompt Perfect（提示词润色）
> - Diagram It（流程图绘制）
> - AskYourPDF（PDF阅读）
> - CreatiCode Scratch（少儿编程）
> - Chess（国际象棋游戏教练）
> - edX（公开课学习）
> - FiscalNote（政策咨询）
