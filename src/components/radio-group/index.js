import mocRadioGroup from './src/radio-group';
/* istanbul ignore next */
mocRadioGroup.install = function(Vue) {
	Vue.component(mocRadioGroup.componentName, mocRadioGroup);
};
export default mocRadioGroup;
