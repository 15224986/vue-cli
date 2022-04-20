import mocAffix from './src/affix.vue';
/* istanbul ignore next */
mocAffix.install = function(Vue) {
	Vue.component(mocAffix.componentName, mocAffix);
};
export default mocAffix;