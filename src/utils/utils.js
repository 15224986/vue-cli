/**
 * 多层obj的值的获取和修改
 * @param {obj} 最外层的obj
 * @param { path } 相对最外层的路径
 * @param { strict } 是否开启严格模式
 * @return {o} 最终字段所在的obj
 * @return {k} 最终字段所在的obj的key
 * @return {v} 获取值
 *
 * 做项目的时候，这个不需要放到公共文件里（保持公共的mixins要小）
 */
export function getPropByPath(obj, path, strict) {
    let tempObj = obj;
    path = path.replace(/\[(\w+)\]/g, '.$1'); 	// 将[0]转化为.0
    path = path.replace(/^\./, '');				// 去除开头的.
    let keyArr = path.split('.');				// 根据.转化为数组
    let i = 0;
    for (let len = keyArr.length; i < len - 1; ++i) {
        if (!tempObj && !strict) break;
        let key = keyArr[i];
        if (key in tempObj) {
            tempObj = tempObj[key];
        } else {
            if (strict) {			//开启严格模式，没找到对应key值，抛出错误
                throw new Error('please transfer a valid prop path to form item!');
            }
            break;
        }
    }
    return {
        o: tempObj,
        k: keyArr[i],
        v: tempObj ? tempObj[keyArr[i]] : null
    };
};

/**
 * 将字符串true 和 false 转化成 boolean 的 true 和 false
 */
export function toBoolean(value) {
    let bool = {
        'true': true,
        'false': false
    };
    return bool[value] !== undefined ? bool[value] : false;
};
