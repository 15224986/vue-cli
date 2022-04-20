import Vue from 'vue'
import Toasttemplate from './main.vue'

// 初始化参数
const defaults = {
    title: null,                        // 默认标题
    message: '',                        // 显示的内容
    dangerouslyUseHTMLString: false,    // 是否将 message 属性作为 HTML 片段处理
    isShow: true,                       // 默认隐藏
    contentIsShow: true,               // 默认隐藏
    position: 'top',                    // 显示位置
    showInput: false,                   // 是否显示输入框
    inputValue: '',                     // 输入框的初始文本
    inputPlaceholder: '',               // 输入框的占位符
    showCancle: false,                  // 是否显示取消按钮
    closeOnClickModal: true             // 是否可通过点击遮罩关闭 mocDialog
};

// 定义 实例化 变量
let instance = null;

// extend 是构造一个组件的语法器.传入参数，返回一个组件
const VueDialog = Vue.extend(Toasttemplate);

const mocDialog = (options) => {
    if( !instance ){
        // 实例化 alertConstructor 组件
        instance = new VueDialog({
            el: document.createElement('div')
        });
        // 添加到boby
        document.body.appendChild(instance.$el);
    }
    // 修改参数 
    Object.assign( instance.$data, defaults, options );

    // 添加 Promise 回调
    if (typeof Promise !== 'undefined') {
        return new Promise((resolve, reject) => {   // eslint-disable-line
            VueDialog.prototype.callBack = (action,value)=>{
                if(action){
                    resolve(value);
                }else{
                    reject();
                }
            }   
        });
    }
};

/**
 * 为 mocDialog 的 position 注册方法
 */
['left', 'top', 'right', 'bottom'].forEach(type => {
    mocDialog[type] = (options) => {
        options.position = type;
        return mocDialog(options);
    }
});


mocDialog.alert = (options) => {
    return mocDialog(options);
};

mocDialog.confirm = (options) => {
    options.showCancle = true;
    return mocDialog(options);
};

mocDialog.prompt = (options) => {
    options.showCancle = true;
    options.showInput = true;
    return mocDialog(options);
};

export default mocDialog;
export { mocDialog };