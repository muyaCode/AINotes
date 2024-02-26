# Roop

## 介绍

一个开源你的AI换脸工具，只需要一张所需脸部的图像，无需数据集，无需训练，你就可以将拍摄视频其中的面孔替换为你选择的面孔。

#### 软件配置要求

系统支持：win10、win11。支持CPU和N卡显卡运行。必须是英伟达（NVIDIA）不支持AMD显卡，推荐2060 6GB显存以上，如果是CPU效率非常低，换脸视频需要很长时间。

#### 操作方法

该工具包足足有4个多G，下载后，解压。打开文件夹内的“AI人脸替换工具离线版v1.8”

打开后，选择一个人脸图片。然后再选择一个需要替换人脸的视频/图片。其他参数根据自己的实际需求修改即可。

点击开始生成，图片的替换速度几乎是瞬间完成，视频替换的速度则根据你的视频长度、帧率、电脑性能而定。

常见问题，如果出现提示缺少什么DLL 之类，那就是你的电脑缺少运行库，可以参考下面的文章进行修复！

http://xg.gw54.com/fuzhu/4029.html

夸克下载：https://pan.quark.cn/s/cadcdc64e501#/list/share  提取码：ZUpY

123云盘：https://www.123pan.com/s/H3GRVv-kjFLh.html  提取码：L2Ju

百度云盘：https://pan.baidu.com/share/init?surl=uhpL3x-FWAqQBJ86C6WBvg  提取码：u6rn

## 开源和软件地址

GitHub开源地址：<https://github.com/s0md3v/roop/>

## roop新奇用法：直播换脸|批量换图

**视频教程**：【roop新奇用法：直播换脸|批量换图】<https://www.bilibili.com/video/BV18h4y177JZ?vd_source=36c9491a7fa2ab8a22ca060af01b7472>

代码克隆本地

```bash
git clone https://github.com/s0md3v/roop.git
```



1、安装CUDA 11（建议11.8版本）：<https://developer.nvidia.com/cuda-11-7-0-download-archive>

2、安装visual studio 2022（社区版、专业版都可）要钩选C++桌面开发、windows 10 SDK 最新版

3、安装python3.10.6(建议不要高于3.10.9)：<https://www.python.org/downloads/release/python-3106/>

4、下载ffmpeg解压，添加环境变量

5、下载、解压项目压缩包：<https://github.com/s0md3v/roop/>

6、安装项目依赖

命令窗口里进入项目根目录，创建 `python` 虚拟环境并激活

```bash
python -m venv venv

call venv\Scripts\activate.bat

pip install -r requirements.txt
```

如果本地缓存有冲突依赖包安装失败 ，可执行:

```bash
pip install --no-cache-dir -r requirements.txt
pip uninstall onnxruntime onnxruntime-gpu
pip install onnxruntime-gpu==1.15.0
```

7、运行程序

```bash
call venv\Scripts\activate.bat
# 只用CPU处理视频
python run.py
# 使用GPU处理视频
python run.py --execution-provider cuda
# 视频高清化处理
python run.py --execution-provider cuda --frame-processor face_enhancer
```

8、网盘安装包：<https://pan.baidu.com/s/1BuqA6ptkBC7L0MwuHSDVwg?pwd=83vw>      提取码：83vw



第一次运行先下载模型 `inswapper_128.onnx` , 也可以自行下载之后放在 `models` 文件夹里。选择人脸（具有所需人脸的图像）和目标图像/视频（要替换人脸的图像/视频），然后单击 `Start`，选择要保存的文件夹。

## 高级用法

`--keep-fps` 保持原视频的帧率
 `--keep-frames` 是否在本地保留替换后每一帧的图片，处理的过程会把原视频按帧率把视频提取成图片，然后每张图片去替换人脸
 `--many-faces` 支持多个人脸
 `--video-encoder` 支持多种视频编码 `libx264、libx265、libvpx-vp9` 默认 `libx264
