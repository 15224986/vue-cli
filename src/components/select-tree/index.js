import mocSelectTree from './src/selectTree';
/* istanbul ignore next */
mocSelectTree.install = function(Vue) {
	Vue.component(mocSelectTree.componentName, mocSelectTree);
};
export default mocSelectTree;
