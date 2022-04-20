/**
 * 首字母大写
 * @param {string} value 
 * @return {string} 
 */
export function capitalize(value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
}

/**
 * 首字母大写
 * @param {string} value 
 * @return {string} 
 */
export function toUpperCase(value) {
    if (!value) return ''
    value = value.toString()
    return value.toUpperCase();
}



/**
 * 获取整数
 * @param {string} value 
 * @return {string} 
 */
export function mathRound(value) {
    if (!value) return ''
    return value*10
}

