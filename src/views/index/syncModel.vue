<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">数据的双向传递</h3>
                <div class="m-b-20">
                    <syncTest :syncText.sync="syncText"></syncTest>
                    <modelTest v-model="modelText"></modelTest>
                    <modelValue v-model="modelValue"></modelValue>
                </div>
                <h2>这是通过修饰符 visible.sync 传递的值 <span>{{ syncText }}</span></h2>
                <h2>这是通过 v-model，model 传递的值 <span>{{ modelText }}</span></h2>
                <h2>这是通过 v-model，value 传递的值 <span>{{ modelValue }}</span></h2>
                <div class="images-box">
                    <img src="./components/images/20180914142603920.png" alt="">
                </div>
            </section>           
        </div>
    </article>
</template>
<script>
    // 数据的双向传递 组件
    import syncTest from './components/model-sync/syncTest.vue';
    import modelTest from './components/model-sync/modelTest.vue';
    import modelValue from './components/model-sync/modelValue.vue';

    export default {
        name: "syncModel",
        components: {
            syncTest,
            modelTest,
            modelValue
        },
        data() {
            return {
                loading: false,
                /**
                 * 数据的双向传递
                 */
                syncText: 'true',
                modelText: 'true',
                modelValue: 'true'
            };
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
    .images-box img{
        width: 100%;
    }
</style>