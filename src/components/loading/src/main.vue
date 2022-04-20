<template>
    <div class="moc-loading-box" v-show="show">
        <div class="moc-loading-mask"></div>
        <div class="moc-loading-content">
            <div class="moc-loading-animate">
            </div>
            <div class="moc-loading-text">{{text}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mocLoading',
    componentName: 'mocLoading',
    props: {
        show: Boolean,
        text: {
          type: String,
          default: '正在加载中...'
        },
    }
}
</script>

