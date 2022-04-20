<template>
    <div class="moc-checkbox-group">
        <slot></slot>
    </div>
</template>


<script>
    export default{
        name: 'mocCheckboxGroup',
        componentName: 'mocCheckboxGroup',
        props: {
            value: {},
            disabled: Boolean
        }
    }
</script>

