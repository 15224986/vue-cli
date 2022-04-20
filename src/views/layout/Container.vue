<template>
    <el-container>
    	<el-aside width="220px">
            <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                router
            >
                <sidebar-item v-for="(route, index) in permission_routes" :key="index" :item="route" />
    		</el-menu>
    	</el-aside>
        <el-main>
    		<router-view></router-view>
    	</el-main>
    </el-container>
</template>
<script>
    export default {
        mixins:[],
        components: {
            sidebarItem:()=>import('./SidebarItem.vue')
        },
        data () {
			return {
                permission_routes: this.$store.getters.addRouters
			}
        },
        created(){
        },
        mounted(){
            // console.log( this.$store.getters.addRouters )
        },
        methods:{
        }
    }
</script>
<style lang="scss">
    .el-menu,
    .el-aside {
        color: #333;
        border: 0 none;
    }
    .el-main{
        padding: 0;
    }
</style>
