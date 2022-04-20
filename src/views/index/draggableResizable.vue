<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h2>vue 可拖拽可缩放 vue-draggable-resizable 组件常用总结</h2>
                <ul class="section-subhead">
                    <li>1.参考网址： <el-link href="https://github.com/mauricius/vue-draggable-resizable" type="primary" target="_blank">https://github.com/mauricius/vue-draggable-resizable</el-link></li>
                    <li>1.参考网址： <el-link href="https://blog.csdn.net/dongguan_123/article/details/102576308" type="primary" target="_blank">https://blog.csdn.net/dongguan_123/article/details/102576308</el-link></li>
                    <li>1.参考网址： <el-link href="https://www.cnblogs.com/yycc11/p/9565915.html" type="primary" target="_blank">https://www.cnblogs.com/yycc11/p/9565915.html</el-link></li>
                    <li>1.参考网址： <el-link href="https://www.cnblogs.com/wangweizhang/p/11241788.html" type="primary" target="_blank">https://www.cnblogs.com/wangweizhang/p/11241788.html</el-link></li>
                </ul>

                <div class="helloword">
                    <div class="text-event">
                        <vue-draggable-resizable
                            :w="150"
                            :h="150"
                            :x="50"
                            :y="50"
                            :min-width="50"
                            :min-height="50"
                            :parent="true"
                            :grid="[10,10]"
                            class-name="dragging1"
                            @dragging="onDrag"
                            @resizing="onResize"
                        >
                            <p>
                                你好！ 我是一个灵活的组件。 你可以拖我四处，你可以调整我的大小。
                                <br />
                                X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}
                            </p>
                        </vue-draggable-resizable>
                    </div>

                    <!-- 相对于class等于什么的标记拖拽 注意指定 parent -->
                    <div class="p-event">
                        <vue-draggable-resizable class="dragging2" :resizable="false" parent drag-handle=".drag-handle">
                            <h3 class="drag-handle">您只可以在这个范围内拖拽我</h3>
                            <p>You can drag me around and resize me as you wish.</p>
                        </vue-draggable-resizable>
                    </div>
                </div>
            </section>

            <section class="section">
                <h2>属性、事件</h2>
                <br>
                <br>
                <article class="markdown-body entry-content container-lg" itemprop="text">
                    <hr>
                    <h2>Install and basic usage</h2>
                    <div class="highlight highlight-source-shell">
                        <pre>$ npm install --save vue-draggable-resizable</pre>
                    </div>
                    <p>Register the component</p>
                    <div class="highlight highlight-source-js">
                        <pre><span class="pl-k">import</span> <span class="pl-v">Vue</span> <span class="pl-k">from</span> <span class="pl-s">'vue'</span>
                    <span class="pl-k">import</span> <span class="pl-v">VueDraggableResizable</span> <span class="pl-k">from</span> <span class="pl-s">'vue-draggable-resizable'</span>

                    <span class="pl-c">// optionally import default styles</span>
                    <span class="pl-k">import</span> <span class="pl-s">'vue-draggable-resizable/dist/VueDraggableResizable.css'</span>

                    <span class="pl-v">Vue</span><span class="pl-kos">.</span><span class="pl-en">component</span><span class="pl-kos">(</span><span class="pl-s">'vue-draggable-resizable'</span><span class="pl-kos">,</span> <span class="pl-v">VueDraggableResizable</span><span class="pl-kos">)</span></pre>
                        </div>
                        <p>You may now use the component in your markup</p>
                        <div class="highlight highlight-text-html-vue">
                            <pre>&lt;<span class="pl-ent">template</span>&gt;
                      &lt;<span class="pl-ent">div</span> <span class="pl-e">style</span>=<span class="pl-s"><span class="pl-pds">"</span>height: 500px; width: 500px; border: 1px solid red; position: relative;<span class="pl-pds">"</span></span>&gt;
                        &lt;<span class="pl-ent">vue-draggable-resizable</span> :<span class="pl-e">w</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">100</span><span class="pl-pds">"</span></span> :<span class="pl-e">h</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">100</span><span class="pl-pds">"</span></span> @<span class="pl-e">dragging</span>=<span class="pl-s1"><span class="pl-pds">"</span>onDrag<span class="pl-pds">"</span></span> @<span class="pl-e">resizing</span>=<span class="pl-s1"><span class="pl-pds">"</span>onResize<span class="pl-pds">"</span></span> :<span class="pl-e">parent</span>=<span class="pl-s1"><span class="pl-pds">"</span><span class="pl-c1">true</span><span class="pl-pds">"</span></span>&gt;
                          &lt;<span class="pl-ent">p</span>&gt;Hello! I'm a flexible component. You can drag me around and you can resize me.&lt;<span class="pl-ent">br</span>&gt;
                          X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}&lt;/<span class="pl-ent">p</span>&gt;
                        &lt;/<span class="pl-ent">vue-draggable-resizable</span>&gt;
                      &lt;/<span class="pl-ent">div</span>&gt;
                    &lt;/<span class="pl-ent">template</span>&gt;

                    <span class="pl-s1">&lt;<span class="pl-ent">script</span>&gt;</span>
                    <span class="pl-s1"><span class="pl-k">import</span> <span class="pl-smi">VueDraggableResizable</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>vue-draggable-resizable<span class="pl-pds">'</span></span></span>
                    <span class="pl-s1"></span>
                    <span class="pl-s1"><span class="pl-k">export</span> <span class="pl-c1">default</span> {</span>
                    <span class="pl-s1">  <span class="pl-en">data</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</span>
                    <span class="pl-s1">    <span class="pl-k">return</span> {</span>
                    <span class="pl-s1">      width<span class="pl-k">:</span> <span class="pl-c1">0</span>,</span>
                    <span class="pl-s1">      height<span class="pl-k">:</span> <span class="pl-c1">0</span>,</span>
                    <span class="pl-s1">      x<span class="pl-k">:</span> <span class="pl-c1">0</span>,</span>
                    <span class="pl-s1">      y<span class="pl-k">:</span> <span class="pl-c1">0</span></span>
                    <span class="pl-s1">    }</span>
                    <span class="pl-s1">  },</span>
                    <span class="pl-s1">  methods<span class="pl-k">:</span> {</span>
                    <span class="pl-s1">    <span class="pl-en">onResize</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">x</span>, <span class="pl-smi">y</span>, <span class="pl-smi">width</span>, <span class="pl-smi">height</span>) {</span>
                    <span class="pl-s1">      <span class="pl-c1">this</span>.<span class="pl-c1">x</span> <span class="pl-k">=</span> x</span>
                    <span class="pl-s1">      <span class="pl-c1">this</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> y</span>
                    <span class="pl-s1">      <span class="pl-c1">this</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> width</span>
                    <span class="pl-s1">      <span class="pl-c1">this</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> height</span>
                    <span class="pl-s1">    },</span>
                    <span class="pl-s1">    <span class="pl-en">onDrag</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">x</span>, <span class="pl-smi">y</span>) {</span>
                    <span class="pl-s1">      <span class="pl-c1">this</span>.<span class="pl-c1">x</span> <span class="pl-k">=</span> x</span>
                    <span class="pl-s1">      <span class="pl-c1">this</span>.<span class="pl-c1">y</span> <span class="pl-k">=</span> y</span>
                    <span class="pl-s1">    }</span>
                    <span class="pl-s1">  }</span>
                    <span class="pl-s1">}</span>
                    <span class="pl-s1">&lt;/<span class="pl-ent">script</span>&gt;</span></pre>
                    </div>
                    <h3>Props</h3>
                    <h4>className</h4>
                    <p>Type: <code>String</code><br>
                        Required: <code>false</code><br>
                        Default: <code>vdr</code></p>
                    <p>Used to set the custom <code>class</code> of a draggable-resizable component.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">class-name</span>="<span class="pl-s">my-class</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>classNameDraggable</h4>
                    <p>Type: <code>String</code><br>
                        Required: <code>false</code><br>
                        Default: <code>draggable</code></p>
                    <p>Used to set the custom <code>class</code> of a draggable-resizable component when <code>draggable</code>
                        is enable.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">class-name-draggable</span>="<span class="pl-s">my-draggable-class</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>classNameResizable</h4>
                    <p>Type: <code>String</code><br>
                        Required: <code>false</code><br>
                        Default: <code>resizable</code></p>
                    <p>Used to set the custom <code>class</code> of a draggable-resizable component when <code>resizable</code>
                        is enable.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">class-name-resizable</span>="<span class="pl-s">my-resizable-class</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>classNameDragging</h4>
                    <p>Type: <code>String</code><br>
                        Required: <code>false</code><br>
                        Default: <code>dragging</code></p>
                    <p>Used to set the custom <code>class</code> of a draggable-resizable component when is dragging.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">class-name-dragging</span>="<span class="pl-s">my-dragging-class</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>classNameResizing</h4>
                    <p>Type: <code>String</code><br>
                        Required: <code>false</code><br>
                        Default: <code>resizing</code></p>
                    <p>Used to set the custom <code>class</code> of a draggable-resizable component when is resizing.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">class-name-resizing</span>="<span class="pl-s">my-resizing-class</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>classNameActive</h4>
                    <p>Type: <code>String</code><br>
                        Required: <code>false</code><br>
                        Default: <code>active</code></p>
                    <p>Used to set the custom <code>class</code> of a draggable-resizable component when is active.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">class-name-active</span>="<span class="pl-s">my-active-class</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>classNameHandle</h4>
                    <p>Type: <code>String</code><br>
                        Required: <code>false</code><br>
                        Default: <code>handle</code></p>
                    <p>Used to set the custom common <code>class</code> of each handle element. This way you can style each
                        handle
                        individually using the selector <code>&lt;your class&gt;-&lt;handle code&gt;</code>, where <code>handle
                            code</code>
                        identifies one of the handles provided by the <code>handle</code> prop.</p>
                    <p>So for example, this component:</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">class-name-handle</span>="<span class="pl-s">my-handle-class</span>"<span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">vue-draggable-resizable</span><span class="pl-kos">&gt;</span></pre>
                    </div>
                    <p>renders the following:</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">...</span><span class="pl-kos">&gt;</span>
                  <span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">my-handle-class my-handle-class-tl</span>"<span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span>
                  <span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">my-handle-class my-handle-class-tm</span>"<span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span>
                  <span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">my-handle-class my-handle-class-tr</span>"<span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span>
                  [...]
                    <span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>scale</h4>
                    <p>Type: <code>Number</code><br>
                        Required: <code>false</code><br>
                        Default: <code>1</code></p>
                    <p>The <code>scale</code> prop controls the scale property when the CSS 3 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale"
                            rel="nofollow">scale transformation</a> is applied to one of the parent elements. If not
                        provided the default value
                        is 1.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:scale</span>="<span class="pl-s">0.5</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>disableUserSelect</h4>
                    <p>Type: <code>Boolean</code><br>
                        Required: <code>false</code><br>
                        Default: <code>true</code></p>
                    <p>By default, the component adds the style declaration <code>'user-select:none'</code> to itself to
                        prevent text
                        selection during drag. You can disable this behaviour by setting this prop to <code>false</code>.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:disable-user-select</span>="<span class="pl-s">false</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>enableNativeDrag</h4>
                    <p>Type: <code>Boolean</code><br>
                        Required: <code>false</code><br>
                        Default: <code>false</code></p>
                    <p>By default, the browser's native drag and drop funcionality (usually used for images and some other
                        elements) is
                        disabled, as it may conflict with the one provided by the component. If you need, for whatever
                        reason, to have this
                        functionality back you can set this prop to <code>true</code>.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:enable-native-drag</span>="<span class="pl-s">true</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>active</h4>
                    <p>Type: <code>Boolean</code><br>
                        Required: <code>false</code><br>
                        Default: <code>false</code></p>
                    <p>Determines if the component should be active or not. The prop reacts to changes and also can be used
                        with the <code>sync</code><a href="https://vuejs.org/v2/guide/components.html#sync-Modifier" rel="nofollow">modifier</a>
                        to keep the state in
                        sync with the parent. You can use along with the <code>preventDeactivation</code> prop in order to
                        fully control the
                        active behavior from outside the component.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:active</span>="<span class="pl-s">true</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>preventDeactivation</h4>
                    <p>Type: <code>Boolean</code><br>
                        Required: <code>false</code><br>
                        Default: <code>false</code></p>
                    <p>Determines if the component should be deactivated when the user clicks/taps outside it.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:prevent-deactivation</span>="<span class="pl-s">true</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>draggable</h4>
                    <p>Type: <code>Boolean</code><br>
                        Required: <code>false</code><br>
                        Default: <code>true</code></p>
                    <p>Defines it the component should be draggable or not.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:draggable</span>="<span class="pl-s">false</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>resizable</h4>
                    <p>Type: <code>Boolean</code><br>
                        Required: <code>false</code><br>
                        Default: <code>true</code></p>
                    <p>Defines it the component should be resizable or not.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:resizable</span>="<span class="pl-s">false</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>w</h4>
                    <p>Type: <code>Number|String</code><br>
                        Required: <code>false</code><br>
                        Default: <code>200</code></p>
                    <p>Define the initial width of the element. It also supports <code>auto</code>, but when you start
                        resizing the value
                        will fallback to a number.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:w</span>="<span class="pl-s">200</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>h</h4>
                    <p>Type: <code>Number|String</code><br>
                        Required: <code>false</code><br>
                        Default: <code>200</code></p>
                    <p>Define the initial height of the element. It also supports <code>auto</code>, but when you start
                        resizing the value
                        will fallback to a number.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:h</span>="<span class="pl-s">200</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>minWidth</h4>
                    <p>Type: <code>Number</code><br>
                        Required: <code>false</code><br>
                        Default: <code>50</code></p>
                    <p>Define the minimal width of the element.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:min-width</span>="<span class="pl-s">50</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>minHeight</h4>
                    <p>Type: <code>Number</code><br>
                        Required: <code>false</code><br>
                        Default: <code>50</code></p>
                    <p>Define the minimal height of the element.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:min-height</span>="<span class="pl-s">50</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>maxWidth</h4>
                    <p>Type: <code>Number</code><br>
                        Required: <code>false</code><br>
                        Default: <code>null</code></p>
                    <p>Define the maximum width of the element.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:max-width</span>="<span class="pl-s">400</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>maxHeight</h4>
                    <p>Type: <code>Number</code><br>
                        Required: <code>false</code><br>
                        Default: <code>null</code></p>
                    <p>Define the maximum height of the element.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:max-height</span>="<span class="pl-s">50</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>x</h4>
                    <p>Type: <code>Number</code><br>
                        Required: <code>false</code><br>
                        Default: <code>0</code></p>
                    <p>Define the initial x position of the element.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:x</span>="<span class="pl-s">0</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>y</h4>
                    <p>Type: <code>Number</code><br>
                        Required: <code>false</code><br>
                        Default: <code>0</code></p>
                    <p>Define the initial y position of the element.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:y</span>="<span class="pl-s">0</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>z</h4>
                    <p>Type: <code>Number|String</code><br>
                        Required: <code>false</code><br>
                        Default: <code>auto</code></p>
                    <p>Define the zIndex of the element.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:z</span>="<span class="pl-s">999</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>handles</h4>
                    <p>Type: <code>Array</code><br>
                        Required: <code>false</code><br>
                        Default: <code>['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']</code></p>
                    <p>Define the array of handles to restrict the element resizing:</p>
                    <ul>
                        <li><code>tl</code> - Top left</li>
                        <li><code>tm</code> - Top middle</li>
                        <li><code>tr</code> - Top right</li>
                        <li><code>mr</code> - Middle right</li>
                        <li><code>br</code> - Bottom right</li>
                        <li><code>bm</code> - Bottom middle</li>
                        <li><code>bl</code> - Bottom left</li>
                        <li><code>ml</code> - Middle left</li>
                    </ul>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:handles</span>="<span class="pl-s">['tm','bm','ml','mr']</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>axis</h4>
                    <p>Type: <code>String</code><br>
                        Required: <code>false</code><br>
                        Default: <code>both</code></p>
                    <p>Define the axis on which the element is draggable. Available values are <code>x</code>, <code>y</code>
                        or <code>both</code>.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">axis</span>="<span class="pl-s">x</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>grid</h4>
                    <p>Type: <code>Array</code><br>
                        Required: <code>false</code><br>
                        Default: <code>[1,1]</code></p>
                    <p>Define the grid on which the element is snapped.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:grid</span>="<span class="pl-s">[1,1]</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>parent</h4>
                    <p>Type: <code>Boolean</code><br>
                        Required: <code>false</code><br>
                        Default: <code>false</code></p>
                    <p>Restricts the movement and the dimensions of the component to the parent.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:parent</span>="<span class="pl-s">true</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>dragHandle</h4>
                    <p>Type: <code>String</code><br>
                        Required: <code>false</code></p>
                    <p>Defines the selector that should be used to drag the component.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">drag-handle</span>="<span class="pl-s">.drag</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>dragCancel</h4>
                    <p>Type: <code>String</code><br>
                        Required: <code>false</code></p>
                    <p>Defines a selector that should be used to prevent drag initialization.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">drag-cancel</span>="<span class="pl-s">.drag</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>lockAspectRatio</h4>
                    <p>Type: <code>Boolean</code><br>
                        Required: <code>false</code><br>
                        Default: <code>false</code></p>
                    <p>The <code>lockAspectRatio</code> property is used to lock aspect ratio. This property doesn't play
                        well with <code>grid</code>,
                        so make sure to use only one at a time.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:lock-aspect-ratio</span>="<span class="pl-s">true</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>onDragStart</h4>
                    <p>Type: <code>Function</code><br>
                        Required: <code>false</code><br>
                        Default: <code>null</code></p>
                    <p>Called when dragging starts (element is clicked or touched). If <code>false</code> is returned by
                        any handler, the
                        action will cancel. You can use this function to prevent bubbling of events.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:onDragStart</span>="<span class="pl-s">onDragStartCallback</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>
                    <div class="highlight highlight-source-js">
                        <pre><span class="pl-k">function</span> <span class="pl-en">onDragStartCallback</span><span class="pl-kos">(</span><span class="pl-s1">ev</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
                   ...
                   <span class="pl-c">// return false; — for cancel</span>
                    <span class="pl-kos">}</span></pre>
                    </div>

                    <h4>onDrag</h4>
                    <p>Type: <code>Function</code><br>
                        Required: <code>false</code><br>
                        Default: <code>null</code></p>
                    <p>Called before the element is dragged. The function receives the next values of <code>x</code> and
                        <code>y</code>.
                        If <code>false</code> is returned by any handler, the action will cancel.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:onDrag</span>="<span class="pl-s">onDragCallback</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>
                    <div class="highlight highlight-source-js">
                        <pre><span class="pl-k">function</span> <span class="pl-en">onDragStartCallback</span><span class="pl-kos">(</span><span class="pl-s1">x</span><span class="pl-kos">,</span> <span class="pl-s1">y</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
                   ...
                   <span class="pl-c">// return false; — for cancel</span>
                    <span class="pl-kos">}</span></pre>
                    </div>

                    <h4>onResizeStart</h4>
                    <p>Type: <code>Function</code><br>
                        Required: <code>false</code><br>
                        Default: <code>null</code></p>
                    <p>Called when resizing starts (handle is clicked or touched). If <code>false</code> is returned by any
                        handler, the
                        action will cancel.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:onResizeStart</span>="<span class="pl-s">onResizeStartCallback</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>
                    <div class="highlight highlight-source-js">
                        <pre><span class="pl-k">function</span> <span class="pl-en"><span class="pl-token" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_symbol&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_symbol&quot;,&quot;repository_id&quot;:93565299,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;Markdown&quot;,&quot;originating_url&quot;:&quot;https://github.com/mauricius/vue-draggable-resizable&quot;,&quot;user_id&quot;:35017110}}" data-hydro-click-hmac="02c73e880421eca43777e74b881284554fddefb1f6bc12f2fbf2745260714b21">onResizeStartCallback</span></span><span class="pl-kos">(</span><span class="pl-s1">handle</span><span class="pl-kos">,</span> <span class="pl-s1">ev</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
                   ...
                   <span class="pl-c">// return false; — for cancel</span>
                    <span class="pl-kos">}</span></pre>
                    </div>

                    <h4>onResize</h4>
                    <p>Type: <code>Function</code><br>
                        Required: <code>false</code><br>
                        Default: <code>null</code></p>
                    <p>Called before the element is resized. The function receives the handle and the next values of <code>x</code>,
                        <code>y</code>,
                        <code>width</code> and <code>height</code>. If <code>false</code> is returned by any handler, the
                        action will cancel.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">:onResize</span>="<span class="pl-s">onResizeCallback</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>
                    <div class="highlight highlight-source-js">
                        <pre><span class="pl-k">function</span> <span class="pl-en">onResizeStartCallback</span><span class="pl-kos">(</span><span class="pl-s1">handle</span><span class="pl-kos">,</span> <span class="pl-s1">x</span><span class="pl-kos">,</span> <span class="pl-s1">y</span><span class="pl-kos">,</span> <span class="pl-s1">width</span><span class="pl-kos">,</span> <span class="pl-s1">height</span><span class="pl-kos">)</span><span class="pl-kos">{</span>
                   ...
                   <span class="pl-c">// return false; — for cancel</span>
                    <span class="pl-kos">}</span></pre>
                    </div>
                    <hr>
                    <h3><a id="user-content-events" class="anchor" aria-hidden="true" href="#events"><svg class="octicon octicon-link"
                                viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                                <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                            </svg></a>Events</h3>
                    <h4>activated</h4>
                    <p>Parameters: <code>-</code></p>
                    <p>Called whenever the component gets clicked, in order to show handles.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">@activated</span>="<span class="pl-s">onActivated</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>deactivated</h4>
                    <p>Parameters: <code>-</code></p>
                    <p>Called whenever the user clicks anywhere outside the component, in order to deactivate it.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">@deactivated</span>="<span class="pl-s">onDeactivated</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>resizing</h4>
                    <p>Parameters:</p>
                    <ul>
                        <li><code>left</code> the X position of the element</li>
                        <li><code>top</code> the Y position of the element</li>
                        <li><code>width</code> the width of the element</li>
                        <li><code>height</code> the height of the element</li>
                    </ul>
                    <p>Called whenever the component gets resized.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">@resizing</span>="<span class="pl-s">onResizing</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>resizestop</h4>
                    <p>Parameters:</p>
                    <ul>
                        <li><code>left</code> the X position of the element</li>
                        <li><code>top</code> the Y position of the element</li>
                        <li><code>width</code> the width of the element</li>
                        <li><code>height</code> the height of the element</li>
                    </ul>
                    <p>Called whenever the component stops getting resized.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">@resizestop</span>="<span class="pl-s">onResizstop</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>dragging</h4>
                    <p>Parameters:</p>
                    <ul>
                        <li><code>left</code> the X position of the element</li>
                        <li><code>top</code> the Y position of the element</li>
                    </ul>
                    <p>Called whenever the component gets dragged.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">@dragging</span>="<span class="pl-s">onDragging</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>

                    <h4>dragstop</h4>
                    <p>Parameters:</p>
                    <ul>
                        <li><code>left</code> the X position of the element</li>
                        <li><code>top</code> the Y position of the element</li>
                    </ul>
                    <p>Called whenever the component stops getting dragged.</p>
                    <div class="highlight highlight-text-html-basic">
                        <pre><span class="pl-kos">&lt;</span><span class="pl-ent">vue-draggable-resizable</span> <span class="pl-c1">@dragstop</span>="<span class="pl-s">onDragstop</span>"<span class="pl-kos">&gt;</span></pre>
                    </div>
                    <hr>
                </article>
            </section>

        </div>
    </article>
</template>
<script>
    export default {
        name: "draggableResizable",
        data() {
            return {
                loading: false,
                /**
                 * 数据
                 */
                width: 0,
                height: 0,
                x: 0,
                y: 0
            };
        },
        mounted() {

        },
        methods: {
            onResize: function(x, y, width, height) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            },
            onDrag: function(x, y) {
                this.x = x;
                this.y = y;
            }
        }
    };
</script>
<style scoped lang="scss">
    #wrapper {
        background-color: transparent;
    }
    .section-breadcrumb {
        margin-bottom: 20px;
    }
    .section+.section {
        margin-top: 20px;
    }
    .section-title {
        padding: 0 0 10px;
    }
    .section-subhead {
        padding-bottom: 16px;
    }
    .section-title+.section-subhead {
        margin-top: -6px;
    }
    .helloword {
        overflow: hidden;
    }
    .text-event {
        float: left;
        height: 500px;
        width: 500px;
        border: 1px solid red;
        position: relative;

        /* 网格设置 */
        background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 10px 10px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 10px 10px;

    }
    .p-event {
        float: left;
        height: 500px;
        width: 500px;
        border: 1px solid blue;
        position: relative;
        margin-left: 20px;
    }
    .drag-handle {
        background-color: #CCCCCC;
    }
    .dragging1 {
        border: 1px solid #000;
        color: #000;
    }
    .dragging2 {
        margin: 10px 0 0 10px;
    }







    .markdown-body code, .markdown-body tt {
        padding: .2em .4em;
        margin: 0;
        font-size: 85%;
        background-color: rgba(27,31,35,.08);
        border-radius: 3px;
    }
    .markdown-body p,
    .markdown-body ul{
        margin-top: 0;
        margin-bottom: 16px;
    }
    .markdown-body h4{
        margin-top: 50px;
        margin-bottom: 16px;
    }
    .pl-k {
        color: #d73a49;
    }
    .pl-e, .pl-en {
        color: #6f42c1;
    }
    .pl-ent {
        color: #22863a;
    }
    .pl-c1, .pl-s .pl-v {
        color: #005cc5;
    }
    .pl-c {
        color: #6a737d;
    }
    pre{
        color: #24292e;
    }
    .pl-pds, .pl-s, .pl-s .pl-pse .pl-s1, .pl-sr, .pl-sr .pl-cce, .pl-sr .pl-sra, .pl-sr .pl-sre {
        color: #032f62;
    }
    code, pre, tt {
        font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
        font-size: 12px;
    }
    .markdown-body .highlight pre, .markdown-body pre {
        padding: 16px;
        overflow: auto;
        font-size: 14px;
        line-height: 1.45;
        background-color: #f6f8fa;
        border-radius: 3px;
    }
    .markdown-body .highlight pre {
        margin-bottom: 0;
        word-break: normal;
    }
    .markdown-body pre {
        word-wrap: normal;
    }
</style>
