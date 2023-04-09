<template>
  <div class="tab-control">
    <span 
      v-for="(item,index) in tabList"
      :key="index"
      class="tab-item"
      @click="clickItem(index)"
      :class="{active: currentIndex === index}"
    >{{ item }}</span>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import { ref } from 'vue';
defineProps({
  tabList: {
    type: Array,
    default: [1,2,3,4,5]
  }
})

const emits = defineEmits(["tabClickItem"])

let currentIndex = ref(0)
const clickItem = (index) => {
  currentIndex.value = index
  emits('tabClickItem', index)
}
</script>

<style lang="less" scoped>
.tab-control {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 6px;
  background-color: #fff;

  .tab-item {
    padding: 5px;

  }
}

.active {
  color: var(--primary-color);
  font-weight: bold;
  border-bottom: 3px solid var(--primary-color);
}
</style>