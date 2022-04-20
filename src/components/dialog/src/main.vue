<!-- 弹窗组件 -->
<template>
    <div class="moc-dialog" v-show="isShow">
        <div class="moc-dialog-cover" @click="handleWrapperClick"></div>
        <transition name="moc-dialog">
            <div class="moc-dialog-content" :class="'dialog-'+position" v-show="contentIsShow">
                
                <div class="moc-dialog-head">
                    <div class="moc-dialog-title">{{title}}</div>
                    <div class="moc-dialog-close" @click="handleCancle">&times;</div>
                </div>

                <div class="moc-dialog-body">
                    <div class="moc-dialog-message">
                        <div class="moc-dialog-text" v-if="dangerouslyUseHTMLString" v-html="message"></div>
                        <p class="moc-dialog-text" v-else>{{message}}</p>
                    </div>
                    <div class="moc-dialog-input" v-show="showInput">
                        <input type="text" v-model="inputValue" :placeholder="inputPlaceholder">
                    </div>
                </div>

                <div class="moc-dialog-foot">
                    <div class="moc-dialog-cancle" v-if="showCancle" @click="handleCancle">取消</div>
                    <div class="moc-dialog-ensure" @click="handleEnsure">确定</div>
                </div>

            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'mocDialog',
        componentName: 'mocDialog',
        data() {
            return {
                title: null,                        // 默认标题
                message: '',                        // 显示的内容
                dangerouslyUseHTMLString: false,    // 是否将 message 属性作为 HTML 片段处理
                isShow: false,                      // 默认隐藏
                contentIsShow: false,               // content 默认隐藏
                position: 'top',                    // 显示位置
                showInput: false,                   // 是否显示输入框
                inputValue: '',                     // 输入框的初始文本
                inputPlaceholder: '',               // 输入框的占位符
                showCancle: false,                  // 是否显示取消按钮
                closeOnClickModal: true             // 是否可通过点击遮罩关闭 mocDialog
            }
        },
        methods: {
            handleWrapperClick(){
                if( this.closeOnClickModal ){
                    this.handleCancle();
                }
            },
            handleCancle() { // 取消按钮
                if( this.showCancle ){
                    this.callBack(false);
                }
                this.isShowFun();
            },
            handleEnsure() {  // 确定按钮
                if( this.showInput ){
                    this.callBack(true, this.inputValue)
                }else{
                    this.callBack(true)
                }
                this.isShowFun();
            },
            isShowFun(){
                this.contentIsShow = false;

                setTimeout(() => {
                    this.isShow = false
                }, 350);
                
            }
        }
    }
</script>


