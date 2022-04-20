<template>
	<label class="moc-radio-item" :class="[
      { 'is-checked': model === label },
      { 'is-disabled': isDisabled }
    ]">
		<span class="moc-radio-input">
			<span class="moc-radio-input-inner"></span>
			<input class="moc-radio-input-original" v-model="model" type="radio" :name="name" :value="label" :disabled="isDisabled" @change="handleChange">
		</span>
		<span class="moc-radio-label">
			<slot></slot>
			<template v-if="!$slots.default">{{label}}</template>
		</span>
	</label>
</template>

<script>

	export default{
		name: 'mocRadio',
		componentName: 'mocRadio',
		data() {
			return{
			}
		},
	  	props: {
		    value: {},
        	label: {},
		    name: String,
		    disabled: Boolean
		},
		mixins: [],
		computed: {
			isGroup() {
                let parent = this.$parent;
		        while (parent) {
					if (parent.$options.componentName !== 'mocRadioGroup') {
						parent = parent.$parent;
					} else {
						this._radioGroup = parent;
						return true;
					}
		        }
		        return false;
	        },
	        isDisabled() {
	            return this.isGroup ? this._radioGroup.disabled || this.disabled : this.disabled;
	        },
			model: {
	            // getter 		获取父组传递的值
	            get: function() {
	                return this.isGroup ? this._radioGroup.value || this.value : this.value;
	            },
	            // setter 		将值传递给父组件
	            set: function(val) {
	            	if (this.isGroup && this._radioGroup.value) {
						this._radioGroup.$emit('input', val);
	                } else {
	                    this.$emit('input', val);
	                }
	            }
	        }
		},
		methods:{
			handleChange(){ 	// 给组价添加 回调事件
				this.$nextTick(() => {
	                this.$emit('change', this.model);
	                this.isGroup && this._radioGroup.$emit('change', this.model);
	            });
			}
		}
	}
</script>

