<template>
    <section class="section">
        <h3 class="section-title">中国地图点击省切换为省地图</h3>
        <div id="myCharts" class="echarts-item" style="height: 560px;"></div>
    </section>
</template>

<script>

    /**
     * 引入 myCharts 方法
     */
    import myCharts from '@/utils/myCharts.js'

    /**
     * 导入地图数据
     *
     * echarts地图，实时获取地图边界数据，实现省市区县多级联动
     * https://gallery.echartsjs.com/editor.html?c=xbxUJPSiG9
     * https://github.com/TangSY/echarts-map-demo
     * https://www.jianshu.com/p/c293c94d9ab7
     *
     */
    import 'echarts/map/js/world.js';                               // 世界地图数据
    import 'echarts/map/js/china.js';                               // 中国地图数据
    import 'echarts/map/js/province/anhui.js';                      // 安徽
    import 'echarts/map/js/province/aomen.js';                      // 澳门
    import 'echarts/map/js/province/beijing.js';                    // 北京
    import 'echarts/map/js/province/chongqing.js';                  // 重庆
    import 'echarts/map/js/province/fujian.js';                     // 福建
    import 'echarts/map/js/province/gansu.js';                      // 甘肃
    import 'echarts/map/js/province/guangdong.js';                  // 广东
    import 'echarts/map/js/province/guangxi.js';                    // 广西
    import 'echarts/map/js/province/guizhou.js';                    // 贵州
    import 'echarts/map/js/province/hainan.js';                     // 海南
    import 'echarts/map/js/province/hebei.js';                      // 河北
    import 'echarts/map/js/province/heilongjiang.js';               // 黑龙江
    import 'echarts/map/js/province/henan.js';                      // 河南
    import 'echarts/map/js/province/hubei.js';                      // 湖北
    import 'echarts/map/js/province/hunan.js';                      // 湖南
    import 'echarts/map/js/province/jiangsu.js';                    // 江苏
    import 'echarts/map/js/province/jiangxi.js';                    // 江西
    import 'echarts/map/js/province/jilin.js';                      // 吉林
    import 'echarts/map/js/province/liaoning.js';                   // 辽宁
    import 'echarts/map/js/province/neimenggu.js';                  // 内蒙古
    import 'echarts/map/js/province/ningxia.js';                    // 宁夏
    import 'echarts/map/js/province/qinghai.js';                    // 青海
    import 'echarts/map/js/province/shandong.js';                   // 山东
    import 'echarts/map/js/province/shanghai.js';                   // 上海
    import 'echarts/map/js/province/shanxi.js';                     // 山西
    import 'echarts/map/js/province/shanxi1.js';                    // 陕西
    import 'echarts/map/js/province/sichuan.js';                    // 四川
    import 'echarts/map/js/province/taiwan.js';                     // 台湾
    import 'echarts/map/js/province/tianjin.js';                    // 天津
    import 'echarts/map/js/province/xianggang.js';                  // 香港
    import 'echarts/map/js/province/xinjiang.js';                   // 新疆
    import 'echarts/map/js/province/xizang.js';                     // 西藏
    import 'echarts/map/js/province/yunnan.js';                     // 云南
    import 'echarts/map/js/province/zhejiang.js';                   // 浙江




    export default {
        data() {
            return {
                // 全国数据
                mapChart:'',
                item: [
                    {
                        "name": "北京",
                        "value": "14",
                        "code": "11",
                        "area": "北京",
                        "board_num": "8",
                        "sign_num": "1"
                    }, {
                        "name": "山西",
                        "value": "900",
                        "code": "14",
                        "area": "山西",
                        "board_num": "5",
                        "ask_num": "900",
                        "sign_num": "1"
                    }, {
                        "name": "内蒙古",
                        "value": "544",
                        "code": "15",
                        "area": "内蒙古",
                        "board_num": "1",
                        "ask_num": "544",
                        "sign_num": "1"
                    }, {
                        "name": "安徽",
                        "value": "5",
                        "code": "34",
                        "area": "安徽",
                        "board_num": "2",
                        "ask_num": "5",
                        "sign_num": "1"
                    }, {
                        "name": "福建",
                        "value": "1400",
                        "code": "35",
                        "area": "福建",
                        "board_num": "1",
                        "ask_num": "1400",
                        "sign_num": "1"
                    }
                ]
            };
        },
        created() {

        },
        mounted() {

            this.drawChina('china');

            this.mapChart.on('click', (params)=> {
                this.drawChina( params.data.name );

                // if (params.data) {
                //     this.drawChina( params.data.name );
                // } else {
                //     alert('无此区域地图显示')
                // }
            });
        },
        watch: {

        },
        methods: {
            drawChina(name) {
                var option = {
                    title: {
                        text: '全国地域分析',
                        left: 'center',
                    },
                    tooltip: {
                        formatter: function(params) {
                            if (params.data) {
                                return params.name + '<br>' + '咨询数:' + params.data.ask_num + '<br>' + '留言数:' + params.data.board_num + '<br>' + '用户数:' + params.data.sign_num + '<br>';
                            } else {
                                return params.name + '<br>' + '咨询数:' + 0 + '<br>' + '留言数:' + 0 + '<br>' + '用户数:' + 0 + '<br>';
                            }
                        }

                    },
                    visualMap: {
                        min: 0,
                        max: 1500,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'],
                        calculable: true,
                        inRange: {
                            color: ['#e0ffff', '#006edd']
                        },
                        show: true
                    },
                    series: [
                        {
                            type: 'map',
                            mapType: name,
                            selectedMode: 'false', //是否允许选中多个区域
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: this.item
                        },
                    ]
                };
                this.mapChart = this.$echarts.init(document.getElementById('myCharts'));
                this.mapChart.setOption(option);
            }
        }
    };
</script>
<style>
    .section-title {
        padding: 0 0 10px;
    }
    .section-subhead{
        padding-bottom: 16px;
    }
    .section-title + .section-subhead{
        margin-top: -6px;
    }
    .section + .section{
        margin-top: 20px;
    }
</style>
