<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading.fullscreen="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">安装使用</h3>
                <ul class="section-subhead">
                    <li>安装相关依赖： npm install --save xlsx</li>
                    <li>具体插件使用参考： <el-link href="https://github.com/SheetJS/js-xlsx" type="primary" target="_blank">https://github.com/SheetJS/js-xlsx</el-link></li>
                </ul>
            </section>

            <section class="section">
                <h3 class="section-title">读取excel文件</h3>
                <dl class="section-subhead">
                    <dt>参考网址</dt>
                    <dd>读取XLSX文件操作步骤： <el-link href="https://blog.csdn.net/shentian885/article/details/123440586" type="primary" target="_blank">https://blog.csdn.net/shentian885/article/details/123440586</el-link></dd>
                    <dd>js读取excel文件： <el-link href="https://www.cnblogs.com/of-course/p/14298408.html" type="primary" target="_blank">https://www.cnblogs.com/of-course/p/14298408.html</el-link></dd>
                    <dd>js读取xls或xlsx： <el-link href="https://www.jianshu.com/p/4f50cd6884ea" type="primary" target="_blank">https://www.jianshu.com/p/4f50cd6884ea</el-link></dd>
                    <dd>js-xlsx的使用： <el-link href="https://www.cnblogs.com/ajaemp/p/12880847.html" type="primary" target="_blank">https://www.cnblogs.com/ajaemp/p/12880847.html</el-link></dd>
                    <div class="section-subhead-tools">
                        <el-upload
                            class="upload-demo"
                            ref="upload"
                            action=""
                            :limit="1"
                            accept=".xlsx, .xls, .csv"
                            :show-file-list="false"
                            :auto-upload="false"
                            :on-change="uploadExcelSuccess"
                        >
                            <el-button type="primary" plain icon="el-icon-upload2">选取文件</el-button>
                        </el-upload>
                    </div>
                </dl>
                <div class="table-box">
                    <el-table
                        :data="xlsxTable"
                        ref="exportExcel"
                        border
                        stripe
                        header-row-class-name="el-table-th"
                    >
                        <el-table-column v-for="item in tableColumn" :prop="item" :label="item" min-width="168"></el-table-column>
                    </el-table>
                </div>
            </section>

            <section class="section">
                <h3 class="section-title">导出excel文件</h3>
                <dl class="section-subhead">
                    <dt>参考网址</dt>
                    <dd>js-xlsx的使用： <el-link href="https://www.cnblogs.com/ajaemp/p/12880847.html" type="primary" target="_blank">https://www.cnblogs.com/ajaemp/p/12880847.html</el-link></dd>
                    <dd>表格数据导出Excel功能： <el-link href="https://www.jianshu.com/p/2819b563bfd7" type="primary" target="_blank">https://www.jianshu.com/p/2819b563bfd7</el-link></dd>
                    <div class="section-subhead-tools">
                        <el-button @click="exportExcel( $refs.exportExcel.$el, '资产报表.xlsx')" type="primary" plain icon="el-icon-download">dom 导出 Excel</el-button>
                        <el-button @click="exportExcel( excelData, '涉诈域名网址处置数据.xlsx')" type="primary" plain icon="el-icon-download">data 导出 Excel</el-button>
                        <el-button @click="exportExcel( $refs.exportExcel.$el, '资产报表.csv')" type="primary" plain icon="el-icon-download">dom 导出 Csv</el-button>
                        <el-button @click="exportExcel( excelData, '涉诈域名网址处置数据.csv')" type="primary" plain icon="el-icon-download">data 导出 Csv</el-button>
                    </div>
                </dl>
                <div class="table-box">
                    <el-table
                        :data="dataset"
                        height="390px"
                        ref="exportExcel"
                        border
                        stripe
                        header-row-class-name="el-table-th"
                    >
                        <el-table-column label="排序" type="index" width="50"></el-table-column>
                        <el-table-column prop="date" label="日期" width="218"></el-table-column>
                        <el-table-column prop="name" label="姓名" width="186"></el-table-column>
                        <el-table-column prop="address" label="地址" min-width="256"></el-table-column>
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
    import exportexcel from "@/mixins/exportExcel.js";

    export default {
        name: "tableRelevant",
        mixins: [calcIndex, exportexcel],
        components: {

        },
        data() {
            const item = {
            	date: '2016-05-02',
            	name: '王小虎',
            	address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                loading: false,
                /**
                 * xlsx表格数据
                 */
                tableColumn:[],
                xlsxTable:[],
                /**
                 * 表格数据
                 */
                dataset: Array(20).fill(item),
                excelData: [
                    /**
                     * sheet1
                     * 可以有多个sheet页面
                     */
                    {
                        // sheet 的名字 可以为空
                        sheetName: "涉诈域名网址",
                        // 表头  不可以为空数组
                        tableHead:[ "工单ID", "内容", "处置类型", "处置数据类型"],
                        // 表“列”对应的key
                        tableProp:[ "commandId", "content", "disposeType", "type"],
                        // 表数据
                        tableData:[
                            {
                                commandId:"YMCZ_20211026_0002",
                                content:"http://bazhan-shanxi.cmecloud.cn:50080/J11.htm",
                                disposeType:"解除",
                                type:"网址",
                            },
                            {
                                commandId:"YMCZ_20211026_0002",
                                content:"http://bazhan-shanxi.cmecloud.cn",
                                disposeType:"重定向",
                                type:"域名",
                            },
                            {
                                commandId:"YMCZ_20211026_0002",
                                content:"36.134.77.34",
                                disposeType:"IP",
                                type:"地址",
                            },
                            {
                                commandId:"YMCZ_20211026_0002",
                                content:"67.220.90.13",
                                disposeType:"解除",
                                type:"地址",
                            }
                        ]
                    },
                    /**
                     * sheet2
                     */
                    {
                        tableProp:[ "content" ],
                        tableData:[
                            {
                                content: "1、ABCD四列不需要修改"
                            },
                            {
                                content: "2、EFGHIJ列按照实际情况填写"
                            },
                            {
                                content: "3、E列处置状态允许填写字段为“已处置”或“未处置”"
                            },
                            {
                                content: "4、F列填写实际公司名称"
                            }
                        ]
                    }
                ]
            };
        },
        created() {

        },
        methods: {
            uploadExcelSuccess(file, fileList){
                this.loading = true
                const reader = new FileReader()
                reader.onload = e => {
                    const data = e.target.result
                    const workbook = this.$XLSX.read(data, { type: 'array' })
                    console.log( workbook )

                    const firstSheetName = workbook.SheetNames[0]
                    const worksheet = workbook.Sheets[firstSheetName]
                    const results = this.$XLSX.utils.sheet_to_json(worksheet)
                    console.log( results )

                    // 绘制表格
                    for (let key in results[0]){
                        this.tableColumn.push(key)
                    }
                    this.xlsxTable = results

                    // 清空上传列表
                    this.$refs.upload.clearFiles()

                    this.loading = false
                }
                reader.readAsArrayBuffer(file.raw)
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
