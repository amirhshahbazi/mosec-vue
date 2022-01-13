<template>
  <div class="loader">
    <div class="loader__icon">
      <i class="bx bxl-github" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style scoped lang="scss">
@include loader-animation;

.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);

  .loader__icon {
    font-size: 4rem;
    transform: scale(1);
    animation: github-animation 1s linear infinite;
  }
}
</style>
