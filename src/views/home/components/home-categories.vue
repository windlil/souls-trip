<template>
  <div class="categories"> 
    <div class="categories-item" v-for="(item, index) in categories" :key="index">
      <img :src="item.pictureUrl" alt="">
      <span class="title">{{ item.title }}</span>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '../../../store/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const {categories} = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  overflow-x: auto;
  .categories-item {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70px;
    
    img {
      width: 32px;
      height: 32px;
    }

  }
}
</style>