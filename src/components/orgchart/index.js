import mocOrgChart from './src/mocOrgchartContainer.vue'
/* istanbul ignore next */
mocOrgChart.install = function(Vue) {
	Vue.component(mocOrgChart.componentName, mocOrgChart);
};
export default mocOrgChart;
