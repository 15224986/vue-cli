export default {
	data () {
		return {
			/**
			 * element-ui 时间插件的右侧按钮
			 */
			datePickerOptions: {
				shortcuts: [{
					text: '最近一周',
					onClick (picker) {
						const end = new Date()
						const start = new Date()
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
						picker.$emit('pick', [start, end])
					}
				}, {
					text: '最近一个月',
					onClick (picker) {
						const end = new Date()
						const start = new Date()
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
						picker.$emit('pick', [start, end])
					}
				}, {
					text: '最近三个月',
					onClick (picker) {
						const end = new Date()
						const start = new Date()
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
						picker.$emit('pick', [start, end])
					}
				}]
			},
		}
	},
	methods:{
		/**
		 * 默认时间
		 * callBack  	Function	回调 返回时间数组
		 * interval		Number	 	间隔时间，开始时间是今天的前几天
		 * next			Boolean		是否为向后时间段
		 */
		setDefaultTime(callBack, interval=0, next, type="datetime"){
			let dateTime = [];
			if(next===true){
				var startDate = this.$moment().format("YYYYMMDD"),
					endDate = this.$moment().add(interval, 'd').format("YYYYMMDD");
			}else{
				var startDate = this.$moment().subtract(interval, 'd').format("YYYYMMDD"),
					endDate = this.$moment().format("YYYYMMDD");
			}
			if( type == "datetime" ){
				startDate = startDate +'000000';
				endDate = endDate +'235959';
			}else if( type == "month" ){
				startDate = startDate.substring(0, 6);
				endDate = endDate.substring(0, 6);
			}
			dateTime.push(startDate);
			dateTime.push(endDate);
			if (callBack instanceof Function) {
				callBack(dateTime);
			}
		}
	}
}
