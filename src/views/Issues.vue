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
        <issue-list :issues="issues"></issue-list>
      </template>
    </container>
  </div>
  <scroll-anchor v-on:anchor-in-view="handleScrollAnchor" />
</template>

<script>
import useIssues from "../composables/useIssues"
import Container from "../components/common/Container"
import SwitchButton from "../components/base/SwitchButton"
import ScrollAnchor from "../components/common/ScrollAnchor";
import IssueList from "../components/common/IssueList";
export default {
  name: "Issues",
  components: {IssueList, ScrollAnchor, SwitchButton, Container},
  setup() {
    const { handleStateChange, selectedStates, handleScrollAnchor, reset, issues } = useIssues()

    return {
      handleStateChange,
      handleScrollAnchor,
      reset,
      issues,
      selectedStates
    }
  }
}
</script>

<style scoped lang="scss">
.issues-container {
  margin: 100px 60px;

  .switch-button {
    &:first-child {
      margin-right: 10px;
    }
  }
}
</style>
