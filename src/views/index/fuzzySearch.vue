<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="section-title">文字滚动</h3>
                <ul class="section-subhead">
                    <li>1.官网： <el-link href="https://chenxuan1993.gitee.io/component-document/index_prod#/component/seamless-others" type="primary" target="_blank">https://chenxuan1993.gitee.io/component-document/index_prod#/component/seamless-others</el-link></li>
                </ul>

                <h5>垂直</h5>
                <seamless-scroll :data="listData" class="seamless-warp">
                    <p v-for="item in listData">
                        <span class="title">{{item.title}}</span>
                        <span class="date">{{item.date}}</span>
                    </p>
                </seamless-scroll>
                <h5>水平</h5>
                <seamless-scroll :data="listData" :class-option="listOption" class="seamless-warp-horizontal">
                    <p v-for="item in listData">
                        <span class="title">{{item.title}}</span>
                        <span class="date">{{item.date}}</span>
                    </p>
                </seamless-scroll>
            </section>

            <section class="section">
                <h3 class="section-title">文字滚动</h3>
                <div class="marquee">
                    <div class="marquee_title">
                        <span>最新公告</span>
                    </div>
                    <div class="marquee_box">
                        <ul class="marquee_list" :class="{marquee_top:animate}">
                            <li v-for="(item, index) in marqueeList">
                                <span>{{item.name}}</span>
                                <span>-</span>
                                <span class="red"> {{item.city}}</span>
                                <span>销售</span>
                                <span class="red"> {{item.amount}}</span>
                                <span>万</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="section">
                <h3 class="section-title">模糊搜索</h3>
                <ul class="section-subhead">
                    <li>1.根据input的value值筛选originLists中的数据</li>
                </ul>
                <el-input v-model="searchTxt" placeholder="请输入搜索内容"></el-input>
                <ul class="search-list">
                    <li v-for="(item,index) in searchLists" :key="index">{{item.content}}</li>
                </ul>
            </section>

        </div>
    </article>
</template>
<script>

    export default {
        name: "fuzzySearch",
        components: {
            seamlessScroll:()=>import('./components/seamlessScroll/seamlessScroll.vue')
        },
        data() {
            return {
                loading: false,
                /**
                 * 文字滚动
                 */
                animate: false,
                marqueeList: [
                    {
                        name: '开心果',
                        city: '北京',
                        amount: '320'
                    },
                    {
                        name: '芒果干',
                        city: '上海',
                        amount: '470'
                    },
                    {
                        name: '草莓干',
                        city: '广州',
                        amount: '970'
                    },
                    {
                        name: '无核白葡萄干 ',
                        city: '重庆',
                        amount: '10'
                    }
                ],
                /**
                 * 模糊搜索的相关数据
                 */
                searchTxt: "",
                originLists:[],

                listOption:{
                    direction: 2
                },
                listData: [
                    {
                        'title': '无缝滚动第一行无缝滚动第一行',
                        'date': '2017-12-16'
                    }, {
                        'title': '无缝滚动第二行无缝滚动第二行',
                        'date': '2017-12-16'
                    }, {
                        'title': '无缝滚动第三行无缝滚动第三行',
                        'date': '2017-12-16'
                    }, {
                        'title': '无缝滚动第四行无缝滚动第四行',
                        'date': '2017-12-16'
                    }, {
                        'title': '无缝滚动第五行无缝滚动第五行',
                        'date': '2017-12-16'
                    }, {
                        'title': '无缝滚动第六行无缝滚动第六行',
                        'date': '2017-12-16'
                    }, {
                        'title': '无缝滚动第七行无缝滚动第七行',
                        'date': '2017-12-16'
                    }, {
                        'title': '无缝滚动第八行无缝滚动第八行',
                        'date': '2017-12-16'
                    }, {
                        'title': '无缝滚动第九行无缝滚动第九行',
                        'date': '2017-12-16'
                    },
                ]
            }
        },
        computed:{
            /**
             * 模糊搜索的方法
             * @return 逻辑-->根据input的value值筛选originLists中的数据
             */
            searchLists: function(){
                // 声明一个空数组来存放数据
                return this.originLists.filter( (item)=> {
                    // 判断输入框中的值是否可以匹配到数据，如果匹配成功
                    // 向空数组中添加数据
                    if( item.content.search(this.searchTxt) !== -1 ){
                        return item
                    }
                })
            },
        },
        created() {
            this.initData()
        },
        mounted(){
            setInterval(this.showMarquee, 2000)
        },
        methods: {
            /**
             * 初始化获取页面数据
             */
            initData(){
                // 正在加载中
                this.loading = true;
                /**
                 * 模拟ajax获取表格数据
                 */
                setTimeout(()=>{
                    this.$http.get('/mock/tableData', {}, {baseURL: ''})
                        .then((res)=>{
                            // 去除加载中
                            this.loading = false;
                            this.originLists = res.originLists;
                        })
                        .catch((err)=>{
                            console.log(err);
                        });
                }, 1350);
            },
            /**
             * 动画
             */
            showMarquee: function () {
                this.animate = true;
                setTimeout(()=>{
                    this.marqueeList.push(this.marqueeList[0]);
                    this.marqueeList.shift();
                    this.animate = false;
                }, 500)
            },
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
</style>
<style lang="scss">
.seamless-warp{
    padding: 10px;
    background-color: #f0f0f0;
    height: 126px;
    overflow: hidden;
}
.seamless-warp-horizontal {
    padding: 10px;
    background-color: #f0f0f0;
    overflow: hidden;
    .moc-seamless-scroll-slot{
        white-space:nowrap;
        p{
            display: inline-block;
            margin-right: 10px;
        }
    }
}

.marquee {
	width: 100%;
	height: 50px;
	align-items: center;
	color: #3A3A3A;
	background-color: #ffe4ca;
	display: flex;
	box-sizing: border-box;
    line-height: 30px;
}
.marquee_title {
	padding: 0 20px;
	height: 30px;
	font-size: 14px;
	border-right: 1px solid #fff;
	align-items: center;
}

.marquee_box {
	display: block;
	position: relative;
	width: 60%;
	height: 30px;
	overflow: hidden;
}

.marquee_list {
	display: block;
	position: absolute;
	top: 0;
	left: 0;
}
.marquee_top {
	transition: all 0.5s;
	margin-top: -30px
}

.marquee_list li {
	height: 30px;
	line-height: 30px;
	font-size: 14px;
	padding-left: 20px;
}

.marquee_list li span {
	padding: 0 2px;
}

.red {
	color: #FF0101;
}

</style>
