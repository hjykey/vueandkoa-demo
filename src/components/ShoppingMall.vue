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
          <img v-lazy="banner.image" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 大类 -->
    <div class="type-bar">
      <div v-for="(cate, index) in category" :key="index">
        <img v-lazy="cate.image" width="90%" />
        <span>{{ cate.mallCategoryName }}</span>
      </div>
    </div>
    <!--AD banner area-->
    <div class="ad-banner">
      <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%" />
    </div>
    <!--Recommend goods area-->
    <div class="recommend-area">
      <div class="recommend-title">
        商品推荐
      </div>
      <div class="recommend-body"></div>
    </div>
    <!--floor area-->
    <floorComponent
      :floorData="floor1"
      :floorTitle="floorName.floor1"
    ></floorComponent>
    <floorComponent
      :floorData="floor2"
      :floorTitle="floorName.floor2"
    ></floorComponent>
    <floorComponent
      :floorData="floor3"
      :floorTitle="floorName.floor3"
    ></floorComponent>
    <!--Hot Area-->
    <div class="hot-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="(item, index) in hotGoods" :key="index">
              <goods-info
                :goodsImage="item.image"
                :goodsName="item.name"
                :goodsPrice="item.price"
              ></goods-info>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import floorComponent from './floorComponent'
import goodsInfo from './goodsInfoComponent'
export default {
  data() {
    return {
      msg: 'Shopping Mall',
      locationicon: require('../assets/images/定位.svg'),
      bannerPicArray: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-3.jpg',
        require('../assets/images/636.jpg'),
      ],
      category: [],
      // 广告横幅
      adBanner: {},
      // 推荐商品
      recommendGoods: [],

      floor1: [],
      floor2: [],
      floor3: [],
      floorName: {},
      // 热卖商品
      hotGoods: [],
    }
  },
  created() {
    axios({
      url: 'http://localhost:3000/koa',
      method: 'get',
    })
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          this.category = response.data.data.category
          this.adBanner = response.data.data.advertesPicture
          this.bannerPicArray = response.data.data.slides
          this.recommendGoods = response.data.data.recommend
          this.floor1 = response.data.data.floor1
          this.floor2 = response.data.data.floor2
          this.floor3 = response.data.data.floor3
          this.floorName = response.data.data.floorName
          this.hotGoods = response.data.data.hotGoods
        }
      })
      .catch(() => {})
  },
  components: { floorComponent, goodsInfo },
  directives: {},
}
</script>
<style src="../assets/font/iconfont.css" scoped></style>
<style scoped>
/* 局部引入外部css ,引入的css不受scoped限制，不建议这样引入，通过src=""可以避免,如上*/
/* @import '../assets/font/iconfont.css';*/
.swiper-area {
  /* width: 20rem; */
  width: 100%;
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
.type-bar {
  background-color: #fff;
  margin: 0.3rem 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar div {
  padding: 0.2rem;
  font-size: 12px;
  text-align: center;
}
.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
}
.recommend-title {
  border-bottom: 1px solid #eee;
  font-size: 14px;
  padding: 0.2rem;
  color: #e5017d;
}

.recommend-body {
  border-bottom: 1px solid #eee;
}

.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}

.floor-anomaly {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 2px solid #ddd;
}

.hot-area {
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  height: 1.8rem;
  line-height: 1.8rem;
}
</style>
