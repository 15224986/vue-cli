<template>
    <div class="drag-verify-container">
        <div :style="dragVerifyImgStyle" ref="dragContent">
            <img ref="checkImg" :src="imgsrc" @load="checkimgLoaded" style="width:100%" alt="">

            <div class="move-bar" :class="{goFirst:isOk, goKeep:isKeep}" v-show="isBarShow" :style="movebarStyle" ref="moveBar">
                <span :style="movebarSpanStyle"></span>
            </div>
            <div class="clip-bar" v-show="clipBarShow" :style="clipbarStyle" ref="clipBar"></div>

            <div class="refresh" v-if="showRefresh && !this.isPassing">
                <i :class="refreshIcon" @click="refreshimg"></i>
            </div>
            <div class="tips success" v-if="showTips && isPassing">{{successTip}}</div>
            <div class="tips danger" v-if="showTips && !isPassing && showErrorTip">{{failTip}}</div>
        </div>
        <div ref="dragVerify" class="drag_verify" :style="dragVerifyStyle" @mousemove="dragMoving" @mouseup="dragFinish"
            @mouseleave="dragFinish" @touchmove="dragMoving" @touchend="dragFinish">

            <div class="dv_progress_bar" :class="{goFirst2:isOk}" ref="progressBar" :style="progressBarStyle">
                {{successMessage}}
            </div>
            <div class="dv_text" :style="textStyle" ref="message">
                {{message}}
            </div>

            <div class="dv_handler dv_handler_bg" :class="{goFirst:isOk}" @mousedown="dragStart" @touchstart="dragStart"
                ref="handler" :style="handlerStyle">
                <i :class="handlerIcon"></i>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "dragVerifyImg",
        props: {
            isPassing: {
                type: Boolean,
                default: false
            },
            width: {
                type: Number,
                default: 250
            },
            height: {
                type: Number,
                default: 40
            },
            text: {
                type: String,
                default: "请按住滑块拖动"
            },
            successText: {
                type: String,
                default: "验证通过"
            },
            background: {
                type: String,
                default: "#eee"
            },
            progressBarBg: {
                type: String,
                default: "#76c61d"
            },
            completedBg: {
                type: String,
                default: "#76c61d"
            },
            circle: {
                type: Boolean,
                default: false
            },
            radius: {
                type: String,
                default: "4px"
            },
            handlerIcon: {
                type: String,
                default: 'el-icon-d-arrow-right'
            },
            successIcon: {
                type: String,
                default: 'el-icon-circle-check'
            },
            handlerBg: {
                type: String,
                default: "#fff"
            },
            textSize: {
                type: String,
                default: "14px"
            },
            textColor: {
                type: String,
                default: "#333"
            },
            imgsrc: {
                type: String
            },
            barWidth: {
                type: Number,
                default: 54
            },
            barHeight: {
                type: Number,
                default: 57
            },
            barRadius: {
                type: Number,
                default: 0
            },
            showRefresh: {
                type: Boolean,
                default: false
            },
            refreshIcon: {
                type: String,
                default: 'el-icon-refresh-right'
            },
            showTips: {
                type: Boolean,
                default: true
            },
            showBar: {
                type: Boolean,
                default: false
            },
            successTip: {
                type: String,
                default: "验证通过，超过80%用户"
            },
            failTip: {
                type: String,
                default: "验证通过，拖动滑块将悬浮图像正确合并"
            },
            diffWidth: {
                type: Number,
                default: 6
            },
            dragContentShow:{
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                isMoving: false,
                x: 0,
                isOk: false,
                isKeep: false,
                movebarStyle: {},
                movebarSpanStyle: {},
                clipbarStyle: {},
                clipBarx: 0,
                showErrorTip: false,
                clipBarShow: true,
                isBarShow: this.showBar
            };
        },
        mounted: function() {
            const dragEl = this.$refs.dragVerify;
            dragEl.style.setProperty("--textColor", this.textColor);
            dragEl.style.setProperty("--width", Math.floor(this.width / 2) + "px");
            dragEl.style.setProperty("--pwidth", -Math.floor(this.width / 2) + "px");
        },
        computed: {
            handlerStyle: function() {
                return {
                    left: "0px",
                    width: this.height + "px",
                    height: this.height + "px",
                    background: this.handlerBg
                };
            },
            message: function() {
                return this.isPassing ? "" : this.text;
            },
            successMessage: function() {
                return this.isPassing ? this.successText : "";
            },
            dragVerifyStyle: function() {
                console.log(this.width, 'width')
                return {
                    width: this.width + "px",
                    height: this.height + "px",
                    lineHeight: this.height + "px",
                    background: this.background,
                    borderRadius: this.circle ? this.height / 2 + "px" : this.radius
                };
            },
            dragVerifyImgStyle: function() {
                var dragContent = {};
                if( this.dragContentShow ){
                    dragContent = {
                        width: this.width + "px",
                        position: 'relative',
                        overflow: 'hidden'
                    }
                }else{
                    dragContent = {
                        width: this.width + "px",
                        position: 'absolute',
                        bottom: '100%',
                        left: 0,
                        overflow: 'hidden',
                        display: 'none'
                    }
                }
                return dragContent;
            },
            progressBarStyle: function() {
                return {
                    background: this.progressBarBg,
                    height: this.height + "px",
                    borderRadius: this.circle ?
                        this.height / 2 + "px 0 0 " + this.height / 2 + "px" :
                        this.radius
                };
            },
            textStyle: function() {
                return {
                    height: this.height + "px",
                    width: this.width + "px",
                    fontSize: this.textSize
                };
            }
        },
        methods: {
            checkimgLoaded: function() {
                //生成图片缺失位置
                var barWidth = this.barWidth;
                var barHeight = this.barHeight;
                var imgHeight = this.$refs.checkImg.height;
                var halfWidth = Math.floor(this.width / 2);
                var refreshHeigth = 25;
                var tipHeight = 20;
                var x = halfWidth + Math.ceil(Math.random() * (halfWidth - barWidth));
                var y = refreshHeigth + Math.floor(Math.random() * (imgHeight - barHeight - refreshHeigth -
                    tipHeight));
                this.clipbarStyle = {
                    width: barWidth + 'px',
                    height: barHeight + 'px',
                    top: y + 'px',
                    left: x + 'px',
                    "border-radius": this.barRadius + 'px'
                }
                this.clipBarx = x;
                var imgsrc = this.imgsrc
                var width = this.width;
                this.movebarStyle = {
                    width: barWidth + 'px',
                    height: barHeight + 'px',
                    top: y + 'px',
                    left: '0px',
                    "border-radius": this.barRadius + 'px'
                }
                this.movebarSpanStyle = {
                    background: `url(${imgsrc})`,
                    "background-position": `-${x}px -${y}px`,
                    "background-size": `${width}px`,
                }
            },
            dragStart: function(e) {
                if (!this.isPassing) {
                    this.isMoving = true;
                    var handler = this.$refs.handler;
                    this.x = (e.pageX || e.touches[0].pageX) - parseInt( handler.style.left.replace("px", ""), 10);
                }
                this.isBarShow = true;
                this.showErrorTip = false;
                this.$emit("handlerMove");
                if( !this.dragContentShow && !this.isPassing ){
                    this.$refs.dragContent.style.display = "block";
                }
            },
            dragMoving: function(e) {
                if (this.isMoving && !this.isPassing) {
                    var _x = (e.pageX || e.touches[0].pageX) - this.x;
                    var handler = this.$refs.handler;
                    handler.style.left = _x + "px";
                    this.$refs.progressBar.style.width = _x + this.height / 2 + "px";
                    this.$refs.moveBar.style.left = _x + "px";
                }
            },
            dragFinish: function(e) {
                if (this.isMoving && !this.isPassing) {
                    var _x = (e.pageX || e.changedTouches[0].pageX) - this.x;
                    if (Math.abs(_x - this.clipBarx) > this.diffWidth) {
                        this.isOk = true;
                        var that = this;
                        setTimeout(function() {
                            that.isOk = false;
                            that.reset();
                        }, 500);
                        this.showErrorTip = true;
                    } else {
                        this.clipBarShow = false;
                        this.passVerify();


                        this.isBarShow = false;
                        this.clipBarShow = false;
                        if( !this.dragContentShow ){
                            this.$refs.dragContent.style.display = "none";
                        }
                    }
                    this.isMoving = false;
                }
            },
            passVerify: function() {
                this.$emit("update:isPassing", true);
                this.isMoving = false;
                var handler = this.$refs.handler;
                handler.children[0].className = this.successIcon;
                this.$refs.progressBar.style.background = this.completedBg;
                this.$refs.message.style["-webkit-text-fill-color"] = "unset";
                this.$refs.message.style.animation = "slidetounlock2 3s infinite";
                this.$refs.progressBar.style.color = "#fff";
                this.$refs.progressBar.style.fontSize = this.textSize;
                this.isKeep = true;
                setTimeout(() => {
                    this.$refs.moveBar.style.left = this.clipBarx + 'px'
                    setTimeout(() => {
                        this.isKeep = false
                    }, 200)
                }, 100)
                this.$emit("passcallback");
            },
            reset: function() {
                this.reImg();
                this.checkimgLoaded();
            },
            reImg: function() {
                this.$emit("update:isPassing", false);
                const oriData = this.$options.data();
                for (const key in oriData) {
                    if (oriData.hasOwnProperty(key)) {
                        this.$set(this, key, oriData[key]);
                    }
                }
                var handler = this.$refs.handler;
                var message = this.$refs.message;
                handler.style.left = "0";
                this.$refs.progressBar.style.width = "0";
                handler.children[0].className = this.handlerIcon;
                message.style["-webkit-text-fill-color"] = "transparent";
                message.style.animation = "slidetounlock 3s infinite";
                message.style.color = this.background;
                this.$refs.moveBar.style.left = "0px";
            },
            refreshimg: function() {
                this.$emit('refresh')
            }
        },
        watch: {
            imgsrc: {
                immediate: false,
                handler: function() {
                    this.reImg();
                }
            }
        }
    };
</script>
<style scoped>
    .drag_verify {
        position: relative;
        background-color: #e8e8e8;
        text-align: center;
        overflow: hidden;
    }
    .drag_verify .dv_handler {
        position: absolute;
        top: 0px;
        left: 0px;
        cursor: move;
    }
    .drag_verify .dv_handler i {
        color: #666;
        padding-left: 0;
        font-size: 16px;
    }
    .drag_verify .dv_handler .el-icon-circle-check {
        color: #6c6;
        margin-top: 9px;
    }
    .drag_verify .dv_progress_bar {
        position: absolute;
        height: 34px;
        width: 0px;
    }
    .drag_verify .dv_text {
        position: absolute;
        top: 0px;
        color: transparent;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        background: -webkit-gradient(linear,
            left top,
            right top,
            color-stop(0, var(--textColor)),
            color-stop(0.4, var(--textColor)),
            color-stop(0.5, #fff),
            color-stop(0.6, var(--textColor)),
            color-stop(1, var(--textColor)));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-text-size-adjust: none;
        animation: slidetounlock 3s infinite;
    }
    .drag_verify .dv_text * {
        -webkit-text-fill-color: var(--textColor);
    }
    .goFirst {
        left: 0px !important;
        transition: left 0.5s;
    }
    .goKeep {
        transition: left 0.2s;
    }
    .goFirst2 {
        width: 0px !important;
        transition: width 0.5s;
    }
    .drag-verify-container {
        position: relative;
        line-height: 0;
    }
    .move-bar {
        position: absolute;
        z-index: 100;
        background-image: url('/static/images/mask-image.png');
    }
    .move-bar span{
        display: block;
        width: 100%;
        height: 100%;
        -webkit-mask-image: url('/static/images/mask-image-content.png');
        mask-image: url('/static/images/mask-image-content.png');
    }
    .clip-bar {
        position: absolute;
        /* background: rgba(255, 255, 255, 0.8); */
        background-image: url('/static/images/mask-image.png');
    }
    .refresh {
        position: absolute;
        right: 5px;
        top: 5px;
        cursor: pointer;
        font-size: 20px;
        z-index: 200;
    }
    .tips {
        position: absolute;
        bottom: 0;
        height: 20px;
        line-height: 20px;
        text-align: center;
        width: 100%;
        font-size: 12px;
        z-index: 200;
    }
    .tips.success {
        background: rgba(255, 255, 255, 0.6);
        color: green;
    }
    .tips.danger {
        background: rgba(0, 0, 0, 0.6);
        color: yellow;
    }
</style>
<style>
    @-webkit-keyframes slidetounlock {
        0% {
            background-position: var(--pwidth) 0;
        }
        100% {
            background-position: var(--width) 0;
        }
    }
    @-webkit-keyframes slidetounlock2 {
        0% {
            background-position: var(--pwidth) 0;
        }
        100% {
            background-position: var(--pwidth) 0;
        }
    }
</style>
