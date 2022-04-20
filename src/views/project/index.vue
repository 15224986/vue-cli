<template>
    <article id="page-bodier">
        <leftnav/>
        <main id="content">
            <router-view/>
        </main>
    </article>
</template>

<script>
import leftnav from './leftnav';

export default {
  name: 'corporateCulture',
  components: {
    leftnav,
  },
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
