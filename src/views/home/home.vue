<template>
  <div class="home">

    <!-- 头部 -->
    <home-nav-bar/>

    <!-- 轮播图 -->
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>

    <!-- 索引城市 -->
    <home-search-box/>

    <!-- 选择居住日期 -->
    <div class="session date-range" @click="calendarShow = true">
      <div class="start">
        <span class="top-span">入住</span>
        <span class="bottom-span">{{startDay}}</span>
      </div>
      <div class="stay">
        共{{stayDay}}晚
      </div>
      <div class="end">
        <span class="top-span">离店</span>
        <span class="bottom-span">{{endDay}}</span>
      </div>
    </div>

    <!-- 日历选择器 -->
    <van-calendar 
      v-model:show="calendarShow" 
      @confirm="onConfirm"
      type="range"
      color="#ff9854"
    />

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
  </div>
</template>

<script setup>
import {formatMonthDay, diffDays} from '../../utils/format_date';
import homeNavBar from './components/home-nav-bar.vue';
import homeSearchBox from './components/home-search-box.vue';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import useHomeStore from '@/store/modules/home'
import ctcjs from 'ctcjs';

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

const homeStore = useHomeStore()
homeStore.getHotSuggests()
const { hotSuggests } = storeToRefs(homeStore)


</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }

  .date-range {
    .start, .end {
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
    justify-content: start;
    .suggest {
      padding: 5px 10px;
      margin: 2px 5px;
      background-color: #f3f3f3;
      border-radius: 14px;
      font-size: 12px;
    }
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