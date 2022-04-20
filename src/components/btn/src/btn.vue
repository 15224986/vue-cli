<template>
    <button class="moc-btn" @click="handleClick" :type="nativeType" v-if="nativeType === 'button'">
        <slot></slot>
        <p v-if="formatValue">{{ formatValue }}</p>
    </button>
    <a class="moc-btn" @click="handleClick" :type="nativeType" v-else>
        <slot></slot>
        <p v-if="formatValue">{{ formatValue }}</p>
    </a>
</template>
<script>
    export default {
        name: 'mocBtn',
        componentName: 'mocBtn',
        props: {
            func: Function,
            nativeType: {
                type: String,
                default: 'button'
            }
        },
        computed: {
            formatValue() {
                if( this.func ){
                    return this.func(this.nativeType);
                }
            }
        },
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        }
    };
</script>
