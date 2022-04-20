import mocBtn from './src/btn';
/* istanbul ignore next */
mocBtn.install = function(Vue) {
	Vue.component(mocBtn.componentName, mocBtn);
};
export default mocBtn;
