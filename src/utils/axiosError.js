export default function(data) {
    if( data.code==411 ){
        this.$alert(data.message, '系统提示', {
            confirmButtonText: '确定',
            callback: action => {
                this.$router.push({ path: "/login" });
            }
        });
    }else if( data.code==412 ){
        this.$alert(data.message, '系统提示', {
            confirmButtonText: '确定',
            callback: action => {
                this.$router.push({ path: "/400" });
            }
        });
    }else{
        this.$alert(data.message, '系统提示', {
            confirmButtonText: '确定',
            callback: action => {
                
            }
        });
    }
};
