<template>
  <div class="profile">
    <div class="profile-wrapper">
      <div class="profile-content">
        <div class="left-content">
          <div class="user-info">
            <div class="avatar-wrapper">
              <img src="../../assets/images/users/avatar.jpg" alt="">
            </div>
            <div class="user-detail">
              <p class="username">YuDc</p>
              <p class="desc">
                <span class="title">上传权限: </span>
                <span class="num">220MB</span>
              </p>
            </div>
          </div>
          <ul class="datas">
            <li>
              <label>积分</label>
              <span>40</span>
            </li>
            <li>
              <label>总排名</label>
              <span>43500</span>
            </li>
            <li>
              <label>上传资源</label>
              <span>0</span>
            </li>
            <li>
              <label>下载资源</label>
              <span>32</span>
            </li>
            <li>
              <label>创建专辑</label>
              <span>0</span>
            </li>
          </ul>
        </div>
        <div class="right-btn">
          <Button type="success" shape="circle" size="large" long>开通VIP会员 免积分下载</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'base-layout',
    name: 'index'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .profile
    .profile-wrapper
      width 100%
      background #fff
      border 1px solid #eee
      padding 20px
      margin-top 30px
      .profile-content
        display flex
        .user-info
          display flex
          .avatar-wrapper
            width 100px
            height 100px
            margin-right 20px
            img
              width 100%
              height 100%
              border-radius 50%
          .user-detail
            .username
              font-size 14px
              color #333
            .desc
              margin-top 14px
              .title
                color #888
                font-size 14px
                line-height 16px
                margin-right 5px
              .num
                color #333
                font-size 14px
                font-weight 500
        .datas
          display flex
          width 800px
          margin-top 20px
          margin-left -10px
          li
            width 15%
            text-align center
          li > label
            display block
            font-size 14px
            color #666
            font-weight 400
            margin-bottom 5px
          li > span
            font-size 24px
            color #ff9358
            font-weight 700
        .right-btn
          display flex
          align-items center
</style>
