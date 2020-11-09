<template>
  <div>
    <div class="navbar-div">
      <van-nav-bar
        title="商品详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import url from '@/serviceAPI.config.js'
export default {
  data() {
    return {
      goodsId: '775e575ce28a4f89b1dfe2c99eb08ae7',
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      axios({
        url: url.getDetailGoodsInfo,
        method: 'post',
        data: {
          goodsId: this.goodsId,
        },
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    onClickLeft() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped></style>
