<template>
  <div class="city-group">
    <van-index-bar :index-list="definIndexList">
      <van-index-anchor index="热门" />
      <div class="hotCity">
        <template v-for="(item, index) in groupData.hotCities" :key="index">
          <div class="circle" @click="circleClick(item)">
            {{ item.cityName }}
          </div>
        </template>
      </div>
      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <van-cell v-for="(item, indey) in group.cities" :title="item.cityName" :key="indey" @click="vanCellClick(item)" />
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useRouter } from 'vue-router'
import useCityStore from '@/store/modules/city'

// 接收父组件props
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})


// 自定义左侧索引列表
const definIndexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift('#')
  return list
})

// 点击事件
const cityStore = useCityStore()
const router = useRouter()
const circleClick = (city) => {
  cityStore.currentCity = city
  router.back()
}

const vanCellClick = (city) => {
  cityStore.currentCity = city
  router.back()
}
</script>

<style lang="less" scoped>
.hotCity {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  padding-right: 20px;



  .circle {
    width: 72px;
    height: 30px;
    margin: 10px 0;
    border-radius: 20px;
    background-color: #fff4ec;
    text-align: center;
    line-height: 30px;
  }
}
</style>