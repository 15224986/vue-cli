<template>
	<label class="moc-checkbox-item" :class="[
      { 'is-checked': isChecked },
      { 'is-disabled': isDisabled }
    ]">
		<span class="moc-checkbox-input">
			<span class="moc-checkbox-input-inner"></span>
			<input class="moc-checkbox-input-original" v-model="model" type="checkbox" :name="name" :value="label" :disabled="isDisabled" @change="handleChange">
		</span>
		<span class="moc-checkbox-label">
			<slot></slot>
			<template v-if="!$slots.default">{{label}}</template>
		</span>
	</label>
</template>

<script>

	export default{
		name: 'mocCheckbox',
		componentName: 'mocCheckbox',
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
					if (parent.$options.componentName === 'mocCheckboxGroup') {
						// 定义 checkboxGroup 是 checkbox 组件的父组件
						this._checkboxGroup = parent;
						return true;
					} else {
						parent = parent.$parent;
					}
		        }
		        return false;
	        },
	        isDisabled() {
	            return this.isGroup ? this._checkboxGroup.disabled || this.disabled : this.disabled;
	        },
	        isChecked(){
	        	for (var i = 0; i < this.model.length; i++) {
	        		if(  this.model[i] === this.label ){
	        			return true;
	        		}
	        	}
	        	return false;
	        },
			model: {
	            // getter
	            get: function() {
	                return this.isGroup ? this._checkboxGroup.value || this.value : this.value;
	            },
	            // setter
	            set: function(val) {
	            	if (this.isGroup && this._checkboxGroup.value) {
						this._checkboxGroup.$emit('input', val);
	                } else {
	                    this.$emit('input', val);
	                }
	            }
	        }
		},
		mounted() {
            // console.log( this.model.length );
        },
		methods:{
			handleChange(){
				this.$nextTick(() => {
	                this.$emit('change', this.model);
	                this.isGroup && this._checkboxGroup.$emit('change', this.model);
	            });
			}
		}
	}
</script>


