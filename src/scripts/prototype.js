/*
 * 去除数组相同的方法
*/
Array.prototype.unique = function(){
	var arr = [];  //定义一个临时数组
	for(var i = 0; i < this.length; i++){  //循环遍历当前数组
		//判断当前数组下标为i的元素是否已经保存到临时数组
		//如果已保存，则跳过，否则将此元素保存到临时数组中
		if( arr.indexOf(this[i]) == -1 ){
			arr.push(this[i]);
		}
	}
	return arr;
}
/**
 * 从数组中删除第一个指定值元素的方法
 */
Array.prototype.remove = function(val) {
	let index = this.indexOf(val);
	if (index > -1) {
		this.splice(index, 1);
	}
    return this;
};
/**
 * 从数组中删除所有指定值元素的方法
 */
Array.prototype.delete = function(val) {
	let arr = this;
	arr.forEach(function(value, index){
		if(val===value){
			arr.splice(index, 1);
		}
	});
    return arr;
};





/**
 * 从字符串左边截取 n 个字符
 */
String.prototype.leftLength = function(num,fill) {
    if (!/\d+/.test(num)){ // 判断是不是数字
        return ;
    }
    let str = this.substr(0,num);
    if(fill===true){  // 是否添加 ...
        str = str+"...";
    }
    return str;
}

/**
 * 清除字符串左侧空格，包含换行符、制表符
 */
String.prototype.triml = function () {
    return this.replace(/^[\s\n\t]+/g, "");
}

/**
 * 清除字符串右侧空格，包含换行符、制表符
 */
String.prototype.trimr = function () {
    return this.replace(/[\s\n\t]+$/g, "");
}

/**
 * 去掉字符串中所有空格，包括中间空格
 */
String.prototype.trimall = function () {
    return this.replace(/\s/ig,'');
}
