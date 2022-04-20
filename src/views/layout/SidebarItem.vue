<template>
    <div v-if="!item.meta.hidden">
        <el-submenu v-if="item.children && item.children.length>0" :index="item.path">
            <template slot="title">{{item.meta.name}}</template>
            <sidebar-item v-for="(child, idx) in item.children" :key="idx" :item="child" />
        </el-submenu>
        <a v-else-if="item.meta.isExtLink" :href="item.meta.path" target="_blank">
            <el-menu-item>
                <i v-if="item.meta.icon" :class="item.meta.icon"></i>
                {{item.meta.name}}
            </el-menu-item>
        </a>
        <el-menu-item v-else :index="item.meta.path">
            <i v-if="item.meta.icon" :class="item.meta.icon"></i>
            {{item.meta.name}}
        </el-menu-item>
    </div>
</template>
<script>
    export default {
        name: 'sidebarItem',
        props: {
            // route object
            item: {
                type: Object,
                required: true
            }
        },
        data() {
            return {}
        },
        mounted() {
            // console.log( this.item )
        },
        methods: {

        }
    }
</script>
