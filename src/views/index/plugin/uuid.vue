<template>
    <article id="page-bodier">
        <div id="wrapper" >
            <section class="section m-t-20" >
                <ul class="section-subhead">
                    <li>1.参考网址： <el-link href="https://blog.csdn.net/weixin_41697143/article/details/94554697" type="primary" target="_blank">https://blog.csdn.net/weixin_41697143/article/details/94554697</el-link></li>
                    <li>2.参考网址： <el-link href="https://www.cnblogs.com/victor-leeson/p/10718493.html" type="primary" target="_blank">https://www.cnblogs.com/victor-leeson/p/10718493.html</el-link></li>
                </ul>
                <br />
                <br />
                <dl class="describe-basics">
                    <dt>uuidV1 基于时间的UUID</dt>
                    <dd><span>uuidV1toString：</span><strong>{{ uuidV1toString }}</strong></dd>
                    <dd><span>uuidV1hexString：</span><strong>{{ uuidV1hexString }}</strong></dd>
                    <dd><span>uuidV1hexNoDelimt：</span><strong>{{ uuidV1hexNoDelimt }}</strong></dd>
                    <dd><span>uuidV1urn：</span><strong>{{ uuidV1urn }}</strong></dd>

                    <dt>uuidV4 基于随机数的UUID</dt>
                    <dd><span>uuidV4toString：</span><strong>{{ uuidV4toString }}</strong></dd>
                    <dd><span>uuidV4hexString：</span><strong>{{ uuidV4hexString }}</strong></dd>
                    <dd><span>uuidV4hexNoDelimt：</span><strong>{{ uuidV4hexNoDelimt }}</strong></dd>
                    <dd><span>uuidV4urn：</span><strong>{{ uuidV4urn }}</strong></dd>
                </dl>
            </section>

            <section class="section m-t-20" >
                <ul class="section-subhead">
                    <li>倒计时</li>
                </ul>
                <br />
                <br />
                <dl class="describe-basics">
                    <dt> {{countDownText}} <countDownTime :startTime="startTime" :endTime="endTime" @start-callBack="startCallBack" @end-callBack="endCallBack"></countDownTime></dt>
                </dl>
            </section>
        </div>
    </article>
</template>
<script>
    /**
     * 混入对象
     */
    // 页面通用的
    import common from '@/mixins/common.js';

    import uuid from 'uuidjs';

    export default {
        mixins: [common],
        components: {
            countDownTime:()=>import('../components/countDownTime.vue')
        },
        data() {
            return {
                uuidV1toString: uuid.genV1().toString(),
                uuidV1hexString: uuid.genV1().hexString,
                uuidV1hexNoDelimt: uuid.genV1().hexNoDelim,
                uuidV1urn: uuid.genV1().urn,

                uuidV4toString: uuid.genV4().toString(),
                uuidV4hexString: uuid.genV4().hexString,
                uuidV4hexNoDelimt: uuid.genV4().hexNoDelim,
                uuidV4urn: uuid.genV4().urn,

                startTime: "2021-11-24 16:55:00",
                endTime: "2030-11-26 16:48:00",
                countDownText: "距离活动开始"
            }
        },
        created() {},
        mounted() {
            console.log(uuid.genV1())
            console.log( "95d9595959".charCodeAt().toString(16) )

        },
        methods: {
            stringToHex(str){
        　　　　var val="";
        　　　　for(var i = 0; i < str.length; i++){
        　　　　　　if(val == "")
        　　　　　　　　val = str.charCodeAt(i).toString(16);
        　　　　　　else
        　　　　　　　　val += "," + str.charCodeAt(i).toString(16);
        　　　　}
        　　　　return val;
        　　},
            startCallBack(){
                this.countDownText = "距离活动结束"
                console.log("距离活动结束")

            },
            endCallBack(){
                this.countDownText = "活动已经结束"
                console.log("活动已经结束")
            }
        }
    }
</script>
<style lang="scss" scoped>
    .describe-basics{
        line-height: 1.8;
        &>dt{
            color: #333;
            font-weight: 700;
        }
        &>dd + dt{
            margin-top: 8px;
        }
        &>dd{
            color: #999;
            strong{
                font-weight: 400;
            }
            span{
                width: 160px;
                float: left;
                color: #333;
            }
        }
    }
</style>
