<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">js复杂数据类型的深层复制</h3>

                <h5 class="color-title">原数组</h5>
                <ul class="color-list">
                    <li
                        class="color-item"
                        v-for="(item, index) in sourceArr"
                        :key="index"
                    >{{item}}</li>
                </ul>
                <h5 class="color-title">深层复制后修改的数组</h5>
                <ul class="color-list">
                    <li
                        class="color-item"
                        v-for="(item, index) in sourceArr2"
                        :key="index"
                    >{{item}}</li>
                </ul>

                <h5 class="color-title">原对象</h5>
                <ul class="color-list">
                    <li
                        class="color-item"
                        v-for="(item, key) in sourceObj"
                        :key="key"
                    >{{key}}：{{item}}</li>
                </ul>
                <h5 class="color-title">深层复制后修改的对象</h5>
                <ul class="color-list">
                    <li
                        class="color-item"
                        v-for="(item, key) in sourceObj2"
                        :key="key"
                    >{{key}}：{{item}}</li>
                </ul>
            </section>            
        </div>

    </article>
</template>
<script>
    /**
     * 混入
     * deepCopy     : js复杂数据类型的深层复制
     */
    import deepCopy from '@/mixins/deepCopy.js'

    export default {
        name: "complexData",
        mixins: [deepCopy],
        data() {
            return {
                loading: false,
                /**
                 * js复杂数据类型的深层复制
                 */
                sourceArr:[1,2,3],
                sourceArr2:[],
                sourceObj:{
                    id: 1,
                    name:"朱孝天",
                    sex:'男',
                    works:''
                },
                sourceObj2:{}
            };
        },
        created() {
            /**
             * js复杂数据类型的深层复制
             */
            this.sourceArr2 = this.setDeepCopy( this.sourceArr );
            this.sourceArr2[2] = "cccccc";

            this.sourceObj2 = this.setDeepCopy( this.sourceObj );
            this.sourceObj2['works'] = "《流星花园》《楚留香传奇》《东京审判》《情牵一线》";
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
    .search-list{
        margin-top: 17px;
        li{
            line-height: 36px;
            padding-left: 10px;
            border: #eee 1px solid;
            margin-top: -1px
        }
    }
    .color-title{
        margin-bottom: 6px;
    }
    .color-list{
        padding-top: 1px;
        li{
            margin-top: -1px;
            line-height: 34px;
            padding-left: 10px;
            border: #eee 1px solid;
            &.dragging{
                background-color: #f6f6f6;
            }
        }
    }
    .color-list + .color-list{
        margin-top: 30px;
    }
</style>