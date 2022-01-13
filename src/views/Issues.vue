<template>
  <loader v-if="loading"/>
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
    <scroll-anchor class="issues__anchor" v-on:anchor-in-view="handleScrollAnchor"/>
  </div>
</template>

<script>
import useIssues from "../composables/useIssues"
import Container from "../components/common/Container"
import SwitchButton from "../components/base/SwitchButton"
import ScrollAnchor from "../components/common/ScrollAnchor";
import IssueList from "../components/common/IssueList";
import Loader from "../components/base/Loader";

export default {
  name: "Issues",
  components: {Loader, IssueList, ScrollAnchor, SwitchButton, Container},
  setup() {
    const {handleStateChange, selectedStates, handleScrollAnchor, reset, issues, loading} = useIssues()

    return {
      handleStateChange,
      handleScrollAnchor,
      reset,
      issues,
      selectedStates,
      loading
    }
  }
}
</script>

<style scoped lang="scss">
.issues {
  position: relative;

  .issues-container {
    margin: 100px 60px;

    .switch-button {
      &:first-child {
        margin-right: 10px;
      }
    }
  }

  &__anchor {
    position: absolute;
    bottom: 0;
  }
}
</style>
