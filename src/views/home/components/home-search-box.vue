<template>
  <div class="location">
    <div class="city" @click="toCity">{{currentCity.cityName}}</div>
    <div class="position">
      <span>我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="">
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useCityStore from '@/store/modules/city'
import { storeToRefs } from 'pinia';

const router = useRouter()
const toCity = () => {
  router.push('/city')
}

const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

</script>

<style lang="less" scoped>
.location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 10px 18px;
  font-size: 18px;

  .position {
    
    display: flex;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
      margin-top: -2px;
    }
  }
}
</style>