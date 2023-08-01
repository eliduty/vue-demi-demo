<!--
 * @Description:
 * @version:
 * @Author: liliming
 * @Date: 2023-07-25 09:39:00
 * @LastEditors: eliduty
 * @LastEditTime: 2023-07-28 15:42:17
-->

<script>
  import MapView from './MapView.vue';
  export default {
    components: {
      MapView
    },
    props: {
      processInstanceId: {
        type: String,
        default: null
      }
      // nodeList: {
      //   type: Array,
      //   default: () => []
      // }
    },
    data() {
      return {
        nodeList: [],
        loading: false,
        draggable: true,
        targetRef: null,
        throttleDrag: 1,
        snappable: true,
        throttleScale: 0,
        keepRatio: false,
        bounds: { left: 0, right: 0, position: 'css' }
      };
    },
    mounted() {
      this.targetRef = document.getElementsByClassName('move-body')[0];
    },
    methods: {
      onDrag(e) {
        e.target.style.transform = e.transform;
      }
    }
  };
</script>
<template>
  <div class="move-body">
    <div>
      <MapView :node-list="nodeList" class="root"></MapView>
    </div>
    <!-- <map-tips></map-tips> -->
  </div>
</template>
<style scoped>
  .move-body {
    scrollbar-width: thin;
    height: 600px;
    cursor: grabbing;
  }

  .move-able {
    width: 100%;
    height: 100%;
  }
</style>
