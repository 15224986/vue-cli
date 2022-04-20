<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <div class="demo-anchor">
                <moc-anchor show-ink :offset-top="65" :bounds="65" :scroll-offset="65">
                    <moc-anchor-link href="#basic_a" title="Anchor 锚点" />
                    <moc-anchor-link href="#basic_b" title="Affix 图钉" />
                    <moc-anchor-link href="#basic_c" title="Basic c" />
                </moc-anchor>
            </div>
            <section class="section anchor-list" id="basic_a">
                <h3 class="section-title">Anchor 锚点</h3>
                <dl class="section-subhead">
                    <dt>用于跳转到页面指定位置。</dt>
                    <dd>复制的iView里面的源码，修改了class的前缀，别的没有改变。参数、方法、回调等请看iView文档</dd>
                </dl>
                <div class="api">
                    <h3>API</h3>
                    <p>Anchor props</p>
                    <table>
                        <thead>
                            <tr>
                                <th>属性</th>
                                <th>说明</th>
                                <th>类型</th>
                                <th>默认值</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>affix</td>
                                <td>固定模式</td>
                                <td>Boolean</td>
                                <td>true</td>
                            </tr>
                            <tr>
                                <td>offset-top</td>
                                <td>距离窗口顶部达到指定偏移量后触发</td>
                                <td>Number</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>offset-bottom</td>
                                <td>距离窗口底部达到指定偏移量后触发</td>
                                <td>Number</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>bounds</td>
                                <td>锚点区域边界，单位：px</td>
                                <td>Number</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>scroll-offset</td>
                                <td>点击滚动的额外距离</td>
                                <td>Number</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>container</td>
                                <td>指定滚动的容器</td>
                                <td>String | HTMLElement</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>show-ink</td>
                                <td>是否显示小圆点</td>
                                <td>Boolean</td>
                                <td>false</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Anchor events</p>
                    <table>
                        <thead>
                            <tr>
                                <th>事件名</th>
                                <th>说明</th>
                                <th>返回值</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>on-select</td>
                                <td>点击锚点时触发，返回链接</td>
                                <td>href</td>
                            </tr>
                            <tr>
                                <td>on-change</td>
                                <td>链接改变时触发，返回新链接和旧链接</td>
                                <td>newHref, oldHref</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>AnchorLink props</p>
                    <table>
                        <thead>
                            <tr>
                                <th>属性</th>
                                <th>说明</th>
                                <th>类型</th>
                                <th>默认值</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>href</td>
                                <td>锚点链接</td>
                                <td>String</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>title</td>
                                <td>文字内容</td>
                                <td>String</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>scroll-offset</td>
                                <td>点击滚动的额外距离</td>
                                <td>Number</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section class="section anchor-list" id="basic_b">
                <h3 class="section-title">Affix 图钉</h3>
                <dl class="section-subhead">
                    <dt>使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。</dt>
                    <dd>复制的iView里面的源码，修改了class的前缀，别的没有改变。参数、方法、回调等请看iView文档</dd>
                </dl>
                <moc-affix :offset-top="70">
                    <dl class="demo-affix">
                        <dt>Affix 图钉</dt>
                    </dl>
                </moc-affix>

                <div class="api">
                    <h3>API</h3>
                    <p>Affix props</p>
                    <table>
                        <thead>
                            <tr>
                                <th>属性</th>
                                <th>说明</th>
                                <th>类型</th>
                                <th>默认值</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>offset-top</td>
                                <td>距离窗口顶部达到指定偏移量后触发</td>
                                <td>Number</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>offset-bottom</td>
                                <td>距离窗口底部达到指定偏移量后触发</td>
                                <td>Number</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>use-capture</td>
                                <td>addEventListener 原生的 useCapture 选项</td>
                                <td>Boolean</td>
                                <td>false</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Affix events</p>
                    <table>
                        <thead>
                            <tr>
                                <th>事件名</th>
                                <th>说明</th>
                                <th>返回值</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>on-change</td>
                                <td>在固定状态发生改变时触发</td>
                                <td>true | false</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section class="section anchor-list" id="basic_c">
                <h3 class="section-title">Basic c</h3>
                <div class="anchor-box"></div>
            </section>
        </div>
    </article>
</template>
<script>
    export default {
        name: "Tinymce",
        data() {
            return {
                loading: false,
                scaleValue: 1
            };
        },
        mounted(){
            
        },
        methods: {
            
        }
    };
</script>
<style scoped lang="scss">
    #wrapper{
        background-color: transparent;
    }
    .section-breadcrumb{
        margin-bottom: 20px;
    }
    .section + .section{
        margin-top: 20px;
    }
    .section-title {
        padding: 0 0 10px;
    }
    .section-subhead{
        padding-bottom: 16px;
    }
    .section-title + .section-subhead{
        margin-top: -6px;
    }

    .demo-affix{
        display: inline-block;
        color: #fff;
        padding: 10px 30px;
        text-align: center;
        background: rgba(0,153,229,.9)
    }
    #page-bodier{
        margin-top: 20px;
    }
    .demo-anchor{
        float: right;
        width: 218px;
    }
    .anchor-list{
        margin-right: 238px;
    }
    .anchor-box{
        height: 1160px;
    }
</style>
