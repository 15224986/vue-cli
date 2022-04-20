<template>
    <section class="section" v-mocTitle="'字符串de方法'">
        <h2 id="array">字符串去掉空格和截取字符串</h2>
        <br>
        <h4>原字符串： <span class="bgc">&ensp;&ensp;&ensp;&ensp;{{string}}&ensp;&ensp;&ensp;&ensp;</span></h4>
        <br>
        <h4>去掉左侧空格： <span class="bgc">{{string1}}&ensp;&ensp;&ensp;&ensp;</span></h4>
        <br>
        <h4>去掉右侧空格： <span class="bgc">&ensp;&ensp;&ensp;&ensp;{{string2}}</span></h4>
        <br>
        <h4>去掉所有空格： <span class="bgc">{{string3}}</span></h4>
        <br>
        <h4>截取字符串： <span class="bgc">{{string4}}</span></h4>
        <br>
        <h4>截取字符串： <span class="bgc">{{string5}}</span></h4>
    </section>
</template>

<script>

    export default {
        data () {
            return {
                string: '  1 2 3 4 5 6 7 8 9 0   ',
                string1: '  1 2 3 4 5 6 7 8 9 0   ',
                string2: '  1 2 3 4 5 6 7 8 9 0   ',
                string3: '  1 2 3 4 5 6 7 8 9 0   ',
                string4: '123456789012345678901234567890',
                string5: '123456789012345678901234567890'
            }
        },
        mounted() {
            /**
             * 字符串相关的方法
             */
            this.string1 = this.string1.triml();
            this.string2 = this.string2.trimr();
            this.string3 = this.string3.trimall();
            this.string4 = this.string4.leftLength(5);
            this.string5 = this.string4.leftLength(5, true);

        },
        methods: {

        }
    }
</script>
<style scoped lang="scss">
    .bgc {
        background-color: #f2f2f2;
    }
</style>
