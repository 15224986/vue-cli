<template>
    <span>{{ surplus }}</span>
</template>
<script>
    export default {
        name: 'CountDown',
        props: {
            startTime: {
                type: String,
                required: true,
                default: ""
            },
            endTime: {
                type: String,
                required: false,
                default: ""
            }
        },
        data() {
            return {
                // 展示活动状态
                surplus: '',
                // 距离活动开始的时间戳
                startSeconds: 0,
                endSeconds: 0,
                // 定时器
                interval: undefined
            }
        },
        watch: {
            startTime:{
                deep: true,
                immediate: true,
                handler: function(){
                    this.computedStartTime()
                }
            },
            startSeconds(newV) {
                if (newV < 0) {
                    clearInterval(this.interval)
                    this.$emit('start-callBack', false);
                    if( this.endTime ){
                        this.computedEndTime()
                    }
                }else{
                    this.formatterTime(newV)
                }
            },
            endSeconds(newV){
                if (newV < 0) {
                    clearInterval(this.interval)
                    this.$emit('end-callBack', false);
                    this.surplus = ""
                }else{
                    this.formatterTime(newV)
                }
            }
        },
        methods: {
            computedStartTime() {
                if (this.interval) {
                    clearInterval(this.interval)
                }
                let nowtime = new Date().getTime(),                             // 获取当前时间戳
                    startTime = new Date( this.startTime ).getTime();           // 获取开始时间戳
                this.startSeconds = startTime - nowtime;
                this.interval = setInterval(() => {
                    this.startSeconds -= 1000
                }, 1000)
            },
            computedEndTime(){
                if (this.interval) {
                    clearInterval(this.interval)
                }
                let nowtime = new Date().getTime(),                         // 获取当前时间戳
                    endTime = new Date( this.endTime ).getTime();           // 获取开始时间戳
                this.endSeconds = endTime - nowtime;
                this.interval = setInterval(() => {
                    this.endSeconds -= 1000
                }, 1000)
            },
            formatterTime(timestamp){
                let leftd = Math.floor(timestamp/(1000*60*60*24)),       // 计算天数
                    lefth = Math.floor(timestamp/(1000*60*60)%24) > 9 ? Math.floor(timestamp/(1000*60*60)%24) : "0" + Math.floor(timestamp/(1000*60*60)%24),       // 计算小时数
                    leftm = Math.floor(timestamp/(1000*60)%60) > 9 ? Math.floor(timestamp/(1000*60)%60) : "0" + Math.floor(timestamp/(1000*60)%60),          // 计算分钟数
                    lefts = Math.floor(timestamp/1000%60) > 9 ? Math.floor(timestamp/1000%60) : "0" + Math.floor(timestamp/1000%60);               // 计算秒数
                this.surplus = leftd + "天 " + lefth + ":" + leftm + ":" + lefts;
            }
        }
    }
</script>
