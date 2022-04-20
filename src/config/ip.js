/**
 * true 开发用， false 打包用
 */
const istest = true;

/**
 * 公共ip
 */
let axiosBaseURL = {
    ip1: process.env.VUE_APP_URL,   // 平台共享工单和租户入主工单
    ip2: "http://10.4.66.45:8891/",             //
};
if( istest ){
    axiosBaseURL = {
        ip1: '',   // 平台共享工单和租户入主工单
        ip2: "http://10.4.66.45:8891/",             //
    };
}






function getHeadUrl() {
	// 获取当前网址，如： http://localhost:8280/#/anextUntil/table
	let href = window.document.location.href
	// 获取主机地址，如： http://localhost:8280
	let origin = window.document.location.origin
	// 获取主机地址之后的目录，如： /
	let pathname = window.document.location.pathname
	// 如果是hash模式获取hash，如： #/anextUntil/table
	let hash = window.document.location.hash
	// 获取请求类型 ，如： http:
	let protocol = window.document.location.protocol
	// 获取host，如： localhost:8280
	let host = window.document.location.host
	// 获取hostname，如： localhost
	let hostname = window.document.location.hostname
	// 获取端口号，如： 8280
	let port = window.document.location.port
    // 拼接
	var protocolIp = protocol + '//' + hostname + ':' + port;
	return protocolIp

    /**
     * 以iframe嵌入到别的页面里使用
     */
    // 获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
    let curWwwPath = window.document.location.href
    // 获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
    let pathName = window.document.location.pathname
    let pos = curWwwPath.indexOf(pathName)
    // 获取主机地址，如： http://localhost:8083
    let localhostPaht = curWwwPath.substring(0, pos)
    // 获取带"/"的项目名，如：/uimcardprj
    let projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1)
    // js获取项目根路径，如： http://localhost:8083/uimcardprj
    let baseURL = localhostPaht + projectName
    return baseURL



}





export { istest, axiosBaseURL };
