<template>
  <div class="comment">
    <session title="热门评论" :more-text= "`查看全部${commentModule.totalCountStr}条评论`">
      <div class="inner">
        <div class="header">
          <div class="left">
            <div class="score">
              {{ commentModule.overall }}
            </div>
            <div class="title">
              <div>{{ commentModule.scoreTitle }}</div>
              <div>{{ commentModule.totalCount }}条评论</div>
              <van-rate v-model="commentModule.overall" size="14" color="#ffa52c" icon="star" readonly allow-half/>
            </div>
          </div>
          <div class="right">
            <div class="right-item" v-for="item in commentModule.subScores">
              {{ item }}
            </div>
          </div>
        </div>
        <div class="comment-bubble">
          <div class="bubble" v-for="item in commentModule.commentTagVo" :style="{color: item.color, background: item.backgroundColor}">
            {{ item.text }}
          </div>
        </div>
        <div class="content">
          <div class="user">
            <img :src="commentModule.comment?.userAvatars" alt="">
            <div class="info">
              <div class="username">
                {{ commentModule.comment?.userName }}
              </div>
              <div class="date">
                {{ commentModule.comment?.checkInDate }}
              </div>
            </div>
          </div>
          <div class="detail">
            {{ commentModule.comment?.commentDetail }}
          </div>
        </div>
      </div>
    </session>
  </div>
</template>

<script setup>
import session from './session.vue';
defineProps({
  commentModule: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.inner {
  margin-top: 20px;
  .header {
    display: flex;
    margin-left: 10px;
    .left {
      display: flex;
      align-items: center;
      
      .score {
        font-size: 44px;
        font-weight: bold;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 8px;
          width: 100%;
          height: 4px;
          background-color: #ffa42cad;
        }
      }

      .title {
        margin-left: 10px;

        &>div {
          margin-bottom: 2px;
        }

        &>div:nth-child(2) {
          color: rgb(155, 155, 155);
        }
      }
    }

    .right {
      flex: 1;
      margin-left: 40px;
      display: flex;
      flex-wrap: wrap;

      &>div {
        width: 80px;
        text-align: center;
        color: var(--main-gray);
        font-size: 12px;
      }
    }
  }

  .comment-bubble {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;

    .bubble {
      margin: 6px;
      font-size: 12px;
    }
  }

  .content {
    margin: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    .user {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 20px;
      }

      .info {
        margin-left: 5px;
        
        font-size: 12px;
        .date {
          color: rgb(155, 155, 155);
        }
      }
    }
  }
}
</style>