<template>
  <div class="error-wrapper">
    <div class="error-content">
      <img :src="errorImg" alt="">
      <div class="text-content">
        <h4>{{ code }}</h4>
        <h5>{{ desc }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
  import error404 from '../assets/images/error-page/error-404.svg'
  import error401 from '../assets/images/error-page/error-401.svg'
  import error500 from '../assets/images/error-page/error-500.svg'
  export default {
    name: 'error',
    props: {
      error: Object
    },
    computed: {
      errorImg () {
        const status = this.error.statusCode
        return status === 404 ? error404 : (status === 401 ? error401 : error500)
      },
      code () {
        return this.error.statusCode
      },
      desc () {
        const status = this.error.statusCode
        return status === 404 ? 'Oh~~您的页面好像飞走了~'
          : (status === 401 ? 'Oh~~您没有浏览这个页面的权限~' : 'Oh~~鬼知道服务器经历了什么~')
      }
    },
    mounted () {
      console.log(this.error)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .error-wrapper
    width 100%
    height 100%
    position relative
    .error-content
      position absolute
      width 600px
      height 700px
      top 50%
      left 50%
      transform translate(-50%, -50%)
      img
        width 100%
        height 100%
        display block
      .text-content
        position absolute
        top 0
        left 0
        h4
          position absolute
          top 0
          left 0
          font-size 80px
          font-weight 700
          color #348EED
        h5
          position absolute
          left 0
          top 100px
          width 700px
          font-size 20px
          font-weight 700
          color #67647D
</style>
