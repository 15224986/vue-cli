<template>
    <transition name="toartr">
        <div class="moc-toartr" v-show="show">
            {{message}}
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'mocToartr',
        componentName: 'mocToartr',
        data() {
            return {
                show: false,
                message: ""
            };
        }
    };
</script>

