<template>
    <el-breadcrumb :separator="separator" :separator-class="separatorClass" v-bind="$attrs" v-on="$listeners">
        <el-breadcrumb-item v-for="(item,index) in breadcrumb" :key="index" :to=" item.path ? { path: item.path }:'' " :replace="replace">{{ item.name }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
export default {
    name: 'mocBreadcrumb',
    componentName: 'mocBreadcrumb',
    props:{
        separator:{
            type: String,
            default: '/'
        },
        separatorClass:{
            type: String,
            default: ''
        },
        replace:{
            type: Boolean,
            default: false
        },
        pushBreadcrumb:{
            type: Object,
            default: function () {
                return {}
            }
        }
    },
    data() {
        return {
            // 路径导航
            breadcrumb:[]
        };
    },
    mounted(){
        this.$route.matched.filter(item => {
            if( item.meta.name ){
                this.breadcrumb.push( item.meta );
            }
        });
        if( this.pushBreadcrumb.name ){
            this.breadcrumb.push( this.pushBreadcrumb );
        }
    }
};
</script>
