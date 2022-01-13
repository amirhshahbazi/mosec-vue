<template>
  <div class="toast" :class="{'toast--error': type === 'error'}">
    <div class="toast__icon">
      <i class="bx bx-info-circle" />
    </div>
    <div class="toast__content">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    type: {
      type: String,
      default: "info",
    },
    content: {
      type: String,
      default: "",
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 20px 40px;
  background: $accent-color;
  color: white;
  z-index: 998;
  display: flex;
  justify-content: space-between;
  border-radius: 2rem;

  &--error {
    background: $error-color;
  }
}
</style>
