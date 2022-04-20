<template>
    <div class="moc-transfer" :style="{height:height}" v-moc-click-outside="handleClearValue">
        <div class="moc-transfer-panel">
            <div class="moc-transfer-head">
                <h2>{{ titles[0] }}</h2>
                <h5>{{sourceValue.length}}/{{sourceOptions.length}}</h5>
            </div>
            <div v-if="filterable" class="moc-transfer-search">
                <el-input v-model="sourceSearch" :placeholder="filterPlaceholder" clearable size="small" prefix-icon="el-icon-search"></el-input>
            </div>
            <div class="moc-transfer-group">
                <moc-selectable v-model="sourceValue" :options="sourceList" @node-dblclick="addToRight"></moc-selectable>
            </div>
        </div>
        <div class="moc-transfer-btns">
            <p class="moc-transfer-btns-tools"></p>
            <div class="moc-transfer-btns-content">
                <el-button
                    type="primary"
                    size="small"
                    :class="['moc-transfer-btn', hasButtonTexts ? 'moc-has-texts' : '']"
                    :disabled="sourceValue.length === 0"
                    @click.native="addToRight"
                >
                    {{ buttonTexts[0] }}<i class="el-icon-arrow-right"></i>
                </el-button>
                <div class="moc-transfer-btn-interval"></div>
                <el-button
                    type="primary"
                    size="small"
                    :class="['moc-transfer-btn', hasButtonTexts ? 'moc-has-texts' : '']"
                    :disabled="targetValue.length === 0"
                    @click.native="addToLeft"
                >
                    <i class="el-icon-arrow-left"></i>{{ buttonTexts[1] }}
                </el-button>
            </div>
        </div>
        <div class="moc-transfer-panel">
            <div class="moc-transfer-head">
                <h2>{{ titles[1] }}</h2>
                <h5>{{targetValue.length}}/{{targetOptions.length}}</h5>
            </div>
            <div v-if="filterable" class="moc-transfer-search">
                <el-input v-model="targetSearch" :placeholder="filterPlaceholder" clearable size="small" prefix-icon="el-icon-search"></el-input>
            </div>
            <div class="moc-transfer-group">
                <moc-selectable v-model="targetValue" :options="targetList" @node-dblclick="addToLeft"></moc-selectable>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'mocTransfer',
    componentName: 'mocTransfer',
    props:{
        value: {
            type: Array,
            default: () => []
        },
        options:{
            type: Array,
            default: () => []
        },
        height: {
            type: String,
            default: '360px'
        },
        // 是否可搜索
        filterable: Boolean,
        filterPlaceholder: {
          type: String,
          default: '请输入搜索内容'
        },

        titles: {
            type: Array,
            default() {
                return ['备选列表', '已选列表']
            }
        },
        buttonTexts: {
            type: Array,
            default() {
                return []
            }
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
            // 搜索的值
            sourceSearch:'',
            targetSearch:'',
            // 选中列表
            sourceValue:[],
            targetValue:[]
        };
    },
    computed:{
        /**
         * 获取options
         */
        sourceOptions() {
            return this.options.filter(item => this.value.indexOf(item[this.props.value]) === -1);
        },
        targetOptions() {
            return this.options.filter(item => this.value.indexOf(item[this.props.value]) > -1);
        },
        /**
         * 输出字段搜索的方法
         */
        sourceList() {
            return this.sourceOptions.filter( (item)=> {
                if( item[this.props.label].search(this.sourceSearch) !== -1 ){
                    return item
                }
            })
        },
        targetList() {
            return this.targetOptions.filter( (item)=> {
                if( item[this.props.label].search(this.targetSearch) !== -1 ){
                    return item
                }
            })
        },
        /**
         * 判断是否有文字
         */
        hasButtonTexts() {
          return this.buttonTexts.length === 2;
        }
    },
    methods:{
        /**
         * 移动到右边
         */
        addToRight(){
            let selectedValue = [...this.sourceValue, ...this.value];
            this.sourceValue = []
            this.$emit('input', selectedValue);
            this.$emit('change', selectedValue);
        },
        /**
         * 移动到左边
         */
        addToLeft(){
            let selectedValue = this.value.filter(item => this.targetValue.indexOf(item) === -1 );
            this.targetValue = []
            this.$emit('input', selectedValue);
            this.$emit('change', selectedValue);
        },
        /**
         * 清空选中
         */
        handleClearValue(){
            this.targetValue = []
            this.sourceValue = []
        }
    }
};
</script>
