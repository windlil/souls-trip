<template>
  <div class="content">
    <div class="title">
      <h2>热门推荐</h2>
    </div>
    <div class="list">
      <template v-for="item in homeList" :key="item.data.houseId">
        <houseItemV9 
          v-if="item.discoveryContentType === 9" 
          :houseData="item.data"
          @click="itemClick(item.data)"  
        />
        <houseItemV3 
          v-else
          :houseData="item.data"
          @click="itemClick(item.data)"  
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import houseItemV9 from '../../../components/house-item/house-item-v9.vue';
import houseItemV3 from '../../../components/house-item/house-item-v3.vue';
import useHomeStore from '@/store/modules/home'
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router'

const homeStore = useHomeStore()
const { homeList } = storeToRefs(homeStore)

const router = useRouter()
const itemClick = (data) => {
  router.push('/detail/' + data.houseId)
}
</script>

<style lang="less" scoped>
.content {
  padding: 0 10px;
  margin-bottom: 70px;
  .title h2 {
    font-size: 22px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>