<template>
  <div>
    <van-nav-bar
      title="用户注册"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />

    <div class="register-panel">
      <van-field
        v-model="username"
        label="用户名"
        icon="clear"
        placeholder="请输入用户名"
        required
        :error-message="usernameErrorMsg"
        @click-icon="username = ''"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        :error-message="passwordErrorMsg"
      />
      <div class="register-button">
        <van-button type="primary" size="large" @click="registerAction"
          >马上注册</van-button
        >
      </div>
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
      username: '',
      password: '',
      openLoading: false, // 是否开启用户的Loading
      usernameErrorMsg: '', // 当用户名出现错误的时候
      passwordErrorMsg: '', // 当密码出现错误的时候
    }
  },

  methods: {
    goBack() {
      this.$router.go(-1)
    },
    axiosRegisterUser() {
      axios({
        url: url.registerUser,
        method: 'post',
        data: {
          username: this.username,
          password: this.password,
        },
      })
        .then((response) => {
          if (response.data.code === 200) {
            Toast.success('注册成功')
          } else {
            console.log(response.data.message)
            Toast.fail('注册失败')
          }
        })
        .catch((error) => {
          Toast.fail(error)
        })
    },
    checkForm() {
      let isOk = true
      if (this.username === '') {
        this.usernameErrorMsg = '用户名不能为空！'
        Toast.fail(this.usernameErrorMsg)
        isOk = false
      } else {
        this.usernameErrorMsg = ''
        if (
          this.password.length > 6 &&
          RegExp(/^\w+$/).test(this.password) &&
          RegExp(/[A-Z]+/).test(this.password)
        ) {
          this.passwordErrorMsg = ''
        } else {
          isOk = false
          this.passwordErrorMsg =
            '密码由长度大于6位数的数字、字母、\n下划线组成,其中至少有一个大写字母！'
          Toast.fail({ message: this.passwordErrorMsg, closeOnClick: true })
        }
      }
      return isOk
    },
    registerAction() {
      this.checkForm() && this.axiosRegisterUser()
    },
  },
}
</script>

<style scoped>
.register-panel {
  width: 96%;
  border-radius: 5px;
  margin: 20px auto;
  padding-bottom: 50px;
}
.register-button {
  padding-top: 10px;
}
</style>
