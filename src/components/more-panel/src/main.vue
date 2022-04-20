<template>
	<section class="moc-more-panel">
        <div class="moc-more-panel-tools" v-if="$scopedSlots.tools">
            <slot name="tools"></slot>
        </div>
        <div class="more-panel-body" :style="{'height': height }">
            <slot></slot>
        </div>
        <div class="more-panel-toggle" @click="handleToggle()">
            <i :class="isOpen ? 'el-icon-arrow-up':'el-icon-arrow-down'"></i>
        </div>
    </section>
</template>

<script>
	export default{
		name: 'mocMorePanel',
		componentName: 'mocMorePanel',
        props: {
            originalHeight: {
                type: [Number,String],
                default: 34
            },
            isOpen: {
                type: Boolean,
                default: false
            }
        },
		data() {
			return{
			}
		},
        computed: {
            height() {
                if( this.isOpen ){
                    return 'auto'
                }else{
                    if( isNaN(this.originalHeight) ){
                        return this.originalHeight
                    }else{
                        return this.originalHeight + 'px'
                    }
                }

            }
        },
        methods:{
            handleToggle(){
                this.$emit('update:isOpen', !this.isOpen );
            }
        }
	}
</script>
