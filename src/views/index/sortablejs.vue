<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">拖拽 Table</h3>
                <ul class="section-subhead">
                    <li>1.github：<a href="http://sortablejs.github.io/Sortable/">http://sortablejs.github.io/Sortable/</a></li>
                    <li>2.官网：<a href="http://www.sortablejs.com">http://www.sortablejs.com</a></li>
                </ul>
                <div class="table-box">
                    <el-table
                        :data="dataset"
                        border
                        stripe
                        class="text-center"
                        ref="dragTable"
                        :row-key="handleGetRowKeys"
                    >
                        <el-table-column label="排序" type="index" :index="handleIndex" width="50"></el-table-column>
                        <el-table-column label="ID" property="tenantID" width="80"></el-table-column>
                        <el-table-column label="性别" property="tenantID" :formatter="handleSex" width="80"></el-table-column>
                        <el-table-column label="内容" property="text" show-overflow-tooltip min-width="350"></el-table-column>
                    </el-table>
                </div>
                <div class="pagination-box">
                    <el-pagination
                        @current-change="onSearch"
                        :current-page="pagination.current"
                        :page-count="pagination.pages"
                        :page-size="pagination.size"
                        layout="prev, pager, next, jumper"
                        background>
                    </el-pagination>
                </div>
            </section>

            <section class="section">
                <h3 class="section-title">拖拽 Shared lists</h3>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <ul class="sortable-group exampleLeft" ref="exampleLeft">
                            <li v-for="item in list1" :key="item.id">{{item.id}} {{item.text}} <span>left</span></li>
                        </ul>
                    </el-col>
                    <el-col :span="12">
                        <ul class="sortable-group exampleRight" ref="exampleRight">
                            <li v-for="item in list2" :key="item.id">{{item.id}} {{item.text}}</li>
                        </ul>
                    </el-col>
                </el-row>
                <el-button type="primary" @click="consolelog()">主要按钮</el-button>
            </section>


            <section class="section">
                <h3 class="section-title">流程添加</h3>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <ul class="sortable-group exampleLeft" ref="exampleLeft1">
                            <li v-for="(item, index) in list3" :key="index" class="moc-cover-clone" :class="{'filtered':index==4}">{{item.id}} {{item.text}} <span>left</span></li>
                        </ul>
                    </el-col>
                    <el-col :span="12">
                        <ul class="sortable-group exampleRight" ref="exampleRight1" style="height: 300px; background-color: #eee">
                            <li v-for="(item, index) in list4" :key="index">{{item.id}} {{item.text}} <span>right</span></li>
                        </ul>
                    </el-col>
                </el-row>
                <el-button type="primary" @click="consolelog1()">主要按钮</el-button>
            </section>
        </div>

    </article>
</template>
<script>
    /**
     * 混入
     * calcIndex    : 序号排序的过滤方法
     * sexText      : 性别转换的过滤方法
     */
    import calcIndex from "@/mixins/calcIndex.js";
    import sexText from "@/mixins/sexText.js";
    import controlClass from '@/mixins/controlClass.js'
    import deepCopy from "@/mixins/deepCopy.js";
    /**
     * 引入排序插件
     */
    import Sortable from 'sortablejs'


    export default {
        name: "tableDrag",
        mixins: [calcIndex, sexText, controlClass, deepCopy],
        data() {
            return {
                loading: false,
                dataset :[],
                pagination: {
                    current: 1,     // 当前页
                    size: 15,       // 页面显示条数
                    pages: 0,       // 总页数
                },
                list1:[
                    {
                        id:1,
                        text:'Item 1'
                    },
                    {
                        id:2,
                        text:'Item 2'
                    },
                    {
                        id:3,
                        text:'Item 3'
                    },
                    {
                        id:4,
                        text:'Item 4'
                    },
                    {
                        id:5,
                        text:'Item 5'
                    }
                ],
                list2:[
                    {
                        id:11,
                        text:'Item 11'
                    },
                    {
                        id:22,
                        text:'Item 22'
                    },
                    {
                        id:33,
                        text:'Item 33'
                    },
                    {
                        id:44,
                        text:'Item 44'
                    },
                    {
                        id:55,
                        text:'Item 55'
                    }
                ],
                list3:[
                    {
                        id:111,
                        text:'Item 1'
                    },
                    {
                        id:222,
                        text:'Item 2'
                    },
                    {
                        id:333,
                        text:'Item 3'
                    },
                    {
                        id:444,
                        text:'Item 4'
                    },
                    {
                        id:555,
                        text:'Item 5'
                    }
                ],
                list4:[

                ]
            };
        },
        created() {
            this.initData()
        },
        mounted(){
            this.setSortTable();

            this.setSortExample();

            this.setSortExample1();
        },
        methods: {
            /**
             * 获取表格需要展开的row的key值
             */
            handleGetRowKeys (row) {
                return row.tenantID
            },
            /**
             * 排序方法
             */
            setSortTable(){
                const el = this.$refs.dragTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0];
                Sortable.create(el,{
                    // ghostClass:'sortable-active',    // 选中添加的类名
                    // setData:function(dataTransfer){  // 没发现有什么作用、所以注释了
                    //     dataTransfer.setData('Text', '515151')
                    // },
                    onEnd: evt => {
                        const targetRow = this.dataset.splice(evt.oldIndex, 1)[0];
                        this.dataset.splice(evt.newIndex, 0, targetRow);
                    }
                })
            },
            /**
             * 排序方法
             */
            setSortExample(){
                let example2Left = this.$refs.exampleLeft;
                new Sortable(example2Left, {
                    group: 'shared', // set both lists to same group
                    onEnd: evt => {
                        // console.log( evt.to );
                        const targetRow = this.list1.splice(evt.oldIndex, 1)[0];
                        if( this.hasClass(evt.to,'exampleRight') ){
                            this.list2.splice(evt.newIndex, 0, targetRow);
                        }else{
                            this.list1.splice(evt.newIndex, 0, targetRow);
                        }
                        // console.log( this.list1 );
                    }
                });
                let example2Right = this.$refs.exampleRight;
                new Sortable(example2Right, {
                    group: 'shared',
                    onEnd: evt => {
                        const targetRow = this.list2.splice(evt.oldIndex, 1)[0];
                        if( this.hasClass(evt.to,'exampleRight') ){
                            this.list2.splice(evt.newIndex, 0, targetRow);
                        }else{
                            this.list1.splice(evt.newIndex, 0, targetRow);
                        }
                    }
                });
            },
            consolelog(){
                console.log( this.list1, this.list2 );

                console.log( this.list2.length );
            },
            /**
             * 排序方法
             */
            setSortExample1(){
                let example2Left1 = this.$refs.exampleLeft1;
                new Sortable(example2Left1, {
                    group: {
                        name: 'shared',
                        pull: 'clone',
                        put: false      // 不允许拖拽进这个列表
                    },
                    filter: '.filtered', // 'filtered' class is not draggable
                    sort: false,        // 设为false，禁止sort
                    onEnd: evt => {
                        const targetRow = this.setDeepCopy(this.list3[evt.oldIndex]);
                        this.list4.splice(evt.newIndex, 0, targetRow);
                        // 删除通过Sortable插件移动过来的dom
                        $(".exampleRight .moc-cover-clone").remove();
                    }
                });
                let example2Right1 = this.$refs.exampleRight1;
                new Sortable(example2Right1, {
                    group: {
                        name: 'shared'
                    },
                    onEnd: evt => {
                        // 更新数据
                        const targetRow = this.list4.splice(evt.oldIndex, 1)[0];
                        this.list4.splice(evt.newIndex, 0, targetRow);
                        // 更新dom
                        const clone = this.setDeepCopy(this.list4); // 克隆数组
                        this.list4.splice(0,this.list4.length-1); // 清空数组
                        this.$nextTick(()=>{
                            this.list4 = clone;
                        });
                    }
                });
            },
            consolelog1(){
                console.log( this.list4 );

                // console.log( this.list4.length );
            },
            /**
             * 分页器事件
             */
            onSearch(val) {
                this.pagination.current = val ? val : 1;
                this.initData();
            },
            /**
             * 初始化获取页面数据
             */
            initData(){
                // 正在加载中
                this.loading = true;
                /**
                 * 模拟ajax获取表格数据
                 */
                setTimeout(()=>{
                    this.$http.get('/mock/tableData', {}, {baseURL: ''})
                        .then((res)=>{
                            // 去除加载中
                            this.loading = false;
                            this.dataset = res.dataset;
                        })
                        .catch((err)=>{
                            console.log(err);
                        });
                }, 1350);
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
    .sortable-group{
        li{
            color: #333;
            border: #ccc 1px solid;
            margin-top: -1px;
            padding: 10px 16px;
        }
        // 选中
        .sortable-chosen{
            background-color: #ffebb3;
        }
        // 移动中
        .sortable-ghost{
            background-color: #5cbce9;
        }
    }
    .exampleLeft{
        background-color: #fff6b2;
    }

    .moc-cover-clone.filtered{
        background-color: red;
    }
</style>
