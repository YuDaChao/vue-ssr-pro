<template>
  <div class="login-wrapper">
    <div class="login-card">
      <Card :bordered="false">
        <p slot="title">用户登录</p>
        <login-form @on-success-valid="handleUserLogin"></login-form>
        <nuxt-link to="/register" class="register">没有账号?去注册</nuxt-link>
      </Card>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import LoginForm from '../../components/LoginForm'

  export default {
    name: 'index',
    components: {
      LoginForm
    },
    mounted () {
      this.$store.dispatch('resources/getResources')
    },
    methods: {
      ...mapActions(['handleLogin']),
      async handleUserLogin ({ userName, password }) {
        const result = await this.$axios({
          url: '/api/login',
          method: 'POST',
          data: {
            userName,
            password
          }
        })
        if (result.status === 200) {
          this.handleLogin(result.data)
          this.$router.push('/')
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  /*@import "../../assets/styles/mixins.styl"*/
  .login-wrapper
    position relative
    width 100%
    height 100%
    background url("./images/login-bg.jpg") no-repeat center
    background-size cover
    .login-card
      position absolute
      right 160px
      top 50%
      transform translateY(-60%)
      width 300px
    .register
      font-size 12px
      display flex
      justify-content flex-end
</style>
