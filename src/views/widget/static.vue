<template>
    <div id="wrapper">
        <div class="widget">

            <section class="section">
                <h3 class="widget-tit">svg的图标</h3>
                <p class="widget-txt"></p>
                <div class="widget-demo">
                    <h5 class="widget-title">1.使用svg的图标</h5>
                    <div class="static">
                        <div style="font-size: 72px; color: #0000FF;">
                            <svg-icon icon-class="404" class-name="icon-404" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="bug" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="chart" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="clipboard" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="component" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="dashboard" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="documentation" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="drag" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="email" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="example" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="excel" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="eye" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="fa-user" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="form" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="icon" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="international" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="language" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="lock" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="message" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="money" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="people" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="peoples" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="qq" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="setting" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="shoppingCard" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="star" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="tab" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="table" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="theme" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="trendChart1" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="trendChart2" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="trendChart3" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="user" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="wechat" style="margin-right: 30px;"></svg-icon>
                            <svg-icon icon-class="zip" style="margin-right: 30px;"></svg-icon>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <h3 class="widget-tit">图片的引入1</h3>
                <p class="widget-txt">将图片放在“src\assets”这个路径下，当图片小于4kb的时候，会被编译成base64编码减少http请求。但是每次加载都要加载相关的资源，会出现重复请求的情况。</p>
                <div class="widget-demo">
                    <h5 class="widget-title">1.在css中引入。</h5>
                    <div class="static">
                        <P class="widget-txt">编译成base64编码。</P>
                        <div class="static-icon-camera"></div>
                        <div class="diagram-map-train"></div>
                        <div class="echarts-pie-bg"></div>
                        <div class="login-body-2"></div>

                        <P class="widget-txt">通过src引入的。</P>
                        <div class="login-logo"></div>
                        <div class="logo"></div>
                    </div>
                    <h5 class="widget-title">2.在标签中引入。</h5>
                    <div class="static">
                        <P class="widget-txt">编译成base64编码。</P>
                        <img src="@/assets/images/icon-camera.png" alt="">
                        <img src="@/assets/images/diagram-map-train.png" alt="">
                        <img src="@/assets/images/echarts-pie-bg.png" alt="">
                        <img src="@/assets/images/login-body_02.png" alt="">

                        <P class="widget-txt">通过src引入的。</P>
                        <img src="@/assets/images/login-logo.png" alt="">
                        <img src="@/assets/images/logo.png" alt="">
                    </div>
                </div>
            </section>

            <section class="section">
                <h3 class="widget-tit">图片的引入2</h3>
                <p class="widget-txt">将图片放在“public\”这个路径下，当图片大的时候放在里面，加载后再次加载时会加载浏览器缓存。</p>
                <div class="widget-demo">
                    <h5 class="widget-title">1.在css中引入。</h5>
                    <div class="public">
                        <div class="icon-camera"></div>
                        <div class="diagram-map-train"></div>
                    </div>
                    <h5 class="widget-title">2.在标签中引入。</h5>
                    <div class="public">
                        <img src="/static/images/icon-camera.png" alt="">
                        <img src="/static/images/diagram-map-train.png" alt="">
                    </div>
                </div>
            </section>

            <section class="section">
                <h3 class="widget-tit">加载public下面的数据</h3>
                <p class="widget-txt">将 *.json 放在“public\”这个路径下。</p>
                <div class="widget-demo">
                    <div class="public">
                        <p v-for="(item,index) in list" :key="index">{{ index+1 }}: {{item.title }}</p>
                    </div>
                </div>
            </section>

            <section class="section">
                <h3 class="widget-tit">加载public下面的数据</h3>
                <el-button @click="handleDelete()" type="danger">删除</el-button>
                <div class="widget-demo">
                    <div class="public">
                        <p v-for="(item,index) in numbers" :key="index">{{ item }}</p>
                    </div>
                </div>
            </section>

        </div>
    </div>
</template>

<script>
export default {
    name: 'echartsLine',
    data() {
        return {
            list:[],
            formSeach: {
                current: 1,                 // 当前页
                size: 15,                   // 显示条数
                name: 'Anni',               // 姓名
                gender: '女'                // 性别
            },
            numbers: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]
        };
    },
    created(){
        // this.$http.get('/static/json/service.json', {}, { baseURL: '' }).then((response)=> {
        this.$http.get('/static/json/service.json').then((response)=> {
                // console.log(response);
                this.list = response.content;
            }).catch((error)=> {
                console.log(error);
            });
    },
    mounted(){
    },
    methods: {
        handleDelete(){
            this.numbers.delete(2);
            console.log(this.numbers)
        }
    }
};
</script>
