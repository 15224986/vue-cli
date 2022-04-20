<template>
    <el-button type="warning" @click="onClick()">change modelValue value: {{ value }}</el-button>
</template>

<script>

    export default {
        name: 'modelValue',
        props:{
            value: String
        },
        data () {
            return {}
        },
        methods: {
            onClick(){
                let val = 'false';
                if( this.value ===  'false'){
                    val = 'true';
                }
                /**
                 * 无需自定义event，这里使用默认的input，
                 * 就像.sync中默认使用update一样
                 */
                this.$emit('input', val);
            }
        }
    }
</script>

