<template>
    <div id="wrapper">
        <el-form :inline="true" :model="formSeach" class="demo-form-inline">
            <el-form-item label="姓名">
                <el-input v-model="formSeach.name" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-select v-model="formSeach.gender" placeholder="请选择性别">
                    <el-option label="全部" value></el-option>
                    <el-option label="男" value="1"></el-option>
                    <el-option label="女" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-button type="primary" @click="handleSearch()">查询</el-button>
            <el-button class="pull-right" type="primary" @click="handleAdd()">新增</el-button>
        </el-form>
        <section class="table-box">
            <el-table
                :data="table.records"
                v-loading="listLoading"
                border
                stripe
                size="mini"
                header-row-class-name="el-table-th"
                class="text-center"
                style="width: 100%"
            >
                <el-table-column label="序号" width="60">
                    <template
                        slot-scope="scope"
                    >{{ scope.$index | calcIndex(table.pagination.current,table.pagination.size) }}</template>
                </el-table-column>
                <el-table-column prop="id" label="Id" width="110"></el-table-column>
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="gender" label="性别" width="80">
                    <template slot-scope="scope">{{ scope.row.gender | sexText }}</template>
                </el-table-column>
                <el-table-column prop="birthday" label="出生日期" width="180"></el-table-column>
                <el-table-column prop="phone" label="电话" width="180"></el-table-column>
                <el-table-column prop="username" label="用户名" width="180"></el-table-column>
                <el-table-column
                    prop="createTime"
                    label="创建时间"
                    align="right"
                    sortable
                    header-align="center"
                    width="260"
                ></el-table-column>

                <el-table-column align="left" label="操作" min-width="256">
                    <template slot-scope="scope">
                        <el-button
                            @click="handleDetails(scope.$index, scope.row)"
                            type="success"
                            size="mini"
                            plain
                        >详情</el-button>
                        <el-button
                            @click="handleEdit(scope.$index, scope.row)"
                            type="primary"
                            size="mini"
                            plain
                        >编辑</el-button>
                        <el-button
                            @click="handleDelete(scope.$index, scope.row)"
                            type="danger"
                            size="mini"
                            plain
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </section>
        <section class="pagination-box">
            <el-pagination
                @current-change="handleSearch"
                :current-page="table.pagination.current"
                :page-count="table.pagination.pages"
                :page-size="table.pagination.size"
                layout="total, prev, pager, next, jumper"
                background
            ></el-pagination>
        </section>
    </div>
</template>

<script>
/**
 * 混入
 * calcIndex : 序号排序的过滤方法
 * sexText      : 性别转换的过滤方法
 */
import calcIndex from "@/mixins/calcIndex.js";
import sexText from "@/mixins/sexText.js";

/**
 * 工具
 * merge        : 引入合并多个Object
 * toBoolean    : 将字符串true和false转化成Boolean类型
 */
import merge from "@/utils/merge.js";

export default {
    name: "userList",
    mixins: [calcIndex, sexText],
    data() {
        return {
            listLoading: false, // 调用加载中组件
            formSeach: {
                name: "", // 姓名
                gender: "" // 性别
            },
            table: {
                pagination: {
                    current: 1, // 当前页
                    size: 15, // 页面显示条数
                    pages: 0 // 总页数
                },
                records: [] // table 数据
            }
        };
    },
    created() {
        this.requestTableData();
    },
    methods: {
        /**
         * 搜索事件 & 翻页事件
         */
        handleSearch(val) {
            // 修改当前页
            this.table.pagination.current = val ? val : 1;
            this.requestTableData();
        },
        /**
         * 新增事件
         */
        handleAdd() {
            this.$router.push({ path: "/user/add" });
        },
        /**
         * 详情事件
         */
        handleDetails(index, row) {
            this.$router.push({
                path: "/user/details",
                query: { userId: row.id }
            });
        },
        /**
         * 编辑事件
         */
        handleEdit(index, row) {
            this.$router.push({
                path: "/user/add",
                query: { userId: row.id }
            });
        },
        /**
         * 删除事件
         */
        handleDelete(index, row) {
            this.$confirm("此操作将永久删除该文件, 是否继续?", "系统提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    this.$http
                        .post(
                            `sys/user/delete/${row.id}`,
                            this.table.pagination
                        )
                        .then(response => {
                            if (response.data.msg === "success") {
                                this.requestTableData();
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
                .catch(() => {});
        },
        /**
         * 向后台获取数据
         */
        requestTableData() {
            // 正在加载中
            this.listLoading = true;

            // 合并参数
            let params = merge({}, this.formSeach, this.table.pagination);
            this.$http
                .post(`sys/user/list`, params)
                .then(response => {
                    if (response.data.msg === "success") {
                        this.table = response.data;

                        // 数据挂载完成后去除loading
                        this.$nextTick(function() {
                            this.listLoading = false;
                        });
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>
