import mocTagsView from './src/tags-view';
/* istanbul ignore next */
mocTagsView.install = function(Vue) {
	Vue.component(mocTagsView.componentName, mocTagsView);
};
export default mocTagsView;
