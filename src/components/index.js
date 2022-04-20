// 路径导航（面包屑）
// 以来 element
import mocBreadcrumb from './breadcrumb/index.js';

// tinymce-editor 富文本编辑器
// 依赖 tinymce 和 tinymce-vue
import mocTinymceEditor from './tinymce-editor/index.js';


// 布局
import mocContainer from './container/index.js';
import mocContainerSection from './container-section/index.js';


// 按钮组件
import mocBtn from './btn/index.js';

// 多选
import mocCheckbox from './checkbox/index.js';
import mocCheckboxGroup from './checkbox-group/index.js';

// 单选
import mocRadio from './radio/index.js';
import mocRadioGroup from './radio-group/index.js';

// 下拉选框
import mocSelect from './select/index.js';

// tab 切换卡
import mocTabs from './tabs/index.js';
import mocTabsPane from './tabs-pane/index.js';

// mocTagsView 多标签页
import mocTagsView from './tags-view/index.js';

// orgchart 组织架构图
import mocOrgchart from './orgchart/index.js';

// anchor 锚点
import mocAnchor from './anchor/index.js';
import mocAnchorLink from './anchor-link/index.js';

// Affix 图钉
import mocAffix from './affix/index.js';

// element-ul Select 选择器 封装全选
import mocAllSelect from './all-select/index.js';

// element-ul Select 选择器 封装下拉树
import mocSelectTree from './select-tree/index.js';

// 面板分割
import mocSplit from './split/index.js';

// Tooltip 文字提示
import mocTooltip from './tooltip/index.js';

// more-panel 更多面板
import mocMorePanel from './more-panel/index.js';

// Transfer 穿梭框
import mocTransfer from './transfer/index.js';

// Selectable 选择
import mocSelectable from './selectable/index.js';

// highlightjs 代码高亮
import mocHighlight from './highlightjs/index.js';

// ace-editor 网页编辑器
import mocAceEditor from './ace-editor/index.js';









// 提示插件
import mocDialog from './dialog/index.js';

// 加载中
import mocLoading from './loading/index.js';

// toastr 成功or失败 提示
import mocToastr from './toastr/index.js';

// smartMenu 右键菜单事件
import mocSmartMenu from './smart-menu/smart-menu.js';






// 存储组件列表
const components = [
	mocBreadcrumb,
	mocTinymceEditor,
    mocContainer,
    mocContainerSection,
    mocBtn,
	mocCheckbox,
	mocCheckboxGroup,
	mocRadio,
	mocRadioGroup,
	mocSelect,
	mocTabs,
	mocTabsPane,
	mocTagsView,
	mocOrgchart,
	mocAnchor,
	mocAnchorLink,
	mocAffix,
	mocAllSelect,
	mocSelectTree,
	mocSplit,
    mocTooltip,
    mocMorePanel,
    mocTransfer,
    mocSelectable,
    mocHighlight,
    mocAceEditor
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历注册全局组件
	components.map(component => {
		Vue.component(component.componentName, component);
	});

	// 注册组件
	Vue.use(mocLoading);
	Vue.use(mocToastr);
	Vue.use(mocSmartMenu);

	// 插件的注册
	Vue.prototype.$mocDialog = mocDialog;
	Vue.prototype.$mocAlert = mocDialog.alert;
	Vue.prototype.$mocConfirm = mocDialog.confirm;
	Vue.prototype.$mocPrompt = mocDialog.prompt;
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
export default install;
// 以下是具体的组件列表
export {
	mocBreadcrumb,
	mocTinymceEditor,
    mocContainer,
    mocContainerSection,
	mocBtn,
	mocCheckbox,
	mocCheckboxGroup,
	mocRadio,
	mocRadioGroup,
	mocSelect,
	mocTabs,
	mocTabsPane,
	mocTagsView,
	mocOrgchart,
	mocAnchor,
	mocAnchorLink,
	mocAffix,
	mocAllSelect,
	mocSelectTree,
	mocSplit,
    mocTooltip,
    mocMorePanel,
    mocTransfer,
    mocSelectable,
    mocHighlight,
    mocAceEditor,

	mocDialog,
	mocLoading,
	mocToastr,
	mocSmartMenu
};
