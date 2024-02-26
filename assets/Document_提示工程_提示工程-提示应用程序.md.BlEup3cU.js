import{_ as s,c as n,o as a,a4 as e}from"./chunks/framework.DBIahkuf.js";const u=JSON.parse('{"title":"提示工程-提示应用程序","description":"","frontmatter":{},"headers":[],"relativePath":"Document/提示工程/提示工程-提示应用程序.md","filePath":"Document/提示工程/提示工程-提示应用程序.md","lastUpdated":1689751952000}'),l={name:"Document/提示工程/提示工程-提示应用程序.md"},p=e(`<h1 id="提示工程-提示应用程序" tabindex="-1">提示工程-提示应用程序 <a class="header-anchor" href="#提示工程-提示应用程序" aria-label="Permalink to &quot;提示工程-提示应用程序&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>随着ChatGPT的大火，提示工程在大模型中的重要性不言而喻，本文参考国外<a href="https://github.com/dair-ai/Prompt-Engineering-Guide" target="_blank" rel="noreferrer">Prompt Engineering Guide</a>完成国内中文版本的《提示工程指南》，希望能够和大家一起交流，分享及发现提示工程的美妙之处。文章所有内容可以在<a href="https://github.com/shawshany/ChatGPT_Project/tree/main/ChatGPT_Prompt_Chinese" target="_blank" rel="noreferrer">ChatGPT_Prompt_Chinese</a>中找到。</p><p>在<a href="https://xiaosheng.blog.csdn.net/article/details/129327485" target="_blank" rel="noreferrer">之前的指南</a>中，我们介绍并给出了Prompt的高级示例。</p><p>在本指南中，我们将介绍一些高级和有趣的方式，我们可以使用提示工程来执行有用和更高级的任务。</p><p>需要注意的是，在本章节我们将会引入ChatGPT的API，进行一定量的工程实践。</p><hr><h2 id="一、数据生成" tabindex="-1">一、数据生成 <a class="header-anchor" href="#一、数据生成" aria-label="Permalink to &quot;一、数据生成&quot;">​</a></h2><p>LLM 具有生成文本的强大能力。使用有效的提示策略可以引导模型产生更好、更一致、更真实的响应。 LLM 还可以特别用于生成数据，这对于运行各种实验非常有用。例如，我们可以使用它来为情感分类器生成快速样本，如下所示：</p><p><em>Prompt:</em></p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">为情感分析生成</span><span style="color:#D19A66;"> 10</span><span style="color:#98C379;"> 个样本。样本分为正面和负面两类。生成</span><span style="color:#D19A66;"> 2</span><span style="color:#98C379;"> 个负面样本和</span><span style="color:#D19A66;"> 8</span><span style="color:#98C379;"> 个正面样本。使用以下格式为样本编写问题和答案：</span></span>
<span class="line"><span style="color:#61AFEF;">问题：&lt;句子&gt;</span></span>
<span class="line"><span style="color:#61AFEF;">答案：&lt;情感&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><em>Output:</em></p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">问题：这家餐厅的服务员态度很恶劣，让人感到非常不舒服。</span></span>
<span class="line"><span style="color:#61AFEF;">答案：负面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">问题：我最喜欢的歌手今晚开演唱会了，我太兴奋了！</span></span>
<span class="line"><span style="color:#61AFEF;">答案：正面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">问题：我刚刚丢了钱包，里面有我所有的信用卡和现金，我感到非常沮丧。</span></span>
<span class="line"><span style="color:#61AFEF;">答案：负面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">问题：今天天气真是太好了，阳光明媚，心情愉悦。</span></span>
<span class="line"><span style="color:#61AFEF;">答案：正面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">问题：这本小说真是太好看了，我一口气读完了整本书。</span></span>
<span class="line"><span style="color:#61AFEF;">答案：正面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">问题：我的手机掉进水里了，无法正常工作了，我感到非常烦恼。</span></span>
<span class="line"><span style="color:#61AFEF;">答案：负面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">问题：我的朋友们今天都来我家玩，我们一起吃了美食，玩了好几个小时，我感到非常愉快。</span></span>
<span class="line"><span style="color:#61AFEF;">答案：正面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">问题：我被一辆出租车撞了，虽然没有受伤，但是我的车被撞坏了，我感到很不开心。</span></span>
<span class="line"><span style="color:#61AFEF;">答案：负面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">问题：我终于找到了一份满意的工作，薪水还不错，我感到非常开心。</span></span>
<span class="line"><span style="color:#61AFEF;">答案：正面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">问题：我的狗狗生了一窝可爱的小狗，它们都很健康，我感到非常高兴。</span></span>
<span class="line"><span style="color:#61AFEF;">答案：正面</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>这非常有用。实际上，我们在指南的另一个部分中使用此示例进行了不同的测试。</p><h2 id="二、pal-program-aided-language-models-code-as-reasoning" tabindex="-1">二、PAL (Program-Aided Language Models): Code as Reasoning <a class="header-anchor" href="#二、pal-program-aided-language-models-code-as-reasoning" aria-label="Permalink to &quot;二、PAL (Program-Aided Language Models): Code as Reasoning&quot;">​</a></h2><p><a href="https://arxiv.org/abs/2211.10435" target="_blank" rel="noreferrer">Gao et al., (2022)</a> 该方法使用LLMs读取自然语言问题并生成程序作为中间推理步骤。称为程序辅助语言模型(PAL)，它与链式思维（COT）提示不同，因为它不是使用自由形式的文本来获取解决方案，而是将解决方案步骤卸载到程序运行时，如 Python 解释器。 <img src="https://img-blog.csdnimg.cn/b7c93000dbf6449b99737a64ea5b4013.png" alt="在这里插入图片描述"> 让我们使用 LangChain 和 OpenAI GPT-3 来看一个示例。我们有兴趣开发一个简单的应用程序，该应用程序能够解释所提出的问题并通过利用 Python 解释器提供答案。</p><p>具体而言，我们有兴趣创建一个功能，允许使用 LLM 来回答需要日期理解的问题。我们将向 LLM 提供一个提示，其中包含一些示例，这些示例是从<a href="https://github.com/reasoning-machines/pal/blob/main/pal/prompt/date_understanding_prompt.py" target="_blank" rel="noreferrer">以下内容</a>采用的：</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> openai</span></span>
<span class="line"><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> datetime </span><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> datetime</span></span>
<span class="line"><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> dateutil.relativedelta </span><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> relativedelta</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> os</span></span>
<span class="line"><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> langchain.llms </span><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> OpenAI</span></span>
<span class="line"><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> dotenv </span><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> load_dotenv</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>让我们首先配置一些东西：</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">load_dotenv</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># API configuration</span></span>
<span class="line"><span style="color:#ABB2BF;">openai.api_key </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> os.</span><span style="color:#61AFEF;">getenv</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;OPENAI_API_KEY&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># for LangChain</span></span>
<span class="line"><span style="color:#ABB2BF;">os.environ[</span><span style="color:#98C379;">&quot;OPENAI_API_KEY&quot;</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> os.</span><span style="color:#61AFEF;">getenv</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;OPENAI_API_KEY&quot;</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>设置模型实例：</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">question </span><span style="color:#56B6C2;">=</span><span style="color:#98C379;"> &quot;Today is 27 February 2023. I was born exactly 25 years ago. What is the date I was born in MM/DD/YYYY?&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">DATE_UNDERSTANDING_PROMPT</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;"># Q: 2015 is coming in 36 hours. What is the date one week from today in MM/DD/YYYY?</span></span>
<span class="line"><span style="color:#98C379;"># If 2015 is coming in 36 hours, then today is 36 hours before.</span></span>
<span class="line"><span style="color:#98C379;">today = datetime(2015, 1, 1) - relativedelta(hours=36)</span></span>
<span class="line"><span style="color:#98C379;"># One week from today,</span></span>
<span class="line"><span style="color:#98C379;">one_week_from_today = today + relativedelta(weeks=1)</span></span>
<span class="line"><span style="color:#98C379;"># The answer formatted with %m/</span><span style="color:#D19A66;">%d</span><span style="color:#98C379;">/%Y is</span></span>
<span class="line"><span style="color:#98C379;">one_week_from_today.strftime(&#39;%m/</span><span style="color:#D19A66;">%d</span><span style="color:#98C379;">/%Y&#39;)</span></span>
<span class="line"><span style="color:#98C379;"># Q: The first day of 2019 is a Tuesday, and today is the first Monday of 2019. What is the date today in MM/DD/YYYY?</span></span>
<span class="line"><span style="color:#98C379;"># If the first day of 2019 is a Tuesday, and today is the first Monday of 2019, then today is 6 days later.</span></span>
<span class="line"><span style="color:#98C379;">today = datetime(2019, 1, 1) + relativedelta(days=6)</span></span>
<span class="line"><span style="color:#98C379;"># The answer formatted with %m/</span><span style="color:#D19A66;">%d</span><span style="color:#98C379;">/%Y is</span></span>
<span class="line"><span style="color:#98C379;">today.strftime(&#39;%m/</span><span style="color:#D19A66;">%d</span><span style="color:#98C379;">/%Y&#39;)</span></span>
<span class="line"><span style="color:#98C379;"># Q: The concert was scheduled to be on 06/01/1943, but was delayed by one day to today. What is the date 10 days ago in MM/DD/YYYY?</span></span>
<span class="line"><span style="color:#98C379;"># If the concert was scheduled to be on 06/01/1943, but was delayed by one day to today, then today is one day later.</span></span>
<span class="line"><span style="color:#98C379;">today = datetime(1943, 6, 1) + relativedelta(days=1)</span></span>
<span class="line"><span style="color:#98C379;"># 10 days ago,</span></span>
<span class="line"><span style="color:#98C379;">ten_days_ago = today - relativedelta(days=10)</span></span>
<span class="line"><span style="color:#98C379;"># The answer formatted with %m/</span><span style="color:#D19A66;">%d</span><span style="color:#98C379;">/%Y is</span></span>
<span class="line"><span style="color:#98C379;">ten_days_ago.strftime(&#39;%m/</span><span style="color:#D19A66;">%d</span><span style="color:#98C379;">/%Y&#39;)</span></span>
<span class="line"><span style="color:#98C379;"># Q: It is 4/19/1969 today. What is the date 24 hours later in MM/DD/YYYY?</span></span>
<span class="line"><span style="color:#98C379;"># It is 4/19/1969 today.</span></span>
<span class="line"><span style="color:#98C379;">today = datetime(1969, 4, 19)</span></span>
<span class="line"><span style="color:#98C379;"># 24 hours later,</span></span>
<span class="line"><span style="color:#98C379;">later = today + relativedelta(hours=24)</span></span>
<span class="line"><span style="color:#98C379;"># The answer formatted with %m/</span><span style="color:#D19A66;">%d</span><span style="color:#98C379;">/%Y is</span></span>
<span class="line"><span style="color:#98C379;">today.strftime(&#39;%m/</span><span style="color:#D19A66;">%d</span><span style="color:#98C379;">/%Y&#39;)</span></span>
<span class="line"><span style="color:#98C379;"># Q: Jane thought today is 3/11/2002, but today is in fact Mar 12, which is 1 day later. What is the date 24 hours later in MM/DD/YYYY?</span></span>
<span class="line"><span style="color:#98C379;"># If Jane thought today is 3/11/2002, but today is in fact Mar 12, then today is 3/1/2002.</span></span>
<span class="line"><span style="color:#98C379;">today = datetime(2002, 3, 12)</span></span>
<span class="line"><span style="color:#98C379;"># 24 hours later,</span></span>
<span class="line"><span style="color:#98C379;">later = today + relativedelta(hours=24)</span></span>
<span class="line"><span style="color:#98C379;"># The answer formatted with %m/</span><span style="color:#D19A66;">%d</span><span style="color:#98C379;">/%Y is</span></span>
<span class="line"><span style="color:#98C379;">later.strftime(&#39;%m/</span><span style="color:#D19A66;">%d</span><span style="color:#98C379;">/%Y&#39;)</span></span>
<span class="line"><span style="color:#98C379;"># Q: Jane was born on the last day of Feburary in 2001. Today is her 16-year-old birthday. What is the date yesterday in MM/DD/YYYY?</span></span>
<span class="line"><span style="color:#98C379;"># If Jane was born on the last day of Feburary in 2001 and today is her 16-year-old birthday, then today is 16 years later.</span></span>
<span class="line"><span style="color:#98C379;">today = datetime(2001, 2, 28) + relativedelta(years=16)</span></span>
<span class="line"><span style="color:#98C379;"># Yesterday,</span></span>
<span class="line"><span style="color:#98C379;">yesterday = today - relativedelta(days=1)</span></span>
<span class="line"><span style="color:#98C379;"># The answer formatted with %m/</span><span style="color:#D19A66;">%d</span><span style="color:#98C379;">/%Y is</span></span>
<span class="line"><span style="color:#98C379;">yesterday.strftime(&#39;%m/</span><span style="color:#D19A66;">%d</span><span style="color:#98C379;">/%Y&#39;)</span></span>
<span class="line"><span style="color:#98C379;"># Q: </span><span style="color:#D19A66;">{question}</span></span>
<span class="line"><span style="color:#98C379;">&quot;&quot;&quot;</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">strip</span><span style="color:#ABB2BF;">() </span><span style="color:#56B6C2;">+</span><span style="color:#98C379;"> &#39;</span><span style="color:#56B6C2;">\\n</span><span style="color:#98C379;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">llm_out </span><span style="color:#56B6C2;">=</span><span style="color:#61AFEF;"> llm</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">DATE_UNDERSTANDING_PROMPT</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">format</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">question</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">question))</span></span>
<span class="line"><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(llm_out)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#56B6C2;">exec</span><span style="color:#ABB2BF;">(llm_out)</span></span>
<span class="line"><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(born)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这将输出以下内容: <code>02/27/1998</code></p><hr><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>在本指南中，我们主要介绍了一些高级和有趣的方法，我们可以使用提示工程来执行有用和更高级的任务例如：生成数据、作为推理的代码</p>`,28),o=[p];function r(t,c,i,y,d,b){return a(),n("div",null,o)}const h=s(l,[["render",r]]);export{u as __pageData,h as default};
