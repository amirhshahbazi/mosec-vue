<template>
  <div class="issue-list">
    <transition-group name="list" mode="in-out">
      <issue-item v-for="issue in issues" :key="issue.id" :issue="issue"></issue-item>
    </transition-group>
  </div>
</template>

<script>
import IssueItem from "./IssueItem"
export default {
  name: "IssueList",
  components: {
    IssueItem
  },
  props: {
    issues: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.issue-list {
  padding: 20px;
}
</style>
