# Stable Diffusion版本和资讯

## SDXL

2023年7月8号，Stability AI 把他们的 SDXL 给开源了，开源的主要原因是因为他们这个模型不小心泄露出去了。

SDXL 到底是什么

[Stability](https://stability.ai/) AI发布的一个新的模型。它这个架构可以很直接在[Stability的论文](https://arxiv.org/pdf/2307.01952.pdf)中看到。如下： ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe8bb2f5c3db419ab43d3e7d6de4c25f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp) 它其实是两个模型

- Base模型

> 这个Base模型就是用来生成词语生成图片的

- Refiner模型

> 这个refiner就是一个图片生成图片的，相当于是对生成图片进行一个优化

那为什么说这个SDXL是一个革命型的产品呢？我们来看一下它生成的图片： ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/063739a1f47b4a048296bc558efb07b0~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

以上都是SDXL生成的图片，相比于SD1.5和SD2.1来说，SDXL生成的图片质量肉眼可见的好了很多。

并且它整个生成图片的感觉是不是和Midjourney很相似。从以上这些可以很清楚的感知到`Stability AI `想打败的一定是`Midjoureny`，对标或者想要干掉的这个公司就是Midjourney。

虽然它把这个开源了，但是它也没有写的特别详细，它就是写了一种概念性的东西，然后放了很多它的结果在这个地方。 如果我们仔细去看他的这个结果的话呢，你会发现它在这方做的对比效果，主要是后两个图片 

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/418176031da04628ac8039ca9ea48627~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)



就是Midjourney 5.2和这个SDXL的对比，从结果可以看出几乎上来说SDXL已经是不相上下了。

其实你仔细用通用化的Mid Journey和SDXL去做这样的对比的时候，你就会发现SDXL生成图片还挺好看的。所以我们也可以看到这个Stability AI它的这个野心。 

但最关键的最核心的一个问题是什么呢？是Stability AI这个公司，它不小心把它的模型给泄露了。

你如果去看它的官网。在这个[clipdrop](https://clipdrop.co/)，在这样的一个网站上,它其实已经把这个SDXL给上线了。 

我们可以在这尝试一下，比如说我要输入一个`a cat` ![6104d2784d4ac2ab303f62637eec989.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c6208dfe3f549aa9cc3bf88d43be1eb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp) 我们可以看到SDXL这个生成图片的效果肯定是比这个SD1.5要好很多的，这个是毋庸置疑的。

那最核心的一个点就是前两天前，他这个模型被泄露了，泄露了之后呢。

这个StabilityAI他就果断的跟这个Meta一样，果断的把他的模型给开源了。

其实最重要的是他第二个模型`Refiner模型`。为什么他会有一个Base模型有个Refine模型呢？

如果你用过Stable Diffusion你会发现当我去画一幅画的时候尤其是画人像的时候为什么它会有一个Base模型有个Refine模型这个其实很容易理解。

当我去画一幅画的时候尤其是画人像的时候，我想把整幅画给画出来可能会导致一个问题就是人的脸会特别容易崩掉。

人脸崩掉的最大的原因：因为我是对整个画面进行画，然后我如果人脸很小的话，其实人脸的细节会很难就是变成正确了。

那这个时候呢，我画完了这个base的以后，我会对图片进行一次refine，这个时候的refine就是针对一些细节去进行改动，那改动的这个时候你会发现就是它会把人脸恢复的很好。

这个其实也是我们在应用stable diffusion，会发现我们有很多很多步骤，就是生成完成之后，再次做一次生成，然后能够比较好的把人脸进行一个修复。

它其实使用了这样的一个技术手段。 但是目前来讲它是不可以进行商用的。并且个人觉得短期内他并不会真正去商用但是这个东西他强大的点是在于什么呢？它可以激发很多人去进行一个改造或者说去激发社区的想象力啊。就非常非常令人兴奋

当然它还是会有些问题：就是会有些局限性，在这个复录1里面它就讲了，就是现在的这个SDXL的一个局限性。它对这个手指的处理对一些复杂的这种关系的 局限性它对这个手指的处理，对一些复杂的这种关系的处理还不是特别的好。

### 资料

- SDXL论文：[arxiv.org/pdf/2307.01…](https://arxiv.org/pdf/2307.01952.pdf)
- SDXL体验地址：[clipdrop.co/stable-diff…](https://clipdrop.co/stable-diffusion)
- SDXL Base模型：[huggingface.co/stabilityai…](https://huggingface.co/stabilityai/stable-diffusion-xl-base-0.9)
- SDXL Refiner模型：[huggingface.co/stabilityai…](https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-0.9)

## 体验最新版的Stable Diffusion SDXL1.0模型

2023年7月14日，SDXL公司在discord网址中部署了10个机器人，Stable Foundation，加入服务器即可，体验最新版的Stable Diffusion SDXL1.0模型

