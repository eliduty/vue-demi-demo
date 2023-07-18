import { defineComponent as e, ref as o, h as c } from "vue";
const u = /* @__PURE__ */ e({
  setup() {
    const n = o(0), t = () => {
      n.value++;
    };
    return () => c("button", {
      onClick: t,
      on: {
        click: t
      }
    }, `Button render${n.value}`);
  }
});
export {
  u as LibButtonRender
};
