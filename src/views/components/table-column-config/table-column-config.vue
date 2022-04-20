<template>
    <el-button @click="isShow=true;" type="primary" size="mini">显示列设置
        <el-dialog
            :visible.sync="isShow"
            title="属性设置"
            width="660px"
            top="20px"
            append-to-body
            v-mocDialogDrag
        >
            <el-form :inline="true" :model="form" ref="editRef">
                <div class="neu-form">
                    <el-form-item label="" class="m-r-0">
                        <el-transfer
                            v-model="form.show"
                            :data="data"
                            :titles="['可选列', '展示列']"
                        >
                        </el-transfer>
                    </el-form-item>
                </div>
                <div class="neu-form-btns">
                    <el-button @click="onSubmit()" type="primary">确定</el-button>
                    <el-button @click="onCancel()" type="info">取消</el-button>
                </div>
            </el-form>
        </el-dialog>
    </el-button>
</template>

<script>

    export default {
        name: 'table-column-config',
        props:{
            showColumn:{
                type: Array,
                default: () => []
            },
            data:{
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
                isShow:false,
                form:{
                    show: this.showColumn
                }
            }
        },
        created(){
        },
        methods: {
            /**
             * 确定
             */
            onSubmit(formRef){
                this.$emit('closed-callback', this.form.show);
                this.isShow = false;
            },
            /**
             * 取消
             */
            onCancel(){
                this.isShow = false;
            }
        }
    }
</script>
