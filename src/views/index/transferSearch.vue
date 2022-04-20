<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">Transfer 穿梭框自定义搜索</h3>
                <ul class="section-subhead">
                    <li>1.Transfer 穿梭框自定义搜索</li>
                </ul>
                <el-transfer
                    filterable
                    :filter-method="handleTransferMethod"
                    filter-placeholder="请输入城市拼音"
                    v-model="transferValue"
                    :data="transferData">
                </el-transfer>
            </section>

            <section class="section">
                <h3 class="section-title">图片放大缩小</h3>

                <div class="demo-images-list">
                  <el-image
                    :src="url"
                    :preview-src-list="srcList">
                  </el-image>
                </div>
            </section>


        </div>
    </article>
</template>
<script>
    export default {
        name: "transferSearch",
        data() {
            return {
                loading: false,
                /**
                 * Transfer 穿梭框自定义搜索
                 */
                transferValue: [],
                transferData:[
                    {
                        label: '上海',
                        key: 1,
                        pinyin: 'shanghai'
                    },
                    {
                        label: '北京',
                        key: 2,
                        pinyin: 'beijing',
                    },
                    {
                        label: '广州',
                        key: 3,
                        pinyin: 'guangzhou',
                    },
                    {
                        label: '深圳',
                        key: 4,
                        pinyin: 'shenzhen',
                    },
                    {
                        label: '南京',
                        key: 5,
                        pinyin: 'nanjing',
                    },
                    {
                        label: '西安',
                        key: 6,
                        pinyin: 'xian',
                    },
                    {
                        label: '成都',
                        key: 7,
                        pinyin: 'chengdu'
                    }
                ],

                /**
                 * 图片路径
                 */
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                srcList: [
                    'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
                ]
            };
        },
        methods: {
            /**
             * Transfer 穿梭框自定义搜索
             */
            handleTransferMethod(query, item){
                return item.pinyin.search(query) > -1 || item.label.search(query) > -1;
            }
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


    .section{
        position: relative;
    }

    .demo-images-list{
        .el-image{
            width: 100px;
            height: 120px;
        }
    }
</style>
