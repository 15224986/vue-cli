export default {
	path: 'project',
	component: () => import(/* webpackChunkName: "project" */ '@/views/project/index'),
	name: 'project',
	redirect: '/project/list',
	children: [
		{
			path: 'list',
			component: () => import(/* webpackChunkName: "project" */ '@/views/project/list'),
			name: 'projectList',
			meta: {
				name: "路由的使用"
			}
		},
		{
			path: 'add',
			component: () => import(/* webpackChunkName: "project" */ '@/views/project/add'),
			name: 'projectListAdd',
			meta: {
				name: "路由的使用"
			}
		},
		{
			path: 'list1',
			component: () => import(/* webpackChunkName: "project" */ '@/views/project/list1'),
			name: 'projectList1',
			meta: {
				name: "路由的使用"
			}
		},
		{
			path: 'list2',
			component: () => import(/* webpackChunkName: "project" */ '@/views/project/list2'),
			name: 'projectList2',
			meta: {
				name: "路由的使用"
			}
		},
		{
			path: 'list3/:id/:name',
			component: () => import(/* webpackChunkName: "project" */ '@/views/project/list3'),
			name: 'projectList3',
			meta: {
				name: "路由的使用"
			}
        },
        {
			path: 'noleftnav',
			component: () => import(/* webpackChunkName: "project" */ '@/views/project/no-leftnav'),
			name: 'projectList4',
			meta: {
				name: "路由的使用"
			}
		},
        {
			path: 'noheadernav',
			component: () => import(/* webpackChunkName: "project" */ '@/views/project/no-headernav'),
			name: 'projectList5',
			meta: {
				name: "路由的使用"
			}
		},
        {
			path: 'nonav',
			component: () => import(/* webpackChunkName: "project" */ '@/views/project/no-nav'),
			name: 'projectList6',
			meta: {
				name: "路由的使用"
			}
		}
	]
}