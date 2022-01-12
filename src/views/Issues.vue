<template>
  <div class="issues">
    <container class="issues-container">
      <template #header>
        <switch-button ref="open" title="open" @stateChange="handleStateChange('open')">
          <template #icon>
            <i class="bx bx-circle"></i>
          </template>
        </switch-button>
        <switch-button ref="closed" title="closed" @stateChange="handleStateChange('closed')">
          <template #icon>
            <i class="bx bx-check-circle"></i>
          </template>
        </switch-button>
      </template>
      <template #body>
        body
      </template>
    </container>
  </div>
</template>

<script>
import useIssues from "../composables/useIssues"
import Container from "../components/common/Container"
import SwitchButton from "../components/base/SwitchButton"
export default {
  name: "Issues",
  components: {SwitchButton, Container},
  setup() {
    const { handleStateChange } = useIssues()

    return {
      handleStateChange
    }
  }
}
</script>

<style scoped lang="scss">
.issues-container {
  margin: 100px 60px;
  height: 500px;

  .switch-button {
    &:first-child {
      margin-right: 10px;
    }
  }
}
</style>
