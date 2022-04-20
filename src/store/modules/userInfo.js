import {
    instance,
    http
} from '@/axios/http'
import {
    getToken,
    setToken,
    removeToken,

    getTokenExpire,
    setTokenExpire,
    removeTokenExpire,

    getRefreshToken,
    setRefreshToken,
    removeRefreshToken
} from '@/utils/auth'

import { otherMenuRouterMap } from '@/router'



// 数据源
const state = {
    user: 'anextUntil', // 初始化一个登录账户的信息 user
    token: getToken(),
    refreshToken: getRefreshToken(),
    tokenExpire: getTokenExpire(),          // token过期时间
    addRouters: undefined,                  // 路由权限、动态路由
    menus: undefined,                       // 菜单权限
    elements: undefined,                    // 非菜单权限
    number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
};
// 相当于 store 的计算属性
const getters = {
    renderUser(state) { //承载变化的user
        return state.user;
    },
    maxNumber(state) {
        return state.number.filter(function(item, index) {
            return item >= 5;
        });
    }
};
// mutation 非常类似于事件
const mutations = {
    CHANGE_USER(state, items) {
        state.user = items;
    },
    CHANGE_TOKEN(state, token) {
        state.token = token;
    },
    CHANGE_REFRESHTOKEN(state, refreshToken) {
        state.refreshToken = refreshToken;
    },
    CHANGE_TOKENEXPIRE(state, tokenExpire) {
        state.tokenExpire = tokenExpire;
    },
    CHANGE_ADDROUTERS(state, addRouters) {
        state.addRouters = addRouters;
    },
    CHANGE_MENUS(state, menus) {
        state.menus = menus;
    },
    CHANGE_ELEMENTS(state, elements) {
        state.elements = elements;
    },
};
/**
 * Action 类似于 mutation，不同在于：
 * Action 提交的是 mutation，而不是直接变更状态。
 * Action 可以包含任意异步操作。
 */
const actions = {
    invokeCHANGE_User(context, item) { // 触发mutations里面的CHANGE_User ,传入数据形参item 对应到items
        context.commit('CHANGE_USER', item);
    },
    /**
     * 用户名登录
     */
    LoginByUsername({commit}, userInfo) {
        commit('CHANGE_TOKEN', '')
        commit('CHANGE_REFRESHTOKEN', '')
        commit('CHANGE_TOKENEXPIRE', '')
        commit('CHANGE_MENUS', undefined)
        removeToken()
        removeTokenExpire()
        removeRefreshToken()



        return new Promise((resolve, reject) => {
            // http.post('sys/user/login', userInfo ).then((response) => {
            //     refreshTokenInfo({commit},response)
            //     /**
            //      * 其他操作
            //      */
            //     resolve()
            // }).catch((error) => {
            //     console.log(error);
            //     reject()
            // });

            /**
             * 小token   过期时间短
             * 大token   过期时间长
             * tokenExpire token过期时间  10分钟刷新一次
             */
            const response = {
                token:'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6IjEiLCJuYW1lIjoi6LaF57qn566h55CG5ZGYIiwiZXhwIjoxNTk5NjU0MjIwfQ.IFBkCid1dSIfI6PKFWHRqhrCzDrayupxETuo02CRVdkh6MWDlzqbkq9Un2HeEw2I1Cow0xMnyMCXFjJHh1ArFFHbLjM9C8pc04702tIJcg3WcB07MIFQJY7-hr0V_xwXSt20oueXzS3jhh5OxYeTczeAW7P29b867j8cjr3gYEs',
                refreshToken:'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6IjEiLCJuYW1lIjoi6LaF57qn566h55CG5ZGYIiwianRpIjoiYTA5MDg5ZTUtMmUyZi00ZWUzLTlhNjUtOTE5NTlmMjQzNjU4IiwiZXhwIjoxNTk5NjU0NTIwfQ.ChhwFhvLjMxaC0-M0rOTHDocv4i2cLWQedCwAiqX4BuuWWjjQHOH0Pwnn7q-btAGy-7G_zwmYQUJwbgabELe3a0zejodX6NiA4skmhMIyU9GekMHj4i1JPVWoI1Nka5TmidgbDLeXsRgB4Fj97CsRwkruSOiomvqCiKFXtTwLjU',
                tokenExpire: 0.5
            }
            setTimeout(()=>{
                refreshTokenInfo({commit},response)
                /**
                 * 其他操作
                 */
                resolve()
            }, 2000);
        })
    },
    /**
     * 获取用户信息,
     * 生成菜单
     */
    GetUserInfo({commit, state}) {
        commit('CHANGE_USER', '')
        commit('CHANGE_MENUS', '')
        commit('CHANGE_ELEMENTS', '')
        commit('CHANGE_ADDROUTERS', '')
        return new Promise((resolve, reject) => {
            // http.get('sys/user/userInfo', state.token ).then((response) => {
            //     /**
            //      * 给vuex赋值
            //      */
            //     commit('CHANGE_USER', response.name)
            //     commit('CHANGE_MENUS', response.menus)
            //     commit('CHANGE_ELEMENTS', response.elements)

            //     /**
            //      * 动态路由的添加
            //      */
            //     let accessedRouters = (response.addRouters && response.addRouters.length > 0) ? createdRouters(response.addRouters, 1, null) : otherMenuRouterMap // 数据库配置的菜单转router
            //     if (accessedRouters && accessedRouters.length) {
            //         accessedRouters = accessedRouters.concat(otherMenuRouterMap)
            //     }
            //     commit('CHANGE_ADDROUTERS', accessedRouters)

            //     /**
            //      * 其他操作
            //      */
            //     resolve()
            // }).catch((error) => {
            //     console.log(error);
            //     reject()
            // });

            setTimeout(()=>{
                const response = {
                    menus: {
                        'add': true,
                        'delete': true,
                    },
                    elements: {
                        'name': true,
                        'age': true,
                    },
                    name:'小茗同学',
                    addRouters:[
                        {
                            // 页面相关
                            name: '404',                       // 导航名称
                            path: '404',                        // 导航路径
                            keepAlive: true,                    // 页面是否使用 keepAlive 缓存（可不填）
                            affix: false,                       // 使用 标签页tags-view 的时候，是否固定（可不填）
                            hidden: true,                       // 是否在左导航显示
                            isExtLink: "",                      // 是否外部链接
                            icon: "",                           // 导航图标
                            // router 相关
                            component: '404',                   // 资源路径 Layout、Container、SubLayout 为导航的层级关系
                            children:[]                         // 子路由
                        },
                        {
                            name: '500',
                            path: '500',
                            hidden: true,
                            component: '500',
                            children:[]
                        },
                        {
                            name: '存在后台的路由',
                            path: 'layout',
                            icon: "el-icon-share",            // 导航图标
                            component: 'Layout',
                            children:[
                                {
                                    name: 'CONTAINER',
                                    path: 'container',
                                    component: 'Container',
                                    children:[
                                        {
                                            name: 'CONTAINER1',
                                            path: 'container1',
                                            component: 'SubLayout',
                                            children:[
                                                {
                                                    name: '表格页面',
                                                    path: 'table',
                                                    component: 'container/table',
                                                    children:[]
                                                },
                                                {
                                                    name: '表单页面',
                                                    path: 'form',
                                                    component: 'container/form',
                                                    children:[]
                                                },
                                                {
                                                    name: '外部链接',
                                                    path: 'https://www.baidu.com',
                                                    isExtLink: true,
                                                    component: '',
                                                    children:[]
                                                }
                                            ]
                                        },
                                        {
                                            path: 'container-2',
                                            name: 'container-2',
                                            component: 'SubLayout',
                                            children:[]
                                        },
                                        {
                                            path: 'container-3',
                                            name: 'container-3',
                                            component: 'SubLayout',
                                            children:[]
                                        }
                                    ]
                                },
                                {
                                    path: 'container2',
                                    name: 'container2',
                                    component: 'Container',
                                    children:[]
                                },
                                {
                                    path: 'container3',
                                    name: 'container3',
                                    component: 'Container',
                                    children:[]
                                },
                                {
                                    path: 'container4',
                                    name: 'container4',
                                    component: 'Container',
                                    children:[]
                                }
                            ]
                        }
                    ]
                }
                /**
                 * 给vuex赋值
                 */
                commit('CHANGE_USER', response.name)
                commit('CHANGE_MENUS', response.menus)
                commit('CHANGE_ELEMENTS', response.elements)

                /**
                 * 动态路由的添加
                 */
                let accessedRouters = (response.addRouters && response.addRouters.length > 0) ? createdRouters(response.addRouters, 1, null) : otherMenuRouterMap // 数据库配置的菜单转router
                if (accessedRouters && accessedRouters.length) {
                    accessedRouters = accessedRouters.concat(otherMenuRouterMap)
                }
                commit('CHANGE_ADDROUTERS', accessedRouters)

                /**
                 * 其他操作
                 */
                resolve()
            }, 2000);
        })
    },
    /**
     * 退出登录
     */
    FedLogOut({commit, state}) {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                commit('CHANGE_USER', '')
                commit('CHANGE_TOKEN', '')
                commit('CHANGE_REFRESHTOKEN', '')
                commit('CHANGE_TOKENEXPIRE', '')
                commit('CHANGE_MENUS', '')
                commit('CHANGE_ELEMENTS', '')
                removeToken()
                removeTokenExpire()
                removeRefreshToken()
                resolve()
            }, 2000);

            // http.get('sys/user/logout', state.token ).then((response) => {
            //     commit('CHANGE_TOKEN', '')
            //     commit('CHANGE_REFRESHTOKEN', '')
            //     commit('CHANGE_TOKENEXPIRE', '')
            //     commit('CHANGE_MENUS', '')
            //     commit('CHANGE_ELEMENTS', '')
            //     removeToken()
            //     removeTokenExpire()
            //     removeRefreshToken()
            //     resolve()
            // }).catch((error) => {
            //     console.log(error);
            //     reject()
            // });
        })
    },
    /**
     * 前端刷新Token
     */
    RefreshToken({commit,state}) {
        commit('CHANGE_TOKEN', '')
        removeToken()
        return new Promise((resolve, reject) => {
            /**
             * 小token   过期时间短
             * 大token   过期时间长
             * tokenExpire token过期时间  10分钟刷新一次
             */
            const response = {
                token:'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6IjEiLCJuYW1lIjoi6LaF57qn566h55CG5ZGYIiwiZXhwIjoxNTk5NjU0MjIwfQ.IFBkCid1dSIfI6PKFWHRqhrCzDrayupxETuo02CRVdkh6MWDlzqbkq9Un2HeEw2I1Cow0xMnyMCXFjJHh1ArFFHbLjM9C8pc04702tIJcg3WcB07MIFQJY7-hr0V_xwXSt20oueXzS3jhh5OxYeTczeAW7P29b867j8cjr3gYEs',
                refreshToken:'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6IjEiLCJuYW1lIjoi6LaF57qn566h55CG5ZGYIiwianRpIjoiYTA5MDg5ZTUtMmUyZi00ZWUzLTlhNjUtOTE5NTlmMjQzNjU4IiwiZXhwIjoxNTk5NjU0NTIwfQ.ChhwFhvLjMxaC0-M0rOTHDocv4i2cLWQedCwAiqX4BuuWWjjQHOH0Pwnn7q-btAGy-7G_zwmYQUJwbgabELe3a0zejodX6NiA4skmhMIyU9GekMHj4i1JPVWoI1Nka5TmidgbDLeXsRgB4Fj97CsRwkruSOiomvqCiKFXtTwLjU',
                tokenExpire: 0.5
            }
            setTimeout(()=>{
                refreshTokenInfo({commit},response)
                // console.log(state.refreshToken)
                /**
                 * 其他操作
                 */
                resolve()
            }, 2000);

            // http.get('sys/user/refreshToken', state.refreshToken ).then((response) => {
            //     refreshTokenInfo({commit},response)
            //     /**
            //      * 其他操作
            //      */
            //     resolve()
            // }).catch((error) => {
            //     console.log(error);
            //     reject()
            // });
        })
    }
};

/**
 * 创建菜单数组的方法
 * @param {Object} menus    后台请求的菜单数据
 * @param {Object} level    菜单等级
 * @param {Object} parentRoute  父路由
 */
function createdRouters(menus, level, parentRoute) {
    const accessedRouters = [];
    if (menus && menus.length>0) {
        menus.forEach( menu=>{
            const parentRouteFullPath = parentRoute==null ? '' : parentRoute.meta.path
            const parentRouteName = parentRoute==null ? '' : parentRoute.name
            let itemlevel = level;

            // 资源路径
            let componentPath = menu.component
            if (level==1 && menu.children && menu.children.length>0) {
                componentPath = 'layout/Layout'
            }else if (level==2 && menu.children && menu.children.length>0) {
                componentPath = 'layout/Container'
            }else if (level>2 && menu.children && menu.children.length>0) {
                componentPath = 'layout/SubLayout'
            }else if( componentPath === 'Layout' ){
                componentPath = 'layout/Layout'
            }else if(componentPath === 'Container'){
                componentPath = 'layout/Container'
            }else if(componentPath === 'SubLayout'){
                componentPath = 'layout/SubLayout'
            }

            // 拼接路由
            let route = {
                path: level === 1 ? '/' +  menu.path : menu.path,
                component: () => import('@/views/'+componentPath+'.vue'),
                meta:{
                    name: menu.name,
                    path: parentRouteFullPath + '/' + menu.path,
                    keepAlive: menu.keepAlive,
                    affix: menu.affix,
                    hidden: menu.hidden,
                    isExtLink: menu.isExtLink,
                    icon: menu.icon
                },
            }
            if(menu.isExtLink){
                route = {
                    path: 'externalLink',
                    component: () => import('@/views/layout/SubLayout.vue'),
                    meta:{
                        name: menu.name,
                        path: menu.path,
                        isExtLink: menu.isExtLink
                    }
                }
            }
            if (menu.children && menu.children.length) {
                itemlevel++
                route.children = createdRouters(menu.children, itemlevel, route)
            }
            accessedRouters.push(route)
        });
    }
    return accessedRouters
}
/**
 *
 */
function refreshTokenInfo({commit},response){
    /**
     * 给vuex赋值
     */
    commit('CHANGE_TOKEN', response.token)
    commit('CHANGE_REFRESHTOKEN', response.refreshToken)
    const tokenExpire = response.tokenExpire * 60 * 1000 + new Date().getTime()
    commit('CHANGE_TOKENEXPIRE', tokenExpire)
    /**
     * 给本地赋值
     */
    setToken(response.token)
    setRefreshToken(response.refreshToken)
    setTokenExpire(tokenExpire)
}


export default {
    namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}
