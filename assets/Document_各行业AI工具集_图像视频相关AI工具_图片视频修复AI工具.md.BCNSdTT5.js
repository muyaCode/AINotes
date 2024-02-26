import{_ as s,c as a,o as n,a4 as e}from"./chunks/framework.DBIahkuf.js";const m=JSON.parse('{"title":"图片视频修复AI工具","description":"","frontmatter":{},"headers":[],"relativePath":"Document/各行业AI工具集/图像视频相关AI工具/图片视频修复AI工具.md","filePath":"Document/各行业AI工具集/图像视频相关AI工具/图片视频修复AI工具.md","lastUpdated":1708941732000}'),l={name:"Document/各行业AI工具集/图像视频相关AI工具/图片视频修复AI工具.md"},p=e(`<h1 id="图片视频修复ai工具" tabindex="-1">图片视频修复AI工具 <a class="header-anchor" href="#图片视频修复ai工具" aria-label="Permalink to &quot;图片视频修复AI工具&quot;">​</a></h1><p><strong>AI老照片上色网站</strong>，网址连接：<a href="https://palette.fm/" target="_blank" rel="noreferrer">https://palette.fm/</a></p><p>延伸小技巧：下载普通的图片后，如果想照片无损放大，可以通过这个在线工具完成。</p><p>AI人工智能图片放大：<a href="https://bigjpg.com/" target="_blank" rel="noreferrer">https://bigjpg.com/</a></p><p>图片无损放大在线工具（在线放大2倍，4倍，8倍和16倍，但是8倍和16倍的需要升级会员）：<a href="https://bigjpg.com/" target="_blank" rel="noreferrer">https://bigjpg.com/</a></p><h2 id="🚧-『lama-cleaner』开箱即用的-ai-图像擦除-补全工具-还能可以轻松去水印" tabindex="-1">🚧 『Lama Cleaner』开箱即用的 AI 图像擦除/补全工具，还能可以轻松去水印 <a class="header-anchor" href="#🚧-『lama-cleaner』开箱即用的-ai-图像擦除-补全工具-还能可以轻松去水印" aria-label="Permalink to &quot;🚧 『Lama Cleaner』开箱即用的 AI 图像擦除/补全工具，还能可以轻松去水印&quot;">​</a></h2><p>开源地址：<a href="https://github.com/Sanster/lama-cleaner" target="_blank" rel="noreferrer">https://github.com/Sanster/lama-cleaner</a></p><p>官网：<a href="https://lama-cleaner-docs.vercel.app/" target="_blank" rel="noreferrer">https://lama-cleaner-docs.vercel.app/</a></p><p>Lama Cleaner 是由 SOTA AI 模型提供支持的图像修复工具，可以从图片中擦除任何元素，修复旧照片，或者替换图片上的某些内容。以下为几张使用示例。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/40c575cd05454f7597229842dd182501~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="img"></p><h2 id="【codeformer】最强ai图片-视频去码-图片高清修复-免费开源" tabindex="-1">【CodeFormer】最强AI图片/视频去码，图片高清修复，免费开源“ <a class="header-anchor" href="#【codeformer】最强ai图片-视频去码-图片高清修复-免费开源" aria-label="Permalink to &quot;【CodeFormer】最强AI图片/视频去码，图片高清修复，免费开源“&quot;">​</a></h2><ul><li>在线修复地址：<a href="https://huggingface.co/spaces/sczhou/CodeFormer" target="_blank" rel="noreferrer">https://huggingface.co/spaces/sczhou/CodeFormer</a></li><li>开源地址：<a href="https://github.com/sczhou/CodeFormer" target="_blank" rel="noreferrer">https://github.com/sczhou/CodeFormer</a></li></ul><h2 id="『restorephotos』使用-ai-恢复旧-模糊的脸部照片" tabindex="-1">『restorePhotos』使用 AI 恢复旧/模糊的脸部照片 <a class="header-anchor" href="#『restorephotos』使用-ai-恢复旧-模糊的脸部照片" aria-label="Permalink to &quot;『restorePhotos』使用 AI 恢复旧/模糊的脸部照片&quot;">​</a></h2><p><a href="https://github.com/Nutlope/restorePhotos" target="_blank" rel="noreferrer">github.com/Nutlope/res…</a></p><p>项目使用了机器学习模型 GFPGAN on Replica 来恢复脸部照片。照片上传后，将使用 Next.js API 路由通过此 机器学习模型发送照片，并返回恢复的照片。作者还提供了一个可以在线使用的网站：<a href="https://www.restorephotos.io/" target="_blank" rel="noreferrer">Face Photo Restorer (restorephotos.io)</a></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/21e0605d845249f0a7f339a6b7c8ecc1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="img"></p><p>整个应用的架构分为4部分：</p><ol><li>前端（<code>Next.js</code>）</li><li>图片存储服务</li><li><code>Next.js</code>服务端</li><li><code>AI API</code></li></ol><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ec8ea2933a84a0e930cd2d1f2827c91~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="img"></p><p>完整工作流程如下：</p><ol><li>用户在前端上传老照片</li><li>前端调用图片存储服务，返回图片存储地址给前端</li><li>前端将图片存储地址发送给后端</li><li>后端调用<code>AI API</code>处理图片</li><li><code>AI API</code>返回处理后的图片给后端，后端返回给前端</li><li>前端展示处理后的效果</li></ol><h3 id="前端部分" tabindex="-1">前端部分 <a class="header-anchor" href="#前端部分" aria-label="Permalink to &quot;前端部分&quot;">​</a></h3><p>整个前后端的实现使用<code>Next.js</code>，前端主要包括两部分：</p><ul><li>图片上传</li><li><code>AI</code>处理后的图片展示</li></ul><p>所有主要功能均使用开源库实现。其中，图片上传功能使用 <a href="https://www.npmjs.com/package/react-uploader" target="_blank" rel="noreferrer">react-uploader</a> 实现：</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">UploadDropzone</span></span>
<span class="line"><span style="color:#D19A66;">  uploader</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">{uploader}</span></span>
<span class="line"><span style="color:#D19A66;">  options</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">{options}</span></span>
<span class="line"><span style="color:#D19A66;">  width</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;670px&quot;</span></span>
<span class="line"><span style="color:#D19A66;">  height</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;250px&quot;</span></span>
<span class="line"><span style="color:#D19A66;">  onUpdate</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">{(file)</span><span style="color:#FFFFFF;"> =</span><span style="color:#ABB2BF;">&gt; {</span></span>
<span class="line"><span style="color:#ABB2BF;">   // ...图片上传成功后的逻辑</span></span>
<span class="line"><span style="color:#ABB2BF;"> }}</span></span>
<span class="line"><span style="color:#ABB2BF;">/&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>处理后的图片展示效果使用 <a href="https://www.npmjs.com/package/react-compare-slider" target="_blank" rel="noreferrer">react-compare-slider</a>：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ecc4650920b74c15b6fd2fa548901e3a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="img"></p><blockquote><p>PS：这里用的是我曾祖父的老照片 ๑¯◡¯๑</p></blockquote><h3 id="后端部分" tabindex="-1">后端部分 <a class="header-anchor" href="#后端部分" aria-label="Permalink to &quot;后端部分&quot;">​</a></h3><p>后端核心逻辑包括两部分：</p><ol><li>用<code>Redis</code>做接口调用频率限制</li></ol><p><code>Redis</code>使用<a href="https://docs.upstash.com/redis/overall/pricing" target="_blank" rel="noreferrer">@upstash-redis</a>，这是一款基于<code>HTTP</code>的<code>Redis</code>客户端。在线创建<code>Redis</code>数据库后，我们可以在服务端通过<code>HTTP</code>请求的方式调用它。</p><ol><li>用<code>replicate</code>提供的<code>swinir</code>模型处理图片</li></ol><p><code>replicate</code>是一家机器学习的云服务商，我们可以根据业务需要选择不同机器学习模型，比如：</p><ul><li>处理图片清晰度</li><li>破碎照片修复</li><li>文字转图片</li><li>...</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc650b46209c4d3daa89856318a4da05~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="img"></p><p>在<code>Next.js</code>服务端，我们通过<code>HTTP</code>的形式调用模型<code>API</code>：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 我们上传的图片地址</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> imageUrl</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> req</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">body</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">imageUrl</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 请求模型接口</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> startResponse</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> await</span><span style="color:#61AFEF;"> fetch</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;https://api.replicate.com/v1/predictions&#39;</span><span style="color:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#E06C75;"> method</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;POST&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> // ...省略代码</span></span>
<span class="line"><span style="color:#E06C75;"> body</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">JSON</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">stringify</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 我们需要的模型对应的版本</span></span>
<span class="line"><span style="color:#E06C75;">  version</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;9283608cc6b7be6b65a8e44983db012355fde4132009bf99d976b2f0896856a3&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">  input</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">img</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">imageUrl</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;v1.4&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">scale</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#ABB2BF;"> })</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>值得注意的是，模型计算需要时间，所以在服务端，我们每秒轮询一次结果，如果模型返回处理后的图片，我们就将图片返回给前端：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 保存模型处理后的结果</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#E06C75;"> restoredImage</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | null </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> null</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#E06C75;">restoredImage</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  // 请求模型API</span></span>
<span class="line"><span style="color:#C678DD;">  let</span><span style="color:#E06C75;"> finalResponse</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> await</span><span style="color:#61AFEF;"> fetch</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">endpointUrl</span><span style="color:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#E06C75;">    method</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;GET&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // ...省略代码</span></span>
<span class="line"><span style="color:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#C678DD;">  let</span><span style="color:#E06C75;"> jsonFinalResponse</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> await</span><span style="color:#E5C07B;"> finalResponse</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">json</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#C678DD;">  if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">jsonFinalResponse</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">status</span><span style="color:#56B6C2;"> ===</span><span style="color:#98C379;"> &quot;succeeded&quot;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 模型返回图片成功</span></span>
<span class="line"><span style="color:#E06C75;">    restoredImage</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> jsonFinalResponse</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">output</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  } </span><span style="color:#C678DD;">else</span><span style="color:#C678DD;"> if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">jsonFinalResponse</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">status</span><span style="color:#56B6C2;"> ===</span><span style="color:#98C379;"> &quot;failed&quot;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 模型返回图片失败</span></span>
<span class="line"><span style="color:#C678DD;">    break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 模型还未返回图片，1s后轮询</span></span>
<span class="line"><span style="color:#C678DD;">    await</span><span style="color:#C678DD;"> new</span><span style="color:#E5C07B;"> Promise</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">resolve</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#61AFEF;"> setTimeout</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">resolve</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1000</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>可以发现，所有基础服务均有现成产品可供使用，这极大加快了前端的开发效率，降低了开发成本。</p><p>作者运行这个应用的成本是多少呢？其中：</p><ul><li>图片存储使用的是 <a href="https://upload.io/pricing" target="_blank" rel="noreferrer">upload.io</a> 提供的存储服务。这里作者使用的是35刀/月的基础付费版本，每月有50GB的上传空间</li><li><code>Redis</code>云服务考虑到仅用来做接口调用频率限制，使用免费版就好</li><li>整个应用使用<code>Vercel</code>部署，<code>Vercel Pro</code>每月20刀</li><li>20w<code>UV</code>的模型<code>API</code>调用费用，大概是900刀</li></ul><p>对于想构建自己的<code>AI</code>应用的朋友，可以参考本文的实现与成本，行动起来吧。</p>`,46),o=[p];function r(c,t,i,B,y,d){return n(),a("div",null,o)}const u=s(l,[["render",r]]);export{m as __pageData,u as default};
