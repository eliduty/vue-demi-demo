<script setup lang="ts">
  import '@coddicat/vue-pinch-scroll-zoom/style.css';
  import PinchScrollZoom from '@coddicat/vue-pinch-scroll-zoom';
  import { ref, computed } from 'vue-demi';
  const pinchContainer = ref<HTMLDivElement>();
  const width = computed(() => pinchContainer.value?.offsetWidth ?? 0);
  const height = computed(() => pinchContainer.value?.offsetHeight ?? 0);
</script>

<template>
  <div ref="pinchContainer" class="pinch-container">
    <pinch-scroll-zoom ref="zoomer" :width="width" :height="height" :within="false" :throttle-delay="5" v-bind="$attrs">
      <slot></slot>
    </pinch-scroll-zoom>
  </div>
</template>

<style scoped>
  .pinch-container {
    width: 100%;
    height: 100%;
  }
</style>
