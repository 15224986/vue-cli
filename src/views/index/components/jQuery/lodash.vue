<template>
    <section class="section">
        <h2 id="array">Lodash</h2>
        <ul class="section-subhead">
            <li>1.Lodash 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。</li>
            <li>2.参考网址： <el-link href="https://www.lodashjs.com" type="primary" target="_blank">https://www.lodashjs.com</el-link></li>
            <li>3.安装相关依赖： npm i --save lodash</li>
        </ul>

        <el-row :gutter="15" class="lodash-container">
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                <el-card shadow="hover" header="去除数组array中的最后一个元素">
                    <div class="lodash-content">
                        this.$lodash.initial([1, 2, 3])
                        <br />
                        // => [1, 2]
                    </div>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                <el-card shadow="hover" :body-style="{ padding: '0px' }">
                    <template slot="header">返回数组 array的第一个元素</template>
                    <div class="lodash-content">
                        this.$lodash.head([1, 2, 3])
                        <br />
                        // => 1
                    </div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                <el-card shadow="hover">
                    <div slot="header"><span>返回数组 array的最后一个元素</span></div>
                    <div class="lodash-content">
                        this.$lodash.last(['a', 'b', 'c']);
                        <br />
                        // => 'c'
                    </div>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                <el-card shadow="hover">
                    <div slot="header"><span>合并数组</span></div>
                    <div class="lodash-content">
                        this.$lodash.concat([1],[2])
                        <br />
                        // => [1,2]
                    </div>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                <el-card shadow="hover">
                    <div slot="header"><span>左切片</span></div>
                    <div class="lodash-content">
                        this.$lodash.drop([1, 2, 3],2切除的数量)
                        <br />
                        // => [3]
                    </div>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                <el-card shadow="hover">
                    <div slot="header"><span>右切片</span></div>
                    <div class="lodash-content">
                        this.$lodash.dropRight([1, 2, 3],2切除的数量)
                        <br />
                        // => [1]
                    </div>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                <el-card shadow="hover">
                    <div slot="header"><span>修改拼接</span></div>
                    <div class="lodash-content">
                        this.$lodash.join(['a', 'b', 'c'], '~');
                        <br />
                        // => 'a~b~c'
                    </div>
                </el-card>
            </el-col>



            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                <el-card shadow="hover">
                    <div slot="header"><span>数组去重</span></div>
                    <div class="lodash-content">
                        this.$lodash.uniq(['a', 'b', 'a']);
                        <br />
                        // => ['a','b']
                    </div>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                <el-card shadow="hover">
                    <div slot="header"><span>获取数组的最大值</span></div>
                    <div class="lodash-content">
                        this.$lodash.max([4, 2, 8, 6])
                        <br />
                        // => 8
                    </div>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                <el-card shadow="hover">
                    <div slot="header"><span>获取数组的最小值</span></div>
                    <div class="lodash-content">
                        this.$lodash.min([4, 2, 8, 6])
                        <br />
                        // => 2
                    </div>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                <el-card shadow="hover">
                    <div slot="header">
                        <span>四舍五入(保留任意位小数)</span>
                    </div>
                    <div class="lodash-content">
                        this.$lodash.round(4.006,2保持几位小数)
                        <br />
                        // => 4.01
                    </div>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                <el-card shadow="hover">
                    <div slot="header"><span>数组内数据相加</span></div>
                    <div class="lodash-content">
                        this.$lodash.sum([4, 2, 8, 6])
                        <br />
                        // => 20
                    </div>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                <el-card shadow="hover">
                    <div slot="header"><span>返回随机数</span></div>
                    <div class="lodash-content">
                        this.$lodash.random(0, 5)
                        <br />
                        // => 0到5任意数
                    </div>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                <el-card shadow="hover">
                    <div slot="header"><span>返回数组内的随机数</span></div>
                    <div class="lodash-content">
                        this.$lodash.sample([1, 2, 3, 4])
                        <br />
                        // => 数组1到4任意数
                    </div>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                <el-card shadow="hover">
                    <div slot="header"><span>事件防抖动</span></div>
                    <div class="lodash-content">
                        this.$lodash.debounce(@click的事件,延迟的毫秒数)
                        <br />
                        // => 点击后多久不可以点击
                    </div>
                </el-card>
            </el-col>
        </el-row>
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
<style scoped lang="scss">
    .lodash-container {
        text-align: left;
        margin-top: 6px;
        .lodash-content {
            min-height: 150px;
        }
        ::v-deep {
            .el-card__header{
                background-color: #f9f9f9;
            }
        }
        .is-hover-shadow {
            margin-bottom: 15px;
        }
    }
</style>
