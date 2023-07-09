# DragGAN开源图像AI工具

## 简介

"Diffusion" 和 "GAN（生成对抗网络）"都是生成模型，它们用于从某些数据分布中生成新的样本。但是，它们在理论和实践上都有一些重要的区别。

GAN，或者说生成对抗网络，是由两个网络组成的模型：生成器和鉴别器。生成器试图创建与真实数据类似的假数据，而鉴别器的任务是尝试区分真实数据和生成的假数据。GAN的主要目标是使生成器产生的数据能够在鉴别器中被判断为真实的。

另一方面，"Diffusion"模型则基于随机过程的观念。在这个模型中，一开始会有一个随机噪声，然后通过一系列时间步骤，这个噪声会逐渐变化，最终变得与目标数据分布相似。在每个时间步骤中，模型都会向数据添加或移除一些噪声。

两者之间的一个主要区别是，GAN使用了对抗的方式来生成数据，而Diffusion模型则是通过一种逐步的、基于噪声的过程来生成数据。虽然两者都可以生成新的数据样本，但它们的应用和性能可能会在不同的任务和数据集上有所不同。

## 相关地址

开源地址：[XingangPan/DragGAN: Official Code for DragGAN (SIGGRAPH 2023) (github.com)](https://github.com/XingangPan/DragGAN)

DragGAN 全功能实现，在线Demo，本地部署试用，代码、模型已全部开源，支持Windows, macOS, Linux：<https://github.com/Zeqiang-Lai/DragGAN>

官网：<https://vcai.mpi-inf.mpg.de/projects/DragGAN>

论文：<https://vcai.mpi-inf.mpg.de/projects/DragGAN/data/paper.pdf>

OpenXLab在线Demo：<https://openxlab.org.cn/apps/detail/XingangPan/DragGAN>

教程：【期待已久的DragGAN源代码来了，尝鲜版】<https://www.bilibili.com/video/BV1Us4y1T7WD?vd_source=36c9491a7fa2ab8a22ca060af01b7472>

免部署一键运行包1.2可用自己的图片版下载地址：（原作者：万能软件君）

- WIN版（仅支持Windows 10、11）】下载链接：<https://pan.quark.cn/s/8d2459f6eee3> 提取码：wcZ5
- MAC版（仅支持Mac OS暂不支持自定义图片）下载链接: <https://pan.baidu.com/s/1nCgouL5SyuOldQko3S5kYQ?pwd=28xb>  提取码: 28xb

（苹果如果提示不信任的开发者，则如下：
搜索找到终端，然后输入 `sudo spctl --master-disable`，回车，输入电脑密码即可。)

自定义图片因为要反演所以对显卡要求很高经本up测试2080 8g是下限，建议4090 24g以上，显卡达不行可以尝试

- 推荐的云端服务器：【无门槛！一键云端运行Stable diffusion最适合纯小白在线使用的SD云端服务器】 ：<https://www.bilibili.com/video/BV1VM4y1n7cu/>
- 上传使用自己的图片看这个教程：【喜大普奔！】DragGAN终于可以用上自己的图片了！免安装、免部署、无脑一键本地包运行1.2版使用教程：<https://www.bilibili.com/video/BV1yh411P7YR/>?
- 【一键换脸哪家强？SD插件太超强！超绝无敌Roop换脸插件安装使用详解，免坑避雷！整合包用户必看】：<https://www.bilibili.com/video/BV1ia4y1A7KD/?share_source=copy_web>
- 【比PS更胜一筹的SD controlnet一键扩图，无需预设扩图范围】 <https://www.bilibili.com/video/BV1VV4y117Jh/?share_source=copy_web&vd_source=2ad4a8ecd1ccf53fc3a0f15f431c7969>
- 【Lora选得好爽图随便跑！AI自动生成节日海报——几个端午节Lora模型分享】 <https://www.bilibili.com/video/BV1Yo4y1P7Ek/?share_source=copy_web&vd_source=2ad4a8ecd1ccf53fc3a0f15f431c7969>
- 【从此不愁提示词！小日子过的不错才能搞出来出的SD顺滑AI提示词插件】 <https://www.bilibili.com/video/BV1gP411z7sF/?share_source=copy_web&vd_source=2ad4a8ecd1ccf53fc3a0f15f431c7969>
- 【PS+AI双剑合璧插件最新版！两巨佬合体天下无敌！Auto-PS-SD-Plugin插件安装方法和使用】 <https://www.bilibili.com/video/BV1124y1N77a/?share_source=copy_web&vd_source=2ad4a8ecd1ccf53fc3a0f15f431c7969>
- 【PS最新版炸裂来袭！集成Ai一键移除!一键傻瓜修图!使用详解——感谢Adobe献给六月的礼物！】 <https://www.bilibili.com/video/BV1Yo4y1g7B7/?share_source=copy_web&vd_source=2ad4a8ecd1ccf53fc3a0f15f431c7969>
- share_source=copy_web&vd_source=2ad4a8ecd1ccf53fc3a0f15f431c7969
- 【stable diffusion 一个Ai插件让女神成为话痨，美照秒变虚拟主播！一步到位很简单】 <https://www.bilibili.com/video/BV1bm4y1h7aL/?share_source=copy_web&vd_source=2ad4a8ecd1ccf53fc3a0f15f431c7969>
- 【史上最牛Ai中文提示词插件——stable diffusion爽爆中文实时提示词！多国语言丝滑互转！】 <https://www.bilibili.com/video/BV1ez4y1a7vY/?share_source=copy_web&vd_source=2ad4a8ecd1ccf53fc3a0f15f431c7969>
- 让AI海啸般疯狂输出人设图！——stable diffusion游戏、动漫人物转面设计图一招搞定！<https://www.bilibili.com/video/BV1em4y1y7wP/?spm_id_from=333.999.0.0>
