<template>
  <div class="issue">
    <div class="issue-icon"
         :class="{'issue-icon--closed': issue.state === 'closed', 'issue-icon--open': issue.state === 'open'}">
      <i class="bx" :class="{'bx-check-circle': issue.state === 'closed', 'bx-circle': issue.state === 'open'}"/>
    </div>
    <div class="issue-item">
      <div class="issue-item__title">
        {{ issue.title }}
      </div>
      <div class="issue-item__reporter">
        {{ issue.user.login }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IssueItem",
  props: {
    issue: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
.issue {
  display: flex;
  margin-bottom: 1.2rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid $background-grey;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  .issue-item {
    &__title {
      font-size: 1.1rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
    }

    &__reporter {
      font-size: 0.9rem;
      color: #999;
    }
  }

  .issue-icon {
    margin-right: 5px;
    margin-top: 2px;

    &--open {
      color: $deactivated-color;
    }

    &--closed {
      color: $active-color;
    }
  }
}
</style>
