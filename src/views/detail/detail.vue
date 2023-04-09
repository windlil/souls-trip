<template>
  <div class="detail" >
    <van-nav-bar title="房屋详细" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <tabControl :tab-list="tabList" v-show="isShowTab" @tabClickItem="clickItem"></tabControl>
    <swipe/>
    <div v-if="detailData.mainPart" v-memo="[detailData.mainPart]">
      <info :ref="getElRef" :topModules="detailData?.mainPart?.topModule"/>
      <facility :ref="getElRef" :house-facility="detailData?.mainPart?.dynamicModule?.facilityModule?.houseFacility"/>
      <landlor :ref="getElRef" :landlord-module="detailData?.mainPart?.dynamicModule?.landlordModule"></landlor>
      <comment :ref="getElRef" :comment-module="detailData?.mainPart?.dynamicModule?.commentModule"></comment>
      <notice :ref="getElRef" :rules-module="detailData?.mainPart?.dynamicModule?.rulesModule"></notice>
    </div>
  </div>
</template>

<script setup>
import useDetailStore from '../../store/modules/detail';
import { useRoute } from 'vue-router';
import swipe from './component/swipe.vue'
import info from './component/info.vue'
import facility from './component/facility.vue';
import landlor from './component/landlord.vue'
import comment from './component/comment.vue';
import notice from './component/notice.vue';
import tabControl from '../../components/tab-control/tab-control.vue';
import { storeToRefs } from 'pinia';
import useScroll from '@/utils/useScroll.js'
import { computed } from '@vue/reactivity';
import { reactive } from 'vue';

const tabList = reactive(["描述", "设施", "房东", "评论", "须知"])

const elArr = []
const getElRef = (value) => {
  if(!value) return
  elArr.push(value.$el)
}

const clickItem = (index) => {
  let target = index === 0? elArr[index].offsetTop: elArr[index].offsetTop - 44
  window.scrollTo({
    top: target,
    behavior: 'smooth'
  })
}

const { scrollTop } = useScroll()
const isShowTab = computed(() => {
  return scrollTop.value > 300
})

const route = useRoute()
const detailStore = useDetailStore()

detailStore.getDetail(route.params.id)
const { detailData } = storeToRefs(detailStore)


const onClickLeft = () => history.back()


</script>

<style scoped>
.detail {
  padding-bottom: 100px;
}
</style>