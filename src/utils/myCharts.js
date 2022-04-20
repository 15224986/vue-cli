/**
 * 引入echarts
 */
import echarts from 'echarts'
import HighCharts from 'highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
highcharts3d(HighCharts);
import highchartsAnnotations from 'highcharts/modules/annotations';
highchartsAnnotations(HighCharts);

const myCharts = {
    /**
     * 二次封装的highcharts的3D饼图
     * @param  {'string'}   id   		调用插件的dom的ID
     * @param  {[Array]}   	data  		插件需要的数据
     * @param  {Function} 	fn   	 	修改options的属性，调用传过来的方法
     */
    makeAreaspline: function(id, data, fn) {
    	var options = {
            chart: {
                type: 'areaspline',
                backgroundColor: 'rgba(0,0,0,0)'
            },
            legend: {
                align: 'right',
                verticalAlign: 'top',
                x: -200,
                borderWidth: 0
            },
            tooltip: {
                shared: true,
                crosshairs: true,
                borderWidth: 0,
                shadow: false,
                backgroundColor:"rgba(0,0,0, 0.4)"
            },
            yAxis: {
                lineWidth: 1,
                lineColor: "#b6b6b8",
                gridLineColor: "#3b3a40",
                labels: {
                    format: '{value} m'
                }
            },
            xAxis: {
                lineWidth: 1,
                lineColor: "#b6b6b8",
                categories: [
                    '2020-01-01',
                    '2020-01-02',
                    '2020-01-03',
                    '2020-01-04',
                    '2020-01-05',
                    '2020-01-06',
                    '2020-01-07',
                    '2020-01-08',
                    '2020-01-09',
                    '2020-01-10',
                    '2020-01-11',
                ]
            },
            annotations: [
                {
                    labelOptions: {
                        align: 'right',
                        justify: false,
                        crop: true,

                        borderColor: "#00ffde",
                        borderWidth:  1,
                        backgroundColor: 'rgba(0, 0, 0, 0)',

                        x: -20,
                        y: 0,
                        style: {
                            color: '#fff',
                            fontSize: '1em',
                            textOutline: "none"
                        }
                    },
                    labels: [
                        {
                            point: {
                                xAxis: 0,
                                yAxis: 0,
                                x: 3,
                                y: 208
                            },
                            text: '这是什么东西'
                        },
                        {
                            point: {
                                xAxis: 0,
                                yAxis: 0,
                                x: 9,
                                y: 136
                            },
                            text: '诈骗犯罪较高'
                        },
                    ]
                },
            ],
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [
                {
                    name: 'John',
                    lineColor: "#00ffde",
                    lineWidth: 1,
                    color: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, "rgba(0, 255, 222, .7)"],
                            [1, "rgba(0, 255, 222, 0)"]
                        ]
                    },
                    data: [ 25, 126, 68, 208, 29, 229, 110, 234, 235, 136, 256]
                },
                {
                    name: 'John',
                    lineColor: "rgba(0, 174, 255, 1)",
                    lineWidth: 1,
                    color: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, "rgba(0, 174, 255, .7)"],
                            [1, "rgba(0, 174, 255, 0)"]
                        ]
                    },
                    data: [ 15, 26, 58, 118, 69, 149, 144, 134, 215, 236, 156]
                }
            ]
        };
    	if (fn!=undefined){
    		fn(options)
    	}
    	// HighCharts.chart(id, options);
        HighCharts.chart(id,options)
    },
	/**
	 * 二次封装的highcharts的3D饼图
	 * @param  {'string'}   id   		调用插件的dom的ID
	 * @param  {[Array]}   	data  		插件需要的数据
	 * @param  {Function} 	fn   	 	修改options的属性，调用传过来的方法
	 */
	make3Dpie: function(id, data, fn) {
		var colors = [
			{
				a:'#7792d9',
				b:'#0c1a9b'
			},
			{
				a:'#5f21d1',
				b:'#7b10c6'
			},
			{
				a:'#0986bf',
				b:'#0d7a95'
			},
			{
				a:'#df9360',
				b:'#ff8a00'
			},
			{
				a:'#ffde43',
				b:'#e89e00'
			},
			{
				a:'#00f7e5',
				b:'#0088c9'
			},
			{
				a:'#fe76b4',
				b:'#a9004d'
			},
			{
				a:'#2e6cc8',
				b:'#2a5eab'
			},
			{
				a:'#c86f2e',
				b:'#e7721d'
			}
		];
		var options = {
            chart: {
                type: 'pie',
                backgroundColor:"rgba(0,0,0,0)",
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            title: false,
            tooltip: {
                pointFormat: '{point.y}'
            },
            colors: colors.map(function (color) {
                return {
                    radialGradient: { cx:0, cy: -0.8,r:2.3 },
                    stops: [
                        [0, color.a],
                        [1, color.b]
                    ]
                };
            }),
            plotOptions: {
                pie: {
                    fillColor:"#f00",
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '<span class="highcharts-plot-options">{point.name}</span><br/></span><span class="highcharts-plot-options">{point.percentage:.1f}%</span>'
                        // formatter: function() {
                        //     // return '<span style="color:#4dd3b9; text-shadow:5px 2px 6px rgba(0,0,0,0);">'+ this.point.name +'</span>';
                        //     // return '<span class="highcharts-plot-options">'+ this.point.name+ '</span>';
                        //     return '<span class="highcharts-plot-options">'+ this.point.name+ '</span><br/><span class="highcharts-plot-options">' + this.point.y +'</span>';
                        // }
                    }
                }
            },
           series: data

           /* [{
				type: 'pie',
				name: 'Browser share',
				data: [
					['Firefox', 45.0],
					['IE', 26.8],
					{
						name: 'Chrome',
						y: 12.8,
						sliced: true,
						selected: true
					},
					['Safari', 8.5],
					['Opera', 6.2],
					['Others', 0.7]
				]
			}]*/
        };
		if (fn!=undefined){
			fn(options)
		}

		// Highcharts.chart(id, options);
        HighCharts.chart(id,options)
	},
	/**
	 * 二次封装的echarts的柱形图例子
	 * @param  {'string'}   id   		调用插件的dom的ID
	 * @param  {[Array]}   	data  		插件需要的数据
	 * @param  {Function} 	fn   	 	修改options的属性，调用传过来的方法
	 * @param  {Function} 	callback 	事件的回调
	 */
	makeBar:function(id, data, fn, callback){
		var myChart;
		if (typeof(id)!="string"){
			myChart= echarts.init(id[0]);
		}else{
			myChart = echarts.init(document.getElementById(id));
		}

		var option={
			tooltip: {
		        trigger: 'axis',
		        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
		            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
			title: data.title,
			// title: {
			// text: '阶梯瀑布图',
			// subtext: 'From ExcelHome',
			// sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
			// }

		    legend: {
		        data: data.legend
		        // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: {
		        type: 'category',
		        data: data.xAxisData
		        // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
		    },
		    yAxis: {
		       type: 'value'
		    },
		    color:['#1c747e','#ce5a01','#3197a5','#ce8d01'],
		    series: data.series

		    /*series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: true,
                        position: 'insideRight'
                    },
                    data: [320, 302, 301, 334, 390, 330, 320]
                },
                {
                    name: '邮件营销',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: true,
                        position: 'insideRight'
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                }
        	]*/
		};
		if (fn!=undefined) fn(option);

		myChart.clear();
		myChart.setOption(option);
		myChart.on('click', function (params) {
			if (callback!=undefined){
				callback(params);
			}
		});
		return myChart;
    },
};
export default myCharts;
