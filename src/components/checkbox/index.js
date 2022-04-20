import mocCheckbox from './src/checkbox';
/* istanbul ignore next */
mocCheckbox.install = function(Vue) {
	Vue.component(mocCheckbox.componentName, mocCheckbox);
};
export default mocCheckbox;
