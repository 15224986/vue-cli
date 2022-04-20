<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>


            <section class="section">
                <h3 class="section-title">九宫格抽奖功能</h3>
                <ul class="gift-box">
                    <li :class="[index==0?'active':'']">一等奖</li>
                    <li :class="[index==1?'active':'']">二等奖</li>
                    <li :class="[index==2?'active':'']">三等奖</li>
                    <li :class="[index==7?'active':'']">八等奖</li>
                    <li @click="startLottery()">开始</li>
                    <li :class="[index==3?'active':'']">四等奖</li>
                    <li :class="[index==6?'active':'']">七等奖</li>
                    <li :class="[index==5?'active':'']">六等奖</li>
                    <li :class="[index==4?'active':'']">五等奖</li>
                </ul>
            </section>
            <section class="section">
                <h3 class="section-title">签到人员抽奖</h3>
                <div class="sign-box">
                    <p>{{ signPrizeTxt }}</p>
                    <el-button @click="startSignLottery()" type="primary" plain>{{signBtnTxt}}</el-button>
                </div>
            </section>

        </div>
    </article>
</template>
<script>



    export default {
        name: "sectorCss3",
        data() {

            let lt = '<';

            return {
                loading: false,
                
                /**
                 * 九宫格抽奖功能
                 */
                giftType: 1,
                index: -1,          // 当前转动到哪个位置，起点位置
                count: 8,           // 总共有多少位置
                timer: 0,           // 每次转动定时器
                speed: 200,         // 初始转动速度
                times: 0,           // 转动次数
                cycle: 24,          // 转动基数：至少需要转动多少次再进入抽奖环节
                prize: 5,           // 中奖位置
                prizes:[0,1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
                signData:["张伟", "马东", "林雷", "秦羽", "张涛", "王强", "李振", "李丽", "赵振武", "李智"],
                signBtn: 1,
                signBtnTxt:'开始',
                signPrize: 0,
                signPrizeTxt: "张伟",
                signTimer: 0

            };
        },

        mounted(){

        },
        methods: {
            /**
             * 九宫格抽奖功能
             */
            // 开始抽奖
            startLottery:function(){
                if( this.giftType !==1 ){
                    return
                }

                this.speed = 200;
                this.times = 0;
                // 获取所中奖项
                const index = Math.floor( Math.random() * this.prizes.length );
                this.prize = this.prizes[index];
                this.prizes.splice(index, 1);
                this.startRoll()
            },
            // 转动的方法
            oneRoll:function(){
                let index = this.index //当前转动到的位置
                const count = 8 //总共的位置
                index += 1
                if(index >count - 1){
                    index = 0
                }
                this.index = index
            },
            //判断是否转到中奖位置，如果是，停止，如果不是，继续转动
            startRoll:function(){
                this.giftType = 2;
                // 判断是否达到转动次数要求且转到的位置是中奖位置
                if( this.times > this.cycle && this.prize === this.index && this.speed > 260 ) {
                    clearTimeout( this.timer )    //清除定时器，转动停止
                    this.giftType = 1;
                    let text = $(".gift-box .active").text();
                    console.log(`恭喜你，中得了： ${text}`)
                }else {
                    this.times+=1           // 转动次数
                    this.oneRoll()          // 转动过程调用的每一次转动方法，这里是第一次调用初始化
                    //否则继续转动
                    if( this.times > this.cycle-this.count ){
                        this.speed += 15
                    }else{
                        this.speed-= 15
                        if( this.speed < 50 ){
                            this.speed = 50
                        }
                    }
                    this.timer = setTimeout(this.startRoll, this.speed);
                }
            },
            startSignLottery(){
                // 当只有最后一个人时，不可以抽奖
                if( this.signData.length < 2 ){
                    alert("只有一个人还没有中奖");
                    return
                }
                // 点击开始
                if( this.signBtn === 1 ){
                    this.signBtnTxt = "停止";
                    this.signBtn = 2;

                    this.signTimer = setInterval( ()=>{
                        this.signPrize++;
                        if( this.signPrize >= this.signData.length ){
                            this.signPrize = 0;
                        }
                        this.signPrizeTxt = this.signData[ this.signPrize ];
                        // console.log( this.signPrizeTxt );
                    }, 100);
                }else{
                    this.signBtnTxt = "开始";
                    this.signBtn = 1;

                    clearTimeout( this.signTimer )
                    setTimeout( ()=>{
                        this.signData.splice(this.signPrize, 1);
                        // console.log( this.signPrize,this.signData );
                    }, 150);

                }

            },
        }
    };
</script>
<style scoped lang="scss">
    /**
     * 九宫格抽奖功能
     */
    .gift-box{
        overflow: hidden;
        padding-top: 1px;
        padding-left: 1px;
        width: 245px;
        li{
            width: 80px;
            height: 80px;
            border: #ccc 1px solid;
            margin-left: -1px;
            margin-top: -1px;
            float: left;
            text-align: center;
            line-height: 80px;
            &.active{
                background-color: #f0f0f0;
            }
        }

    }
    /**
     * 签到人员抽奖
     */
    .sign-box{
        p{
            width: 200px;
            line-height: 52px;
            text-align: center;
            font-size: 30px;
            border: #ccc 4px solid;
            margin-bottom: 10px;
        }
    }
    .moc-highlight-box-tit{
        font-size: 16px;
        margin: 20px 0 6px;
        font-weight: 400;
        color: #111;
    }
</style>
