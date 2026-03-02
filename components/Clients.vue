<template>
</template>

<script>
import { defaultData } from "../utils/data";
export default {
  props: {
    clients: {
      type: Array,
      default: defaultData.clients,
    },
  },
};
</script>
