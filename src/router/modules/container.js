export default {
    path: 'anextUntil',
    component: () => import(/* webpackChunkName: "home" */ '@/views/layout/Container'),
	redirect: '/container/anextUntil/table',
    meta: {
        name: "具体业务",
        path: '/container/anextUntil'
    },
	children: [
		{
			path: 'table',
			component: () => import(/* webpackChunkName: "charts" */ '@/views/container/table'),
			meta: {
                name: "表格页面",
                path: '/container/anextUntil/table'
			}
		},
		{
			path: 'form',
			component: () => import(/* webpackChunkName: "charts" */ '@/views/container/form'),
			meta: {
				name: '表单页面',
                path: '/container/anextUntil/form'
			}
		},
		{
            path: 'externalLink',
            component: () => import('@/views/layout/SubLayout.vue'),
            meta:{
                name: '外部链接',
                path: 'https://www.baidu.com',
                isExtLink: true
            }
		}
	]
}
