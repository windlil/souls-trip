<template>
  <div class="notice">
    <session title="入住须知" more-text="" :show-icon="false"> 
      <div class="inner">
        <div class="item" v-for="item in rulesModule.orderRules">
          <span class="title">{{ item.title }}</span>
          <span class="intro">{{ item.introduction }}</span>
        </div>
      </div>
    </session>
  </div>
</template>

<script setup>
import session from './session.vue';

defineProps({
  rulesModule: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.notice {
  margin-top: 60px;
}
.inner {
  .item {
    margin: 10px 0;
    .title {
      color: var(--main-gray);
      margin: 5px 10px;
    }
  }
}
</style>