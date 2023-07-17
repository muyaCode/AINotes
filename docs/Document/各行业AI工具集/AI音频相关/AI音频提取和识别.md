# AI音频提取和识别

## 『writeout.ai』使用 OpenAI 的 Whisper API 转录和翻译音频文件

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/351de51fe20449648a69182f759dd26e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

🌍[**writeout.ai**](https://writeout.ai/) 是一个免费的转录和翻译网站，**使用最近发布的 OpenAI Whisper API，可以在几秒钟内快速准确地翻译任何音频文件**。

你只需要上传音频文件，应用程序将使用 Laravel 的队列作业通过 OpenAI Whisper API 进行发送，使用使用新的 OpenAI 聊天 API 进行翻译，并将生成的 VTT 文件分成更小的部分，以适应提示上下文地限制。

🌍[**GitHub 存储库**](https://github.com/beyondcode/writeout.ai)

## AudioGPT

AudioGPT是针对于语音领域的GPT

AudioGPT开源地址：<https://github.com/AIGC-Audio/AudioGPT>

如何在自己的电脑上去运行AudioGPT的代码程序，以及如何学会正确运用AudioGPT实现对应的功能

AudioGPT的使用是需要基于ChatGPT基础的，为什么这么说呢？原因在于需要我们通过使用OpenAI的API key进访问权限的验证，如图为OpenAI key的获取示意图

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fb9c80968b704897baea18a67b5f2d67~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

所以大家如果还没有OpenAI的GPT账号的，自己去申请一下，然后将这个API Key放到这个AudioGPT的输入框中，即可进行运行程序。

### 实现搭建模型运行环境

安装requirements文件列表里面的这依赖项，以及怎么实现在我们本地的客户端去运行AudioGPT的程序。

1.创建运行程序新的conda环境

```ini
# create a new environment
conda create -n audiogpt python=3.8
```

2.安装环境运行所需依赖，以及下载模型文件

```bash
#  prepare the basic environments
pip install -r requirements.txt

# download the foundation models you need
bash download.sh
```

3.导入你的OpenAI Key字符串进入代码文件

```ini
# prepare your private openAI private key
export OPENAI_API_KEY={Your_Private_Openai_Key}
```

4.开始运行AudioGPT程序

```css
python audio-chatgpt.py
```

至此我们可以实际检验AudioGPT的实际功能。

以上的操作步骤还是似乎还是偏向于极客，可以直接使用Hugging Face社区，调用实际的API接口，使用更加方便。以下是Hugging Face社区的代码地址：<https://huggingface.co/spaces/AIGC-Audio/AudioGPT>

AudioGPT效果如下图所示：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a3f30da68d64e4a95b6c0df327344ef~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 实践环节演示

AudioGPT包括以下几种功能，由于AudioGPT的模型属于语音音频方向的大模型。其功能包括以下的内容分类。

第一、实现根据输入文本转换为语音文件的语音合成

例如：生成带有文本“here we go”的语音音频

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ec620b8733ea47989b812931239daa7a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

第二、实现将单通道语音转换为双通道语音

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e4ae0cde387543e7b0b02c151a894322~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

第三、根据语言的文本描述生成对应语音

例如：生成狗叫声的音频：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d79aa8f092ca4bd292bb4e97abbaf2bc~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

第四，根据音频输出指定文字的描述

例如：给我这个生成音频的描述

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ca4daef5a12642c89cc46145951d8c81~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

第五、根据输入语音信号转换输出其对应的频谱图

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77be793ccc7a4d2a87b56dfbd56c749d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

第六、说明音频内部所包含的事件以及起止时间

例如：这段音频中的雷声是什么时候发生的？

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd77b0b21cd14a92ba866f2aea967e7d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

不仅如此，AudioGPT也集成了图像识别的功能，根据图片输入的上传图片生成对应的内容描述音频

例如：上传下图的江南水乡的图片

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2d9afcd23f74766938ce011e4b104c5~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

然后通过江南水乡的图片，生成的雨水声音

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8ccec5373ef4fa9b1966380cac6a6ee~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

怎么样感觉效果如何？不过其实告诉大家一个秘密，音频信号的处理，相对来说，比较占用内存，处理音频的时间较长，可以选择不同的加速硬件GPU，如下图所示

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d786f41a3092475c9235f0fb14286b8e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

原始使用的T4显卡是免费的，其实理论上计算性能也还不错，免费的，还要啥自行车!

不过如果有更多的需要，当然也可以按需购买。

## 相关网站工具

付费：

Lalal.ai：人声和伴奏分离

<https://www.lalal.ai/zh-hans/>

免费：

motionface：

## whisper语音识别和提取

【whisper.cpp最详细安装教程 | 免费开源语音识别项目 | 可以做实时语音识别】<https://www.bilibili.com/video/BV19L411v7cq?vd_source=36c9491a7fa2ab8a22ca060af01b7472>

whisper.cpp最详细安装教程 | 免费开源语音识别项目 | 可以做实时语音识别

服务器：<https://www.vultr.com/?ref=8685401>

博客：<https://blog.lukeewin.top>

开源地址：[openai/whisper: Robust Speech Recognition via Large-Scale Weak Supervision (github.com)](https://github.com/openai/whisper)

模型训练：[使用 Transformers 为多语种语音识别任务微调 Whisper 模型 - 掘金 (juejin.cn)](https://juejin.cn/post/7249286405024432185)

whisper是一种通用语音识别模型。它是在各种音频的大型数据集上进行训练的，也是一个多任务模型，可以执行多语言语音识别、语音翻译和语言识别。

## 「通义听悟」开放公测，基于音视频内容的AI效率工具

官网：[通义听悟 - 你的工作学习AI助手 (aliyun.com)](https://tingwu.aliyun.com/)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0d1b4c3899447c1ba4818f56ed9eb2c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

**通义听悟**是基于「通义千问」大模型的音视频内容效率工具，目前开启公测，注册可免费体验。

**通义听悟**支持实时语音转文字、音视频文件转文字、智能总结、中英互译等功能，可以帮助你实现高效地记录、整理和共享。
