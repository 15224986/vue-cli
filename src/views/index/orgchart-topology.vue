<template>
    <div class="topology-section" id="neu-topology">
        <ul class="topology-left">
            <li v-for="(item, index) in leftList" :key="index" :id="item.id">{{item.name}}</li>
        </ul>
        <ul class="topology-right">
            <li v-for="(item, index) in rightList" :key="index" :id="item.id" class="topology-right-list">{{item.name}}</li>
        </ul>
        <div class="neu-topology-lines">
            <template v-for="(item, key) in lineList">
                <div :key="item.id" v-if="key === 'makeDragLine'" v-show="item.show" :id="item.id" class="neu-topology-line">
                    <span :style="{left: item.sourceLeft-10 + 'px', top: item.sourceTop + 'px' }" class="neu-topology-line-start"></span>
                    <span :style="{height: item.height+'px', left: item.sourceLeft+1+'px', top: item.sourceTop+'px', transform: 'rotateZ('+item.angle+'deg)' }" class="neu-topology-line-course">
                        <i class="neu-topology-line-caret"></i>
                    </span>
                </div>
                <div :key="item.id" v-else :id="item.id" :data-sourceRef="item.sourceRef" :data-targetRef="item.targetRef" class="neu-topology-line">
                    <!-- 指向 right -->
                    <span v-if="item.direction === 'right'" :style="{left:item.sourceLeft-10+'px', top: item.sourceTop+'px'}" class="neu-topology-line-start"></span>
                    <span v-if="item.direction === 'right'" :style="{ 'height': item.height+'px', 'left': item.sourceLeft+1+ 'px', 'top': item.sourceTop+'px', 'transform': 'rotateZ('+item.angle+'deg)' }" class="neu-topology-line-course">
                        <span class="neu-topology-line-hover"></span>
                    </span>
                    <span v-if="item.direction === 'right'" :style="{'left': item.targetLeft+'px', 'top': item.targetTop+'px'}" class="neu-topology-line-end  is-right">
                        <i class="neu-topology-line-caret"></i>
                    </span>
                    <!-- 指向 left -->
                    <span v-if="item.direction === 'left'" :style="{left:item.sourceLeft+'px', top: item.sourceTop+'px'}" class="neu-topology-line-start"></span>
                    <span v-if="item.direction === 'left'" :style="{ 'height': item.height+'px', 'left': item.sourceLeft+ 'px', 'top': item.sourceTop+'px', 'transform': 'rotateZ('+item.angle+'deg)' }" class="neu-topology-line-course is-left">
                        <span class="neu-topology-line-hover"></span>
                    </span>
                    <span v-if="item.direction === 'left'" :style="{'left': item.targetLeft-10+'px', 'top': item.targetTop+'px'}" class="neu-topology-line-end is-left">
                        <i class="neu-topology-line-caret"></i>
                    </span>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
    export default {
        name: "jQuery",
        data() {
            return {
                loading: false,
                /**
                 * 拖动节点的数据
                 */
                leftList:{
                    'left1':{
                        id: 'left1',
                        name: 'name-left1',
                        targetRef: 'right6'
                    },
                    'left2':{
                        id: 'left2',
                        name: 'name-left2',
                        targetRef: ''
                    },
                    'left3':{
                        id: 'left3',
                        name: 'name-left3',
                        targetRef: ''
                    },
                    'left4':{
                        id: 'left4',
                        name: 'name-left4',
                        targetRef: ''
                    },
                    'left5':{
                        id: 'left5',
                        name: 'name-left5',
                        targetRef: ''
                    },
                    'left6':{
                        id: 'left6',
                        name: 'name-left6',
                        targetRef: 'right4'
                    }
                },
                rightList:{
                    'right1':{
                        id: 'right1',
                        name: 'name-right1',
                        targetRef: ''
                    },
                    'right2':{
                        id: 'right2',
                        name: 'name-right2',
                        targetRef: ''
                    },
                    'right3':{
                        id: 'right3',
                        name: 'name-right3',
                        targetRef: ''
                    },
                    'right4':{
                        id: 'right4',
                        name: 'name-right4',
                        targetRef: ''
                    },
                    'right5':{
                        id: 'right5',
                        name: 'name-right5',
                        targetRef: 'left2'
                    },
                    'right6':{
                        id: 'right6',
                        name: 'name-right6',
                        targetRef: ''
                    }
                },
                lineList:{
                    "makeDragLine":{    // 点击拖动的临时数据
                        show: false,
                        id: "",
                        direction: "right",
                        height: "",
                        sourceLeft: "",
                        sourceTop: "",
                        angle: ""
                    }
                }
            };
        },
        computed: {

        },
        mounted(){
            this.bindEvents();

            this.$nextTick(()=>{
                this.inintLine();
            })
        },
        methods:{
            /**
             * 初始化
             */
            inintLine(){
                for(var key in this.leftList){
                    let item = this.leftList[key]
                    if( item.targetRef ){
                        this.makeLinkLine( $("#"+item.id), $("#"+item.targetRef) )
                    }
                }
                for(var key in this.rightList){
                    let item = this.rightList[key]
                    if( item.targetRef ){
                        this.makeLinkLine( $("#"+item.id), $("#"+item.targetRef), 'left' )
                    }
                }
            },
            /**
             * 绑定事件
             */
            bindEvents(){
                let self = this;
                $(document).on('mousedown', '.topology-left li', function(e) {
                    e.stopPropagation();
                    $("#drag-dot").remove();
                    let $this = $(this),
                        id = $this.attr("id"),
                        isDown = false,
                        lineStart =`<span class="neu-start-dot" style="top: ${e.clientY-4}px;left:${e.clientX}px;" id="drag-dot"></span>`
                    $("#neu-topology").append(lineStart);
                    self.makeLinkLine( $("#"+id), $("#drag-dot") )
                    self.lineList.makeDragLine.show = true
                    //开关打开
                    isDown = true;
                    /**
                     * 鼠标移动
                     */
                    window.onmousemove = function(e) {
                        if (isDown == false) {
                            return;
                        }
                        /**
                         * 临时结束点的位置
                         */
                        let startLeft = $("#"+id).offset().left + $("#"+id).outerWidth() + 10;
                        let minuend = 2;
                        if(e.clientX<startLeft){
                            minuend = -minuend;
                        }
                        // console.log(minuend)
                        $("#drag-dot").css({
                            top: e.clientY,
                            left: e.clientX-minuend
                        });
                        self.makeLinkLine( $("#"+id), $("#drag-dot") )
                        $(".drag-active").removeClass("drag-active")
                        if( $(e.target).hasClass('topology-right-list') ){
                            $(e.target).addClass('drag-active');
                        }
                    }
                    /**
                     * 鼠标抬起事件
                     */
                    window.onmouseup = function(e) {
                        let id2 = $(".drag-active").attr("id")
                        if( id2 ){
                            self.makeLinkLine( $("#"+id), $("#"+id2) )
                        }
                        self.lineList.makeDragLine.show = false
                        $(".drag-active").removeClass("drag-active")
                        $("#drag-dot").remove()
                        //开关关闭
                        isDown = false;
                    }
                });
            },
            /**
             * 两点之间连线
             * ele1         sourceLe DOM
             * ele2         target DOM
             * direction    方向
             */
            makeLinkLine(ele1, ele2, direction = 'right') {
                /**
                 * 获取位置信息
                 */
                let offsetL = $("#neu-topology").offset().left,
                    offsetT = $("#neu-topology").offset().top,
                    ele1Left = ele1.offset().left - offsetL + ele1.outerWidth() + 10,
                    ele1Top = ele1.offset().top - offsetT + 20,
                    ele2Left = ele2.offset().left - offsetL,
                    ele2Top = ele2.offset().top - offsetT;
                // 判断是否为链接线
                if( ele2.attr('id') !== 'drag-dot' ){
                    ele2Left = ele2Left - 10
                    ele2Top = ele2Top + 20
                }
                // 线的方向
                if( direction === 'left' ){
                    ele1Left = ele1.offset().left - offsetL - 10
                    ele2Left = ele2.offset().left - offsetL + ele2.outerWidth() + 10
                }
                /**
                 * 计算线的长度和旋转角度
                 */
                var line1 = Math.abs(ele1Left - ele2Left),
                    line2 = Math.abs(ele1Top - ele2Top),
                    _height = Math.sqrt(line1 * line1 + line2 * line2),
                    angle = 0;
                if(ele1Top < ele2Top) {
                    //上到下
                    if(ele1Left > ele2Left) {
                        angle = Math.asin(line1 / _height) * 180 / Math.PI;
                    } else {
                        angle = -Math.asin(line1 / _height) * 180 / Math.PI;
                    }
                } else {
                    //下到上
                    if(ele1Left > ele2Left) {
                        var tp = (Math.asin(line1 / _height) * 180 / Math.PI);
                        angle = (90 - tp) * 2 + tp
                    } else {
                        var tp = Math.asin(line1 / _height) * 180 / Math.PI;
                        angle = -((90 - tp) * 2 + tp)
                    }
                }
                /**
                 * 更新数据
                 */
                let id = ele1.attr('id') + '-' + ele2.attr('id');
                if( ele2.attr('id') === 'drag-dot' ){       // 判断是否为拖动的线
                    let obj = {
                        direction: direction,
                        height: _height,
                        sourceLeft: ele1Left,
                        sourceTop: ele1Top,
                        angle: angle
                    };
                    this.lineList.makeDragLine = this.$lodash.merge( this.lineList.makeDragLine, obj )
                }else if( this.lineList[id] ){              // 数据存在
                    let obj = {
                        height: _height,
                        sourceLeft: ele1Left,
                        sourceTop: ele1Top,
                        angle: angle
                    };
                    this.lineList[id]  = this.$lodash.merge( this.lineList[id], obj )
                }else{                                      // 数据不存在
                    let obj = {
                        id: id,
                        direction: direction,
                        name: "",
                        sourceRef: ele1.attr('id'),
                        targetRef: ele2.attr('id'),
                        "height": _height,
                        "sourceLeft": ele1Left,
                        "sourceTop": ele1Top,
                        "targetLeft": ele2Left,
                        "targetTop": ele2Top,
                        "angle": angle
                    }
                    this.$set( this.lineList, id, obj)
                }
            }
        }
    };
</script>
<style lang="scss">
    .topology-section{
        height: 680px;
        position: relative;
    }
    .topology-left,
    .topology-right{
        width: 226px;
        margin: 60px 0 0 200px;
        float: left;
        li{
            padding: 4px 20px;
            line-height: 32px;
            border: #CCCCCC 1px solid;
            user-select: none;
            &.drag-active{
                background-color: #f2f2f2;
            }
            + li{
                margin-top: -1px;
            }
        }
    }
    .topology-right{
        margin: 60px 0 0 400px;
    }
    .neu-topology-line-caret{
        display: inline-block;
        position: absolute;
    }
    .neu-topology-line{
        > span{
            display: block;
            position: absolute;
            background-color: #0eb2ee;
            z-index: 9;
            color: #0eb2ee;
        }
        &:hover{
            position: relative;
            z-index: 99;
            > span{
                background-color: #f00;
                color: #f00;
            }
        }
        .neu-topology-line-start{
            width: 10px;
            height: 1px;
        }
        .neu-topology-line-course{
            width: 1px;
            transform-origin: 0 1px;
            &.is-left{
                transform-origin: 0 0;
            }
            .neu-topology-line-caret{
                @include caret(top, 5px);
                left: -5px;
                top: calc(100% - 5px);
            }
        }
        .neu-topology-line-end{
            width: 10px;
            height: 1px;
            &.is-right{
                .neu-topology-line-caret{
                    @include caret(left, 5px);
                    left: 5px;
                    top: -5px;
                }
            }
            &.is-left{
                .neu-topology-line-caret{
                    @include caret(right, 5px);
                    left: 0;
                    top: -4px;
                }
            }
        }
        .neu-topology-line-hover{
            display: block;
            margin-left: -3px;
            width: 7px;
            height: 100%;
        }

    }
    .neu-start-dot{
        display: block;
        position: fixed;
        // width: 3px;
        // height: 3px;
        // background-color: #FF0000;
    }
</style>
