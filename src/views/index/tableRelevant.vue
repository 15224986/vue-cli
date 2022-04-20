<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">状态排序
                    <el-button @click="onSort()" type="primary" circle>
                        <i :class="{'el-icon-upload2':sort==1,'el-icon-download':sort==2}"></i>
                    </el-button>
                    <el-button size="mini" @click="handleExpandAll">展开</el-button>
                </h3>
                <ul class="section-subhead">
                    <li>1.根据“状态”是否选中，进行升序和降序的排序</li>
                    <li>2.通过formatter，进行页面的显示。将1、2转换成男女，将boolean类型的显示在表格中等。</li>
                </ul>
                <div class="table-box">
                    <el-table
                        :data="dataset"
                        height="390px"
                        border
                        stripe
                        class="text-center"
                        header-row-class-name="el-table-th"
                        :row-key="handleGetRowKeys"
                        :expand-row-keys="expands"
                    >
                        <el-table-column type="expand">
                            <template slot-scope="scope">
                                <ul>
                                    <li>{{ scope.row.text }}</li>
                                </ul>
                                <div class="demo-images-list">
                                  <el-image
                                    :src="url"
                                    :preview-src-list="srcList">
                                  </el-image>
                                </div>
                            </template>
                        </el-table-column>

                        <el-table-column label="排序" type="index" :index="handleIndex" width="50"></el-table-column>
                        <el-table-column width="50" align="center" min-width="50">
                            <template slot="header" slot-scope="scope">
                                <span class="neu-table-cell">
                                    <font :item="scope.$index">排序</font>
                                </span>
                            </template>
                            <template slot-scope="scope">
                                <span>{{ scope.$index | calcIndex( pagination.current, pagination.size) }}</span>
                            </template>
                        </el-table-column>

                        <el-table-column label="ID" property="tenantID" width="80"></el-table-column>

                        <el-table-column label="性别" property="sex" :formatter="handleSex" width="80"></el-table-column>
                        <el-table-column label="性别" width="80">
                            <template slot-scope="scope">{{ scope.row.sex | sexText }}</template>
                        </el-table-column>

                        <el-table-column label="内容" property="text" show-overflow-tooltip min-width="350"></el-table-column>
                        <el-table-column label="状态" property="checked" width="80" :formatter="handleFormatBoolean" min-width="110"></el-table-column>
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
                <h3 class="section-title">状态排序
                    <table-column-config :show-column="tableColumnConfigShow" :data="tableColumnConfigData" @closed-callback="showColumnCallback"></table-column-config>
                </h3>
                <div class="table-box">
                    <el-table
                        :data="tableData"
                        height="390px"
                        border
                        stripe
                        class="text-center"
                        @sort-change="sortTable"
                        :default-sort="{ prop:'date', order:'descending'}"
                        row-key="id"
                        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
                        lazy
                        :load="load"
                    >
                        <el-table-column label="排序" type="index" width="50"></el-table-column>
                        <el-table-column label="ID" prop="id" v-if="setTableColumn('id')" sortable="custom" width="80"></el-table-column>
                        <el-table-column label="日期" prop="date" v-if="setTableColumn('date')" sortable :sort-orders="['ascending', 'descending']" width="180"></el-table-column>
                        <el-table-column label="姓名" prop="name" v-if="setTableColumn('name')" sortable="custom" width="180"></el-table-column>
                        <el-table-column label="地址" prop="address" v-if="setTableColumn('address')" min-width="350" show-overflow-tooltip></el-table-column>
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
     * sexText      : 性别转换的过滤方法
     */
    import calcIndex from "@/mixins/calcIndex.js";
    import sexText from "@/mixins/sexText.js";

    export default {
        name: "tableRelevant",
        components: {
            tableColumnConfig:()=>import('@/views/components/table-column-config/table-column-config.vue')
        },
        mixins: [calcIndex, sexText],
        data() {
            return {
                loading: false,

                /**
                 * 图片路径
                 */
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                srcList: [
                    'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
                ],
                /**
                 * sort 排序 表格数据
                 */
                sort: 1,
                dataset :[],
                tableData: [
                    {
                        id: 1,
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        id: 2,
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄'
                    },
                    {
                        id: 3,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄',
                        children: [
                            {
                                id: 31,
                                date: '2019-05-01',
                                name: '王老虎',
                                address: '上海市普陀区金沙江路 1519 弄'
                            }, {
                                id: 32,
                                date: '2019-05-01',
                                name: '王老虎',
                                address: '上海市普陀区金沙江路 1519 弄'
                            },
                        ]
                    },
                    {
                        id: 4,
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄',
                        hasChildren: true
                    },
                ],
                pagination: {
                    current: 1,     // 当前页
                    size: 15,       // 页面显示条数
                    pages: 0,       // 总页数
                },
                /**
                 * 展开关闭
                 */
                expands: [],         // 要展开的行，数值的元素是row的key值
                /**
                 * 列显示
                 */
                tableColumnConfigShow: ['id'],
                tableColumnConfigData: [
                    {
                        label: "ID",
                        key: "id"
                    },
                    {
                        label: "日期",
                        key: "date"
                    },
                    {
                        label: "姓名",
                        key: "name"
                    },
                    {
                        label: "地址",
                        key: "address"
                    }
                ],
            };
        },
        computed: {
            /**
             * 计算列是否显示
             */
            setTableColumn() {
                return function (prop) {
                    return this.tableColumnConfigShow.includes( prop );
                }
            }
        },
        created() {
            this.initData()
        },
        methods: {
            showColumnCallback(value){
                this.tableColumnConfigShow = value;
            },
            /**
             * 获取表格需要展开的row的key值
             */
            handleGetRowKeys (row) {
                return row.tenantID
            },
            handleExpandAll(){
                if( this.expands.length > 0 ){
                    this.expands.splice(0, this.expands.length);
                }else{
                    this.dataset.forEach( (el)=>{
                        this.expands.push(el.tenantID)
                    });
                }
            },
            /**
             * 表格显示状态
             */
            handleFormatBoolean: function (row, column, cellValue, index) {
                var ret = ''  // 你想在页面展示的值
                if (cellValue) {
                    ret = "true"  //根据自己的需求设定
                } else {
                    ret = "false"
                }
                return ret;
            },
            /**
             * 表格排序的方法
             */
            onSort(){
                let i = 0;
                if( this.sort===1 ){
                    this.dataset.forEach((el,index)=>{
                        if(el.checked){
                            let obj = el;
                            this.dataset.splice(index,1);
                            this.dataset.splice(i,0,obj);
                            i++;
                        }
                    });
                    this.sort=2;
                }else if(this.sort===2){
                    this.dataset.forEach((el,index)=>{
                        if(!el.checked){
                            let obj = el;
                            this.dataset.splice(index,1);
                            this.dataset.splice(i,0,obj);
                            i++;
                        }
                    });
                    this.sort=1;
                }
            },
            /**
             * 分页器事件
             */
            onSearch(val) {
                this.pagination.current = val ? val : 1;
                this.initTableData();
            },


            /**
             * 排序
             */
            sortTable(params){
                console.log(params, '初始化排序');
            },
            // 树形结构，加载数据
            load(tree, treeNode, resolve) {
                setTimeout(() => {
                    resolve([
                        {
                            id: 41,
                            date: '2020-05-01',
                            name: '赵大国',
                            address: '上海市普陀区金沙江路 1519 弄'
                        },
                        {
                            id: 42,
                            date: '2020-05-01',
                            name: '赵大国',
                            address: '上海市普陀区金沙江路 1519 弄'
                        },
                        {
                            id: 43,
                            date: '2020-05-01',
                            name: '赵大国',
                            address: '上海市普陀区金沙江路 1519 弄'
                        },
                        {
                            id: 44,
                            date: '2020-05-01',
                            name: '赵大国',
                            address: '上海市普陀区金沙江路 1519 弄'
                        },
                        {
                            id: 45,
                            date: '2020-05-01',
                            name: '赵大国',
                            address: '上海市普陀区金沙江路 1519 弄'
                        },
                        {
                            id: 46,
                            date: '2020-05-01',
                            name: '赵大国',
                            address: '上海市普陀区金沙江路 1519 弄'
                        },
                        {
                            id: 47,
                            date: '2020-05-01',
                            name: '赵大国',
                            address: '上海市普陀区金沙江路 1519 弄'
                        },
                        {
                            id: 48,
                            date: '2020-05-01',
                            name: '赵大国',
                            address: '上海市普陀区金沙江路 1519 弄'
                        }
                    ])
                }, 1000)
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
                this.$http.get('/mock/tableData')
                    .then((res)=>{
                        setTimeout(()=>{
                            // 去除加载中
                            this.loading = false;
                            this.dataset = res.dataset;
                            this.pagination = res.pagination;

                            this.handleExpandAll();
                        }, 1350);
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
        padding-bottom: 16px;
    }
    .section-title + .section-subhead{
        margin-top: -6px;
    }

    .demo-images-list{
        .el-image{
            width: 100px;
            height: 120px;
        }
    }
</style>
