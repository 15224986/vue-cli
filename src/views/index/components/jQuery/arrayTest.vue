<template>
    <section class="section" v-mocTitle="'数组de方法'">
        <h2 id="array">数组的去同，删除指定值</h2>
        <br>
        <h4>原数组： {{ arr }}</h4>
        <br>
        <h4>数组去同： {{ arr1 }}</h4>
        <br>
        <h4>从数组中删除第一个指定值元素的方法 2： {{ arr2 }}</h4>
        <br>
        <h4>从数组中删除所有指定值元素的方法： {{ arr3 }}</h4>

        <br>
        <br>
        <br>
        <h2 id="array">数组排序</h2>
        <br>
        <h4><span class="text-red">原数组：</span>{{ arrobj }}</h4>
        <br>
        <h4><span class="text-red">自定义排序方法：</span>{{ sortArrobj }}</h4>
        <br>
        <h4><span class="text-red">lodash插件的排序：</span>{{ lodashArrobj }}</h4>
    </section>
</template>

<script>

    export default {
        data () {
            return {
                /**
                 * 数组的去同，删除指定值
                 */
                arr: [5, 6, 7, 8, 1, 2, 3, 4, 9, 2, 3, 4, 2, 3, 2],
                arr1: [5, 6, 7, 8, 1, 2, 3, 4, 9, 2, 3, 4, 2, 3, 2],
                arr2: [5, 6, 7, 8, 1, 2, 3, 4, 9, 2, 3, 4, 2, 3, 2],
                arr3: [5, 6, 7, 8, 1, 2, 3, 4, 9, 2, 3, 4, 2, 3, 2],

                /**
                 * 排序
                 */
                arrobj:[
                    {name:'66'},
                    {name:'6'},
                    {name: 13},
                    {name: 9},
                    {
                        name: function(){
                            var a = 11;
                        }
                    },
                    {name: 6},
                    {name: 124},
                    {name: null},
                    {name: ''},
                    {name: undefined},
                    {name: '    '},
                    {name: '  '},
                    {name:'wuhaha'},
                    {name:'&wuhaha'},
                    {name:'><wuhaha'},
                    {name:' achaha'},
                    {name:'a chaha'},
                    {name:'achaha'},
                    {name: [1,2,3]},
                    {name: '[1,2,3]'},
                    {name:'abdhaha'},
                    {name:'余喝'},
                    {name:'12'},
                    {name: '{a:1,b:2}'},
                    {name: {a:1,b:2}},
                    {name:'安安'},
                    {name:' 安bo'},
                    {name:'大伯'},
                    {name:'zhaha'}
                ],
                sortArrobj:'',
                lodashArrobj:''
            }
        },
        mounted() {
            /**
             * jQuery 相关的方法
             */
            this.$nextTick(() => {
                $("#jq, .text-red").css('color', '#f00');
            });

            /**
             * 数组相关的方法
             */
            this.arr1 = this.arr1.unique();
            this.arr2 = this.arr2.remove(2);
            this.arr3 = this.arr3.delete(2);
            // 数组排序
            this.sortArrobj = this.sortArrObj( this.arrobj, 'name' );
            this.lodashArrobj = this.$lodash.sortBy(this.arrobj, function(item) {
                return item.name;
            });
        },
        methods: {
            sortArrObj(arr, key){
            	let chineseChars=[],
            		numberChars=[],
            		englishChars=[],
            		emptyChars=[],
            		nullChars=[],
            		undefinedChars=[],
            		objChars=[];

            	arr.forEach(item => {
            		if( typeof(item[key])=='string' && !/^\s*$/.test(item[key]) ){
            			item[key] = item[key].trim();
            		}
            		if( item[key] instanceof Object ){		// 字段类型为Object
            			objChars.push(item);
            		}else if( /^\s*$/.test(item[key]) ){	// 字段值为空或空格
            			emptyChars.push(item);
            		}else if( item[key] == null ){		// 字段值为null
            			nullChars.push(item);
            		}else if( item[key] == undefined ){		// 字段值为undefined
            			undefinedChars.push(item);
            		}else if( /^[-]?[0-9]+\.?[0-9]+?$/.test(item[key]) || /^[0-9]*$/.test(item[key]) ){ // 字段为纯数字组成的字符串和数字
            			numberChars.push(item);
            		}else if(/^[\u4e00-\u9fa5]*$/.test(item[key].charAt(0))) {	// 判断是否为中文
            			chineseChars.push(item);   // 字段首字符为中文的
            		}else {
            			englishChars.push(item);   // 字段为字母组成
            		}
            	});

            	numberChars.sort((value1, value2) => {
            		value1 = Number(value1[key]);
            		value2 = Number(value2[key]);
            		if (value1 < value2) {
            			return -1;
            		} else if (value1 > value2) {
            			return 1;
            		} else {
            			return 0;
            		}
            	});
            	englishChars.sort((a,b) => a[key].localeCompare(b[key]) );
            	chineseChars.sort((a,b) => a[key].localeCompare(b[key]));
            	emptyChars.sort((a,b) => a[key].localeCompare(b[key]));
            	return [...emptyChars, ...numberChars, ...englishChars, ...chineseChars, ...nullChars, ...undefinedChars, ...objChars]; // list为最终想要的数组
            }
        }
    }
</script>
