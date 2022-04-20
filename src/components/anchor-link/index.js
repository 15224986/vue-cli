import mocAnchorLink from '../anchor/src/anchor-link.vue';
/* istanbul ignore next */
mocAnchorLink.install = function(Vue) {
	Vue.component(mocAnchorLink.componentName, mocAnchorLink);
};
export default mocAnchorLink;
