<template>
    <div id="wrapper">
        <el-form :inline="true" :model="formSeach" class="demo-form-inline">
            <el-form-item label="姓名">
                <el-input v-model="formSeach.name" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-select v-model="formSeach.gender" placeholder="请选择性别">
                    <el-option label="全部" value=""></el-option>
                    <el-option label="男" value="1"></el-option>
                    <el-option label="女" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-button type="primary" @click="handleSearch">查询</el-button>
            <div class="pull-right">
                <router-link class="btn btn-primary" to="/jurisdiction/add">新增</router-link>
            </div>
        </el-form>
        <section class="table-box">
            <el-table :data="table.records" v-loading="listLoading" border stripe header-row-class-name="el-table-th" class="text-center" style="width: 100%">
                <el-table-column label="序号" width="60">
                    <template slot-scope="scope">
                        {{ scope.$index | indexFilters(table.pagination.current,table.pagination.size) }}
                    </template>
                </el-table-column>
                <el-table-column prop="id" label="Id" width="110">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="gender" label="性别" width="80">
                    <template slot-scope="scope">
                        {{ scope.row.gender | gender('性别',true) }}
                    </template>
                </el-table-column>
                <el-table-column prop="birthday" label="出生日期" width="180">
                </el-table-column>
                <el-table-column prop="phone" label="电话" width="180">
                </el-table-column>
                <el-table-column prop="username" label="用户名" width="180">
                </el-table-column>
                <el-table-column prop="createTime" label="创建时间" align="right" sortable header-align="center" width="260">
                </el-table-column>
                <el-table-column align="left" label="操作" min-width="256">
                    <template slot-scope="scope">
                        <a class="btn-text btn-text-success" @click="handleDetails(scope.$index, scope.row)" href="javascript:;">[详情]</a>
                        <a class="btn-text btn-text-primary" @click="handleEdit(scope.$index, scope.row)" href="javascript:;">[编辑]</a>
                        <a class="btn-text btn-text-danger" @click="handleDelete(scope.$index, scope.row)" href="javascript:;">[删除]</a>
                    </template>
                </el-table-column>
            </el-table>
        </section>
        <section class="pagination-box">
            <el-pagination @current-change="handleCurrentChange" :current-page="table.pagination.current" :page-count="table.pagination.pages" :page-size="table.pagination.size" layout="prev, pager, next, jumper" background>
            </el-pagination>
        </section>
    </div>
</template>
<script>
    export default {
        name: 'echartsLine',
        data() {
            return {
                formSeach: {
                    name: '',
                    gender: '',
                },
                listLoading: false,
                table: {
                    pagination: {
                        current: 1, // 当前页
                        size: 15, // 页面显示条数
                        pages: 0, // 总页数
                    },
                    records: [
                        {
                            id:  12,
                            name: 'anni',
                            gender: 1,
                            birthday: '2011-08-29',
                            phone: '18602451142',
                            username: '54155',
                            createTime: '2019-03-18 14:20:15'
                        },
                        {
                            id: 13,
                            name: 'anni',
                            gender: 1,
                            birthday: '2011-08-29',
                            phone: '18602451142',
                            username: '54155',
                            createTime: '2019-03-18 14:20:15'
                        },
                        {
                            id: 14,
                            name: 'anni',
                            gender: 1,
                            birthday: '2011-08-29',
                            phone: '18602451142',
                            username: '54155',
                            createTime: '2019-03-18 14:20:15'
                        },
                        {
                            id: 15,
                            name: 'anni',
                            gender: 1,
                            birthday: '2011-08-29',
                            phone: '18602451142',
                            username: '54155',
                            createTime: '2019-03-18 14:20:15'
                        },
                        {
                            id: 16,
                            name: 'anni',
                            gender: 1,
                            birthday: '2011-08-29',
                            phone: '18602451142',
                            username: '54155',
                            createTime: '2019-03-18 14:20:15'
                        },
                        {
                            id: 17,
                            name: 'anni',
                            gender: 1,
                            birthday: '2011-08-29',
                            phone: '18602451142',
                            username: '54155',
                            createTime: '2019-03-18 14:20:15'
                        },
                        {
                            id: 18,
                            name: 'anni',
                            gender: 1,
                            birthday: '2011-08-29',
                            phone: '18602451142',
                            username: '54155',
                            createTime: '2019-03-18 14:20:15'
                        },
                        {
                            id: 19,
                            name: 'anni',
                            gender: 1,
                            birthday: '2011-08-29',
                            phone: '18602451142',
                            username: '54155',
                            createTime: '2019-03-18 14:20:15'
                        }
                    ], // table 数据
                },
            };
        },
        created() {

        },
        mounted() {

        },
        filters: {// 过滤器
            gender(value,arg1,arg2){
                if ( value == 1 ){
                    return '男'
                }else{
                    return '女'
                }
            },
            indexFilters(value,current,size){
                return ( current-1 ) * size + value + 1
            }
        },
        watch: {

        },
        methods: {
            /**
             * 新增事件
             */
            handleAdd(){
                
            },
            /**
             * 删除事件
             */
            handleDelete(index, row) {
                
            },
            /**
             * 编辑事件
             */
            handleEdit(index, row) {
                
            },
            /**
             * 详情事件
             */
            handleDetails(index, row) {
                
            },
            /**
             * 搜索事件
             */
            handleSearch() {
                
            },
            /**
             * 分页器事件
             */
            handleCurrentChange(val) {
                
            },
        },
    };
</script>