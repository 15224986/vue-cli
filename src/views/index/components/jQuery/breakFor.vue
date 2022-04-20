<template>
    <section class="section">
        <h2>javaScript如何跳出多重循环</h2>
        <ul class="section-subhead">
            <li>1.参考网址： <el-link href="https://www.jb51.net/article/91721.htm" type="primary" target="_blank">https://www.jb51.net/article/91721.htm</el-link></li>
            <li><el-button @click="startBreakFor()">开始执行</el-button></li>
            <li>{{breakFor}}</li>
            <li>{{breakFor1}}</li>
        </ul>
    </section>
</template>

<script>

    export default {
        data () {
            return {
                /**
                 * javaScript如何跳出多重循环
                 */
                breakFor:[],
                breakFor1:[],
            }
        },
        methods: {
            startBreakFor(){
                /**
                 * 跳出循环
                 */
                outer:
                for(var i=0;i<10;i++){
                    inter:
                    for(var j=0;j<10;j++){
                        if(i>5){
                            this.breakFor1.push(i);
                            break outer;
                        }
                    }
                }

                /**
                 * 跳出本次循环，继续执行下一次
                 */
                outer:
                for(var i=0;i<10;i++){
                    inter:
                    for(var j=0;j<10;j++){
                        if(i>5){
                            this.breakFor.push(i);
                            break inter;
                        }
                    }
                }
            }
        }
    }
</script>
