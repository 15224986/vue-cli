<template>
	<div class="moc-tabs-group">
        <div class="moc-tabs-head">
            <div class="moc-tabs-btn" v-for="(item,index) in navList" :key="index" :class="{'moc-tabs-active':item.value === tabActive}" @click="handleChange(item.value)">{{item.label}}</div>
        </div>
        <div class="moc-tabs-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mocTabs',
        componentName: 'mocTabs',
        data() {
            return {
                navList:[]
            }
        },
        model: {
            prop: 'tabActive',      // 绑定到的位置
            event: 'input'          // 通过什么事件改变
        },
        props: {
            tabActive:{
                type: null,
                default: 0
            }
        },
        // mounted() {

        //     this.navList.forEach(function(el, index) {
        //         console.log(el.value);
        //     });

        //     console.log( this.tabActive );

        // },
        methods: {
            getTabs() {
                return this.$children.filter(function(item) {
                    return item.$options.componentName === 'mocTabsPane';
                })
            },
            //更新tabs
            updateNav() {
                this.navList = [];
                var _this = this;
                this.getTabs().forEach(function(el, index) {
                    _this.navList.push({
                        label: el.label,
                        value: el.value || index
                    });
                });
                this.updateStatus();
            },
            updateStatus() {
                var tabs = this.getTabs();
                var _this = this;
                //显示当前选中的tab对应的pane组件，隐藏没有选中的
                tabs.forEach(function(el,index) {
                    return el.show = _this.navList[index].value === _this.tabActive;
                })
            },
            //点击tab标题触发
            handleChange: function(value) {
                this.$emit('input', value);
                this.$nextTick(function () {
                    this.updateStatus();
                })
                this.$emit('change', value);
            }
        }
    }
</script>

