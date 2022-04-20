export default {
	filters: {
		sexText(value){
			if ( value === 1 ){
				return '男'
			}else{
				return '女'
			}
		}
	},
	methods:{
		handleSex(row, column, cellValue){
			if ( cellValue === 1 ){
				return '男'
			}else{
				return '女'
			}
		},
	}
}
