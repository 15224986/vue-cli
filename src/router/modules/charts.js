export default {
	path: 'charts',
	component: () => import(/* webpackChunkName: "charts" */ '@/views/charts/index'),
	name: 'charts',
	redirect: '/charts/echarts',
	children: [
		{
			path: 'echarts',
			component: () => import(/* webpackChunkName: "charts" */ '@/views/charts/echarts'),
			name: 'echarts',
			meta: {
				name: "echarts图表"
			}
		},
		{
			path: 'vue-echarts',
			component: () => import(/* webpackChunkName: "charts" */ '@/views/charts/vue-echarts'),
			name: 'vueEchartsPage',
			meta: {
				name: "vue-echarts图表"
			}
		}
	]
}
