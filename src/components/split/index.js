import mocSplit from './src/split.vue';
/* istanbul ignore next */
mocSplit.install = function(Vue) {
	Vue.component(mocSplit.componentName, mocSplit);
};
export default mocSplit;
