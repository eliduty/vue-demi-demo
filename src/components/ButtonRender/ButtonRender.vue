<script lang="tsx">
  import { defineComponent, h, ref } from 'vue-demi';
  export default defineComponent({
    setup() {
      const count = ref(0);
      const handleClick = () => {
        count.value++;
      };
      return () => h('button', { onClick: handleClick, on: { click: handleClick } }, `Button render${count.value}`);
    }
  });
</script>

<style scoped></style>
