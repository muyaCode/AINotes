# ChatGPT的API应用工具准备

[基于 Azure OpenAI 免费注册 ChatGPT - 掘金 (juejin.cn)](https://juejin.cn/post/7248035486614175781)

官网开发接口文档：[API Reference - OpenAI API](https://platform.openai.com/docs/api-reference)

## 基于 GPT3.5 搭建定制化知识库

[基于 GPT3.5 搭建定制化知识库](https://mp.weixin.qq.com/s?__biz=MzIyNDAzMzYxNQ==&mid=2652028778&idx=1&sn=985a386f915dea0d4dc97186af7c50b6&srcid=0316LqkslRQXM1UyluqQFTxe)（中文）

作者的一个小实验，通过 chatpdf.com 这个网站，将某个领域的文档（比如这份周刊）提供给 AI 训练，就会得到一个基于这些材料的问答引擎

## API Keys

API开发文档：[Quickstart tutorial - OpenAI API](https://platform.openai.com/docs/quickstart/build-your-application)

拿  `API Keys` 步骤：

- [进入 api-keys](https://platform.openai.com/account/api-keys)
- 点击 Create new secret key 即可获取私有的秘钥，可以构建自己的应用

## 使用 API

`ChatGPT` 的能力非常强，每天都有很多有想法的工程师基于 `ChatGPT` 贡献自己的项目，我这边列举几个：

- [chatgpt-web](https://github.com/Chanzhaoyu/chatgpt-web)：用 `Express` 和 `Vue3` 搭建的 `ChatGPT` 演示网页
- [chatgpt-mirror](https://github.com/yuezk/chatgpt-mirror)：基于 `gpt-3.5-turbo` 的 ChatGPT 镜像网站
- [bob-plugin-openai-translator](https://github.com/yetone/bob-plugin-openai-translator)：基于 ChatGPT API 的文本翻译、文本润色、语法纠错 Bob 插件，让我们一起迎接不需要巴别塔的新时代！
- [openai-translator](https://github.com/yetone/openai-translator)：基于 ChatGPT  API` 的划词翻译浏览器插件和跨平台桌面端应用
- [bilingual_book_maker](https://github.com/yihong0618/bilingual_book_maker)：`bilingual_book_maker` 是一个 `AI` 翻译工具，使用 ChatGPT 帮助用户制作多语言版本的 `epub` 文件和图书。该工具仅适用于翻译进入公共版权领域的 `epub` 图书，不适用于有版权的书籍
- [周报生成器](https://weeklyreport.avemaria.fun/zh)：简单描述工作内容帮你生成完整周报
- [README 生成器](https://readme.rustc.cloud/zh)：帮你生成完整 Github README
- [邮件生成器](https://email-helper.vercel.app/)：几秒钟内生成多语言商务邮件
- [Teach Anything](https://www.teach-anything.com/)：几秒钟内得到想要的答案
- [聊天简化器](https://chat-simplifier.imzbb.cc/zh)：简化聊天记录内容
- [SiteExplainer](https://siteexplainer.vercel.app/)：输入网址，快速总结网站内容
- [Dear Aibby](https://www.dearaibby.com/)：来自新机器灵魂的衷心建议
- [TextSummarizer](https://text-summarizer-seven.vercel.app/)：在几秒钟内从文本生成摘要
- [chatgpt-vscode](https://github.com/mpociot/chatgpt-vscode)：支持  ChatGPT  的  `Visual Studio Code`  扩展，可以与  `ChatGPT`  配对编程
- [editGPT](https://chrome.google.com/webstore/detail/editgpt/mognjodfeldknhobgbnkoomipkmlnnhk)：利用 ChatGPT 做文案修改编辑
- [chatgpt-google-extension](https://github.com/wong2/chatgpt-google-extension)：显示  `ChatGPT`  响应和  `Google`  搜索结果的浏览器扩展
- [chatgpt-chrome-extension](https://github.com/gragland/chatgpt-chrome-extension)：将  `ChatGPT`  集成到互联网上的每个文本框中

上述工具全部都是基于 `ChatGPT` 的能力构建的上层应用，只要你有 `openai keys` 都可以玩转，我以 [chatgpt-web](https://github.com/Chanzhaoyu/chatgpt-web) 项目为例，先确保安装好 `Docker` 环境，这样让我们可以更方便地尝试任何应用，直接使用：

```shell
git clone https://github.com/Chanzhaoyu/chatgpt-web.git

docker build -t chatgpt-web .

docker run --name chatgpt-web --rm -it -p 127.0.0.1:3002:3002 --env OPENAI_API_KEY=your_api_key chatgpt-web
```