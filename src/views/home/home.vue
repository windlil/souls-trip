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


  </div>
</template>

<script setup>

import homeNavBar from './components/home-nav-bar.vue';
import homeSearchBox from './components/home-search-box.vue';



</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
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