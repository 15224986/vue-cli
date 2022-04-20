import ToastComponent from './src/main'

const Toast = {};
// 注册Toast
Toast.install = function (Vue) {
    // 生成一个Vue的子类
    // 同时这个子类也就是组件
    const ToastConstructor = Vue.extend(ToastComponent)
    // 生成一个该子类的实例，将这个实例挂载在我创建的div上
    const instance = new ToastConstructor({
        el: document.createElement('div')
    });
    // 并将此div加入全局挂载点内部
    document.body.appendChild(instance.$el);

    // 通过Vue的原型注册一个方法
    // 让所有实例共享这个方法 
    Vue.prototype.$mocToastr = (msg, duration = 2000)=> {
        instance.message = msg;
        instance.show = true;
        
        setTimeout(() => {
            instance.show = false;
        }, duration);
    };

}

export default Toast
