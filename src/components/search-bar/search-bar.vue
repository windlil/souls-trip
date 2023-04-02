<template>
  <div class="search-bar">
    <div class="select-time">
      <div class="start-time">
        <span class="name">住</span>
        <span class="date">{{ startDayStr }}</span>
      </div>
      <div class="leave-time">
        <span class="name">离</span>
        <span class="date">{{ endDayStr }}</span>
        <div class="triangle"></div>
      </div>
    </div>
    <div class="search">
      关键词/位置/民宿
    </div>
    <div class="icon">
      <van-icon name="search" size="22px" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useMainStore from '../../store/modules/main';
import { computed } from '@vue/reactivity';
import { formatMonthDay } from '@/utils/format_date';

const mainStore = useMainStore()
const {startDay, endDay} = storeToRefs(mainStore)

const startDayStr = computed(() => formatMonthDay(startDay.value))
const endDayStr = computed(() => formatMonthDay(endDay.value))

</script>

<style lang="less" scoped>
.name {
  color: rgb(136, 136, 136);
}

.date {
  margin-left: 2px;
}

.search-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 64px;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  .select-time {
    margin-left: 15px;
    font-size: 12px;
    .leave-time {
      position: relative;

      .triangle {
        position: absolute;
        width: 0;
        height: 0;
        border-top: 4px solid #000;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
        transform: rotate(-45deg);
        right: -10px;
        top: 8px;
      }
    }
  }

  .search {
    flex: 1;
    height: 38px;
    line-height: 38px;
    padding-left: 8px;
    margin-left: 20px;
    margin-right: 10px;
    color: rgb(136, 136, 136);
    background-color: #e7e7e7;
  }

  .icon {
    margin-right: 10px;
  }
}
</style>