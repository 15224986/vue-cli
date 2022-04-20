<template>
	<div
		class="orgchart-container"
		:class="direction"
		@wheel="zoom && zoomHandler($event)"
		@mouseup="pan && panning && panEndHandler($event)"
	>
		<div
			class="orgchart"
			:class="{'orgchart-pan': pan}"
			:style="{ transform: transformVal }"
			@mousedown="pan && panStartHandler($event)"
			@mousemove="pan && panning && panHandler($event)"
		>
			<moc-orgchart-node :datasource="datasource" :deletebtn="deleteBtn" :datapid="datapid" :handle-delete="handleDelete" :handle-click="handleClick">
                <template v-slot="{nodeData}">
                    <slot :node-data="nodeData"/>
                </template>
			</moc-orgchart-node>
		</div>
	</div>
</template>

<script>
	import mocOrgchartNode from './mocOrgchartNode.vue'
	export default {
		name: 'mocOrgchart',
		componentName: 'mocOrgchart',
		components: {
			mocOrgchartNode
		},
		props: {
			// 树节点数据
			datasource: {
				type: Object,
				required: true
			},
			// 是否可以拖动
			pan: {
				type: Boolean,
				default: false
			},
			// 是否可以滚轮缩放
			zoom: {
				type: Boolean,
				default: false
			},
			zoomoutLimit: {
				type: Number,
				default: 0.5
			},
			zoominLimit: {
				type: Number,
				default: 7
			},
			// 节点中是否添加删除按钮
			deleteBtn:{
				type: Boolean,
				default: false
			},
			// 数据中是否添加pid
			datapid:{
				type: Boolean,
				default: false
			},
			direction:{
				type: String,
				default: ''
			}
		},
		data () {
			return {
				panning: false,
				startX: 0,
				startY: 0,
				transformVal: ''
			}
		},
		methods: {
			/**
			 * 节点点击回调
			 */
			handleClick (nodeData,$event) {
				this.$emit('node-click', nodeData, $event);
			},
			/**
			 * 节点删除回调
			 */
			handleDelete(nodeData,$event){
				this.$emit('node-delete', nodeData, $event);
			},
			panEndHandler () {
				this.panning = false
			},
			panHandler (e) {
				let newX = 0
				let newY = 0
				if (!e.targetTouches) { // pand on desktop
					newX = e.pageX - this.startX
					newY = e.pageY - this.startY
				} else if (e.targetTouches.length === 1) { // pan on mobile device
					newX = e.targetTouches[0].pageX - this.startX
					newY = e.targetTouches[0].pageY - this.startY
				} else if (e.targetTouches.length > 1) {
					return;
				}
				if (this.transformVal === '') {
					if (this.transformVal.indexOf('3d') === -1) {
						this.transformVal = 'matrix(1,0,0,1,' + newX + ',' + newY + ')'
					} else {
						this.transformVal = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,' + newX + ', ' + newY + ',0,1)'
					}
				} else {
					let matrix = this.transformVal.split(',')
					if (this.transformVal.indexOf('3d') === -1) {
						matrix[4] = newX
						matrix[5] = newY + ')'
					} else {
						matrix[12] = newX
						matrix[13] = newY
					}
					this.transformVal = matrix.join(',')
				}
			},
			panStartHandler (e) {
				if ($(e.target).closest('.node').length) {
					this.panning = false
					return
				} else {
					this.panning = true
				}
				let lastX = 0
				let lastY = 0
				if (this.transformVal !== '') {
					let matrix = this.transformVal.split(',')
					if (this.transformVal.indexOf('3d') === -1) {
						lastX = parseInt(matrix[4])
						lastY = parseInt(matrix[5])
					} else {
						lastX = parseInt(matrix[12])
						lastY = parseInt(matrix[13])
					}
				}
				if (!e.targetTouches) { // pand on desktop
					this.startX = e.pageX - lastX
					this.startY = e.pageY - lastY
				} else if (e.targetTouches.length === 1) { // pan on mobile device
					this.startX = e.targetTouches[0].pageX - lastX
					this.startY = e.targetTouches[0].pageY - lastY
				} else if (e.targetTouches.length > 1) {
					return
				}
			},
			setChartScale (newScale) {
				let matrix = ''
				let targetScale = 1
				if (this.transformVal === '') {
					this.transformVal = 'matrix(' + newScale + ', 0, 0, ' + newScale + ', 0, 0)'
				} else {
					matrix = this.transformVal.split(',')
					if (this.transformVal.indexOf('3d') === -1) {
						targetScale = Math.abs(window.parseFloat(matrix[3]) * newScale)
						if (targetScale > this.zoomoutLimit && targetScale < this.zoominLimit) {
							matrix[0] = 'matrix(' + targetScale
							matrix[3] = targetScale
							this.transformVal = matrix.join(',')
						}
					} else {
						targetScale = Math.abs(window.parseFloat(matrix[5]) * newScale)
						if (targetScale > this.zoomoutLimit && targetScale < this.zoominLimit) {
							matrix[0] = 'matrix3d(' + targetScale
							matrix[5] = targetScale
							this.transformVal = matrix.join(',')
						}
					}
				}
			},
			zoomHandler (e) {
				let newScale  = 1 + (e.deltaY > 0 ? -0.2 : 0.2)
				this.setChartScale(newScale)
			}
		}
	};
</script>
