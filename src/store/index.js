import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
	// set './app.js' => 'app'
	const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
	const value = modulesFiles(modulePath)
	modules[moduleName] = value.default
	return modules
}, {})


/**
 * 引入所有的Getters属性
 */
import getters from './getters'

export default new Vuex.Store({
    modules,
    getters,
    strict: process.env.NODE_ENV !== 'production'  // 开启严格模式，在发布环境下关闭严格模式
});
