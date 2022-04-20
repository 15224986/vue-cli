<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section m-t-20">
                <h3 class="section-title">Element 自定义参数</h3>

                <ul class="section-subhead">
                    <li>1、自定义参数：<a href="https://blog.csdn.net/wangchaohpu/article/details/85697771" target="_blank">https://blog.csdn.net/wangchaohpu/article/details/85697771</a></li>
                    <li>2、只传递一个默认参数：<a href="https://www.cnblogs.com/knuzy/p/11097150.html" target="_blank">https://www.cnblogs.com/knuzy/p/11097150.html</a></li>
                    <li>3、传递多个默认的参数：<a href="https://blog.csdn.net/qq_38918953/article/details/105989842" target="_blank">https://blog.csdn.net/qq_38918953/article/details/105989842</a></li>
                </ul>

                <div class="table-box">
                    <el-table
                        :data="tableData"
                        height="320"
                        v-loading="tableLoading"
                        border
                        stripe
                        @selection-change="selectionChange($event, '只传递一个默认参数')"
                        @cell-click="(row, column, cell, event)=>cellClick(row, column, cell, event, '传递多个默认的参数')"
                    >
                        <el-table-column label="" type="index" :index="handleIndex" :width="tableIndexWidth+10" align="center" class-name="neu-table-index"></el-table-column>
                        <el-table-column type="selection" width="55" align="center"></el-table-column>
                        <el-table-column prop="date" label="日期" width="218"></el-table-column>
                        <el-table-column prop="name" label="姓名" width="186"></el-table-column>
                        <el-table-column prop="address" label="地址" min-width="256"></el-table-column>
                    </el-table>
                </div>

                <div class="pagination-box">
                    <el-pagination
                        :current-page.sync="pagination.current"
                        :page-size.sync="pagination.size"
                        :total="pagination.total"
                        :layout="$global.paginationLayout"
                        :page-sizes="$global.paginationSizes"
                        hide-on-single-page
                        background
                        @current-change="initTableData()"
                        @size-change="initTableData()"
                    >
                    </el-pagination>
                </div>

            </section>


        </div>
    </article>
</template>
<script>

    /**
     * 混入对象
     */
    import common from '@/mixins/common.js';            // 通用  每个页面都需要引入

    export default {
        name: "elementCustomParams",
        mixins:[ common ],
        data() {
            return {
                loading: false,
                tableLoading: false,
                tableData: [
                    {
                        id:'1',
                    	date: '2016-05-02',
                    	name: '王小虎',
                    	address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        id:'2',
                    	date: '2016-05-02',
                    	name: '王小虎',
                    	address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        id:'3',
                    	date: '2016-05-02',
                    	name: '王小虎',
                    	address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        id:'4',
                    	date: '2016-05-02',
                    	name: '王小虎',
                    	address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        id:'5',
                    	date: '2016-05-02',
                    	name: '王小虎',
                    	address: '上海市普陀区金沙江路 1518 弄'
                    }
                ],
                /**
                 * 分页器
                 */
                pagination: {
                    current: 1,         // 当前页
                    size: 20,           // 每页显示条数
                    total: 1200         // 总条数
                },
            };
        },
        mounted(){

        },
        methods: {
            /**
             * 只传递一个默认值
             */
            selectionChange( row, text ) {
                console.log( row, text );
            },
            /**
             * 初始化表格数据
             */
            cellClick(row, column, cell, event, text) {
                console.log( row, event, text );
            },
            /**
             * 初始化表格数据
             */
            initTableData() {
                // 正在加载中
                this.tableLoading = true;
                setTimeout(()=>{
                    this.tableLoading = false;
                },3000);
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
</style>
