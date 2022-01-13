<template>
  <div class="scroll-anchor"></div>
</template>

<script>
import useScrollAnchor from "../../composables/useScrollAnchor"
export default {
  name: "ScrollAnchor",
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const { observer } = useScrollAnchor()
    return { observer }
  }
}
</script>

<style scoped lang="scss">
.scroll-anchor {
  width: 50px;
  height: 50px;
  background: red;
}
</style>
