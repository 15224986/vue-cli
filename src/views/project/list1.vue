<template>
    <div id="wrapper">
        <section class="section">
            <h3>路由改进2222222222</h3>
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
    const loading = this.$loading({
      lock: true,
      text: 'Loading',
      background: 'rgba(0, 0, 0, 0.7)',
    });
    setTimeout(() => {
      loading.close();
    }, 750);
  },
  watch: {

  },
  methods: {

  },
};
</script>

