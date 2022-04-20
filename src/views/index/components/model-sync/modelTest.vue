<template>
    <el-button type="primary" @click="onClick()">change modelText value: {{ modelText }}</el-button>
</template>

<script>

    export default {
        name: 'modelTest',
        /**
         * 自定义一个prop和event作为v-model触发的依据
         * 1.prop 找到props中要改变的数据
         * 2.event 定义$emit触发的事件
         */
        model:{
            prop: 'modelText',
            event: 'change-val'
        },
        props:{
            modelText: String
        },
        data () {
            return {}
        },
        methods: {
            onClick(){
                let val = 'false';
                if( this.modelText ===  'false'){
                    val = 'true';
                }
                /**
                 * 通过$emit去触发model里定义的event，修改model中prop关联的数据
                 */
                this.$emit('change-val', val);
            }
        }
    }
</script>

