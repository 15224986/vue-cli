<template>
    <aside id="sidebar">
         <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router>
            <el-menu-item index="/charts/echarts">
                <i class="el-icon-menu"></i>
                <span slot="title">echarts(不需要登录)</span>
            </el-menu-item>
            <el-menu-item index="/charts/vue-echarts">
                <i class="el-icon-setting"></i>
                <span slot="title">vue-echarts(必须登录)</span>
            </el-menu-item>
        </el-menu>
    </aside>
</template>

<script>
export default {
  name: 'corporateCulture',
  data() {
    return {

    };
  },
  created() {

  },
  watch: {

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
