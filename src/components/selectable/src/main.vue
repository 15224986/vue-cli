<template>
    <ul @mousedown="handleSelectable" class="moc-selectable" ref="selectable">
    　　<li
            v-for="(item, index) in options" :key="index"
            :class="['moc-selectable-item', {'is-active': activeItem.indexOf(item[props.value]) >= 0, 'is-disabled': item[props.disabled]}]"
            @click="clickSelectableItem(item, index)"
            @dblclick="dblclickSelectableItem(item, index)"
        >
            <slot :node="item" :index="index">
                {{item[props.label]}}
            </slot>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'mocSelectable',
    componentName: 'mocSelectable',
    props:{
        value: {
            type: Array,
            default: () => []
        },
        options:{
            type: Array,
            default: () => []
        },
        // 数据源的字段别名
        props:{
            type: Object,
            default:() => {
                return {
                    'label': 'label',
                    'value': 'value',
                    'disabled': 'disabled'
                };
            }
        },
    },
    data() {
        return {
            reactArea:{
                startX: 0,
                startY: 0,
                endX: 0,
                endY: 0
            },
            activeIndex: undefined,
            activeItem:[]
        };
    },
    watch: {
        value:{
            deep: true,         // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
            immediate: true,    // 该回调将会在侦听开始之后被立即调用
            handler: function(nData){
                this.activeItem = [].concat( nData );
            }
        }
    },
    methods: {
        handleSelectable(event){
            this.reactArea.startX = event.pageX;
            this.reactArea.startY = event.pageY;
            document.onmousemove = (e)=>{
                let preArea = document.getElementsByClassName('moc-selected-cheek')
                if(preArea.length){
                    document.body.removeChild(preArea[0])
                }
                this.reactArea.endX = e.pageX
                this.reactArea.endY = e.pageY
                let leftValue = this.reactArea.startX,
                    topValue = this.reactArea.startY,
                    widthValue = Math.abs(this.reactArea.startX - this.reactArea.endX),
                    heightValue = Math.abs(this.reactArea.startY - this.reactArea.endY);
                if (this.reactArea.startX >= this.reactArea.endX) {
                    leftValue = this.reactArea.endX
                }
                if (this.reactArea.startY >= this.reactArea.endY) {
                    topValue = this.reactArea.endY
                }
                // 判断同时有宽高才开始画虚线框
                if( widthValue > 6 || heightValue > 6 ) {
                    let areaSelect = document.createElement('div')
                    areaSelect.classList.add("moc-selected-cheek")
                    areaSelect.style.position = "absolute";
                    areaSelect.style.left = leftValue + 'px'
                    areaSelect.style.top = topValue + 'px'
                    areaSelect.style.width = widthValue + 'px'
                    areaSelect.style.height = heightValue + 'px'
                    areaSelect.style.border = "1px dashed grey"
                    document.body.append(areaSelect)
                }
                // 给选中的添加样式
                if(preArea.length){
                    let children = this.$refs.selectable.children,
                        scrollTop = this.$refs.selectable.scrollTop + this.getParentTag( this.$refs.selectable );
                    for (let i = 0; i < children.length; i++) {
                        let childrenHeight = children[i].offsetHeight,
                            childrenWidth = children[i].offsetWidth,
                            childrenLeft = children[i].offsetLeft,
                            childrenTop = children[i].offsetTop - scrollTop;

                        let index = this.activeItem.indexOf(this.options[i][this.props.value])
                        if( leftValue + widthValue >= childrenLeft && leftValue <= childrenLeft + childrenWidth && topValue + heightValue >= childrenTop && topValue <= childrenTop + childrenHeight){
                            if( !this.options[i].disabled && index === -1 ){
                                this.activeIndex = undefined
                                this.activeItem.push( this.options[i][this.props.value] )
                            }
                        }else{
                            if( index>=0 ){
                                this.activeItem.splice(index, 1)
                            }
                        }
                    }
                    this.$emit('input', this.activeItem);
                    this.$emit('change', this.activeItem);
                }
            };
            document.onmouseup = ()=>{
                let preArea = document.getElementsByClassName('moc-selected-cheek')
                if(preArea.length){
                    document.body.removeChild(preArea[0])
                }
                document.onmousemove = null;
                document.onmouseup = null;
            };
        },
        clickSelectableItem(item, idx){
            if(!item.disabled){
                if( window.event.ctrlKey ){ // 按着ctrl点击
                    let index = this.activeItem.indexOf(item[this.props.value])
                    if( index === -1 ){
                        this.activeItem.push( item[this.props.value] )
                    }else{
                        this.activeItem.splice(index, 1)
                    }
                    if( this.activeItem.length > 0 ){
                        this.activeIndex = idx
                    }else{
                        this.activeIndex = undefined
                    }
                }else if( window.event.shiftKey ){ // 按着shift点击
                    if(this.activeIndex === undefined ){
                        if( this.activeItem.length === 0 ){
                            this.activeIndex = idx
                        }else{
                            this.activeIndex = this.getIndex( this.activeItem[0] )
                        }
                    }
                    if( this.activeIndex <= idx ){
                        this.addActiveItem(this.activeIndex, idx)
                    }else{
                        this.addActiveItem(idx, this.activeIndex)
                    }
                }else{
                    this.activeIndex = idx
                    this.activeItem.splice(0,this.activeItem.length);
                    this.activeItem.push( item[this.props.value] )
                }
                this.$emit('input', this.activeItem);
                this.$emit('change', this.activeItem);
            }
        },
        dblclickSelectableItem(item, idx){
            this.activeIndex = idx
            this.$emit('node-dblclick', item);
        },
        /**
         * 赋值
         */
        addActiveItem(idx1, idx2){
            this.activeItem = []
            for (let i = idx1; i <= idx2; i++) {
                if( !this.options[i][this.props.disabled] ){
                    this.activeItem.push( this.options[i][this.props.value] )
                }
            }
        },
        /**
         * 获取节点的 Index
         */
        getIndex(value){
            for (let i = 0; i < this.options.length; i++) {
                if(value === this.options[i][this.props.value] ){
                    return i
                }
            }
        },
        /**
         * 获取所有父节点
         */
        getParentTag(startTag, parentTagScrollTop = 0 ) {
            // 传入标签是否是DOM对象
            if (!(startTag instanceof HTMLElement)) return console.error('receive only HTMLElement');
            // 父级标签是否是body,是着停止返回集合,反之继续
            if (startTag.parentElement.nodeName !== 'BODY') {
                // 放入集合
                parentTagScrollTop = parentTagScrollTop + startTag.parentElement.scrollTop
                // 再上一层寻找
                return this.getParentTag(startTag.parentElement, parentTagScrollTop)
            }else{
                return parentTagScrollTop
            };
        }

    }
};
</script>
