<template>
    <section class="section">
        <h2>svg-icon</h2>
        <ul class="section-subhead">
            <li>1.使用方法：{{ generateIconCode() }} 或 {{ generateIconCode(true) }} </li>
        </ul>
        <ul class="section-svg-icons">
            <li v-for="(item, idx) of iconsMap" :key="item">
                <svg-icon :icon-class="item" :class-name="'index-'+idx"></svg-icon>
                <span>{{ item }}</span>
            </li>
        </ul>
    </section>
</template>

<script>
    import icons from '@/icons/generateIconsView'

    export default {
        data () {
            return {
                iconsMap: icons.data,
            }
        },
        methods: {
            /**
             * svg-icons 展示
             */
            generateIconCode(type) {
                if( type ){
                    return `<svg-icon icon-class="404" class-name="自定义CLASS"></svg-icon>`
                }else{
                    return `<svg-icon icon-class="404"></svg-icon>`
                }
            },
        }
    }
</script>
