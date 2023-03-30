<template>
  <div class="city">
    <div class="top">
      <van-search v-model="searchValue" placeholder="请输入搜索关键词" show-action @cancel="onCancel" />
      <van-tabs v-model:active="tabActive">
        <template v-for="(value, key, index) in allCityData" :key="index">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCityData" :key="index">
          <city-group v-show="key === tabActive" :group-data="value"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import useCityStore from '@/store/modules/city'
import cityGroup from './component/city-group.vue';

const router = useRouter()

// 搜索框功能
const searchValue = ref('')
const onCancel = () => {
  router.back()
}

// Tab
const tabActive = ref()

// 数据获取
const cityStore = useCityStore()
cityStore.getAllCityData()
const { allCityData } = storeToRefs(cityStore)
</script>

<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 999;
  }
  .content {
    height: calc(100vh - 100px);
    overflow-y: auto;
  }
}
</style>