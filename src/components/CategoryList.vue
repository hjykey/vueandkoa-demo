<template>
  <div>
    <div class="navbar-div">
      <van-nav-bar title="类别列表" />
    </div>

    <div>
      <van-row>
        <van-col span="6">
          <div id="leftNav">
            <ul>
              <li
                @click="clickCategory(index, item.ID)"
                :class="{ categoryActice: categoryIndex == index }"
                v-for="(item, index) in category"
                :key="index"
              >
                {{ item.MALL_CATEGORY_NAME }}
              </li>
            </ul>
          </div>
        </van-col>
        <van-col span="18">
          <div class="tabCategorySub">
            <van-tabs v-model="active" @click="onClickCategorySub">
              <van-tab
                v-for="(item, index) in categorySub"
                :key="index"
                :title="item.MALL_SUB_NAME"
              >
              </van-tab>
            </van-tabs>
          </div>

          <div id="list-div">
            <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
              <van-list v-model="loading" :finished="finished" @load="onLoad">
                <div
                  class="list-item"
                  @click="goGoodsInfo(item.ID)"
                  v-for="(item, index) in goodList"
                  :key="index"
                >
                  <div class="list-item-img">
                    <img :src="item.IMAGE1" width="100%" :onerror="errorImg" />
                  </div>
                  <div class="list-item-text">
                    <div>{{ item.NAME }}</div>
                    <div>￥{{ item.ORI_PRICE | moneyFilter }}</div>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import url from '@/serviceAPI.config.js'
import { Toast } from 'vant'
export default {
  data() {
    return {
      category: [],
      categoryIndex: 0,
      active: 0,
      categorySub: [],
      list: [],
      loading: false, // 上拉加载使用
      finished: false, // 下拉加载是否没有数据了
    }
  },
  methods: {
    getCategory() {
      axios({
        url: url.getCategoryList,
        method: 'get',
      })
        .then((response) => {
          console.log(response)
          this.getCategorySubByCategoryId(this.category[0].ID)
          if (response.data.code === 200 && response.data.message) {
            this.category = response.data.message
          } else {
            Toast('服务器错误，数据取得失败')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 根据大类ID读取小类类别列表
    getCategorySubByCategoryId(categoryId) {
      axios({
        url: url.getCategorySubList,
        method: 'post',
        data: { categoryId: categoryId },
      })
        .then((response) => {
          if (response.data.code === 200 && response.data.message) {
            this.categorySub = response.data.message
            this.active = 0
          } else {
            Toast('服务器错误，数据取得失败')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 点击大类的方法
    clickCategory(index, categoryId) {
      this.categoryIndex = index
      this.getCategorySubByCategoryId(categoryId)
    },
  },
  created() {
    this.getCategory()
  },
  mounted() {
    let winHeight = document.documentElement.clientHeight
    document.getElementById('leftNav').style.height = winHeight - 46 + 'px'
  },
}
</script>

<style scoped>
#leftNav ul li {
  line-height: 2rem;
  border-bottom: 1px solid #e4e7ed;
  padding: 3px;
  font-size: 0.8rem;
  text-align: center;
}
.categoryActive {
  background-color: #fff;
}
</style>
