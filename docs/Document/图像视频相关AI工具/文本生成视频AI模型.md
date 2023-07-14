# 文本生成视频AI模型

## 🤖 『阿里达摩院 | 文本生成视频大模型』可以试玩，支持一下国产LLM

🌍[**文本生成视频大模型-英文-通用领域**](https://modelscope.cn/models/damo/text-to-video-synthesis/summary)  基于多阶段文本到视频生成扩散模型, 输入描述文本，返回符合文本描述的视频。仅支持英文输入。

模型由文本特征提取、文本特征到视频隐空间扩散模型、视频隐空间到视频视觉空间这3个子网络组成，整体模型参数约17亿。扩散模型采用Unet3D结构，通过从纯高斯噪声视频中，迭代去噪的过程，实现视频生成的功能。

> 🌍[**试玩地址1**](https://huggingface.co/spaces/damo-vilab/modelscope-text-to-video-synthesis) | 🌍[**试玩地址2**](https://modelscope.cn/studios/damo/text-to-video-synthesis/summary)
>
> 试玩Demo显示too busy时，可以多刷新几次