<template>
    <div id="wrapper">
        <div class="widget">

            <section class="section">
                <h3 class="widget-tit">路径导航</h3>
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <section class="section">
                <h3 class="widget-tit">btn组件的封装</h3>
                <p class="widget-txt">在main.js里引入后全局注册。</p>
                <div class="widget-demo">
                    <moc-btn native-type="button">封装组件，调用插件</moc-btn>
                </div>
            </section>

            <section class="section">
                <h3 class="widget-tit">Checkbox组件的封装</h3>
                <p class="widget-txt">在main.js里引入后全局注册。</p>
                <div class="widget-demo">
                    <moc-checkbox-group v-model="checkboxValue">
                        <mocCheckbox v-for="(item, index) in checkboxOptions" :label="item.value" :disabled="item.disabled" :key="index" @change="checkboxChange">{{item.label}}</mocCheckbox>
                    </moc-checkbox-group>
                </div>
                <p class="widget-txt">{{checkboxValue}}</p>
                <div class="widget-demo">
                    <moc-checkbox-group v-model="checkboxValue1">
                        <mocCheckbox v-for="(item, index) in checkboxOptions" :label="item.value" :disabled="item.disabled" :key="index" @change="checkboxChange">{{item.label}}</mocCheckbox>
                    </moc-checkbox-group>
                </div>
                <p class="widget-txt">{{checkboxValue1}}</p>
            </section>

            <section class="section">
                <h3 class="widget-tit">Radio组件的封装</h3>
                <p class="widget-txt">在main.js里引入后全局注册。</p>
                <div class="widget-demo">
                    <mocRadioGroup v-model="radioValue" @change="radioChange">
                        <mocRadio v-for="(item, index) in radioOptions" :label="item.value" :disabled="item.disabled" :key="index">{{ item.label }}</mocRadio>
                    </mocRadioGroup>
                </div>
                <p class="widget-txt">{{radioValue}}</p>
                <div class="widget-demo">
                    <mocRadioGroup v-model="radioValue1">
                        <mocRadio v-for="(item, index) in radioOptions" :label="item.value" :disabled="item.disabled" :key="index" @change="radioChange">{{item.label}}</mocRadio>
                    </mocRadioGroup>
                </div>
                <p class="widget-txt">{{radioValue1}}</p>
            </section>

            <section class="section">
                <h3 class="widget-tit">Select组件的封装</h3>
                <p class="widget-txt">在main.js里引入后全局注册。</p>
                <div class="widget-demo">
                    <moc-select v-model="selectedValue" :options="selectOptions"/>
                </div>
            </section>

            <section class="section">
                <h3 class="widget-tit">Tabs组件的封装</h3>
                <p class="widget-txt">在main.js里引入后全局注册。</p>
                <div class="widget-demo">
                    <moc-tabs v-model="tabActive" @change="tabsChange">
                        <moc-tabs-pane label="标签一">
                            <p style="text-align: center; line-height: 40px;">标签一的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签一的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签一的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签一的内容</p>
                        </moc-tabs-pane>
                        <moc-tabs-pane label="标签二">
                            <p style="text-align: center; line-height: 40px;">标签二的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签二的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签二的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签二的内容</p>
                        </moc-tabs-pane>
                        <moc-tabs-pane label="标签三">
                            <p style="text-align: center; line-height: 40px;">标签三的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签三的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签三的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签三的内容</p>
                        </moc-tabs-pane>
                    </moc-tabs>
                </div>
                <div class="widget-demo">
                    <moc-tabs v-model="tabActive1" @change="tabsChange">
                        <moc-tabs-pane label="标签一" value="one">
                            <p style="text-align: center; line-height: 40px;">标签一的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签一的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签一的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签一的内容</p>
                        </moc-tabs-pane>
                        <moc-tabs-pane label="标签二" value="two">
                            <p style="text-align: center; line-height: 40px;">标签二的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签二的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签二的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签二的内容</p>
                        </moc-tabs-pane>
                        <moc-tabs-pane label="标签三" value="three">
                            <p style="text-align: center; line-height: 40px;">标签三的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签三的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签三的内容</p>
                            <p style="text-align: center; line-height: 40px;">标签三的内容</p>
                        </moc-tabs-pane>
                    </moc-tabs>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: 'echartsLine',
    data() {
        return {
            checkboxValue: ['time', 'like'], //默认选中的是第几个
            checkboxValue1: ['time', 'view', 'like'], //默认选中的是第几个
            checkboxOptions: [ // 下拉框中的数据 name这样的参数，看项目是否有需求，可自行修改
                {
                    value: 'time',
                    label: '时间',
                    disabled: true
                },
                {
                    value: 'view',
                    label: '查看',
                    disabled: false
                },
                {
                    value: 'like',
                    label: '链接',
                    disabled: false
                },
                {
                    value: 'reply',
                    label: '回复',
                    disabled: false
                },
                {
                    value: 'reward',
                    label: '奖励',
                    disabled: false
                }
            ],
            radioValue: 'time', //默认选中的是第几个
            radioValue1: 'like', //默认选中的是第几个
            radioOptions: [ // 下拉框中的数据 name这样的参数，看项目是否有需求，可自行修改
                {
                    value: 'time',
                    label: '时间',
                    disabled: true
                },
                {
                    value: 'view',
                    label: '查看',
                    disabled: false
                },
                {
                    value: 'like',
                    label: '链接',
                    disabled: false
                },
                {
                    value: 'reply',
                    label: '回复',
                    disabled: false
                },
                {
                    value: 'reward',
                    label: '奖励',
                    disabled: false
                }
            ],
            // 下拉组件
            selectedValue: 'zujian-basic', //默认选中的是第几个
            selectOptions: [ // 下拉框中的数据 name这样的参数，看项目是否有需求，可自行修改
                {
                    value: 'zhinan',
                    label: '指南',
                    children: [
                        {
                            value: 'shejiyuanze',
                            label: '设计原则'
                        },
                        {
                            value: 'daohang',
                            label: '导航'
                        }
                    ]
                },
                {
                    value: 'zujian',
                    label: '组件',
                    children: [
                        {
                            value: 'basic',
                            label: 'Basic'
                        },
                        {
                            value: 'form',
                            label: 'Form'
                        },
                        {
                            value: 'data',
                            label: 'Data'
                        },
                        {
                            value: 'notice',
                            label: 'Notice'
                        },
                        {
                            value: 'navigation',
                            label: 'Navigation'
                        },
                        {
                            value: 'others',
                            label: 'Others'
                        }
                    ]
                },
                {
                    value: 'ziyuan',
                    label: '资源',
                    children: [
                        {
                            value: 'axure',
                            label: 'Axure Components'
                        },
                        {
                            value: 'sketch',
                            label: 'Sketch Templates'
                        },
                        {
                            value: 'jiaohu',
                            label: '组件交互文档'
                        }
                    ]
                },
                {
                    value: 'zhuti',
                    label: '主题'
                }
            ],
            tabActive: 0,
            tabActive1: 'two'

        };
    },
    methods: {
        btnFn(){
            return '什么';
        },
        checkboxChange(val){
            console.log("您选中了:"+val);
        },
        radioChange(val){
            console.log("您选中了:"+val);
        },
        tabsChange(val){
            console.log("您选中了:"+val);
        }
    }
};
</script>
