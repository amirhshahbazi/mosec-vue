<template>
  <div class="scroll-anchor"></div>
</template>

<script>
import {watch} from "vue"
import useScrollAnchor from "../../composables/useScrollAnchor"

export default {
  name: "ScrollAnchor",
  emits: ['anchorInView'],
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, {emit}) {
    const {observer, time} = useScrollAnchor()

    watch(time, (newVal, oldVal) => {
      emit('anchorInView', {newVal, oldVal})
    })

    return {observer, time}
  }
}
</script>

<style scoped lang="scss">
</style>
