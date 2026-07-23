<template>
  <div class="content fuct">
    <!-- title -->
    <div class="title">{{ funfact.title }}</div>

    <!-- content -->
    <div class="row fuct-items">
      <div
        class="col col-d-4 col-t-4 col-m-12"
        v-for="item in funfact.items"
        :key="item.id"
      >
        <div class="fuct-item">
          <div class="icon"><i :class="item.icon"></i></div>
          <div class="name">{{ item.title }}</div>
        </div>
      </div>

      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import { defaultData } from "../../utils/data";
export default {
  props: {
    funfact: {
      type: Object,
      default: defaultData.funfactItems,
    },
  },
};
</script>
