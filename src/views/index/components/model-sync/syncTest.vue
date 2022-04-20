<template>
    <el-button type="success" @click="onClick()">change syncText value: {{ syncText }}</el-button>
</template>

<script>

    export default {
        name: 'syncTest',
        props:{
            syncText: String
        },
        data () {
            return {}
        },
        methods: {
            onClick(){
                let val = 'false';
                if( this.syncText ===  'false'){
                    val = 'true';
                }
                /**
                 * 1.在父组件使用修饰符.sync传递数据
                 * 2.无需自定义event，这里使用默认的update，就像v-model中默认使用input一样
                 */
                this.$emit('update:syncText', val);
            }
        }
    }
</script>

