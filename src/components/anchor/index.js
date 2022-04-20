import mocAnchor from './src/anchor.vue';
/* istanbul ignore next */
mocAnchor.install = function(Vue) {
	Vue.component(mocAnchor.componentName, mocAnchor);
};
export default mocAnchor;