/**
 * getHeadUrl 获取路径前缀
 * @param true 开发用， false 打包用
 * @returns {Promise}
 */
var istest = false
function getHeadUrl () {
    let url = ''
    if (istest) {
        url = 'api/NOISSA_WEB'
    } else {
        // 获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
        let curWwwPath = window.document.location.href
        // 获取主机地址之后的目录，如： /uimcardprj/share/meun.jsp
        let pathName = window.document.location.pathname
        // 获取主机地址，如： http://localhost:8083
        let pos = curWwwPath.indexOf(pathName)
        let localhostPaht = curWwwPath.substring(0, pos)
        // 获取带"/"的项目名，如：/uimcardprj
        let projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1)
        // js获取项目根路径，如： http://localhost:8083/uimcardprj
        url = localhostPaht + projectName
    }
    return url
}
export {getHeadUrl};
