<template>
    <el-container>
		<el-header class="moc-page-header">
            <router-link :to="{path:'/home'}">首页</router-link>
        </el-header>
        <router-view></router-view>
    </el-container>
</template>
<script>
    export default {
        data () {
			return {
			}
        },
        created(){
        },
        mounted(){
        },
        methods:{
        }
    }
</script>
<style lang="scss">
    html,
    body,
    #app,
    #app>.el-container{
        height: 100%;
    }
    .el-header {
        color: #333;
        line-height: 60px;
    }
    .moc-page-header{
        background-color: #00A0E9;
        a{
            color: #ffffff;
        }
    }
    .moc-container{
        height: 100%;
        @include displayFlex;
        @include boxOrient;
        overflow: auto;
        background-color: #f2f2f2;
        >.moc-section{
            margin-left: 20px;
            margin-right: 20px;
        }
    }
    .moc-container-section{
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 20px;
    }
    .moc-container-section:last-child{
        margin-bottom: 20px;
    }
    .moc-container-bodier{
        position: relative;
        @include displayFlexNumber;
        overflow: auto;
    }




    /**
     * 表格文件定义样式
     */
    .moc-pagination{
        margin-top: 0;
        background-color: #FFFFFF;
        text-align: center;
        .el-pagination{
            margin: 10px auto;
            display: inline-block;
        }
    }



    /**
     * 表单文件定义样式
     * 上面写单独的组件
     * 下面是这四种格式
     */
    // 行内表单两个组件之间的分隔符，例：  开始时间 至 结束时间
    .moc-form-label-static{
    	padding: 0 10px;
    }
    // 行内表单
    .moc-form-inline{

    }
    // 表格的搜索条件
    .moc-search-form{
        .el-form-item{
            margin-bottom: 6px;
        }
        .moc-search-btns{
            .el-button--small{
                position: relative;
                top: -1px;
            }
        }
    }
    // 典型表单
    .moc-form-horizontal{

    }
    // 表单页的查看详情
    .neu-form-details{
        .el-form-item--mini.el-form-item{
            margin-bottom: 6px;
        }
    }


</style>
