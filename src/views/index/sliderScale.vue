<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">滑块控制缩放</h3>
                <div class="slider-scale-box">
                    <div class="slider-scale-l">
                        <el-slider
                            v-model="scaleValue"
                            vertical
                            :max="2"
                            :min="0.1"
                            :step="0.1"
                            :show-tooltip="true"
                            height="200px"
                        >
                        </el-slider>
                    </div>
                    <div class="slider-scale-r">
                        <!-- <div class="slider-scale-div" :style="{transform:'scale('+scaleValue+')'}"></div> -->
                        <div class="slider-scale-div" :style="{width:scaleValue*300+'px', height:scaleValue*400+'px'}"></div>
                    </div>
                </div>
            </section>


            <section class="section">
                <h3 class="section-title">Split 面板分割</h3>
                <div class="split-box">
                    <dl>
                        <dt>Split 面板分割</dt>
                        <dd>复制的iView里面的源码，修改了class的前缀，别的没有改变。参数、方法、回调等请看iView文档</dd>
                    </dl>
                </div>

                <div class="demo-split">
                    <moc-split v-model="split1" min="100px" max="1200px">
                        <template slot="left" class="demo-split-pane">
                            Left Pane
                        </template>
                        <div slot="right" class="demo-split-pane">
                            Right Pane
                        </div>
                    </moc-split>
                </div>

                <div class="demo-split">
                    <moc-split v-model="split2" mode="vertical">
                        <div slot="top" class="demo-split-pane">
                            Top Pane
                        </div>
                        <div slot="bottom" class="demo-split-pane">
                            Bottom Pane
                        </div>
                    </moc-split>
                </div>

                <div class="demo-split">
                    <moc-split v-model="split3">
                        <div slot="left" class="demo-split-pane">
                            <moc-split v-model="split4" mode="vertical">
                                <div slot="top" class="demo-split-pane">
                                    Top Pane
                                </div>
                                <div slot="bottom" class="demo-split-pane">
                                    Bottom Pane
                                </div>
                            </moc-split>
                        </div>
                        <div slot="right" class="demo-split-pane">
                            <moc-split v-model="split5">
                                <div slot="left" class="demo-split-pane">
                                    right Left Pane
                                </div>
                                <div slot="right" class="demo-split-pane">
                                    right Right Pane
                                </div>
                            </moc-split>
                        </div>
                    </moc-split>
                </div>

                <div class="api">
                    <h3>API</h3>
                    <p>Split props</p>
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
                                <td>value</td>
                                <td>面板位置，可以是 0~1 代表百分比，或具体数值的像素，可用 v-model 双向绑定</td>
                                <td>Number | String</td>
                                <td>0.5</td>
                            </tr>
                            <tr>
                                <td>mode</td>
                                <td>类型，可选值为 horizontal 或 vertical</td>
                                <td>String</td>
                                <td>horizontal</td>
                            </tr>
                            <tr>
                                <td>min</td>
                                <td>左侧最小阈值</td>
                                <td>Number | String</td>
                                <td>40px</td>
                            </tr>
                            <tr>
                                <td>max</td>
                                <td>右侧最小阈值</td>
                                <td>Number | String</td>
                                <td>40px</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>Split events</p>
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
                                <td>on-move-start</td>
                                <td>拖拽开始</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>on-moving</td>
                                <td>拖拽中</td>
                                <td>event</td>
                            </tr>
                            <tr>
                                <td>on-move-end</td>
                                <td>拖拽结束</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>Split slot</p>
                    <table>
                        <thead>
                            <tr>
                                <th>名称</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>left</td>
                                <td>mode 为 horizontal 时可用，左边面板</td>
                            </tr>
                            <tr>
                                <td>right</td>
                                <td>mode 为 horizontal 时可用，右边面板</td>
                            </tr>
                            <tr>
                                <td>top</td>
                                <td>mode 为 vertical 时可用，上边面板</td>
                            </tr>
                            <tr>
                                <td>bottom</td>
                                <td>mode 为 vertical 时可用，下边面板</td>
                            </tr>
                            <tr>
                                <td>trigger</td>
                                <td>自定义分割拖拽节点</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

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
                scaleValue: 1,


                split1: '150px',
                split2: 0.5,
                split3: 0.333,
                split4: 0.5,
                split5: 0.5
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




    .slider-scale-box{
        @include clearfix;
    }
    .slider-scale-l{
        float: left;
    }
    .slider-scale-r{
        margin-left: 60px;
    }
    .slider-scale-div{
        width: 300px;
        height: 400px;
        background-color: #f00;
        transform-origin: top center;
        margin: 0 auto;
    }




    .split-box{
        margin-bottom: 20px;
    }
    .demo-split{
        height: 200px;
        border: 1px solid #dcdee2;
        + .demo-split{
            margin-top: 20px;
        }
    }
    .demo-split-pane{
        width: 100%;
        height: 100%;
    }
</style>
