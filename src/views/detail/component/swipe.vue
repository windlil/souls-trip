<template>
  <van-swipe class="my-swipe" :autoplay="3000"  height="250" >
    <template v-for="item in picList">
      <van-swipe-item>
        <img :src="item.url" alt="">
      </van-swipe-item>
    </template>
    <template #indicator="{ active, total }">
      <div class="custom-indicator">
        <template v-for="(value, key, index) in picGroup">
          <span class="item" :class="{active: picList[active]?.enumPictureCategory == key}">
            {{ getTitle(value[0].title) }}
          </span>
        </template>
      </div>
    </template>
  </van-swipe>
</template>

<script setup>
import useDetailStore from '../../../store/modules/detail';
import { storeToRefs } from 'pinia';

const detailStore = useDetailStore()
const { picList, picGroup } = storeToRefs(detailStore)

const getTitle = (name) => {
  const reg = /【(.*?)】/i
  const result = reg.exec(name)
  return result[1]
}

</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  img {
    width: 100%;
    height: 100%;
  }

}
.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.77);
    color: #fff;

    .item {
      margin: 0 4px;
      padding: 0 4px;
      border-radius: 4px;
      text-align: center;
      &.active {
        background: rgb(255, 255, 255);
        color: #000;
      }
    }
  }
</style>