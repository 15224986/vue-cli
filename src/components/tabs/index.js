import mocTabs from './src/tabs';
/* istanbul ignore next */
mocTabs.install = function(Vue) {
	Vue.component(mocTabs.componentName, mocTabs);
};
export default mocTabs;
