<template>
  <div class="location">
    <div class="city" @click="toCity">{{ currentCity.cityName }}</div>
    <div class="position">
      <span>我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="">
    </div>
  </div>

  <!-- 选择居住日期 -->
  <div class="session date-range" @click="calendarShow = true">
    <div class="start">
      <span class="top-span">入住</span>
      <span class="bottom-span">{{ startDay }}</span>
    </div>
    <div class="stay">
      共{{ stayDay }}晚
    </div>
    <div class="end">
      <span class="top-span">离店</span>
      <span class="bottom-span">{{ endDay }}</span>
    </div>
  </div>

  <!-- 日历选择器 -->
  <van-calendar v-model:show="calendarShow" @confirm="onConfirm" type="range" color="#ff9854" />

  <div class="session price-content">
    <div>价格不限</div>
    <div>人数不限</div>
  </div>

  <div class="session keyword">
    <span>关键字/位置/民宿名</span>
  </div>

  <div class="hot-suggests session">
    <template v-for="(item, index) in hotSuggests" :key="index">
      <div class="suggest">{{ item.tagText.text }}</div>
    </template>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useCityStore from '@/store/modules/city'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import useHomeStore from '@/store/modules/home'
import ctcjs from 'ctcjs';
import { formatMonthDay, diffDays } from '@/utils/format_date';



const router = useRouter()
const toCity = () => {
  router.push('/city')
}
//查找已选择的当前城市
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

// 日期格式化
const nowDate = new Date()
const startDay = ref(formatMonthDay(nowDate))
const newDate = new Date()
newDate.setDate(nowDate.getDate() + 1)
const endDay = ref(formatMonthDay(newDate))
const stayDay = ref(ctcjs(diffDays(nowDate, newDate)))

// calendar选择器相关操作
const calendarShow = ref(false)
const onConfirm = (value) => {
  startDay.value = formatMonthDay(value[0])
  endDay.value = formatMonthDay(value[1])
  stayDay.value = ctcjs(diffDays(value[0], value[1]))
  calendarShow.value = false
}

//数据引入
const homeStore = useHomeStore()
homeStore.getHotSuggests()
const { hotSuggests } = storeToRefs(homeStore)

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

.date-range {
  .start,
  .end {
    display: flex;
    flex-direction: column;

    .top-span {
      color: var(--main-gray);
    }

    .bottom-span {
      margin-top: 5px;
      font-size: 16px;
    }

  }

  .stay {
    font-size: 14px;
    color: var(--main-gray);
  }
}

.price-content {
  color: var(--main-gray);
  margin: 10px 0;

  &>div:nth-child(2) {
    margin-right: 12px;
  }
}

.keyword {
  margin: 10px 0;
  color: var(--main-gray);
}

.hot-suggests {
  display: flex;
  justify-content: start !important;

  .suggest {
    padding: 5px 10px;
    margin: 2px 5px;
    background-color: #f3f3f3;
    border-radius: 14px;
    font-size: 12px;
  }
}

.session {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 18px;
}
</style>