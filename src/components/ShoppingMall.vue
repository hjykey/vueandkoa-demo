<template>
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
  <div class="search-bar">
    <van-row gutter="5">
      <van-col span="3">
        <img
          v-bind:src="locationIcon"
          style="width:30%;height:30%;"
          class="location-icon"
        />
      </van-col>
      <van-col span="16"> <input type="text" class="search-input"/></van-col>
      <van-col span="5"><van-button size="mini">查找</van-button></van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Shopping Mall',
      locationIcon: require('../assets/images/定位.svg'),
    }
  },
}
</script>

<style scoped>
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
  padding-top: 0rem;
  padding-left: 0rem;
}
</style>
