<template>
    <div class="moc-radio-group">
        <slot></slot>
    </div>
</template>


<script>
    export default{
        name: 'mocRadioGroup',
        componentName: 'mocRadioGroup',
        props: {
            value: {},
            disabled: Boolean
        }
    }
</script>
