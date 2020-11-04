<template>
  <div>
    <!-- {{ msg }}
    <div>
      <a
        href="https://www.w3cschool.cn/vantlesson/vantlesson-5vrq35uz.html"
        target="_blank"
        ><van-button type="info" title="van-button的使用说明"
          >信息按钮</van-button
        ></a
      >
    </div> -->
    <!-- 搜索 -->
    <div class="search-bar">
      <van-row gutter="5">
        <van-col span="3">
          <van-icon
            class="iconfont"
            class-prefix="icon"
            name="search"
            size="1.8rem"
          />
          <!-- <img
            v-bind:src="locationicon"
            style="width:30%;height:30%;"
            class="location-icon"
          /> -->
        </van-col>
        <van-col span="16"> <input type="text" class="search-input"/></van-col>
        <van-col span="5"><van-button size="mini">查找</van-button></van-col>
      </van-row>
    </div>
    <!-- 轮播图 -->
    <div class="swiper-area">
      <van-swipe :autoplay="1000">
        <!-- <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
          <img :src="banner" width="100%" />
        </van-swipe-item> -->
        <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
          <img v-lazy="banner" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      msg: 'Shopping Mall',
      locationicon: require('../assets/images/定位.svg'),
      bannerPicArray: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        require('../assets/images/636.jpg'),
      ],
    }
  },
  created() {
    axios({
      url: 'http://localhost:3000/koa',
      method: 'get',
    })
      .then((response) => {
        console.log(response)
      })
      .catch(() => {})
  },
}
</script>

<style scoped>
/* 局部引入外部css */
@import '../assets/font/iconfont.css';
.swiper-area {
  width: 20rem;
  clear: both;
  overflow: hidden;
}
.search-bar {
  height: 2.5rem;
  background-color: #e5017d;
  line-height: 2.4rem;
}
.search-input {
  width: 100%;
  height: 1.5rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid #ffffff !important ;
  background-color: #e5017d;
  color: #fff;
}
.location-icon {
  padding-top: 0.5rem;
  padding-left: 0.1rem;
}
</style>
