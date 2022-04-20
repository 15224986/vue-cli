<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">切换必填状态</h3>
                <ul class="section-subhead">
                    <li>1.通过切换“活动名称状态”对“活动名称”进行“必填”和“非必填”进行修改。</li>
                </ul>
                <el-form
                    :model="ruleForm"
                    ref="ruleForm"
                    label-width="140px"
                    class="form-horizontal"
                >
                    <el-form-item
                        label="活动名称状态"
                        prop="region"
                        :rules="[
                            { required: true, message: '请选择类型', trigger: 'change' }
                        ]"
                    >
                        <el-select v-model="ruleForm.region" placeholder="请选择活动名称状态">
                            <el-option label="必填" value="1"></el-option>
                            <el-option label="非必填" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item
                        label="活动名称"
                        prop="name"
                        :rules="[
                            { required: isHaveTo, message: '请输入活动名称', trigger: 'blur' }
                        ]"
                    >
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit('ruleForm')">立即创建</el-button>
                    </el-form-item>
                </el-form>
            </section>

            <section class="section">
                <h3 class="section-title">tooltip使用</h3>
                <ul class="section-subhead">
                    <li>1.通过方法。</li>
                    <li>2.二次封装组件。</li>
                </ul>


                <ul class="m-b-20">
                    <el-tooltip
                        v-for="(item, index) in list"
                        :key="index"
                        :content="item.text"
                        :disabled="item.showTooltip"
                    >
                        <li @mouseenter="showTips($event, item.text, item)">
                            <span>{{item.text}}</span>
                        </li>
                    </el-tooltip>
                </ul>

                <moc-tooltip
                    v-for="(item, index) in list" :key="index"
                    :content="item.text"
                >
                    {{item.text}}
                </moc-tooltip>


            </section>

        </div>
    </article>
</template>
<script>
    export default {
        name: "requiredType",
        data() {
            return {
                loading: false,
                /**
                 * 切换必填状态
                 */
                ruleForm: {
                    name: "",
                    region: "1"
                },
                list:[
                    {
                        text:"将参数添加到原数组中。"
                    },
                    {
                        text:"将参数添加到原数组中。"
                    },
                    {
                        text:"这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。"
                    },
                    {
                        text:"这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。"
                    }
                ]
            };
        },
        computed:{
            /**
             * 计算是否为必填
             */
            isHaveTo: function() {
                if(this.$refs.ruleForm){
                    this.$refs.ruleForm.clearValidate('name');
                }
                return this.ruleForm.region === '1';
            }
        },
        methods:{
            /**
             * 公共方法
             */
            showTips($event, text, obj, minuend = 0){
                /*currentWidth 为文本在页面中所占的宽度，创建标签，加入到页面，获取currentWidth ,最后在移除*/
                let TemporaryTag = document.createElement('span');
                TemporaryTag.innerText = text;
                TemporaryTag.className = 'getTextWidth';
                document.querySelector('body').appendChild(TemporaryTag);
                let currentWidth = document.querySelector('.getTextWidth').offsetWidth;
                document.querySelector('.getTextWidth').remove();
                /*cellWidth为表格容器的宽度*/
                const cellWidth = $event.target.offsetWidth - minuend
                /*当文本宽度小于||等于容器宽度两倍时，代表文本显示未超过两行*/
                if(currentWidth >= cellWidth){
                    this.$set(obj, 'showTooltip', false)
                }else{
                    this.$set(obj, 'showTooltip', true)
                }
            },

            onSubmit(formRef){
                // 数据提交
                this.$refs[formRef].validate(valid => {
                    if (valid) {
                        console.log("验证通过");
                    } else {
                        console.log("error submit!!");
                        return false;
                    }
                });
            },
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

    .el-tooltip{
        width: 256px;
        @include text-overflow;
    }
</style>
