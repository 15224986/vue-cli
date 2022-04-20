export default {
    path: 'home',
	component: () => import(/* webpackChunkName: "home" */ '@/views/index/index'),
    name: 'case',
    redirect: '/home/jQuery',
    meta: {
		name: "案例页面",
		path: '/home/jQuery'
	},
    children: [
        {
        	path: 'morePanel',
        	name: 'morePanel',
        	component: () => import(/* webpackChunkName: "home" */ '@/views/index/morePanel'),
        	meta: {
        		name: "查看更多面板",
        		keepAlive: true,
        		path: '/home/morePanel',
        		affix: false
        	}
        },
        {
        	path: 'shortcut',
        	component: () => import(/* webpackChunkName: "home" */ '@/views/index/shortcut'),
        	name: 'shortcut',
        	meta: {
        		name: "监听键盘操作（组合键）",
        		path: '/home/shortcut',
        		keepAlive: true,
        		affix: false
        	}
        },
        {
        	path: 'elementCustomParams',
        	component: () => import(/* webpackChunkName: "home" */ '@/views/index/elementCustomParams'),
        	name: 'elementCustomParams',
        	meta: {
        		keepAlive: true,	// 是否使用keep-alive缓存页面
        		name: "Element 自定义参数",
        		path: '/home/elementCustomParams',
        		affix: false //
        	}
        },
        {
        	path: 'jQuery',
        	component: () => import(/* webpackChunkName: "home" */ '@/views/index/jQuery'),
        	name: 'jQuery',
        	meta: {
        		keepAlive: true,
        		name: "jQuery 引用",
        		path: '/home/jQuery',
        		affix: true
        	}
        },
    	{
			path: 'anchor',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/anchor'),
			name: 'anchor',
			meta: {
				keepAlive: true,	// 是否使用keep-alive缓存页面
				name: "Anchor锚点、Affix图钉",
				path: '/home/anchor',
				affix: false //
			}
		},
        {
        	path: 'verify',
        	component: () => import(/* webpackChunkName: "home" */ '@/views/index/verify'),
        	name: 'verify',
        	meta: {
        		keepAlive: true,	// 是否使用keep-alive缓存页面
        		name: "验证码",
        		path: '/home/verify',
        		affix: false //
        	}
        },
    	{
			path: 'directiveFilters',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/directive-filters'),
			name: 'directive-filters',
			meta: {
				keepAlive: true,
				name: "指令、过滤器、工具的全局使用",
				path: '/home/directiveFilters',
				affix: false //
			}
		},
    	{
			path: 'orgchart',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/orgchart'),
			name: 'orgchart',
			meta: {
				keepAlive: true,
				name: "orgchart组织架构图",
				path: '/home/orgchart',
				affix: false
			}
		},
    	{
			path: 'tinymce',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/tinymce'),
			name: 'tinymce',
			meta: {
				keepAlive: true,
				name: "tinymce5富文本编辑器",
				path: '/home/tinymce',
				affix: false
			}
		},
		{
			path: 'sector',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/sector'),
			name: 'sector',
			meta: {
				keepAlive: true,
				name: "css3 效果",
				path: '/home/sector',
				affix: false
			}
		},
		{
			path: 'syncModel',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/syncModel'),
			name: 'syncModel',
			meta: {
				keepAlive: true,
				name: "数据的双向传递",
				path: '/home/syncModel',
				affix: false
			}
		},
		{
			path: 'multilayerNesting',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/multilayerNesting'),
			name: 'multilayerNesting',
			meta: {
				keepAlive: true,
				name: "Vue多层嵌套",
				path: '/home/multilayerNesting',
				affix: false
			}
		},
		{
			path: 'selectRelevant',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/selectRelevant'),
			name: 'selectRelevant',
			meta: {
				keepAlive: true,
				name: "select全选、联动",
				path: '/home/selectRelevant',
				affix: false
			}
		},
		{
			path: 'complexData',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/complexData'),
			name: 'complexData',
			meta: {
				keepAlive: true,
				name: "js复杂数据类型的深层复制",
				path: '/home/complexData',
				affix: false
			}
		},
		{
			path: 'transferSearch',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/transferSearch'),
			name: 'transferSearch',
			meta: {
				keepAlive: true,
				name: "穿梭框自定义搜索",
				path: '/home/transferSearch',
				affix: false
			}
		},
		{
			path: 'requiredType',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/requiredType'),
			name: 'requiredType',
			meta: {
				keepAlive: true,
				name: "切换必填状态",
				path: '/home/requiredType',
				affix: false
			}
		},
		{
			path: 'fuzzySearch',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/fuzzySearch'),
			name: 'fuzzySearch',
			meta: {
				keepAlive: true,
				name: "模糊搜索",
				path: '/home/fuzzySearch',
				affix: false
			}
		},
		{
			path: 'tableRelevant',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/tableRelevant'),
			name: 'tableRelevant',
			meta: {
				keepAlive: true,
				name: "table相关",
				path: '/home/tableRelevant',
				affix: false
			}
		},
        {
        	path: 'exportExcel',
        	component: () => import(/* webpackChunkName: "home" */ '@/views/index/exportExcel'),
        	name: 'exportExcel',
        	meta: {
        		keepAlive: true,
        		name: "js-xlsx的使用",
        		path: '/home/exportExcel',
        		affix: false
        	}
        },
		{
			path: 'sortablejs',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/sortablejs'),
			name: 'sortablejs',
			meta: {
				keepAlive: true,
				name: "拖拽排序",
				path: '/home/sortablejs',
				affix: false
			}
		},
        {
        	path: 'draggableResizable',
        	component: () => import(/* webpackChunkName: "home" */ '@/views/index/draggableResizable'),
        	name: 'draggableResizable',
        	meta: {
        		keepAlive: true,
        		name: "可拖拽可缩放",
        		path: '/home/draggableResizable',
        		affix: false
        	}
        },
		{
			path: 'mockjsData',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/mockjsData'),
			name: 'mockjsData',
			meta: {
				keepAlive: true,
				name: "mock.js测试",
				path: '/home/mockjsData',
				affix: false
			}
		},
		{
			path: 'lotteryDraw',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/lotteryDraw'),
			name: 'lotteryDraw',
			meta: {
				keepAlive: true,
				name: "语法高亮、抽奖功能",
				path: '/home/lotteryDraw',
				affix: false
			}
		},
		{
			path: 'sliderScale',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/sliderScale'),
			name: 'sliderScale',
			meta: {
				keepAlive: true,
				name: "滑块控制缩放",
				path: '/home/sliderScale',
				affix: false
			}
		},



		{
			path: 'logicflow',
			component: () => import(/* webpackChunkName: "home" */ '@/views/index/plugin/logicflow'),
			name: 'logicflow',
			meta: {
				keepAlive: true,
				name: "LogicFlow 流程图",
				path: '/home/logicflow',
				affix: false
			}
		},
        {
        	path: 'uuid',
        	component: () => import(/* webpackChunkName: "home" */ '@/views/index/plugin/uuid'),
        	name: 'uuid',
        	meta: {
        		keepAlive: true,
        		name: "UUID库",
        		path: '/home/uuid',
        		affix: false
        	}
        },
        {
        	path: 'aceEditor',
        	component: () => import(/* webpackChunkName: "home" */ '@/views/index/plugin/aceEditor'),
        	name: 'aceEditor',
        	meta: {
        		keepAlive: true,
        		name: "网页编辑器",
        		path: '/home/aceEditor',
        		affix: false
        	}
        },
        {
        	path: 'highlight',
        	component: () => import(/* webpackChunkName: "home" */ '@/views/index/plugin/highlight'),
        	name: 'highlight',
        	meta: {
        		keepAlive: true,
        		name: "语法高亮",
        		path: '/home/highlight',
        		affix: false
        	}
        }
	]
}
