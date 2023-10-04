import{_ as n,o as s,c as a,e as t}from"./app-566fa296.js";const p={},e=t(`<h1 id="字典选项" tabindex="-1"><a class="header-anchor" href="#字典选项" aria-hidden="true">#</a> 字典选项</h1><h2 id="dictoptions" tabindex="-1"><a class="header-anchor" href="#dictoptions" aria-hidden="true">#</a> DictOptions</h2><p>数据字典选项</p><ul><li>详细信息</li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认值</th></tr></thead><tbody><tr><td>request</td><td>字典数据请求，function(dict: DictMeta): Promise ¦ Array</td><td>function</td><td>是</td><td>metas[&#39;*&#39;].request</td></tr><tr><td>responseConverter</td><td>字典数据转换器</td><td>function</td><td>是</td><td>metas[&#39;*&#39;].responseConverter</td></tr><tr><td>labelField</td><td>“字典标签”字段名称</td><td>function</td><td>是</td><td>label</td></tr><tr><td>valueField</td><td>“字典值”字段名称</td><td>function</td><td>是</td><td>value</td></tr><tr><td>lazy</td><td>懒加载，开启后字典初始化后，不会立即加载数据，需调用load方法触发加载</td><td>boolean</td><td>是</td><td>false</td></tr><tr><td>lookup</td><td>向上查找，开启后字典数据加载时，会优先从祖先组件中查找同类型字典</td><td>boolean</td><td>是</td><td>false</td></tr></tbody></table><ul><li>示例</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> pluginOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">metas</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;lang&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">dictMeta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;java&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// get data from remote server</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">responseConverter</span><span class="token punctuation">(</span><span class="token parameter">response<span class="token punctuation">,</span> dictMeta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// you can use &quot;VueDataDict.convertData({ ... }, dictMeta)&quot; to convert Object to DictData</span>
        <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> VueDataDict<span class="token punctuation">.</span><span class="token function">convertData</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> dictMeta<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">labelField</span><span class="token operator">:</span> <span class="token string">&#39;label&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">valueField</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lazy</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lookup</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueDataDict<span class="token punctuation">,</span> pluginOptions<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function l(c,i){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","dictOptions.html.vue"]]);export{u as default};