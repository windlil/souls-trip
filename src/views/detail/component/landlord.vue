<template>
  <div class="landlord">
    <session title="房东介绍" more-text="查看房东主页">
      <div class="top">
        <img :src="landlordModule?.topScroll" alt="">
      </div>
      <div class="header">
        <div class="left">
          <img :src="landlordModule.hotelLogo" alt="">
          <div class="info">
            <div class="name">
              {{ landlordModule.hotelName }}
            </div>
            <div class="tags">
              <span v-for="item in landlordModule.hotelTags" :style="{color: item.tagText.color}">
                {{ item.tagText.text }}
              </span>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="btn">
            联系房东
          </div>
        </div>
      </div>
      <div class="comment">
          <div class="comment-item" v-for="item in landlordModule?.hotelSummary">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="introduction">
              {{ item.introduction }}
            </div>
            <div class="tip">
              {{ item.tip }}
            </div>
          </div>
        </div>
    </session>
  </div>
</template>

<script setup>

import session from './session.vue';
defineProps({
  landlordModule: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.top {
  margin-top: 10px;
  img {
    width: 100%;
  }
}

.header {
  display: flex;
  align-items: center;
  margin-top: 10px;
  .left {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      margin-right: 5px;
    }

    .name {
      font-weight: bold;
      font-size: 18px;
    }

    .tags {
      display: flex;
      margin-top: 6px;
      span {
        padding-right: 5px;
        border-right: 1px solid;
        margin-right: 8px;
        
        &:last-child {
          border: 0;
        }
      }
    }
  }

  .right {
    padding: 5px 8px;
    margin-left: 18px;
    margin-top: 5px;
    border-radius: 6px;
    background-color: #ff9419;
    color: #fff;
    font-weight: bold;

  }
}

.comment {
  display: flex;
  justify-content: center;
  margin: 30px 0;
  .comment-item {
    width: 120px;
    color: var(--main-gray);

    .introduction {
      font-size: 22px;
      color: #000;
      font-weight: bold;
      margin: 5px 0;
    }
  }
}
</style>
