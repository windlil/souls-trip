<template>
  <div class="house-item-v9">
    <div class="bgc">
      <img :src="houseData.image.url" alt="">
    </div>
    <div class="infos">
      <div class="summary">{{ houseData.summaryText }}</div>
      <div class="name">{{ houseData.houseName }}</div>
      <div class="price">
        <div class="new">￥{{ houseData.finalPrice }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  houseData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.house-item-v9 {
  background-color: pink;
  width: 48%;
  margin: 5px 0;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  .bgc {
    img {
      width: 100%;
    }
  }

  .infos {
    position: absolute;
    z-index: 999;
    bottom: 0;
    color: #fff;
    padding: 8px;
    
    .summary {
      font-size: 12px;
    }

    .name {
      margin: 5px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>