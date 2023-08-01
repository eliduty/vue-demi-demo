<!--
 * @Description:
 * @version:
 * @Author: liliming
 * @Date: 2023-07-26 09:07:54
 * @LastEditors: sueRim
 * @LastEditTime: 2023-07-27 17:48:16
-->
<script lang="ts" setup>
  import { isVue2, isVue3, ref } from 'vue-demi';
  import { BpeTemplateComponent, BpeButtonTemplate, BpeButtonRender, BpeButtonTsx, BpePinchZoom } from './components';

  const VueVersion = ref(isVue2 ? 'Vue2' : 'Vue3');
  console.warn(`Vue env: Vue3:${isVue3} -- Vue2: ${isVue2}`);
</script>

<template>
  <div>
    <h1>{{ VueVersion }}</h1>
    <div></div>
    <BpeTemplateComponent />
    <BpeButtonTemplate />
    <BpeButtonTsx />
    <BpeButtonRender />
    <div style="width: 300px; height: 500px; margin: 0 auto">
      <bpe-pinch-zoom>
        <div style=" color: #fff; font-weight: bold; font-size: 40px;background: gray">
          <p>文字</p>
          <p>文字</p>
          <p>文字</p>
          <p>文字</p>
          <p>文字</p>
          <p>文字</p>
          <p>文字</p>
          <p>文字</p>
        </div>
      </bpe-pinch-zoom>
    </div>
  </div>
</template>

<style>
body>div {
  margin-top: 60px;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
