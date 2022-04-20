export default {
	path: 'user',
	component: () => import(/* webpackChunkName: "user" */ '@/views/user/index'),
	name: 'user',
	redirect: '/user/list',
	children: [
		{
			path: 'list',
			component: () => import(/* webpackChunkName: "user" */ '@/views/user/list'),
			name: 'list',
			meta: {
				name: "人员列表"
			}
		},
		{
			path: 'add',
			component: () => import(/* webpackChunkName: "user" */ '@/views/user/add'),
			name: 'add',
			meta: {
				name: "新增人员"
			}
		},
		{
			path: 'details',
			component: () => import(/* webpackChunkName: "user" */ '@/views/user/details'),
			name: 'details',
			meta: {
				name: "人员详情"
			}
		}
	]
}