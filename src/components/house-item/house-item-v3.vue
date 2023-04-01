<template>
  <div class="house-item-v3">
    <div class="bgc">
      <img :src="houseData.image.url" alt="">
    </div>
    <div class="infos">
      <div class="location">
        <span><img src="../../assets/img/home/location.png" alt=""></span>
        {{ houseData.location }}
      </div>
      <div class="name">{{ houseData.houseName }}</div>
      <div class="summary">{{ houseData.summaryText }}</div>
      <div class="price">
        <div class="finalPrice">￥{{ houseData.finalPrice }}</div>
        <div class="productPrice">￥{{ houseData.productPrice }}</div>
        <div class="priceTipBadge">{{ houseData?.priceTipBadge?.text }}</div>
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
.house-item-v3 {
  width: 48%;
  margin: 5px 0;
  border-radius: 10px;
  overflow: hidden;
  .bgc {

    img {
      width: 100%;
    }
  }

  .infos {
    .location {
      margin: 4px 0;
      color: var(--main-gray);
      span {
        img {
          width: 15px;
        }
      }
    }

    .name {
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin: 4px 0;
      
    }

    .price {
      display: flex;
      margin: 8px 0;
      align-items: center;
      .finalPrice{
        color: orange;
      }

      .productPrice {
        margin: 0 4px;
        text-decoration: line-through;
        color: var(--main-gray);
      }

      .priceTipBadge {
        padding: 0 4px;
        border-radius: 6px;
        color: #fff;
        background-color: rgb(255, 124, 77);
      }
    }

    .summary {
      color: var(--main-gray);
    }
  }
}
</style>