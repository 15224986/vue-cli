import mocSelect from './src/select';
/* istanbul ignore next */
mocSelect.install = function(Vue) {
	Vue.component(mocSelect.componentName, mocSelect);
};
export default mocSelect;
