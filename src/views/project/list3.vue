<template>
    <div id="wrapper">
        <section class="section">
			<h3 class="title">通过name加载路由，通过params传递参数</h3>
			<div class="text">Id：{{$route.params.id}}</div>
			<div class="text">姓名：{{$route.params.name}}</div>

			<h3 class="title">注意事项</h3>
			<ul class="text">
				<li>1.参数要写到router.js里面，限制较多</li>
				<li>2.基本写法和element-ui的NavMenu有兼容问题，刷新页面后选中消失。</li>
			</ul>
        </section>
    </div>
</template>

<script>
export default {
  name: 'corporateCulture',
  data() {
    return {
      formInline: {
        name: '',
        gender: '',
      },
      tableData: {},
    };
  },
  created() {

  },
  watch: {

  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
    .title{
		padding: 40px 0 10px;
		font-size: 18px;
		color: #333;
    }
</style>
