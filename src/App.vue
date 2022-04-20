<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    // 加载资源
    export default {
        name: 'App'
    }
</script>
<style lang="scss">
    // 引入公共的css
    @import './styles/global.scss';
</style>
