<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <el-tabs v-model="activeName">

                    <el-tab-pane label="验证码" name="zero">
                        <identify-verify
                            ref="identifyVerify"
                            :isPassing="isPassing"
                            :width="120"
                        >
                        </identify-verify>
                        <el-button type="primary" @click="identifyReset()">还原</el-button>
                    </el-tab-pane>

                    <el-tab-pane label="滑块组件" name="first">
                        <h2>基础用法</h2>
                        <ul class="section-subhead">
                            <li>参考网址： <el-link href="http://www.jq22.com/jquery-info23002" type="primary" target="_blank">http://www.jq22.com/jquery-info23002</el-link></li>
                            <li>参考网址： <el-link href="http://www.jq22.com/demo/vue-drag-verify202004270011/#/" type="primary" target="_blank">http://www.jq22.com/demo/vue-drag-verify202004270011/#/</el-link></li>
                            <li>基础的滑块用法。</li>
                        </ul>
                        <el-row>
                            <drag-verify
                                ref="dragVerify"
                                :isPassing.sync="isPassing1"
                            >
                            </drag-verify>
                        </el-row>

                        <el-row style="margin-top:10px">
                            <drag-verify
                                ref="dragVerify"
                                :isPassing.sync="isPassing2"
                                text="swiping to the right side"
                                successText="success"
                            >
                            </drag-verify>
                        </el-row>

                        <el-row style="margin-top:10px;">
                            <drag-verify
                                ref="dragVerify"
                                :isPassing.sync="isPassing3"
                                handlerIcon="el-icon-arrow-right"
                                successIcon="el-icon-check"
                            >
                            </drag-verify>
                        </el-row>

                        <el-row style="margin-top:10px;">
                            <drag-verify
                                ref="dragVerify"
                                :isPassing.sync="isPassing4"
                                :circle="true"
                            >
                            </drag-verify>
                        </el-row>

                        <el-row style="margin-top:10px;">
                            <drag-verify
                                ref="dragVerify"
                                :width="300"
                                :isPassing.sync="isPassing5"
                                background="#ccc"
                                completedBg="rgb(105, 231, 251)"
                                @passcallback="passcallback"
                            >
                            </drag-verify>
                        </el-row>

                        <h2 class="m-t-50">插槽用法</h2>
                        <ul class="section-subhead">
                            <li>扩展提示信息。</li>
                        </ul>
                        <drag-verify
                            ref="dragVerify"
                            :width="300"
                            :isPassing.sync="isPassing6"
                            @passcallback="passcallback2"
                        >
                            <i
                                v-show="!isPassing6"
                                slot="textBefore"
                                class="el-icon-lock"
                            ></i>
                        </drag-verify>

                        <h2 class="m-t-50">状态还原</h2>
                        <ul class="section-subhead">
                            <li>还原未验证通过状态。</li>
                        </ul>
                        <el-row>
                            <drag-verify
                                ref="dragVerify7"
                                :width="300"
                                :isPassing.sync="isPassing7"
                                @passcallback="passcallback"
                            >
                            </drag-verify>
                            <el-button
                                style="margin-top:5px;"
                                type="primary"
                                @click="reset"
                            >还原</el-button>
                        </el-row>
                    </el-tab-pane>

                    <el-tab-pane label="图片滑块组件" name="second">
                        <drag-verify-img
                            ref="dragVerify8"
                            :imgsrc="imgsrc"
                            :isPassing.sync="isPassing8"
                            :showRefresh="true"
                            @refresh="reimg"
                            @passcallback="passcallback"
                        >
                        </drag-verify-img>

                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <drag-verify-img
                            ref="dragVerify81"
                            :imgsrc="imgsrc"
                            :isPassing.sync="isPassing81"
                            :showRefresh="true"
                            :dragContentShow="false"
                            @refresh="reimg"
                            @passcallback="passcallback"
                        >
                        </drag-verify-img>
                        <el-button type="primary" @click="reset1">还原</el-button>
                    </el-tab-pane>

                    <el-tab-pane label="图片滑块组件（拼图）" name="third">
                        <p>显示图片</p>
                        <drag-verify-img-chip
                            ref="dragVerify9"
                            :imgsrc="imgsrc"
                            :isPassing.sync="isPassing9"
                            :showRefresh="true"
                            @refresh="reimg"
                            @passcallback="passcallback"
                        >
                        </drag-verify-img-chip>
                        <el-button type="primary" @click="reset2">还原</el-button>

                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <p>拖动后显示图片</p>
                        <drag-verify-img-chip
                            ref="dragVerify91"
                            :imgsrc="imgsrc"
                            :isPassing.sync="isPassing91"
                            :showRefresh="true"
                            :imgShow="false"
                            @refresh="reimg"
                            @passcallback="passcallback"
                        >
                        </drag-verify-img-chip>
                    </el-tab-pane>

                    <el-tab-pane label="旋转图片滑块组件" name="fourth" lazy>
                        <drag-verify-img-rotate
                            ref="dragVerify10"
                            :imgsrc="imgsrc2"
                            :isPassing.sync="isPassing10"
                            @refresh="reimg"
                            @passcallback="passcallback"
                        >
                        </drag-verify-img-rotate>
                        <el-button type="primary" @click="reset3">还原</el-button>
                    </el-tab-pane>
                </el-tabs>

            </section>

        </div>
    </article>
</template>
<script>

    // 前后台验证
    import identifyVerify from "@/views/components/verify/identifyVerify";

    // 基本滑块验证组件
    import dragVerify from "@/views/components/verify/dragVerify";
    // 图片滑块组件
    import dragVerifyImg from "@/views/components/verify/dragVerifyImg";
    import dragVerifyImgChip from "@/views/components/verify/dragVerifyImgChip";
    // 旋转图片滑块组件
    import dragVerifyImgRotate from "@/views/components/verify/dragVerifyImgRotate";

    export default {
        components: {
            identifyVerify,
            dragVerify,
            dragVerifyImg,
            dragVerifyImgChip,
            dragVerifyImgRotate
        },
        data() {
            return {
                loading: false,
                activeName: 'first',

                /**
                 * 验证码
                 */
                isPassingArr: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
                isPassing: "DEDFA",
                /**
                 * 滑块组件
                 */
                isPassing1: false,
                isPassing2: false,
                isPassing3: false,
                isPassing4: false,
                isPassing5: false,
                isPassing6: false,
                isPassing7: false,
                /**
                 * 图片相关
                 */
                imgsrcType: 1,
                imgsrc:"/static/images/t3.f6f8c53.png",
                imgsrc2:"/static/images/111.22e0821.jpg",
                /**
                 * 图片滑块组件
                 */
                isPassing8: false,
                isPassing81: false,
                /**
                 * 图片滑块组件（拼图）
                 */
                isPassing9: false,
                isPassing91: false,
                /**
                 * 旋转图片滑块组件
                 */
                isPassing10: false,
            };
        },
        mounted() {

        },
        created() {
            this.identifyReset();
        },
        methods:{
            /**
             *  验证码
             */
            identifyReset(){
                let str = "";
                // 生成字符串
                for(var i=0; i<4; i++){
                    let pos = Math.round(Math.random() * (this.isPassingArr.length-1));
                    str += this.isPassingArr[pos];
                }
                this.isPassing = str;
            },
            /**
             * 验证通过 回掉
             */
            passcallback(){
                this.$message({
                    message: "验证通过",
                    type: "success"
                });
            },
            passcallback2() {
                this.$message({
                    message: "验证通过,插槽消失",
                    type: "success"
                });
            },

            /**
             * 状态还原 重置
             */
            reset() {
                this.isPassing7 = false;
                this.$refs.dragVerify7.reset();
            },
            reset1(){
                this.isPassing8 = false;
                this.isPassing81 = false;
                this.$refs.dragVerify8.reset();
                this.$refs.dragVerify81.reset();
            },
            reset2(){
                this.isPassing9 = false;
                this.isPassing91 = false;
                this.$refs.dragVerify9.reset();
                this.$refs.dragVerify91.reset();
            },
            reset3(){
                this.isPassing10 = false;
                this.$refs.dragVerify10.reset();
            },

            /**
             * 图片 重置
             */
            reimg(){
                if( this.imgsrcType == 2 ){
                    this.imgsrc = '/static/images/t3.f6f8c53.png'
                    this.imgsrcType = 1
                }else{
                    this.imgsrc = '/static/images/111.22e0821.jpg'
                    this.imgsrcType = 2
                }
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

    .el-tabs{
        background-color: #FFFFFF;
    }

</style>
