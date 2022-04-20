export default {
	path: 'jurisdiction',
	component: () => import(/* webpackChunkName: "jurisdiction" */ '@/views/jurisdiction/index'),
	name: 'jurisdiction',
	redirect: '/jurisdiction/list',
	meta:{
    	name: "首页",
    },
	children: [
		{
			path: 'list',
			component: () => import(/* webpackChunkName: "jurisdiction" */ '@/views/jurisdiction/list'),
			name: 'jurisdictionList',
			meta: {
				name: "权限列表"
			}
		},
		{
			path: 'add',
			component: () => import(/* webpackChunkName: "jurisdiction" */ '@/views/jurisdiction/add'),
			name: 'jurisdictionAdd',
			meta: {
				name: '权限管理'
			}
		}
	]
}