function setDeepCopy(obj) {
    if (!obj) {
    	return false;
    }
    var newObj = obj.constructor === Array ? [] : {};
    // 实现深层复制
    if (obj.constructor === Array) {
    	for(var i=0;i<obj.length;i++){
    		let item = obj[i];
    		if( item.constructor === Array || item.constructor === Object ){
    			item = setDeepCopy(item);
    		}
    		newObj.push(item);
    	}
    } else if (obj.constructor === Object) {
    	for (var key in obj) {
    		// 判断如果是对象
    		if (typeof obj[key] === 'object') {
    			if (obj[key] === null || obj[key].constructor === RegExp || obj[key].constructor === Date) {
    				newObj[key] = obj[key];
    			} else {
    				// 递归
    				newObj[key] = setDeepCopy(obj[key]);
    			}
    		} else {
    			newObj[key] = obj[key];
    		}
    	}
    } else {
    	newObj = obj;
    }
    return newObj;
};


export default setDeepCopy;
