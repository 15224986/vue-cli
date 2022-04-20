<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">
            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <div class="section-head">
                    <div class="section-title">全局过滤器</div>
                </div>
                <dl class="describe-basics">
                    <dt>过滤器capitalize 和  toUpperCase</dt>
                    <dd>过滤器（首字母大写）：{{ capitalize | capitalize }}</dd>
                    <dd>过滤器（字母大写）：{{ capitalize | toUpperCase }}</dd>
                </dl>
                <dl class="describe-basics">
                    <dt>v-model里使用过滤器</dt>
                    <dd class="notes">文档所述过滤器只能用在v-bind指令和{{}}表达式中，v-model中使用过滤器是一种思维误区。<br>因为v-model里实现数据显示和存储格式的转换应该是双向的。</dd>
                    <dd>
                        <el-input :value="capitalize | toUpperCase" placeholder="请输入内容"></el-input>
                    </dd>
                    <dd>
                        <el-input :value="inputval" placeholder="请输入内容"></el-input>
                    </dd>

                    <dt>v-model里使用计算属性</dt>
                    <dd class="notes">即使用了 v-model 指令，那么 filter 就不会生效，解决办法是把过滤属性变为 计算属性。</dd>
                    <dd>
                        <el-input v-model="number" placeholder="请输入内容"></el-input>
                    </dd>
                </dl>
            </section>
            <section class="section">
                <div class="section-head">
                    <div class="section-title">全局指令</div>
                </div>
                <dl class="describe-basics">
                    <dt>全局指令</dt>
                    <dd v-mocTitle="'你好，我是p'">你好，我是pt</dd>
                    <dd v-mocTitle="'mocTitle 指令'">mocTitle获取参数</dd>
                    <el-button @click="toggleDialog()" type="primary" plain size="mini">指令添加对 el-dialog 的可拖拽</el-button>

                    <div v-moc-stealth="true">指令模板</div>


                </dl>
            </section>
            <section class="section">
                <div class="section-head">
                    <div class="section-title">自定义工具</div>
                </div>
                <dl class="describe-basics">
                    <dt>测试$merge <a @click="getParamsObj()" class="link" href="JavaScript:;">点击试试</a></dt>
                    <dd>
                        <dl class="describe-gloup"  v-for="(value,key) in information" :key="key">
                            <dt>{{key}}</dt>
                            <dd>{{value}}</dd>
                        </dl>
                    </dd>

                    <dt>测试$toBoolean <a @click="getBoolean()" class="link" href="JavaScript:;">点击试试</a></dt>
                    <dd><strong>toBoolean： </strong>{{ toBoolean }} <strong class="m-l-20">type: </strong> <span :class="{'text-red': toBoolean === false }">{{ typeof(toBoolean) }}</span></dd>

                    <dt>测试$axiosError <a @click="getAxiosError()" class="link" href="JavaScript:;">点击试试</a></dt>

                </dl>
            </section>
        </div>

        <el-dialog
            title="通过全局指令dialogDrag使dialog可以拖拽"
            :visible.sync="dialogVisible"
            width="860px"
            top="20px"
            v-mocDialogDrag
            :modal="false"
            :append-to-body="true"
        >
            <ul>
                <li>通过全局指令dialogDrag使dialog可以拖拽</li>
                <li>通过全局指令dialogDrag使dialog可以拖拽</li>
                <li>通过全局指令dialogDrag使dialog可以拖拽</li>
                <li>通过全局指令dialogDrag使dialog可以拖拽</li>
                <li>通过全局指令dialogDrag使dialog可以拖拽</li>
            </ul>
        </el-dialog>
    </article>
</template>
<script>
    export default {
        name: "jQuery",
        data() {
            return {
                loading: false,
                dialogVisible: false,
                inputval: '测试input的value',
                capitalize: 'your browser does not support the video tag',
                information:{
                   name: '王婆婆',
                   sex: '女',
                   age: 56
                },
                toBoolean:'false',
                num:'asj'
            };
        },
        // 由于v-model双向绑定不能使用filter，所以通过计算属性代替
        computed: {
            number: {
                get: function () {
                    return this.num; //获取的时候直接获取值
                },
                set: function (value) {
                    this.num = value.toUpperCase(); //设置的时候变为大写
                }
            }
        },
        mounted(){

        },
        methods:{
            toggleDialog(){
                this.dialogVisible = true;
            },
            getParamsObj(){
                let newObj = {
                    name: '李某',
                    sex: '男',
                    hobby: '足球、小说',
                    game: 'LOL'
                };
                this.information = this.$merge({}, this.information, newObj);
            },
            getBoolean(){
                this.toBoolean = this.$toBoolean( this.toBoolean );
            },
            getAxiosError(){
                let obj = {
                    code: '411',
                    message: '登陆过期，请从新登录。',
                    data:['111','2322']
                };
                this.$axiosError( obj );
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
        margin: -20px;
        margin-bottom: 14px;
        padding: 10px;
        background-color: #f1f1f1;
        color: #333;
        font-weight: 700;
    }

    .describe-basics{
        line-height: 1.8;
        &>dt{
            color: #333;
            font-weight: 700;
        }
        &>dd + dt{
            margin-top: 8px;
        }
        strong{
            color: #333;
        }
        .text-red{
            color: #f00;
        }
    }
    dd{
        color: #555;
        &.notes{
            color: #888;
        }
    }
    .describe-gloup{
        @include clearfix;
        &>dt{
            color: #333;
            width: 60px;
            float: left;
            text-align: right;
            font-weight: 700;
        }
        &>dd{
            margin-left: 70px;
        }
        @for $i from 4 through 30 {
            &.describe-dt-#{$i*10} {
                &>dt{
                    width: #{$i*10} + px;
                }
                &>dd{
                    margin-left: #{$i*10 + 20} + px;
                }
            }
        }
    }
</style>
