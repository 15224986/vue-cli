/**
 * 使用请看 tags-view 组件里面有实力
 * 数据结构
 *  v-mocSmartMenu="{
 *      customClass: "aaaa",                      // smartMenu 自定义类名
 *      menus:[
 *          {
 *              content:"关闭当前",         // 显示的内容
 *              callback:(val)=>{},         // 点击回调
 *              customClass: 'aaaaa',             // item 自定义类名
 *              icon:'el-icon-share',       // 左侧图标
 *              suffixIcon:'el-icon-share'  // 右侧图标
 *          },
 *          {
 *              content:"关闭当前",
 *              callback: "closeSelectedTag"    // 回调为方法时 传入方法名
 *          }
 *      ]
 *  }"
 */
export default {
    install: function (Vue, options) {
        var GLOBLEsize = 0;
        Vue.directive("mocSmartMenu", {
            bind(el, binding, vnode) {
                let currentSize = GLOBLEsize;
                /**
                 * 增加一个遮罩层方便我控制菜单显示时候取消其余事件
                 */
                el.addEventListener("contextmenu", (e) => {
                    var e = event || window.event;
                    e.stopPropagation();//阻止冒泡事件
                    e.cancelBubble = true;//阻止冒泡事件ie
                    e.preventDefault();//阻止默认事件
                    // 隐藏所有菜单
                    for (let i = 0; i < GLOBLEsize; i++) {
                        if (document.getElementById("mocSmartMenu" + i)) {
                            document.getElementById("mocSmartMenu" + i).style = `display:none`
                        }
                    }

                    /**
                     * 计算获取弹出框的位置
                     */
                    var menuX = e.pageX ? e.pageX : e.clientX + document.body.scrollLeft - document.body.clientLeft;//获取pageX 兼容ie
                    // 有横向滚动条，发生滚动的时候
                    var scroll_letf = 0;
                    if (document.documentElement && document.documentElement.scrollLeft) {//如果非IE
                        scroll_letf = document.documentElement.scrollLeft;
                    }else if (document.body) {//IE浏览器
                        scroll_letf = document.body.scrollLeft;
                    };
                    menuX = menuX - scroll_letf;
                    // **** y 轴 ****
                    var menuY = e.pageY ? e.pageY : e.clientY + document.body.scrollTop - document.body.clientTop;
                    // 竖向滚动条发生滚动
                    var scroll_top = 0;
                    if (document.documentElement && document.documentElement.scrollTop) {//如果非IE
                        scroll_top = document.documentElement.scrollTop;
                    }else if (document.body) {//IE浏览器
                        scroll_top = document.body.scrollTop;
                    };
                    menuY = menuY - scroll_top;

                    /**
                     * 生成dom元素
                     */
                    let boxDom = '';
                    if ( !document.getElementById("mocSmartMenu" + currentSize)) {
                        // 添加外层
                        boxDom = document.createElement("ul");
                        boxDom.setAttribute("id", "mocSmartMenu" + currentSize);
                        let customClass = binding.value["customClass"];
                        if( customClass ){
                            boxDom.className = "moc-smart-menu " + customClass;
                        }else{
                            boxDom.className = "moc-smart-menu";
                        }
                        document.body.appendChild(boxDom);
                        // 添加内部按钮
                        binding.value["menus"].map((item) => {
                            let optionp = document.createElement("li");
                            if( item.customClass ){
                                optionp.className = "moc-smart-menu-item " + item.customClass;
                            }else{
                                optionp.className = "moc-smart-menu-item";
                            }
                            let content = item.content;
                            if( item.icon && item.suffixIcon ){
                                content = `<i class="${item.icon}"></i> ${item.content} <i class="${item.suffixIcon}"></i>`
                            }else if( item.icon ){
                                content = `<i class="${item.icon}"></i> ${item.content}`
                            }else if( item.suffixIcon ){
                                content = `${item.content} <i class="${item.suffixIcon}"></i>`
                            }
                            optionp.innerHTML = content;
                            boxDom.appendChild(optionp);
                            /**
                             * 兼容在展开的选项上右击会出现默认
                             */
                            optionp.addEventListener("contextmenu", (e) => {
                                var e = event || window.event;
                                e.stopPropagation();//阻止冒泡事件
                                e.cancelBubble = true;//阻止冒泡事件ie
                                e.preventDefault();//阻止默认事件
                            });
                            optionp.addEventListener("click", (e) => {
                                // 回调
                                if( item.callback ){
                                    if( typeof item.callback == 'function' ){
                                        item.callback.call(item);
                                    }else{
                                        vnode.context[item.callback].call();
                                    }
                                }
                                // 关闭按钮栏
                                document.getElementById("mocSmartMenu" + currentSize).style = `display:none`
                            });
                        });
                    } else {
                        boxDom = document.getElementById("mocSmartMenu" + currentSize);
                        boxDom.style = `display: block;`;
                    }
                    /**
                     * 1.边缘检测从新计算位置
                     * 2.显示
                     */
                    if (menuX + boxDom.clientWidth >= document.documentElement.clientWidth) {
                        menuX = document.documentElement.clientWidth - boxDom.clientWidth - 10;
                    }
                    if (menuY + boxDom.clientHeight >= document.documentElement.clientHeight) {
                        menuY = document.documentElement.clientHeight - boxDom.clientHeight - 10;
                    }
                    // console.log( e.pageY , e.clientY + document.body.scrollTop - document.body.clientTop );
                    boxDom.style = `top:${menuY}px;left:${menuX}px;`;
                })
                GLOBLEsize++;

                /**
                 * 点击其他地方，隐藏弹出框
                 */
                document.body.addEventListener("click", () => {
                    if (document.getElementById("mocSmartMenu" + currentSize)) {
                        document.getElementById("mocSmartMenu" + currentSize).style = `display:none`
                    }
                })
                document.body.addEventListener("contextmenu", () => {
                    if (document.getElementById("mocSmartMenu" + currentSize)) {
                        document.getElementById("mocSmartMenu" + currentSize).style = `display:none`
                    }
                })

            },
            unbind(el) {
                //el.removeEventListener("contextmenu");
            }
        })
    }
}
