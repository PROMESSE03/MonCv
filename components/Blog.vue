<template>
</template>

<script>
import { navFunction } from "../utils/navFunction";
import { blogs } from "../utils/data";
export default {
  data() {
    return {
      activeData: null,
    };
  },
  methods: {
    activeBlogPost(value) {
      console.log(value);
      navFunction.activeSection("blog-post");
      this.activeData = value;
    },
  },
};
</script>
