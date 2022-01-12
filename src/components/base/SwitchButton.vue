<template>
  <button class="switch-button" :class="{'switch-button--activated': isActive}" @click="toggle">
    <span class="switch-button__title">{{ title }}</span>
    <slot name="icon"></slot>
  </button>
</template>

<script>
import useSwitchButton from "../../composables/useSwitchButton"
export default {
  name: "SwitchButton",
  props: {
    title: {
      required: true,
      type: String,
      default: "open"
    },
  },
  setup(props, { emit }) {
    const {
      isActive,
      toggle,
    } = useSwitchButton(emit)

    return {
      isActive,
      toggle,
    }
  }
}
</script>

<style scoped lang="scss">
.switch-button {
  padding: 5px 20px;
  border-radius: 1.5rem;
  border: 1px solid $primary-color;
  color: $primary-color;
  background: white;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  &--activated {
    background: $primary-color;
    color: white;
  }

  &__title {
    margin-right: 5px;
  }
}
</style>
