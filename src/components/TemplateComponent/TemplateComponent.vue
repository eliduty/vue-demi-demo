<script lang="ts" setup>
  import { computed, ref, version, watch } from 'vue-demi';

  withDefaults(defineProps<{ msg?: string; name?: string | number }>(), { msg: 'Hello', name: 'World' });
  const emit = defineEmits<{
    (event: 'update', value: number): void;
  }>();

  const count = ref(0);
  const doubled = computed(() => count.value * 2);

  function inc() {
    count.value += 1;
  }
  function dec() {
    count.value -= 1;
  }

  watch(count, value => emit('update', value));
</script>

<template>
  <div>
    <div class="template-component">Template Component. Vue version: {{ version }}</div>
    <div>
      <h3>{{ msg }}, {{ name }}</h3>
      <div class="flex">
        <button @click="dec">减</button>
        <div>{{ count }} x 2 = {{ doubled }}</div>
        <button @click="inc">加</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .template-component {
    color: #2c3e50;
  }

  .flex {
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
  }
</style>
