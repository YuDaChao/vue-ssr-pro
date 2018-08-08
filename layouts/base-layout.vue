<template>
  <div class="layout">
    <Layout :style="{ height: '100%'}">
      <header-nav></header-nav>
      <Content :style="{padding: '64px 50px 0', width: '1200px', margin: '0 auto'}">
        <nuxt/>
      </Content>
      <footer-nav></footer-nav>
    </Layout>
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
</style>
