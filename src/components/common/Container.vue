<template>
  <div class="container">
    <header class="container__header">
      <slot name="header"></slot>
    </header>
    <main class="container__body">
      <slot name="body"></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: "Container"
}
</script>

<style scoped lang="scss">
.container {
  @include smooth-container-shadow;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  &__header {
    width: 100%;
    padding: 20px;
    display: flex;
  }
}
</style>
