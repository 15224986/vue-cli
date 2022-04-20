<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>


            <section class="section">
                <h3 class="section-title">select组件 下拉树</h3>
                <p>请使用级联选择器</p>
                <el-form :model="search" ref="neuForm" label-width="180px" class="form-horizontal">
                    <p>{{ valueArr }}</p>
                    <el-form-item label="下拉树(多选)">
                        <moc-select-tree
                            v-model="valueArr"
                            :options="optionTreeData"
                            :props="props"
                            multiple
                        >
                        </moc-select-tree>
                    </el-form-item>
                    <p>{{ valueId }}</p>
                    <el-form-item label="下拉树(多选)">
                        <moc-select-tree
                            v-model="valueId"
                            :options="optionTreeData"
                            :props="props"
                        >
                        </moc-select-tree>
                    </el-form-item>
                </el-form>
            </section>



            <section class="section">
                <h3 class="section-title" @click="clearChooseData">select组件 全选、联动 功能</h3>
                <el-form :model="search" ref="neuForm" label-width="180px" class="form-horizontal">
                    <el-form-item label="下拉多选（全选）">
                        <moc-all-select v-model="search.chooseData" :selectOptions="searchOptions.selectOptions"
                            clearable></moc-all-select>
                    </el-form-item>

                    <el-form-item label="下拉多选（联动）">
                        <moc-all-select v-model="search.selectLinkage" :selectOptions="searchOptions.selectOptions"
                            @change="changeValue"></moc-all-select>
                    </el-form-item>
                    <p>{{ search.selectLinkage }}</p>

                    <el-form-item label="下拉多选（联动）">
                        <moc-all-select v-model="search.selectLinkage1" :selectOptions="searchOptions.selectLinkage"></moc-all-select>
                    </el-form-item>
                    <p>{{ search.selectLinkage1 }}</p>
                </el-form>
            </section>




        </div>

    </article>
</template>
<script>
    /**
     * 混入
     * calcIndex    : 序号排序的过滤方法
     * sexText      : 性别转换的过滤方法
     * deepCopy     : js复杂数据类型的深层复制
     * utils        : 多数页面通用的数据、方法、计算、钩子等
     */
    import calcIndex from "@/mixins/calcIndex.js";
    import sexText from "@/mixins/sexText.js";
    import deepCopy from '@/mixins/deepCopy.js'
    import utils from '@/mixins/utils.js';

    /**
     * selectOptions  下拉框的option数组
     * selectOptions:{
     *      rst:[],
     *      source:[]
     * }
     * optionsObj   下拉框联动数据存放处
     * optionsObj:{
     *      rst:{},
     *      source: {}
     * }
     * selectAll    全选存放处
     * selectAll:{
     *      rst:[],
     *      source:[]
     * }
     * required     是否“必填”存放处
     * required:{
     *      rst: true,
     *      source: true
     * }
     * disabled     是否“可选”存放处
     * disabled:{
     *      rst: true,
     *      source: true
     * }
     *
     *
     * 下拉框select改变的时候，有数据联动的时候，需要执行以下的一些操作
     * 1.清空选中的值
     * this.form.source = [];
     * 2.如果有全选，清空全选的值
     * this.selectAll.source = [];
     * 3.如果需要修改“必填”状态
     * this.required.rst = false;
     * 4.如果需要修改“可选”状态
     * this.disabled.rst = false;
     * 5.option 是否需要从新赋值
     * this.searchOptions.selectOptions = this.setNewOptions('optionKey', val,'optionsObject');
     *
     */

    export default {
        name: "selectRelevant",
        mixins: [utils],
        data() {
            return {
                loading: false,
                selectAll: {
                    chooseData: [],
                    selectLinkage: [],
                    selectLinkage1: []
                },
                search: {
                    chooseData: [1, 2, 3],
                    selectLinkage: '',
                    selectLinkage1: ''
                },
                searchOptions: {
                    selectOptions: [{
                            value: 1,
                            label: '苹果'
                        },
                        {
                            value: 2,
                            label: '橘子'
                        },
                        {
                            value: 3,
                            label: '葡萄'
                        }
                    ],
                    selectLinkage: []
                },
                optionsObj: {
                    selectLinkage: {
                        1: [{
                                value: 101,
                                label: '红苹果'
                            },
                            {
                                value: 102,
                                label: '黄苹果'
                            },
                            {
                                value: 103,
                                label: '绿苹果'
                            }
                        ],
                        2: [{
                                value: 201,
                                label: '红橘子'
                            },
                            {
                                value: 202,
                                label: '黄橘子'
                            },
                            {
                                value: 203,
                                label: '绿橘子'
                            }
                        ],
                        3: [{
                                value: 301,
                                label: '红葡萄'
                            },
                            {
                                value: 302,
                                label: '黄葡萄'
                            },
                            {
                                value: 303,
                                label: '绿葡萄'
                            }
                        ]
                    }
                },

                valueArr: [10, 6], // 初始ID（可选）
                valueId: 10, // 初始ID（可选）
                props: { // 配置项（必选）
                    value: 'id',
                    label: 'label',
                    children: 'children',
                    // disabled:true
                },
                // 选项列表（必选）
                optionTreeData:[
                    {
                        id: 1,
                        label: '一级 1',
                        children: [
                            {
                                id: 4,
                                label: '二级 1-1',
                                children: [
                                    {
                                        id: 9,
                                        label: '三级 1-1-1',
                                        disabled: true
                                    },
                                    {
                                        id: 10,
                                        label: '三级 1-1-2'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        label: '一级 2',
                        children: [
                            {
                                id: 5,
                                label: '二级 2-1'
                            },
                            {
                                id: 6,
                                label: '二级 2-2'
                            }
                        ]
                    },
                    {
                        id: 3,
                        label: '一级 3',
                        children: [
                            {
                                id: 7,
                                label: '二级 3-1'
                            },
                            {
                                id: 8,
                                label: '二级 3-2'
                            }
                        ]
                    }
                ]
            };
        },
        methods: {
            clearChooseData(){
                this.search.chooseData = [];
            },
            changeValue(val) {
                this.searchOptions.selectLinkage = [];
                this.search.selectLinkage1 = [];
                if (Array.isArray(val)) {
                    val.forEach((key) => {
                        if (this.optionsObj.selectLinkage.hasOwnProperty(key)) {
                            this.searchOptions.selectLinkage = this.searchOptions.selectLinkage.concat(this.optionsObj
                                .selectLinkage[key]);
                        }
                    });
                } else {
                    if (this.optionsObj.selectLinkage.hasOwnProperty(val)) {
                        this.searchOptions.selectLinkage = this.searchOptions.selectLinkage.concat(this.optionsObj.selectLinkage[
                            key]);
                    }
                }
            }
        }
    };
</script>
<style lang="scss">
    .body-bg-default {
        background-color: #f1f1f1;
    }

    .form-horizontal {
        .el-select {
            display: block;
        }
    }

    .el-form-item.is-success .el-input__inner,
    .el-form-item.is-success .el-input__inner:focus,
    .el-form-item.is-success .el-textarea__inner,
    .el-form-item.is-success .el-textarea__inner:focus {
        border-color: #C0C4CC;
    }

    .el-form-item.is-required.is-success .el-input__inner,
    .el-form-item.is-required.is-success .el-input__inner:focus,
    .el-form-item.is-required.is-success .el-textarea__inner,
    .el-form-item.is-required.is-success .el-textarea__inner:focus {
        border-color: #67C23A;
    }

    .el-form-item.is-error .el-input__inner,
    .el-form-item.is-error .el-input__inner:focus,
    .el-form-item.is-error .el-textarea__inner,
    .el-form-item.is-error .el-textarea__inner:focus {
        border-color: #C0C4CC;
    }

    .el-form-item.is-required.is-error .el-input__inner,
    .el-form-item.is-required.is-error .el-input__inner:focus,
    .el-form-item.is-required.is-error .el-textarea__inner,
    .el-form-item.is-required.is-error .el-textarea__inner:focus {
        border-color: #F56C6C;
    }
</style>
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
</style>
