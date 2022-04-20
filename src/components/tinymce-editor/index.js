import mocTinymceEditor from './src/tinymce-editor';
/* istanbul ignore next */
mocTinymceEditor.install = function(Vue) {
	Vue.component(mocTinymceEditor.componentName, mocTinymceEditor);
};
export default mocTinymceEditor;
