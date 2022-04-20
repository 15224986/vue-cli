<template>
    <section class="section">
        <h2>vue中style scope深度访问新方式(::v-deep)</h2>
        <br />
        <ul class="section-subhead">
            <li>1.参考网址： <el-link href="https://segmentfault.com/a/1190000021576348" type="primary" target="_blank">https://segmentfault.com/a/1190000021576348</el-link></li>
            <li>2.>>>   如果vue的style使用的是css，那么则使用 >>>, 但是像scss等预处理器却无法解析>>>，所以我们使用下面的方式.</li>
            <pre class="hljs xml">
                <code>
                    <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"css"</span> <span class="hljs-attr">scoped</span>&gt;</span>
                    .a &gt;&gt;&gt; .b {
                       /* ... */
                    }
                    <span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
                </code>
            </pre>
            <li>3./deep/  但是有些开发者反应，在vue-cli3编译时，deep的方式会报错或者警告。此时我们可以使用第三种方式</li>
            <pre class="hljs xml">
                <code>
                    <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"scss"</span> <span class="hljs-attr">scoped</span>&gt;</span>
                        .a{
                           /deep/ .b {
                              /* ... */
                           }
                        }
                    <span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
                </code>
            </pre>
            <li>4.::v-deep  切记必须是双冒号</li>
            <pre class="hljs xml">
                <code>
                    <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"scss"</span> <span class="hljs-attr">scoped</span>&gt;</span>
                    .a{
                      ::v-deep .b {
                          /* ... */
                       }
                    }
                    <span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
                </code>
            </pre>
        </ul>
    
    </section>
</template>

<script>

    export default {
        data () {
            return {}
        },
        methods: {

        }
    }
</script>
