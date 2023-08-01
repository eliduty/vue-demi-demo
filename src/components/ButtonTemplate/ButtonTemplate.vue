<script setup lang="ts">
  import { isVue2, ref } from 'vue-demi';
  const message = ref('Hello Button');
  const count = ref(0);
  const handleClick = () => {
    count.value++;
  };
</script>

<template>
  <div>
    <h1>{{ isVue2 ? 'Vue2' : 'Vue3' }} {{ message }}</h1>
    <button @click="handleClick">Button template {{ count }}</button>
  </div>
</template>

<style scoped></style>
