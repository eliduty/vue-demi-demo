<script>
import { defineComponent } from "vue-demi";

export default defineComponent({
  props: {
    message: String,
  },
});
</script>
<template>
  <div>
    {{ message }}
  </div>
</template>
