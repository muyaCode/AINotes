# 图片视频修复AI工具

**AI老照片上色网站**，网址连接：https://palette.fm/

延伸小技巧：下载普通的图片后，如果想照片无损放大，可以通过这个在线工具完成。

AI人工智能图片放大：https://bigjpg.com/ 

图片无损放大在线工具（在线放大2倍，4倍，8倍和16倍，但是8倍和16倍的需要升级会员）：https://bigjpg.com/

## 🚧 『Lama Cleaner』开箱即用的 AI 图像擦除/补全工具，还能可以轻松去水印

开源地址：https://github.com/Sanster/lama-cleaner

官网：https://lama-cleaner-docs.vercel.app/

Lama Cleaner 是由 SOTA AI 模型提供支持的图像修复工具，可以从图片中擦除任何元素，修复旧照片，或者替换图片上的某些内容。以下为几张使用示例。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/40c575cd05454f7597229842dd182501~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

## 【CodeFormer】最强AI图片/视频去码，图片高清修复，免费开源“

- 在线修复地址：<https://huggingface.co/spaces/sczhou/CodeFormer>
- 开源地址：<https://github.com/sczhou/CodeFormer>

## 『restorePhotos』使用 AI 恢复旧/模糊的脸部照片

[github.com/Nutlope/res…](https://github.com/Nutlope/restorePhotos)

项目使用了机器学习模型 GFPGAN on Replica 来恢复脸部照片。照片上传后，将使用 Next.js API 路由通过此 机器学习模型发送照片，并返回恢复的照片。作者还提供了一个可以在线使用的网站：[Face Photo Restorer (restorephotos.io)](https://www.restorephotos.io/)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/21e0605d845249f0a7f339a6b7c8ecc1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

整个应用的架构分为4部分：

1. 前端（`Next.js`）
2. 图片存储服务
3. `Next.js`服务端
4. `AI API`

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ec8ea2933a84a0e930cd2d1f2827c91~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

完整工作流程如下：

1. 用户在前端上传老照片
2. 前端调用图片存储服务，返回图片存储地址给前端
3. 前端将图片存储地址发送给后端
4. 后端调用`AI API`处理图片
5. `AI API`返回处理后的图片给后端，后端返回给前端
6. 前端展示处理后的效果

### 前端部分

整个前后端的实现使用`Next.js`，前端主要包括两部分：

- 图片上传
- `AI`处理后的图片展示

所有主要功能均使用开源库实现。其中，图片上传功能使用  [react-uploader](https://www.npmjs.com/package/react-uploader) 实现：

```html
<UploadDropzone
  uploader={uploader}
  options={options}
  width="670px"
  height="250px"
  onUpdate={(file) => {
   // ...图片上传成功后的逻辑
 }}
/>;
```

处理后的图片展示效果使用  [react-compare-slider](https://www.npmjs.com/package/react-compare-slider)：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ecc4650920b74c15b6fd2fa548901e3a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

> PS：这里用的是我曾祖父的老照片 ๑¯◡¯๑

### 后端部分

后端核心逻辑包括两部分：

1. 用`Redis`做接口调用频率限制

`Redis`使用[@upstash-redis](https://docs.upstash.com/redis/overall/pricing)，这是一款基于`HTTP`的`Redis`客户端。在线创建`Redis`数据库后，我们可以在服务端通过`HTTP`请求的方式调用它。

1. 用`replicate`提供的`swinir`模型处理图片

`replicate`是一家机器学习的云服务商，我们可以根据业务需要选择不同机器学习模型，比如：

- 处理图片清晰度
- 破碎照片修复
- 文字转图片
- ...

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc650b46209c4d3daa89856318a4da05~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

在`Next.js`服务端，我们通过`HTTP`的形式调用模型`API`：

```js
// 我们上传的图片地址
const imageUrl = req.body.imageUrl;
// 请求模型接口
const startResponse = await fetch('https://api.replicate.com/v1/predictions', {
 method: 'POST',
 // ...省略代码
 body: JSON.stringify({
    // 我们需要的模型对应的版本
  version: '9283608cc6b7be6b65a8e44983db012355fde4132009bf99d976b2f0896856a3',
  input: { img: imageUrl, version: 'v1.4', scale: 2 }
 })
});
```

值得注意的是，模型计算需要时间，所以在服务端，我们每秒轮询一次结果，如果模型返回处理后的图片，我们就将图片返回给前端：

```js
// 保存模型处理后的结果
let restoredImage: string | null = null;
while (!restoredImage) {
  // 请求模型API
  let finalResponse = await fetch(endpointUrl, {
    method: "GET",
    // ...省略代码
  });
  let jsonFinalResponse = await finalResponse.json();
  
  if (jsonFinalResponse.status === "succeeded") {
    // 模型返回图片成功
    restoredImage = jsonFinalResponse.output;
  } else if (jsonFinalResponse.status === "failed") {
    // 模型返回图片失败
    break;
  } else {
    // 模型还未返回图片，1s后轮询
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
```

### 总结

可以发现，所有基础服务均有现成产品可供使用，这极大加快了前端的开发效率，降低了开发成本。

作者运行这个应用的成本是多少呢？其中：

- 图片存储使用的是 [upload.io](https://upload.io/pricing) 提供的存储服务。这里作者使用的是35刀/月的基础付费版本，每月有50GB的上传空间
- `Redis`云服务考虑到仅用来做接口调用频率限制，使用免费版就好
- 整个应用使用`Vercel`部署，`Vercel Pro`每月20刀
- 20w`UV`的模型`API`调用费用，大概是900刀

对于想构建自己的`AI`应用的朋友，可以参考本文的实现与成本，行动起来吧。
