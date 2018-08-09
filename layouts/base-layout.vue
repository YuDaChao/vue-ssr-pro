<template>
  <div class="layout">
    <Layout :style="{ minHeight: '100%'}">
      <header-nav></header-nav>
      <Content :style="{padding: '64px 50px 0', width: '1200px', margin: '0 auto'}">
        <nuxt/>
      </Content>
      <footer-nav></footer-nav>
    </Layout>
    <BackTop :height="400" :bottom="100">
      <div class="top"><Icon type="ios-arrow-up" style="padding: 0" />返回顶部</div>
    </BackTop>
  </div>
</template>

<script>
  import HeaderNav from '../components/HeaderNav/HeaderNav'
  import FooterNav from '../components/FooterNav/FooterNav'
  export default {
    name: 'base-layout',
    components: {
      HeaderNav,
      FooterNav
    }
  }
</script>

<style scoped>
  .layout{
    height: 100%;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
  }
  .top{
    padding: 10px;
    background: rgba(0, 153, 229, .7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }
</style>
