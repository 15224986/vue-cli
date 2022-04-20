export default {
	filters: {
		calcIndex(value,current,size){
			return ( current-1 ) * size + value + 1;
		}
	},
	methods:{
		handleIndex(index){
			return ( this.pagination.current-1 ) * this.pagination.size + index + 1;
		},
	}
}