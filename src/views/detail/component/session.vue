<template>
  <div class="session">
    <div class="header">
      <span class="title">
        {{ title }}
      </span>
    </div>
    <div class="content">
      <slot>
        <span>内容</span>
      </slot>
    </div>
    <div class="footer">
      {{ moreText }}
      <van-icon name="arrow" v-if="showIcon"/>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "默认标题"
  },
  moreText: {
    type: String,
    default: "更多"
  },
  showIcon: {
    type: Boolean,
    default: true
  }
})

</script>

<style lang="less" scoped>
.session {
  padding: 10px;
  margin: 20px 0;
  
  .header {
    .title {
      font-size: 20px;
      font-weight: bold;
    }
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(189, 189, 189, 0.363);
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
    padding-top: 10px;
    color: var(--primary-color);
  }
}
</style>
