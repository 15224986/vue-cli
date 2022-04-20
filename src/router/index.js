import Vue from 'vue';

import Router from 'vue-router';
/**
 * 动态路由报错，重定向
 * 解决vue路由重复导航错误、获取原型对象上的push函数、修改原型对象中的push方法
 */
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
	if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
	return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router);
/**
 * vue使用nprogress页面加载进度条
 */
import NProgress from 'nprogress' 		// progress bar
import 'nprogress/nprogress.css' 		// progress bar style
NProgress.configure({
	easing: 'ease',  					// 动画方式
	speed: 500,  						// 递增进度条的速度
	showSpinner: false, 				// 是否显示加载ico
	trickleSpeed: 200, 					// 自动递增间隔
	minimum: 0.3 						// 初始化时的最小百分比
})

// 引入store
import store from '@/store';

// 引入组件部分
import home from './modules/home'
import user from './modules/user'
import project from './modules/project'
import charts from './modules/charts'
import widget from './modules/widget'
import jurisdiction from './modules/jurisdiction'
import container from './modules/container'




const createRouter = () => new Router({
	// mode: 'history',
	linkActiveClass: "active",
	routes: [
		{
			path: '/',
			component: () => import(/* webpackChunkName: "index" */ '@/views/Index'),
            name: 'home',
            meta:{
                name: "首页",                   //  必填  导航名称 （左导航、标签页 tags-view、面包屑 breadcrumb）
                path: '/',                      //  必填  导航完整路径
                keepAlive: true,                //  非必填  页面是否使用 keepAlive 缓存
                affix: false,                   //  非必填  使用 标签页tags-view 的时候，是否固定
                isExtLink: "",                  //  非必填  是否为外部链接
                hidden: false,                  //  非必填  动态路由，是否显示左导航
                icon: ""                        //  非必填  动态路由，左导航图标
            },
            redirect: '/login',
            children: [
				home,
                user,
                project,
                charts,
                widget,
                jurisdiction
            ]
		},
		{
			path: '/login',
			name: 'login',
			component: () => import(/* webpackChunkName: "login" */ '@/views/Login'),
			meta: {
				title:'登录页'
			}
		},
	],
	// 解决使用keep-alive时，滚动条的问题
	scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
	        return savedPosition
	    }else {
	    	if( to.path !== from.path ){	// 判断是否因为锚点而改变滚动条
	    		if (from.meta.keepAlive) {	// 判断是否keep-alive存储
	    			// 获取浏览器距离顶部的距离
	    			var scrollTop=0;
			        if (window.pageYOffset) {
			        	scrollTop = window.pageYOffset;
			        }else if (document.compatMode && document.compatMode != 'BackCompat'){
			        	scrollTop = document.documentElement.scrollTop;
			        }else if (document.body) {
			        	scrollTop = document.body.scrollTop;
			        }
		            from.meta.savedPosition = scrollTop;
		        }
		        return { x: 0, y: to.meta.savedPosition || 0 }
	    	}
	    }
	}
});

const router = createRouter()
function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

/**
 * 引入获取token的方法
 * 设置白名单页面
 */
import { getToken } from '@/utils/auth' // getToken from cookie
const whiteList = ['/login', '/authredirect']
import {
    Message,
    MessageBox
} from 'element-ui'
/**
 * 检测是否已经登录
 */
router.beforeEach((to, from, next) => {
	// 每次切换页面时，调用进度条
    NProgress.start();

	/**
	 * 动态修改页面的title
	 */
	if ( to.meta.name ) {
		document.title = to.meta.name;
	}else{
		document.title = '智能管理平台';
    }

	/**
	 * 1.获取登陆状态、获取页面是否需要登录
	 * 2.执行操作
	 */
    if (getToken()) { // 判断是否有token
        if (to.path === '/login') {
            next()
            NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
        } else {
            if (store.getters.menus === undefined) { // 判断当前用户是否已拉取完user_info信息
                store.dispatch('userInfo/GetUserInfo').then(info => { // 拉取user_info
                    Message.success('获取权限成功')
                    // next()
                    /**
                     * 添加动态路由
                     */
                    resetRouter()
                    let addRouters = store.getters.addRouters
                    /**
                     * 动态添加可访问路由表
                     * 已废弃：使用 router.addRoute() 代替。
                     * router.addRoutes( addRouters )
                     */
                    addRouters.forEach(addRouter=>{
                        router.addRoute('', addRouter)
                    })
                    next({ ...to, replace: true })              // hack方法 确保addRoute已完成 ,replace: true so the navigation will not leave a history record
                }).catch(() => {
                    store.dispatch('userInfo/FedLogOut').then(() => {
                        Message.error('获取权限失败')
                        next({
                            path: '/login'
                        })
                    })
                })
            } else {
                next()
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next('/login') // 否则全部重定向到登录页
            NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
        }
    }
});


//当路由进入后：关闭进度条
router.afterEach(() => {
    // 在即将进入新的页面组件前，关闭掉进度条
    NProgress.done()
})
export default router;

// 其他非菜单路由
export const otherMenuRouterMap = [
    {
    	path: '/400',
    	component: () => import(/* webpackChunkName: "login" */ '@/views/400'),
        meta: {
            name: "400",
            path: '/400',
            hidden: true,
            keepAlive: true
        },
    },
    {
        path: '/container',
        name: 'container',
    	component: () => import(/* webpackChunkName: "home" */ '@/views/layout/Layout'),
        redirect: '/container/anextUntil',
        meta: {
            name: "存在router-index.js的路由",
            path: '/container/anextUntil'
    	},
        children: [
            container
        ],
    }
]
