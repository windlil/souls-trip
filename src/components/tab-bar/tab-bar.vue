<template>
  <div class="tab-bar">
    <div 
      class="tab-bar-item"
      :class="{active: index === currentIndex}"
      @click="clickItem(index, item)"
      v-for="(item,index) in tabbarData"
      :key="item.path"
    >
      <div class="tab-bar-item-icon">
        <img :src="getAssetsURL( isCurrent(index, item) )" alt="">
      </div>
      <span class="tab-bar-item-text">{{item.text}}</span>
    </div>
  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbarData.js'
import { getAssetsURL } from '@/utils/load-assets.js'
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const currentIndex = ref(0)

// item点击事件，切换currentIndex
const clickItem =(index, item) => {
  currentIndex.value = index
  router.push(item.path)
}

// 判断index ===？ currentIndex 用于图片切换
// true返回ativeImage，false返回image
const isCurrent = (index, item) => {
  if(index === currentIndex.value) {
    return item.imageActive
  }else {
    return item.image
  }
}
</script>

<style lang="less" scoped>

.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 50px;
  border-top: 1px solid #eee;
  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.active {
     color: var(--primary-color); 
    }
    .tab-bar-item-icon {
      width: 34px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .tab-bar-item-text {
      margin-top: 2px;
    }
  }
}
</style>