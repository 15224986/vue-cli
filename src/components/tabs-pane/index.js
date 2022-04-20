import mocTabsPane from './src/tabs-pane';
/* istanbul ignore next */
mocTabsPane.install = function(Vue) {
	Vue.component(mocTabsPane.componentName, mocTabsPane);
};
export default mocTabsPane;
