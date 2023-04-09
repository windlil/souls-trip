<template>
  <div>
    <session title="房屋设施" more-text="查看全部设施">
      <div class="inner">
        <template v-for="(item, index) in houseFacility?.houseFacilitys" :key="index">
          <div class="inner-item" v-if="houseFacility?.facilitySort?.includes(index)">
            <div class="head">
              <img :src="item.icon" alt="">
              <span class="text">{{ item.groupName }}</span>
            </div>
            <div class="list">
              <div class="list-item" v-for="item2 in item.facilitys.slice(0, 4)">
                <van-icon name="passed" color="rgb(63, 113, 251)" />
                <span>{{ item2.name }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </session>
  </div>
</template>

<script setup>
import session from './session.vue';
const props = defineProps({
  houseFacility: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="less" scoped>
.inner-item {
  display: flex;
  margin: 20px 0;
  .head {
    flex: 1;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 20px;
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    width: 250px;
    .list-item {
      width: 100px;
      margin: 5px;

      span {
        margin-left: 2px;
      }
    }
  }
}
</style>
