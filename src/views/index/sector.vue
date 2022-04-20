<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">css3 透视旋转</h3>
                <div class="d3-wrap">
                    <div class="rotateX"></div>
                </div>
            </section>

            <section class="section">
                <h3 class="section-title">css3 环形倒计时</h3>
                <div class="sector">
                    <div class="sector-bg"> </div>
                    <div class="sector-pie sector-pie1" :style="{transform:'rotateZ('+ pie1Rotate +'deg)'}"></div>
                    <div class="sector-pie sector-pie2" :style="{transform:'rotateZ('+ pie2Rotate +'deg)','background-color':pie2Color}"></div>
                    <p class="sector-time">{{ Math.floor(timer2) }}</p>
                </div>
            </section>

            <section class="section">
                <h3 class="section-title">css3 鼠标悬停效果</h3>
                <ul class="card-list clearfix">
                    <li class="card-item">
                        111111111111111
                    </li>
                    <li class="card-item">
                        222222222222222
                    </li>
                    <li class="card-item">
                        333333333333333
                    </li>
                    <li class="card-item">
                        444444444444444
                    </li>
                    <li class="card-item">
                        555555555555555
                    </li>
                    <li class="card-item">
                        666666666666666
                    </li>
                </ul>
            </section>


            <section class="section">
                <h3 class="section-title">mask动画</h3>
                <div class="mask-animation"></div>
            </section>

            <section class="section">
                <h3 class="section-title">mask按需显示</h3>
                <div class="mask-image-box">
                    <div class="mask-image">
                    	<div class="clip-bar"></div>
                    	<div class="move-bar"></div>
                    </div>
                    <div class="mask-image2">
                    	<img src="/static/images/card.jpg" width="300">
                    </div>
                </div>
            </section>

            <section class="section">
                <h3 class="section-title">图片的模糊处理</h3>
                <div class="filter-image">
                    <img src="/static/images/image.jpg" class="filter-layer">
                    <div class="filter-cover">
                        <img src="/static/images/image.jpg" class="filter-blur">
                        <p class="filter-mask">美女</p>
                    </div>
                </div>
            </section>




        </div>
    </article>
</template>
<script>
    export default {
        name: "sectorCss3",
        data() {
            return {
                loading: false,
                /**
                 * 环形倒计时
                 */
                timer1: 360,
                timer2: 360,
                pie1Rotate: 0,
                pie2Rotate: 0,
                pie2Color: '#e45534'
            };
        },

        mounted(){
            let timer = setInterval( ()=>{
                if( this.timer2 <= 0 ){
                    clearInterval( timer );
                    return;
                }
                this.timer2 = this.timer2 - 0.1;
                this.sectorDraw(this.timer1,this.timer2);
            }, 100);
        },
        methods: {
            /**
             * 扇形倒计时
             */
            sectorDraw(time1,time2){
                let time = (time1 -time2)/time1 * 360;
                if(time<180){
                    this.pie1Rotate = time;
                    this.pie2Color = '#e45534';
                }else if(time<360){
                    this.pie1Rotate = 180;
                    this.pie2Rotate = time;
                    this.pie2Color = '#d13c36';
                }else{
                    this.pie2Rotate = 360;
                }
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

    /**
     * 3D旋转的效果
     */
    .d3-wrap {
        position: relative;
        width: 300px;
        height: 300px;
        margin: 120px auto;
        /* 规定如何在 3D 空间中呈现被嵌套的元素 */
        transform-style: preserve-3d;
    	background-color: #f1f1f1;
    }
    .rotateX {
        width: 300px;
        height: 300px;
        background-color: #06c;

        transform: perspective(1200px) rotateY(60deg);
        transform-origin: 100%;
    }
    /**
     * 环形倒计时
     */
    .sector{
        @include square(220px);
        position: relative;
        overflow: hidden;
    }
    .sector-bg{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #d13c36;
    }
    .sector-pie{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: absolute;
        left: 0px;
        top: 0px;
    }
    .sector-pie1 {
        clip: rect(0px, 220px, 220px, 110px);
        -o-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        background-color: #e45534;
    }
    .sector-pie2 {
        clip: rect(0px, 110px, 220px, 0px);
        -o-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        background-color: #e45534;
    }
    .sector-time{
        @include radius(180px);
        background-color: #fff;
        position: absolute;
        left: 20px;
        top: 20px;
        text-align: center;
        line-height: 180px;
        font-size: 22px;
    }
    /**
     * css 鼠标悬停效果
     */
    .card-list {
        border-left: 1px solid #eee;
        border-top: 1px solid #eee;

    }
    .card-item {
        width: 33.333333333333333%;
        padding: 60px 0;
        float: left;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
        margin-left: -1px;
        text-align: center;
        transition: all .5s;
    }
    .card-item:hover {
        box-shadow: rgba(1,130,150,.2) 0 0 30px
    }


    @keyframes maskAnimation {
        0% {
            -webkit-mask-position: 0px 0px;
        }

        25% {
            -webkit-mask-position: 619px 0px;
        }

        50% {
            -webkit-mask-position: 0px 0px;
        }

        75% {
            -webkit-mask-position: 308px 0px;
            -webkit-mask-size: 100%;
        }

        100% {
            -webkit-mask-size: 1000%;
        }
    }
    .mask-animation {
        width: 700px;
        height: 392px;
        background: url("/static/images/1534750163.jpg");
        mask-image: url("/static/images/1534750222.jpg");
        -webkit-mask-image: url("/static/images/1534750222.jpg");
        animation: maskAnimation 5s linear infinite forwards;
    }

    /**
     * mask按需显示
     */
    .mask-image-box{
        padding: 30px;
        overflow: hidden;
        background: linear-gradient(red, magenta, blue, aqua, lime, yellow, red);
        background: radial-gradient(closest-side, gray, transparent), conic-gradient(red, magenta, blue, aqua, lime, yellow, red);
        text-align: center;
    }
    .mask-image2,
    .mask-image{
        float: left;
        margin-right: 20px;
    }
    .mask-image{
        width: 256px;
        height: 192px;
        background-image: url('/static/images/image.jpg');
        position: relative;
    }
    .clip-bar{
        width: 54px;
        height: 57px;
        background-image: url('/static/images/mask-image.png');
        position: absolute;
        left: 100px;
        top: 40px;
    }
    .move-bar{
        width: 54px;
        height: 57px;
        background-image: url('/static/images/image.jpg');
        background-position: 156px 152px;
        mask-image: url("/static/images/mask-image.png");
        -webkit-mask-image: url("/static/images/mask-image.png");
        position: absolute;
        left: 10px;
        top: 40px;
    }
    .mask-image2 img{
        --mask-url: url('/static/images/card-mask.png');
        -webkit-mask-image: var(--mask-url);
        mask-image: var(--mask-url);
        -webkit-mask-size: 300px;
        mask-size: 300px;
    }

    /**
     * 毛玻璃处理
     */
    .filter-image {
        width: 256px;
        position: relative;
    }
    .filter-image img{
        display: block;
    }
    .filter-cover {
        width: 100%;
        height: 34px;
        position: absolute;
        left: 0;
        bottom: 0;
        overflow: hidden;
        line-height: 34px;
    }
    .filter-blur {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        -webkit-filter: blur(5px);
        -moz-filter: blur(5px);
        filter: blur(5px);
        filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=5, MakeShadow=false);
        *left: -5px;
        left: -5px\0;
    }

    .filter-mask {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: rgba(0,0,0,.2);
        filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr=#34000000,endColorStr=#34000000);
        color: #fff;
        font-size: 14px;
        text-indent: 10px;
        padding: 0;
        margin: 0;
    }
    .list:hover .filter-layer,
    .list:hover .filter-blur {
    	-webkit-transform: scale(1.05) translateZ(0);
    	-ms-transform: scale(1.05);
    	transform: scale(1.05) translateZ(0);
    	/* IE6-IE8 */
    	zoom: 1.05;
    }
</style>
