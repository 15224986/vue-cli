<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">mock.js 测试</h3>
                <ul class="section-subhead">
                    <li>1.制作mock.js案例，和使用方式方法。</li>
                    <el-button @click="initData()" type="primary">刷新数据</el-button>
                    <div class="section-subhead-tools">
                        <el-button @click="exportExcel( exportDom, '资产报表.xlsx')" type="primary" plain><i class="el-icon-download"></i>导出 Excel</el-button>
                    </div>
                </ul>
                <div class="table-box">
                    <el-table
                        :data="table"
                        border
                        stripe
                        size="mini"
                        class="text-center"
                        header-row-class-name="el-table-th"
                        ref="exportExcel"
                    >
                        <el-table-column label="排序" type="index" width="50" fixed="left"></el-table-column>
                        <el-table-column label="名字" property="cname" width="100"></el-table-column>
                        <el-table-column label="账号" property="username" width="186" show-overflow-tooltip></el-table-column>
                        <el-table-column label="户口所在地" property="county" min-width="186" show-overflow-tooltip></el-table-column>
                        <el-table-column label="常用软件" property="maliceIdType" width="126"></el-table-column>
                        <el-table-column label="星座" property="constellation" width="88"></el-table-column>
                        <el-table-column label="出生日期" property="recognitionTime" width="126"></el-table-column>
                        <el-table-column label="个人主页" property="url" min-width="186" show-overflow-tooltip></el-table-column>
                        <el-table-column label="说说" property="csentence" min-width="186" show-overflow-tooltip></el-table-column>
                        <el-table-column label="日记" property="csentence" min-width="186" fixed="right" show-overflow-tooltip></el-table-column>
                    </el-table>
                </div>
            </section>
        </div>

    </article>
</template>
<script>
    /**
     * 混入
     * calcIndex    : 序号排序的过滤方法
     * exportExcel  : 导出Excel的方法
     */
    import calcIndex from "@/mixins/calcIndex.js";
    import exportExcel from "@/mixins/exportExcel.js";



    export default {
        name: "mockjsData",
        mixins: [calcIndex, exportExcel],
        data() {
            return {
                loading: false,
                exportDom: "",
                /**
                 * mock.js表格数据
                 */
                table:[]
            };
        },
        created() {
            this.initData()
        },
        mounted() {
            this.$nextTick(()=>{
                let $QS = document.querySelector.bind(document);
                this.exportDom = $QS(".text-center .el-table__fixed")
            })
        },
        methods: {
            /**
             * 初始化获取页面数据
             */
            initData(){
                /**
                 * 模拟ajax获取表格数据
                 */
                this.$http.get('/mock/tableData', {}, {baseURL: ''})
                    .then((res)=>{
                        this.table = res.table;
                    })
                    .catch((err)=>{
                        console.log(err);
                    });

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
        padding-bottom: 36px;
        position: relative;
    }
    .section-subhead-tools{
        position: absolute;
        right: 0;
        top: 0;
    }
    .section-title + .section-subhead{
        margin-top: -6px;
    }
</style>
