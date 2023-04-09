<template>
  <div class="info">
    <div class="name">
      {{ topModules.houseName }}
    </div>
    <div class="tags">
      <template v-for="(item, index) in topModules.houseTags" :key="index">
        <span class="tag" v-if="item.tagText"
          :style="{color: item.tagText.color, background: item.tagText.background.color}"
          >
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment session">
      <div class="left">
        <span class="score">{{ topModules?.commentBrief?.overall }}</span>
        <span class="title">{{ topModules?.commentBrief?.scoreTitle }}</span>
        <span class="brief">{{ topModules?.commentBrief?.commentBrief }}</span>
      </div>
      <div class="right">
        <span class="count">{{ topModules?.commentBrief?.totalCount }}条评论</span>
      </div>
    </div>
    <div class="location session">
      <div class="left">
        <span class="address">{{ topModules?.nearByPosition?.address }}</span>
      </div>
      <div class="right">
        <span>地图·周边</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  topModules: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.session {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 10px 0;
  background-color: #f3f6f9;
}

.info {
  padding: 0 10px;
  .name {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    
    .tag {
      padding: 2px 4px;
      margin: 4px;
    }
  }

  .comment {


    .left {
      margin-left: 6px;
      .score {
        font-weight: bold;
        font-size: 22px;
        color: #ffa168;
      }

      .title {
        margin-left: 5px;
        font-weight: bold;
        font-size: 16px;
      }

      .brief {
        margin-left: 5px;
        color: var(--main-gray);
        font-size: 16px;
      }
    }

    .right {
      color: #ffa168;
      margin-right: 5px;
    }
  }

  .location {
    font-weight: bold;
    .left {
      margin-left: 6px;
    }
  }
}
</style>