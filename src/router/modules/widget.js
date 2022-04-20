export default {
	path: 'widget',
	component: () => import(/* webpackChunkName: "widget" */ '@/views/widget/index'),
	name: 'widget',
	redirect: '/widget/assembly',
	meta: {
		name: "插件组件",
		path: '/widget/assembly'
	},
	children: [
		{
			path: 'assembly',
			component: () => import(/* webpackChunkName: "widget" */ '@/views/widget/assembly'),
			name: 'widgetAssembly',
			meta: {
				name: "插件管理",
				path: '/widget/assembly'
			}
		},
		{
			path: 'unit',
			component: () => import(/* webpackChunkName: "widget" */ '@/views/widget/unit'),
			name: 'widgetUnit',
			meta: {
				name: "组件管理",
				path: '/widget/unit'
			}
		},
		{
			path: 'static',
			component: () => import(/* webpackChunkName: "widget" */ '@/views/widget/static'),
			name: 'widgetStatic',
			meta: {
				name: "静态资源",
				path: '/widget/static'
			}
		}
	]
}