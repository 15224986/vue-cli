import Vue from 'vue';
import App from './App.vue';
import router from './router';	// vue-router
import store from './store/index';		// vue-vueX


/**
 * Vue去掉警告 You are running Vue in development mode
 */
Vue.config.productionTip = false;


/**
 * 配置是否允许 vue-devtools 检查代码。
 */
// Vue.config.devtools = false;


/**
 * 引入mock数据，关闭则注释该行
 */
require('./assets/mock');



/**
 * 自定义图标
 */
import './icons' // icon

/**
 * 引入定义的axios
 */
import { instance, http } from './axios/http'
Vue.prototype.$http = http;
Vue.prototype.$axios = instance;


/**
 * 引入ui模板 element-ui
 */
import '@/scripts/ElementUI'


/**
 * 引入数据图表 echarts
 */
import VueEcharts from 'vue-echarts/components/ECharts'
import echarts from 'echarts'
Vue.component('chart', VueEcharts)
Vue.prototype.$echarts = echarts


/**
 * 引入导出表格xlsx
 * npm install -S xlsx
 * https://www.jianshu.com/p/2819b563bfd7
 * vue-xlsx-style 支持修改xlsx的样式  单元格宽度、背景色、边框等等
 */
import XLSX from "xlsx";
Vue.prototype.$XLSX = XLSX;



/**
 * 全局lodash
 * Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库
 * Lodash 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。
 * https://www.lodashjs.com
 */
import * as lodash from "lodash";
Vue.prototype.$lodash = lodash;


/**
 * vue 可拖拽可缩放 vue-draggable-resizable
 */
import VueDraggableResizable from 'vue-draggable-resizable';
import 'vue-draggable-resizable/dist/VueDraggableResizable.css';
Vue.component('vue-draggable-resizable', VueDraggableResizable);























/**
 * 引入项目的公共方法
 */
import commonJs from '@/scripts/common.js'
Vue.prototype.$common = commonJs

import Global from '@/config/global.js'
Vue.prototype.$global = Global


/**
 * 引入项目的公共配置
 */
import '@/scripts/prototype'


/**
 * 定义默认路径
 */
Vue.prototype.$baseSrc = process.env.VUE_APP_URL;


/**
 * 自定义工具
 * 案例： home/directiveFilters
 */
import merge from "@/utils/merge.js";
Vue.prototype.$merge = merge;
import deepCopy from "@/utils/deepCopy.js";
Vue.prototype.$deepCopy = deepCopy;
import CopyText from "@/utils/CopyText.js";
Vue.prototype.$copyText = CopyText;

import toBoolean from "@/utils/toBoolean.js";
Vue.prototype.$toBoolean = toBoolean;
import axiosError from '@/utils/axiosError.js'
Vue.prototype.$axiosError = axiosError;


/**
 * 全局过滤器
 * 案例： home/directiveFilters
 */
import * as filters from './filters/index.js' // global filters
// register global utility filters
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key]);
})


/**
 * 全局指令
 * 案例： home/directiveFilters
 */
import * as directives from '@/directives'
// 注册指令
Object.keys(directives).forEach(k => {
    Vue.directive(k, directives[k])
})


/**
 * 通用UI库
 * 项目中使用过的插件
 */
import mocWidget from './components/index.js';
Vue.use(mocWidget);
// import {
// 	mocBtn,
// 	mocCheckbox,
// 	mocCheckboxGroup,
// 	mocRadio,
// 	mocRadioGroup,
// 	mocSelect,
// 	mocTabs,
// 	mocTabsPane,
// 	mocDialog,
// 	mocLoading,
// 	mocToastr
// } from './components/index.js';

// Vue.use(mocBtn);
// Vue.use(mocCheckbox);
// Vue.use(mocCheckboxGroup);
// Vue.use(mocRadio);
// Vue.use(mocRadioGroup);
// Vue.use(mocSelect);
// Vue.use(mocTabs);
// Vue.use(mocTabsPane);
// Vue.use(mocLoading);
// Vue.use(mocToastr);
// Vue.prototype.$mocDialog = mocDialog;
// Vue.prototype.$mocAlert = mocDialog.alert;
// Vue.prototype.$mocConfirm = mocDialog.confirm;
// Vue.prototype.$mocPrompt = mocDialog.prompt;



















new Vue({
	router,
  	store,
  	render: h => h(App),
}).$mount('#app');
