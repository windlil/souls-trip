<template>
  <div class="detail">
    <van-nav-bar title="房屋详细" left-text="返回" left-arrow @click-left="onClickLeft" />
    <swipe/>
  </div>
</template>

<script setup>
import useDetailStore from '../../store/modules/detail';
import { useRoute } from 'vue-router';
import swipe from './component/swipe.vue'

const route = useRoute()
const detailStore = useDetailStore()

detailStore.getDetail(route.params.id)

const onClickLeft = () => history.back()


</script>

<style scoped></style>