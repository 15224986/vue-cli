import mocRadio from './src/radio';
/* istanbul ignore next */
mocRadio.install = function(Vue) {
	Vue.component(mocRadio.componentName, mocRadio);
};
export default mocRadio;
