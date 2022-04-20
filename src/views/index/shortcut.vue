<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">

            <section class="section m-t-20" v-on:keyup.ctrl.alt.67="onAltC">
                <moc-more-panel :isOpen.sync="morepanel" originalHeight="39">
                    <el-form :inline="true" :model="formInline" class="moc-table-search" size="mini">
                        <el-form-item label="审批人">
                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域">
                            <el-select v-model="formInline.region" placeholder="活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="审批人">
                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域">
                            <el-select v-model="formInline.region" placeholder="活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="审批人">
                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域">
                            <el-select v-model="formInline.region" placeholder="活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="审批人">
                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域">
                            <el-select v-model="formInline.region" placeholder="活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="审批人">
                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域">
                            <el-select v-model="formInline.region" placeholder="活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="审批人">
                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域">
                            <el-select v-model="formInline.region" placeholder="活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="审批人">
                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域">
                            <el-select v-model="formInline.region" placeholder="活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="审批人">
                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域">
                            <el-select v-model="formInline.region" placeholder="活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <template #tools>
                        <el-button type="primary" size="mini">查询</el-button>
                        <el-button type="primary" size="mini">查询</el-button>
                        <el-button type="primary" size="mini">查询</el-button>
                        <el-button type="primary" size="mini">查询</el-button>
                    </template>
                </moc-more-panel>
            </section>

            <section class="section">
                <h2>多选</h2>
                <div class="neu-select-group">
                    <checkbox-radio
                        v-for="item in options" :key="item.value"
                        type='checkbox'
                        v-model="checkbox"
                        :label='item.value'
                        :disabled=" item.disabled"
                    >
                        {{item.label}}
                    </checkbox-radio>
                </div>
                <p>值：{{checkbox.join(',')}}</p>
                <div class="neu-select-group">
                    <checkbox-radio
                        v-for="item in options" :key="item.value"
                        type='checkbox'
                        v-model="item.checked"
                        :label='item.value'
                        :disabled="item.disabled"
                    >
                        {{item.label}}:{{item.checked}}
                    </checkbox-radio>
                </div>
                <h2>单选</h2>
                <div class="neu-select-group">
                    <checkbox-radio
                        v-for="item in options" :key="item.value"
                        type='radio'
                        v-model="radio"
                        :label='item.value'
                        :disabled=" item.disabled"
                    >
                        {{item.label}}
                    </checkbox-radio>
                </div>
                <p>{{radio}}</p>
            </section>

            <section class="section">
                <h2>同时按下了 Ctrl+Alt+1</h2>
                <p>执行次数：{{ctrlAlt1Num}}</p>
            </section>

            <section class="section">
                <h2>同时按下了 Ctrl+Alt+f1</h2>
                <p>执行次数：{{ctrlAltf1Num}}</p>
            </section>

            <section class="section">
                <h2>内部元素存在焦点且同时按下了 Ctrl+Alt+c</h2>
                <p>通过修饰符</p>
                <p>内部元素存在焦点的时候，同时按下alt 和 c 键  将调用这个方法</p>

                <p>执行次数：{{ctrlAlt3Num}}</p>
            </section>


        </div>
    </article>
</template>
<script>

    import { shortcut, keyCodeForEvent } from '@/utils/shortcut.js'

    export default {
        components: {
            checkboxRadio:()=>import('./checkbox-radio.vue')
        },
        data() {
            return {
                loading: false,

                morepanel: false,

                formInline: {
                    user: '',
                    region: ''
                },


                ctrlAlt1Num: 0,
                ctrlAltf1Num: 0,
                ctrlAlt3Num: 0,

                checkbox:[1, 3],
                radio: '2',
                options:[
                    {
                        label: '北京',
                        value: 1,
                        checked: false
                    },
                    {
                        label: '上海',
                        value: 2,
                        checked: true
                    },
                    {
                        label: '广州',
                        value: 3,
                        checked: false
                    },
                    {
                        label: '深圳',
                        value: 4,
                        checked: true
                    },
                    {
                        label: '天津',
                        value: 5,
                        disabled: true,
                        checked: false
                    },
                    {
                        label: '重庆',
                        value: 6,
                        checked: false
                    }
                ]
            };
        },
        computed: {
            isChecked() {
                // if(Array.isArray(this.model)) {
                //     return this.checkbox.includes(item.value);
                // }else{
                //     return item.value;
                // }
            }
        },
        mounted() {
            keyCodeForEvent( 49, ()=>{
                this.$message('同时按下了 Ctrl+Alt+1')
                this.ctrlAlt1Num++
            });
            shortcut.add("Ctrl+Alt+f1", ()=>{
                this.$message('同时按下了 Ctrl+Alt+f1');
                this.ctrlAltf1Num++
            });
        },
        methods:{
            /**
             * 通过修饰符
             * 内部元素存在焦点的时候
             * 同时按下alt 和 c 键  将调用这个方法
             */
            onAltC(){
               this.$message('在存在焦点时，同时按下了 Ctrl+Alt+c');
               this.ctrlAlt3Num++
            }
        }
    };
</script>
<style scoped lang="scss">
    #wrapper {
        background-color: transparent;
    }
    .section-breadcrumb {
        margin-bottom: 20px;
    }
    .section+.section {
        margin-top: 20px;
    }
    .section-title {
        padding: 0 0 10px;
    }
    .section-subhead {
        padding-bottom: 16px;
    }
    .section-title+.section-subhead {
        margin-top: -6px;
    }


    .neu-select-group{
        @include clearfix;
        padding: 20px 0;
    }
</style>
