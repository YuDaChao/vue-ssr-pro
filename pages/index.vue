<template>
  <section class="container">
    <Breadcrumb :style="{margin: '20px 0'}">
      <BreadcrumbItem>下载首页</BreadcrumbItem>
    </Breadcrumb>
    <div class="index-wrapper">
      <div class="pull-left">
        <div class="search-list">
          <div class="js-content">
            <div class="js-title">技术领域</div>
            <div class="js-list">
              <div
                class="tag"
                :class="{checked: index === checkedTechnology}"
                v-for="(item, index) in technologys"
                :key="index"
                @click="handleClickTag(index)"
              >
                {{item}}
              </div>
            </div>
          </div>
          <div class="js-content mid">
            <div class="js-title">资源类型</div>
            <div class="js-list">
              <div
                class="tag"
                :class="{checked: index === checkedResource}"
                v-for="(item, index) in resources"
                :key="index"
                @click="handleClickResourceTag(index)"
              >
                {{item}}
              </div>
            </div>
          </div>
          <div class="js-content mid">
            <div class="js-title">关键词</div>
            <div class="js-list">
              <Input search placeholder="请输入关键词" />
            </div>
          </div>
        </div>
        <div class="content-wrapper">
          <Tabs value="name1">
            <TabPane label="最新上传" name="name1">最新上传</TabPane>
            <TabPane label="最多下载" name="name2">最多下载</TabPane>
          </Tabs>
        </div>
      </div>
      <div class="pull-right">
        <div class="user-info-wrapper">
          <div class="user-info-content">
            <div class="user-avartar">
              <img class="avartar" src="https://avatar.csdn.net/A/0/0/2_ygengleman.jpg" alt="">
            </div>
            <h4 class="user-name">YuDC</h4>
            <div class="down-score">
              <span class="title">下载积分</span>
              <span class="score">4</span>
            </div>
          </div>
          <div class="upload-btn">
            <Button type="error" long>上传资源</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  layout: 'base-layout',
  data () {
    return {
      technologys: ['全部', '移动开发', '技术开发', '课程资料', '网络技术', '操作系统', '安全技术',
        '数据库', '行业', '服务器应用', '大数据', '游戏开发', '人工智能', '区块链'],
      resources: ['全部', '文档类', '工具类', '代码类', '其他'],
      checkedTechnology: 0,
      checkedResource: 0
    }
  },
  methods: {
    handleClickTag (index) {
      if (this.checkedTechnology !== index) {
        this.checkedTechnology = index
      }
    },
    handleClickResourceTag (index) {
      if (this.checkedResource !== index) {
        this.checkedResource = index
      }
    }
  },
  components: {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    min-height: 100%;
    .index-wrapper
      height 100%
      display flex
      .pull-left
        width 700px
        height 100%
        flex 0 0 700px
        margin-right 20px
        .search-list
          width 100%
          background #fff
          border 1px solid #eee
          padding 10px 20px
          .js-content
            display flex
            padding 10px 0
            border-bottom 1px solid #e6e6e6
            .js-title
              width 80px
              font-size 14px
              font-weight 500
              color #999
              flex 0 0 80px
              &::after
                content: ':'
                margin-left 2px
            .js-list
              width 100%
              .tag
                display: inline-block
                height: 22px
                line-height: 22px
                margin: 2px 4px 2px 0
                padding: 0 8px
                border-radius: 3px
                font-size: 12px
                vertical-align: middle
                opacity: 1
                overflow: hidden
                cursor: pointer
                &.checked
                  background: #2d8cf0
                  color: #fff
            &:last-child
              border-bottom none
            &.mid
              align-items center
        .content-wrapper
          background #fff
          margin-top 30px
          padding 10px 20px
          border 1px solid #eee
      .pull-right
        width 460px
        height 100%
        flex 0 0 300px
        .user-info-wrapper
          background #fff
          margin-top 49px
          padding 0 18px 19px
          border 1px solid #ebedf2
          .user-info-content
            border-bottom 1px solid #ebedf2
            padding-bottom 10px
            .user-avartar
                margin-top -49px
                text-align center
                .avartar
                  width 98px
                  height 98px
                  border-radius 50%
              .user-name
                text-align center
                font-size 16px
                font-weight 600
                color: #333
                padding 20px 0 5px
              .down-score
                text-align center
                .title
                  font-size 12px
                  color: #999
                  margin-right 8px
                .score
                  font-size 24px
                  font-weight 600
                  color #ff9358
          .upload-btn
            padding 20px 0

</style>

