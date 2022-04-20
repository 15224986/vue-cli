<template>
	<div class="identify-verify-box">
		<canvas id="identifyVerify" :width="width" :height="height"></canvas>
	</div>
</template>
<script>
	export default {
		name: 'identifyVerify',
		props: {
			isPassing: {
				type: String,
				default: '1234'
			},
			width: {
				type: Number,
				default: 112
			},
			height: {
				type: Number,
				default: 38
			},
			fontSizeMin: {
				type: Number,
				default: 26
			},
			fontSizeMax: {
				type: Number,
				default: 30
			},
            fontColorMin: {
            	type: Number,
            	default: 50
            },
            fontColorMax: {
            	type: Number,
            	default: 160
            },
            fontRotateMin: {
            	type: Number,
            	default: -20
            },
            fontRotateMax: {
            	type: Number,
            	default: 20
            },



			backgroundColorMin: {
				type: Number,
				default: 180
			},
			backgroundColorMax: {
				type: Number,
				default: 240
			},
            lineNum: {  // 背景线条数量
				type: Number,
				default: 4
			},
			lineColorMin: {
				type: Number,
				default: 40
			},
			lineColorMax: {
				type: Number,
				default: 180
			},
            dotNum: {  // 背景小点数量
            	type: Number,
            	default: 20
            },
			dotColorMin: {
				type: Number,
				default: 0
			},
			dotColorMax: {
				type: Number,
				default: 255
			}
		},
		watch: {
			isPassing() {
				this.drawPic()
			}
		},
		mounted() {
			this.drawPic()
		},
		methods: {
            drawPic() {
            	let canvas = document.getElementById('identifyVerify')
            	let ctx = canvas.getContext('2d')
            	ctx.textBaseline = 'bottom'
            	// 绘制背景
            	ctx.fillStyle = this.randomColor(this.backgroundColorMin, this.backgroundColorMax)
            	ctx.fillRect(0, 0, this.width, this.height)
            	// 绘制
                this.drawText(ctx, this.isPassing)
            	this.drawLine(ctx)
            	this.drawDot(ctx)
            },
            /**
             * 画文字
             */
            drawText(ctx, text) {
                // 画文字
                let textArray = text.split('');
                for (let i = 0; i < textArray.length; i++) {
                    let fs = this.randomNum(this.fontSizeMin, this.fontSizeMax);    // 获取字体大小
                    let num = this.randomNum(0, 10);    // 获取间距
                    let deg = this.randomNum(this.fontRotateMin, this.fontRotateMax);  // 获取旋转角度

                	ctx.fillStyle = this.randomColor(this.fontColorMin, this.fontColorMax)
                	ctx.font = fs + 'px Verdana'    // 文字样式
                	ctx.textBaseline = "top";       // 对齐
                	// canvas.save()用来保存先前状态的
                	// canvas.restore()用来恢复之前保存的状态
                	// 注：两种方法必须搭配使用，否则没有效果
                	ctx.save();
                	ctx.translate( i*fs + num, this.randomNum( 2, (this.height - fs)/2 ));  // 字的位置
                    ctx.rotate(deg * Math.PI / 180);    // 旋转角度
                	ctx.fillText(textArray[i], 0, 0);   // 填充文字
                	ctx.restore();
                }
            },
            /**
             * 绘制干扰线
             */
            drawLine(ctx) {
            	for (let i = 0; i < this.lineNum; i++) {
            		ctx.strokeStyle = this.randomColor(this.lineColorMin, this.lineColorMax)
            		ctx.beginPath()
            		ctx.moveTo(this.randomNum(0, this.width), this.randomNum(0, this.height))
            		ctx.lineTo(this.randomNum(0, this.width), this.randomNum(0, this.height))
            		ctx.stroke()
            	}
            },
            /**
             * 绘制干扰点
             */
            drawDot(ctx) {
            	for (let i = 0; i < this.dotNum; i++) {
            		ctx.fillStyle = this.randomColor(0, 255)
            		ctx.beginPath()
            		ctx.arc(this.randomNum(0, this.width), this.randomNum(0, this.height), 1, 0, 2 * Math.PI)
            		ctx.fill()
            	}
            },
            // 生成一个随机数
            randomNum(min, max) {
            	return Math.floor(Math.random() * (max - min) + min)
            },

            // 生成一个随机的颜色
            randomColor(min, max) {
            	let r = this.randomNum(min, max)
            	let g = this.randomNum(min, max)
            	let b = this.randomNum(min, max)
            	return 'rgb(' + r + ',' + g + ',' + b + ')'
            }
		}
	}
</script>
