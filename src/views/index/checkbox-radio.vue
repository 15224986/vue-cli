<template>
    <label :class="{'is-active': isChecked, 'is-disabled': disabled }" class="neu-select-button">
        <input v-model="model" :value="label" :disabled="disabled" :type="type" />
        <slot></slot>
    </label>
</template>
<script>

    export default {
        props: {
            value: '',  // 如果是 checkbox类型 只有 Array 和 Boolean
            label: '',
            type: {
                type: String,
                default:'checkbox'
            },
            disabled: Boolean
        },
        data() {
            return {

            };
        },
        computed: {
            model:{
                get() {
                    return this.value
                },
                set(val) {
                    this.$emit('input', val);
                }
            },
            isChecked(){
                if( this.type === 'checkbox' ){
                    if(Array.isArray(this.model)) {
                        return this.model.includes(this.label);
                    }else {
                        return this.model;
                    }
                }else{
                    return this.model == this.label
                }
            }
        },
        mounted() {

        },
        methods:{

        }
    };
</script>
<style scoped lang="scss">
    .neu-select-button{
        display: block;
        float: left;
        height: 20px;
        line-height: 20px;
        padding: 6px 20px;
        position: relative;
        background-color: #EEEEEE;
        margin-right: 6px;
        user-select: none;
        cursor: pointer;
        &.is-active{
            color: #FFFFFF;
            background-color: #0080FF;
        }
        &.is-disabled{
            opacity: 0.6;
            cursor: not-allowed;
        }
        input{
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
        }
    }
</style>
