<template>
    <el-select
        v-model="selectValueTitle"
        :clearable="clearable"
        :multiple="multiple"
        @clear="clearHandle"
        popper-class="moc-select-tree"
    >
        <el-option value="selectKey">
            <el-tree
                id="tree-option"
                ref="selectTree"
                :accordion="accordion"
                :data="options"
                :props="props"
                :node-key="props.value"
                :default-expanded-keys="defaultExpandedKey"
                :highlight-current="!multiple"
                :show-checkbox="multiple"
                @node-click="handleNodeClick"
                @check="checkNode"
            >
            </el-tree>
        </el-option>
    </el-select>
</template>

<script>
    export default {
        name: "mocSelectTree",
        componentName: "mocSelectTree",
        props: {
            // 配置项
            props: {
                type: Object,
                default: {
                    value: 'id', // ID字段名
                    label: 'title', // 显示名称
                    children: 'children' // 子级字段名
                }
            },
            // 选项列表数据(树形结构的对象数组)
            options: {
                type: Array,
                default: []
            },
            // 初始值
            value: {
                type: [String, Number, Array],
                default: null
            },
            // 可清空选项
            clearable: {
                type: Boolean,
                default: true
            },
            // 自动收起 是否每次只打开一个同级树节点展开
            accordion: {
                type: Boolean,
                default: false
            },
            // 是否多选
            multiple: {
                type: Boolean,
                default: false
            },

        },
        data() {
            return {
                valueId: null,      // 选中的value
                selectValueTitle: '',   // 选中的label
                defaultExpandedKey: []  // 展开的节点
            }
        },
        mounted() {
            this.valueId = this.value;  // 初始值
            this.initHandle()
        },
        watch: {
            value() {
                this.valueId = this.value;
                this.initHandle()
            }
        },
        methods: {
            // 初始化值
            initHandle() {
                if (this.valueId) {
                    // 初始化显示
                    if ( this.multiple ) {
                        // 获取选中点的文字
                        this.selectValueTitle = [];
                        this.valueId.forEach((value)=>{
                            this.selectValueTitle.push(this.$refs.selectTree.getNode(value).data[this.props.label]);
                            console.log( this.$refs.selectTree.getNode(value).data[this.props.label] );
                        })
                        // 设置默认选中
                        this.$refs.selectTree.setCheckedKeys(this.valueId);
                        // 设置默认展开
                        this.defaultExpandedKey = this.valueId;
                    } else {
                        // 获取选中点的文字
                        this.selectValueTitle = this.$refs.selectTree.getNode(this.valueId).data[this.props.label];
                        // 设置默认选中
                        this.$refs.selectTree.setCurrentKey(this.valueId);
                        // 设置默认展开
                        this.defaultExpandedKey = [this.valueId];
                    }
                }
                this.initScroll()
            },
            // 清除选中
            clearHandle() {
                if(this.multiple){
                    this.selectValueTitle = [];
                    this.valueId = [];
                    this.$refs.selectTree.setCheckedKeys(this.valueId);
                }else{
                    this.selectValueTitle = '';
                    this.valueId = '';
                    this.$refs.selectTree.setCurrentKey(this.valueId);
                    // 清空选中样式
                    this.clearSelected();
                }
                // 设置默认展开
                this.defaultExpandedKey = [];
                // 传值
                this.$emit('input', this.valueId);

            },
            // 单选 切换选项
            handleNodeClick(node) {
                if(!this.multiple){
                    if( !node.disabled ){
                        if( !node[this.props.children] || node[this.props.children].length == 0 ){
                            this.selectValueTitle = node[this.props.label];
                            this.valueId = node[this.props.value];
                            this.$emit('input', this.valueId);
                            this.$refs.selectTree.setCurrentKey(this.valueId);
                        }
                    }
                }
            },
            // 多选 切换选项
            checkNode(data, node, el) {
                const checkedNodes = this.$refs.selectTree.getCheckedNodes();
                const keyArr = [];
                const valueArr = [];
                checkedNodes.forEach((item) => {
                    if( !item[this.props.children] || item[this.props.children].length == 0 ){
                        keyArr.push(item[this.props.label]);
                        valueArr.push(item[this.props.value]);
                    }
                });
                this.valueId = valueArr;
                this.selectValueTitle = keyArr;
                this.$emit('input', this.valueId);
            },


            // 清空选中样式
            clearSelected() {
                let allNode = document.querySelectorAll('#tree-option .el-tree-node');
                allNode.forEach((element) => element.classList.remove('is-current'));
            },
            // 初始化滚动条
            initScroll() {
                this.$nextTick(() => {
                    let scrollWrap = document.querySelectorAll('.el-scrollbar .el-select-dropdown__wrap')[0]
                    let scrollBar = document.querySelectorAll('.el-scrollbar .el-scrollbar__bar')
                    scrollWrap.style.cssText = 'margin: 0px; max-height: none; overflow: hidden;'
                    scrollBar.forEach(ele => ele.style.width = 0)
                })
            },
        }
    }
</script>

<style lang="scss">
    .moc-select-tree{
        .el-scrollbar{
            .el-scrollbar__view{
                .el-select-dropdown__item{
                    height: auto;
                    max-height: 274px;
                    padding: 0;
                    overflow: hidden;
                    overflow-y: auto;
                }
            }
        }
        .el-tree{
            .el-tree-node__content{
                height: auto;
                padding: 0 20px;
            }
            .el-select-dropdown__item.selected {
                font-weight: normal;
            }
            .el-tree-node__label {
                font-weight: normal;
            }

        }
    }
</style>
