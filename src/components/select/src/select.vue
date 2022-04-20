<template>
    <div class="moc-cascader" v-moc-click-outside="handleClose">
        <el-popover trigger="manual" v-model="visible" :width="width" placement="bottom-start" popper-class="moc-cascader-popover">
            <div class="moc-cascader-menu" :style="{ height: height+'px' }">
                <div class="moc-cascader-list">
                    <el-input v-model="firstSearch" suffix-icon="el-icon-search" :placeholder="title[0]" class="moc-cascader-search"></el-input>
                    <ul class="moc-cascader-group">
                        <li
                            v-for="(item, index) in firstOptions" :key="index"
                            :class="{'is-active': firstValue == item.value }"
                            @click.stop="onClickFirstList( item )"
                        >
                            <i :class="item.children && item.children.length>0 ? 'el-icon-folder': 'el-icon-document'"></i>{{item.label}}
                        </li>
                    </ul>
                </div>
                <div class="moc-cascader-list">
                    <el-input v-model="secondSearch" suffix-icon="el-icon-search" :placeholder="title[1]" class="moc-cascader-search"></el-input>
                    <ul class="moc-cascader-group">
                        <li
                            v-for="(item, index) in secondOptions" :key="index"
                            :class="{'is-active': secondValue == item.value }"
                            @click.stop="onClickSecondList( item )"
                        >
                            <i :class="item.children && item.children.length>0 ? 'el-icon-folder': 'el-icon-document'"></i>{{item.label}}
                        </li>
                    </ul>
                </div>
            </div>
            <el-input
                v-model="cascaderLabel"
                @focus="handleOpen"
                @keydown.native.esc.stop.prevent="visible = false"
                @keydown.native.tab="visible = false"
                slot="reference"
                :suffix-icon=" visible ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"
            ></el-input>
        </el-popover>
    </div>
</template>

<script>
    export default {
        name: 'mocSelect',
        componentName: 'mocSelect',
        props: {
            value: {
                type: [String, Number],
                default: ""
            },
            options: {
                type: Array,
                default: () => []
            },
            width: {
                type: [String, Number],
                default: "420"
            },
            height: {
                type: [String, Number],
                default: "280"
            },
            title: {
                type: Array,
                default: () => ['分组', '标准']
            },
            separator:{
                type: String,
                default: "-"
            },

            selectOptions: {
                type: Array,
                // default: function () { return [] }
                default: () => []
            },
        },
        data() {
            return {
                visible: false,
                /**
                 * 值
                 */
                cascaderLabel:"",
                /**
                 * 第一
                 */
                firstSearch: "",
                firstValue: "",
                firstLabel: "",
                /**
                 * 第二
                 */
                secondSearch: "",
                secondValue: "",
                secondLabel: "",
                secondData:[]
            }
        },
        computed: {
            /**
             * 输出字段搜索的方法
             */
            firstOptions: function(){
                return this.options.filter( (item)=> {
                    if( item.label == null ){
                        item.label = '';
                    }
                    if( item.label.search(this.firstSearch) !== -1 ){
                        return item
                    }
                })
            },
            secondOptions: function(){
                return this.secondData && this.secondData.filter( (item)=> {
                    if( item.label == null ){
                        item.label = '';
                    }
                    if( item.label.search(this.secondSearch) !== -1 ){
                        return item
                    }
                })
            }
        },
        watch: {
            value:{
                immediate: true,
                handler(val, oldName) {
                    this.initData(val)
                }
            },
        },
        methods: {
            // 展开
            handleOpen(){
                if( this.visible === false ){
                    this.visible = true;
                    this.initData( this.value );
                }
            },
            // 关闭
            handleClose(){
                this.visible = false;
            },
            // 一级点击
            onClickFirstList(item){
                if( item.children && item.children.length>0 ){
                    this.firstValue = item.value
                    this.secondData = item.children
                }else{
                    this.$emit('input', item.value);
                    this.handleClose();
                }
            },
            // 二级点击
            onClickSecondList(item){
                this.secondValue = item.value
                let Value = this.firstValue + this.separator + item.value
                this.$emit('input', Value);
                this.handleClose();
            },
            /**
             * 初始化数据
             */
            initData(val){
                let valueArray = val.split( this.separator );
                this.options.forEach(item => {
                    if( valueArray[0] == item.value ){
                        this.firstValue = item.value
                        this.firstLabel = item.label
                        this.secondData = item.children
                    }
                });
                if( valueArray[1] ){
                    this.secondData.forEach(item => {
                        if( valueArray[1] == item.value ){
                            this.secondValue = item.value
                            this.secondLabel = item.label
                            this.cascaderLabel = this.firstLabel + this.separator + item.label
                        }
                    });
                }else{
                    this.cascaderLabel = this.firstLabel
                }
            }
        },
    }
</script>
