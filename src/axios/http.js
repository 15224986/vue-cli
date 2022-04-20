import Axios from 'axios';
import Qs from 'qs';
import Vue from 'vue';


/**
 * 引入路径
 * 不同服务器的ip地址
 */
import { axiosBaseURL } from '@/config/ip.js'


/**
 * 使用自定义配置新建一个 axios 实例
 */
var instance = Axios.create({
    baseURL: axiosBaseURL.ip1,
    timeout: 15000,  //超时响应
    withCredentials: true,  // Axios 默认不发送cookie，需要全局设置true发送cookie
    // headers: {
    //     'Content-Type' : 'application/x-www-form-urlencoded'
    // }
});


/**
 * 封装Axios方法
 * @param url
 * @param data
 * @returns {Promise}
 */
const http = ( params = {} ) => {
    return new Promise((resolve, reject) => {
        instance(params).then(response => {
                resolve(response.data);
            }).catch(err => {
                reject(err)
            })
    })
};


/**
 * 封装all、spread方法
 */
http.all = function(promises) {
	return Promise.all(promises);
};
http.spread = function(callback) {
	return function wrap(arr) {
		return callback.apply(null, arr);
	};
};
/**
 * 使用例子
 */
// httpall(){
    // let params = {};
    // let params2 = {
    //     baseURL:''       // 修改默认路径
    // };
    // let ajaxArr= [
    //     this.$http.get('/mock/additionOptions', params, params2),
    //     this.$http.get('/mock/addition', params, params2)
    // ];
    // this.$http.all(ajaxArr).then( ([acct, perms])=>{
    // 	console.log( acct, perms );
    // }).catch(error => {
    // 	console.log(error);
    // });
    // this.$http.all(ajaxArr).then(this.$http.spread(function(acct, perms) {
    // 	console.log( acct, perms );
    // }));
// },


/**
 * 封装get方法
 * @param url       // 路径
 * @param params    // 参数
 * @param obj       // 配置
 * @returns {Promise}
 */
http.get = (url, params = {}, obj = {} ) => {
    return new Promise((resolve, reject) => {
        obj.params = params;
        instance.get(url, obj ).then(response => {
                resolve(response.data);
            }).catch(err => {
                reject(err)
            })
    })
};

/**
 * 封装delete方法
 * @param url       // 路径
 * @param params    // 参数
 * @param obj       // 配置
 * @returns {Promise}
 */
http.delete = (url, params = {}, obj = {}) => {
    return new Promise((resolve, reject) => {
        obj.params = params;
        instance.delete(url, obj ).then(response => {
                resolve(response.data);
            }).catch(err => {
                reject(err)
            })
    })
};


/**
 * 封装head方法
 * @param url       // 路径
 * @param params    // 参数
 * @param obj       // 配置
 * @returns {Promise}
 */
http.head = (url, params = {}, obj = {}) => {
    return new Promise((resolve, reject) => {
        obj.params = params;
        instance.head(url, obj).then(response => {
                resolve(response.data);
            }).catch(err => {
                reject(err)
            })
    })
}



/**
 * 封装post请求
 * @param url       // 路径
 * @param data      // 参数
 * @param obj       // 配置
 * @returns {Promise}
 */
http.post = (url, data = {}, obj = {}) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data, obj).then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    });
}


/**
 * 封装put请求
 * @param url       // 路径
 * @param data      // 参数
 * @param obj       // 配置
 * @returns {Promise}
 */
http.put = (url, data = {}, obj = {}) => {
    return new Promise((resolve, reject) => {
        instance.put(url, data, obj).then(response => {
            resolve(response.data);
        }, err => {
            reject(err)
        })
    });
}


/**
 * 封装patch请求
 * @param url       // 路径
 * @param data      // 参数
 * @param obj       // 配置
 * @returns {Promise}
 */
http.patch = (url, data = {}, obj = {}) => {
    return new Promise((resolve, reject) => {
        instance.patch(url, data, obj).then(response => {
            resolve(response.data);
        }, err => {
            reject(err)
        })
    });
}

/**
 * 拦截器
 * 在请求或响应被 then 或 catch 处理前拦截它们。
 */

// 引入路由
import router from '@/router';   // vue-router
// 引入store
import store from '@/store/index';


// 引入loading
import { Loading } from 'element-ui';
// 定义loading变量
let loading
// 使用Element loading-start 方法
function startLoading() {
    loading = Loading.service({
        lock: false,
        body: true,
        text: '加载中……',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}
// 使用Element loading-close 方法
function endLoading() {
    loading.close()
}
/**
 * 那么 showFullScreenLoading() tryHideFullScreenLoading() 要干的事儿就是将同一时刻的请求合并。
 * 声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
 * 调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。needLoadingRequestCount为 0 时，结束 loading。
 */
let needLoadingRequestCount = 0
function showFullScreenLoading(config) {
    /**
     * 是否开启了 loading
     * 如果参数中携带了 isShowFullScreenLoading = false 则本次加载了loading，
     * 关闭本次开启的FullScreenLoading()
     */
    let isShowFullScreenLoading = true;
    if (config.params && config.params.isShowFullScreenLoading === false) {
        isShowFullScreenLoading = false;
    } else if (config.data && config.data.isShowFullScreenLoading === false) {
        isShowFullScreenLoading = false;
    }
    // console.log( "request:", isShowFullScreenLoading )
    if (isShowFullScreenLoading) {
        if (needLoadingRequestCount === 0) {
            startLoading()
        }
        needLoadingRequestCount++
    }
}
function tryHideFullScreenLoading(config) {
    /**
     * 是否开启 loading
     * 如果参数中携带了 isShowFullScreenLoading = true 则关闭本次的加载中调用
     */
    let isShowFullScreenLoading = true;
    if (config.params && config.params.isShowFullScreenLoading === false) {
        isShowFullScreenLoading = false
    } else if (config.data && JSON.parse(config.data).isShowFullScreenLoading === false) {
        isShowFullScreenLoading = false
    }
    if (isShowFullScreenLoading) {
        if (needLoadingRequestCount <= 0) return
        needLoadingRequestCount--
        if (needLoadingRequestCount === 0) {
            endLoading()
        }
    }
}
function hideFullScreenLoading() {
   if (needLoadingRequestCount <= 0) return
   needLoadingRequestCount--
   if (needLoadingRequestCount === 0) {
       endLoading()
   }
}


/**
 * 设置白名单接口
 * 白名单接口不验证token
 */
const whiteList = ['mock/table', 'sys/user/login']
// 请求拦截器
instance.interceptors.request.use((config) => {
    // console.log( config.url )
    // 开启 loading
    showFullScreenLoading(config);

    /**
     * 发送请求携带 token
     * 判断本地是否存在token，如果存在的话，则每个http header都加上token
     */
    const token = store.getters.token;
    if (token) {
        config.headers['token'] = token;
    }

    /**
     * 刷新token
     */
    const timestamp = new Date().getTime();
    const tokenExpire = store.getters.tokenExpire-0;
    if( whiteList.indexOf(config.url) === -1 && timestamp >= tokenExpire ){
        // console.log( timestamp , tokenExpire, timestamp >= tokenExpire )
        const refreshToken = store.getters.refreshToken;
        return new Promise((resolve, reject) => {
            //刷新token
            store.dispatch('userInfo/RefreshToken', refreshToken).then(() => {
                // console.log('获取token');
                resolve(config)
            }).catch(() => {
                store.dispatch('userInfo/FedLogOut').then(() => {
                    router.push({ path: "/login" });
                    reject()
                    // 清空信息后 刷新页面  因为没有token所以回到登录页
                    // location.reload() // 为了重新实例化vue-router对象 避免bug
                })
            })
        });
    }
    return config;
}, error =>{
    // 对请求错误做些什么
    return Promise.reject(error)
});
// 添加响应拦截器
instance.interceptors.response.use(response =>{
    // 根据code跳转到响应页面
    if( response.data && response.data.code == 702 ){
        store.dispatch('toFullPath/invokeChangeSrc', router.history.current.fullPath);
        router.push({ path: "/login" });
    }else if( response.data && response.data.code == 400 ){
        router.push({ path: "/400" });
    }
    // 关闭 loading
    tryHideFullScreenLoading( response.config );
    // 对响应数据做点什么
    return response
}, error =>{
    hideFullScreenLoading();

    // 对响应错误做点什么
	return Promise.reject(error)
});

export {instance, http};
