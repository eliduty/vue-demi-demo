<script lang="tsx">
  import { defineComponent, ref } from 'vue-demi';
  export default defineComponent({
    setup() {
      const count = ref(0);
      const handleClick = () => {
        count.value++;
      };
      return () => (
        <div>
          <button onClick={handleClick}>button tsx {count.value}</button>
        </div>
      );
    }
  });
</script>

<style scoped></style>
