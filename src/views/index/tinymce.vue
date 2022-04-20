<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">Selectable 选择</h3>
                <ul class="section-subhead">
                    <li>模拟 jQuery UI 的 Selectable 组件</li>
                </ul>

                <moc-selectable v-model="selectable" :options="options.workOrderFieldVos" @node-dblclick="nodeDblclick" class="selectable-dom">
                    <template v-slot="{node, index}">
                        <p>{{node.label}} {{index + 1}}</p>
                    </template>
                </moc-selectable>
                <p>{{selectable}}</p>

            </section>

            <section class="section">
                <h3 class="section-title">Transfer 穿梭框</h3>
                <moc-transfer
                    v-model="transfer"
                    :options="options.workOrderFieldVos"
                    height="480px"
                    filterable
                    :titles="['备选字段', '已选字段']"
                    :button-texts="['到左边', '到右边']"
                    @change="transferChange"
                >
                </moc-transfer>
            </section>

            <section class="section" v-mocTitle="$route.meta.title">
                <h3 class="section-title">Tinymce 富文本编辑器</h3>

                <ul class="section-subhead">
                    <li>1、中文文档：<a href="http://tinymce.ax-z.cn/quick-start.php" target="_blank">http://tinymce.ax-z.cn/quick-start.php</a></li>
                    <li>2、参考文章：<a href="https://liubing.me/vue-tinymce-5.html" target="_blank">https://liubing.me/vue-tinymce-5.html</a></li>
                    <li>3、参考文章：<a href="https://aaron-bird.github.io/2019/06/09/在%20Vue%20中使用%20TinyMCE/" target="_blank">https://aaron-bird.github.io/2019/06/09/在%20Vue%20中使用%20TinyMCE/</a></li>
                </ul>

                <div class="tinymce-box">
                    {{ msg }}
                    <moc-tinymce-editor
                        v-if="isShow"
                        ref="editor"
                        v-model="msg"
                        :disabled="disabled"
                        @onClick="onClick">
                    </moc-tinymce-editor>
                    <button @click="clear">清空内容</button>
                    <button @click="disabled = true">禁用</button>
                    <button @click="disabled = false">启用</button>
                </div>
            </section>

        </div>
    </article>
</template>
<script>
    export default {
        data() {
            return {
                loading: false,




                /**
                 * Transfer 穿梭框
                 */
                selectable: ['选项1', '选项3'],
                transfer: ['选项1', '选项3'],
                options:{
                    workOrderFieldVos:[

                    ]
                },

                /**
                 * Tinymce 富文本编辑器
                 */
                isShow: false,
                msg: `<h2>Welcome to Use Tinymce Editor</h2>`,
                disabled: false
            };
        },
        mounted(){
            setTimeout(()=>{
                this.options.workOrderFieldVos = [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    },
                    {
                        value: '选项2',
                        label: '双皮奶'
                    },
                    {
                        value: '选项3',
                        label: '蚵仔煎'
                    },
                    {
                        value: '选项4',
                        label: '龙须面'
                    },
                    {
                        value: '选项5',
                        disabled: true,
                        label: '北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭'
                    },
                    {
                        value: '选项6',
                        label: '龙须面'
                    },
                    {
                        value: '选项7',
                        label: '龙须面'
                    },
                    {
                        value: '选项8',
                        label: '龙须面'
                    },
                    {
                        value: '选项9',
                        label: '龙须面'
                    },
                    {
                        value: '选项10',
                        label: '龙须面'
                    },
                    {
                        value: '选项11',
                        label: '龙须面'
                    },
                    {
                        value: '选项12',
                        label: '龙须面'
                    },
                    {
                        value: '选项13',
                        label: '龙须面'
                    },
                    {
                        value: '选项14',
                        label: '龙须面'
                    },
                    {
                        value: '选项15',
                        label: '龙须面'
                    },
                    {
                        value: '选项16',
                        label: '龙须面'
                    },
                    {
                        value: '选项17',
                        label: '龙须面'
                    },
                    {
                        value: '选项18',
                        label: '龙须面'
                    },
                    {
                        value: '选项19',
                        label: '龙须面'
                    },
                    {
                        value: '选项20',
                        label: '龙须面'
                    }
                ]
            }, 3000)
        },
        /**
         * 使用keep-alive缓存时，修改不可以编辑的问题
         */
        activated(){
            this.isShow = true;
        },
        deactivated(){
            this.isShow = false;
        },
        methods: {
            nodeDblclick(node){
                console.log(node)
            },


            transferChange(val){
                console.log( val )
            },


            // 鼠标单击的事件
            onClick (e, editor) {
                console.log('Element clicked')
                console.log(e)
                console.log(editor)
            },
            // 清空内容
            clear () {
                this.$refs.editor.clear()
            }
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
</style>
