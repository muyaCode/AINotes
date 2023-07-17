# AI 开发工具Vercel AI SDK 快速入门

人工智能驱动的Web开发世界的一个令人兴奋的开发工具 [Vercel AI SDK](https://github.com/vercel-labs/ai)，这是一个在科技界引起轰动的开源库。这个强大的工具集允许开发人员轻松构建边缘就绪的人工智能流文本和聊天Web应用程序。

Vercel AI SDK 是一个工具集合，旨在帮助构建基于AI的Web用户界面。为了更好的了解它可以做什么，本文通过一个快速入门教程，通过构建一个简单的人工智能标语生成器。

> 一个可互操作、支持流媒体、边缘就绪的软件开发套件，适用于使用 React 和 Svelte 构建的 AI 应用程序。

**GitHub**：[github.com/vercel-labs…](https://github.com/vercel-labs/ai)

首先，需要设置项目开发环境，需要安装 `Node.js 18+` 和 `OpenAI API` 密钥。通过创建一个新的 `Next.js` 应用程序来开始。SDK提供了一些入门代码，可帮助快速启动并运行。

**项目地址**：[github.com/QuintionTan…](https://github.com/QuintionTang/vercel-ai-app)

使用以下命令创建新项目：

```lua
npx create-next-app vercel-ai-app
```

此命令启动项目创建项目并指导引导回答一些项目配置的问题：

![2.jpeg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f452a34c1574afc9a47e82b66ab23bc~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

之后，将下载并安装项目模板和依赖项。

![3.jpeg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59733c21aeb84d77aba80558a62d1d87~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

安装项目完成后，接下来进入新创建的项目文件夹：

```bash
cd vercel-ai-app
```

接下来，将安装必要的依赖项 `ai` 和 `openai-edge`。后者与 `Vercel Edge Functions` 兼容，因此比官方 `OpenAI SDK` 更受欢迎，使用以下命令添加这些依赖项：

```css
npm install ai openai-edge --save
```

然后，将在项目根目录的 `.env.local` 文件用来配置 `OpenAI API` 密钥。

```ini
OPENAI_API_KEY=YOUR OPEN AI API KEY
```

安装样式相关的依赖：

```css
npm install autoprefixer postcss tailwindcss --save
```

根目录下创建文件 `postcss.config.js`，代码如下：

```css
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
};
```

下一步是创建 API 路由，路由处理程序将使用 `Edge Runtime` 通过 `OpenAI` 生成文本完成，然后将其流回 `Next.js`。 SDK 提供了一个简洁的示例来说明路由处理程序应该是什么样子：

```php
import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(req) {
    const { prompt } = await req.json();

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        stream: true,
        temperature: 0.6,
        prompt: `Create three slogans for a business with unique features.
 
    Business: Bookstore with cats
    Slogans: "Purr-fect Pages", "Books and Whiskers", "Novels and Nuzzles"
    Business: Gym with rock climbing
    Slogans: "Peak Performance", "Reach New Heights", "Climb Your Way Fit"
    Business: ${prompt}
    Slogans:`,
    });
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
}
```

将上述代码复制到新建文件中 `app/api/completion/route.js`。接下来分解一下这段代码，首先是导入必要的模块：

```javascript
import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
```

`Configuration` 和 `OpenAIApi` 是从 `openai-edge` 包中导入的。`Configuration` 用于设置 `OpenAI API` 客户端的配置，而 `OpenAIApi` 就是客户端本身。`OpenAIStream` 和 `StreamingTextResponse` 是从 `ai` 包导入的。`OpenAIStream` 用于将 `OpenAI API` 的响应转换为流，`StreamingTextResponse` 用于将流作为响应返回。

下来，设置 OpenAI API 客户端：

```bash
const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);
```

上面代码创建一个新的 `Configuration` 实例，传入一个包含 `OpenAI API` 密钥的对象，该密钥存储在环境变量中。然后创建一个新的 `OpenAIApi` 实例，传入刚刚创建的配置。

将运行时设置为 `edge` 以获得最佳性能：

```ini
export const runtime = "edge";
```

接下来，定义一个异步函数 `POST`，它将 `Request` 对象作为参数：

```javascript
export async function POST(req) {
    const { prompt } = await req.json();
```

这个函数实现处理 POST 请求，从请求的 JSON 正文中提取 `prompt`。然后，根据提示要求 OpenAI 进行流式完成：

```php
const response = await openai.createCompletion({
    model: "text-davinci-003",
    stream: true,
    temperature: 0.6,
    prompt: `Create three slogans for a business with unique features.

Business: Bookstore with cats
Slogans: "Purr-fect Pages", "Books and Whiskers", "Novels and Nuzzles"
Business: Gym with rock climbing
Slogans: "Peak Performance", "Reach New Heights", "Climb Your Way Fit"
Business: ${prompt}
Slogans:`,
});
```

在 openai 客户端调用 `createCompletion` 方法，传入一个指定要使用的模型的对象 `text-davinci-003`，需要一个流响应 `stream: true`，AI的 `temperature` 设置（控制输出的随机性），以及AI应该响应的 `prompt`。

接下来，将响应转换为文本流：

```ini
const stream = OpenAIStream(response);
```

通过调用 `OpenAIStream`，传入 `createCompletion` 调用的响应，将响应转换为流。最后，返回流作为响应返回给前端：

```bash
return new StreamingTextResponse(stream);
}
```

创建一个新的 `StreamingTextResponse`，传入流并返回它，并发送回客户端的响应。

> 小结一下，上面代码设置了一个 `OpenAI API` 客户端，定义了一个处理 `POST` 请求的函数，在给定提示的情况下要求 `OpenAI` 进行流式完成，将响应转换为流，并将流作为响应返回。

最后，将创建一个带有表单的客户端组件，用于收集用户的提示并流回完成结果。SDK 提供了 `useCompletion` 挂钩来处理用户输入和表单提交。该钩子提供了多个实用函数和状态变量，包括 `completion`、`input`、`handleInputChange` 和 `handleSubmit`。将 `app/page.js` 中的默认代码替换为以下代码：

```javascript
"use client";

import { useCompletion } from "ai/react";

export default function SloganGenerator() {
    const { completion, input, handleInputChange, handleSubmit } =
        useCompletion();

    return (
        <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
            <form onSubmit={handleSubmit}>
                <input
                    className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2"
                    value={input}
                    placeholder="Describe your business..."
                    onChange={handleInputChange}
                />
            </form>
            <div className="whitespace-pre-wrap my-6">{completion}</div>
        </div>
    );
}
```

同样来分解一下这个 React 组件：

首先，从 `ai/react` 包中导入需要的钩子：

```javascript
import { useCompletion } from "ai/react";
```

`useCompletion` 是 `ai/react` 包提供的自定义 React 钩子。旨在处理用户输入和表单提交，以实现人工智能驱动的完成。

接下来定义一个功能组件 `SloganGenerator`：

```javascript
export default function SloganGenerator() {
```

这是在 React 中定义功能组件的标准方式。在这个组件中，将调用 `useCompletion` 钩子：

```scss
const { completion, input, handleInputChange, handleSubmit } =
        useCompletion();
```

`useCompletion` 挂钩返回一个包含多个属性的对象：`completion`、`input`、`handleInputChange` 和 `handleSubmit`。 `completion` 是当前的完成结果，表示生成文本的字符串值。`input` 是用户输入字段的当前值。 `handleInputChange` 和 `handleSubmit` 是处理用户交互的函数，例如分别在输入字段中键入内容和提交表单。

接下来，主要是返回组件的 JSX。

到此可以启动应用程序并通过输入业务描述来进行测试，以实时查看人工智能生成的口号。

使用以下命令启动 Web 应用程序：

```bash
npm run dev
```

已经使用 Vercel AI SDK 构建了一个流式标语生成器。

![4.jpeg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f47439aaa28646f291c9858b46a79b2c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

## 流媒体的力量

Vercel AI SDK 的主要功能之一是支持流接口。ChatGPT 等流式会话文本 UI 在过去几个月中获得了广泛的流行，主要是因为它们可以提供更好的用户体验，尤其是在聊天机器人等会话应用程序中。

大型语言模型 (LLM) 非常强大，但在生成长输出时，它们可能会很慢。如果尝试构建传统的阻塞式 UI，用户可能会发现自己花了大量时间盯着加载的 Loading。流式 UI 可以通过在部分响应可用时显示它们来帮助缓解此问题。

SDK 提供了阻塞式和流式 UI 的示例。流式 UI 开始显示响应的速度比阻塞式 UI 快得多，阻塞式 UI 必须等待生成整个响应才能显示任何内容。

## 缓存响应

根据正在构建的应用程序的类型，可能希望缓存从AI提供商收到的响应，至少是暂时的。Vercel AI SDK 提供了特殊的生命周期回调函数，可以用于此目的。`onCompletion` 回调特别有用，因为它会在流关闭时被调用，而这里就是可以缓存完整响应的地方。

SDK 提供了如何使用 `Vercel KV` 和 `Next.js` 将 OpenAI 响应缓存 `1 小时` 的示例，这对于频繁发出相同或相似请求的应用程序特别有用。

**项目地址**：[github.com/QuintionTan…](https://github.com/QuintionTang/vercel-ai-app)

## 总结

Vercel AI SDK 是用于构建人工智能驱动的用户界面的强大工具。它对流接口和响应缓存的支持，以及与 Next.js 等流行框架的兼容性，使其成为开发人员的多功能且高效的工具。无论是构建聊天机器人、标语生成器还是任何其他人工智能驱动的应用程序，Vercel AI SDK 都可以创建流畅且响应迅速的用户体验。
