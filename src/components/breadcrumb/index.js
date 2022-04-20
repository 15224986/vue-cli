import mocBreadcrumb from './src/breadcrumb';
/* istanbul ignore next */
mocBreadcrumb.install = function(Vue) {
	Vue.component(mocBreadcrumb.componentName, mocBreadcrumb);
};
export default mocBreadcrumb;
