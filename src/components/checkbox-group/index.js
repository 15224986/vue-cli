import mocCheckboxGroup from './src/checkbox-group';
/* istanbul ignore next */
mocCheckboxGroup.install = function(Vue) {
	Vue.component(mocCheckboxGroup.componentName, mocCheckboxGroup);
};
export default mocCheckboxGroup;
