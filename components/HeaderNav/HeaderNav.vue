<template>
  <div class="header-wrapper">
    <Header :style="{width: '1200px', margin: '0 auto'}">
      <Menu mode="horizontal" theme="dark" :active-name="currentPath">
        <div class="layout-logo"></div>
        <div class="layout-nav">
          <MenuItem name="/" to="/" >
            <Icon type="ios-home" />
            下载首页
          </MenuItem>
          <MenuItem name="/album" to="/album">
            <Icon type="ios-keypad"></Icon>
            精品专辑
          </MenuItem>
          <MenuItem name="3">
            <Icon type="md-trending-up" />
            排行榜
          </MenuItem>
          <MenuItem name="3">
            <Icon type="md-cloud-upload" />
            已下载
          </MenuItem>
          <MenuItem name="5">
            <Dropdown>
              <Avatar icon="ios-person" size="small" />
              <DropdownMenu slot="list">
                <DropdownItem>个人中心</DropdownItem>
                <DropdownItem>设置</DropdownItem>
                <DropdownItem divided>退出</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </MenuItem>
        </div>
      </Menu>
    </Header>
  </div>
</template>

<script>
  export default {
    name: 'HeaderNav',
    computed: {
      currentPath () {
        return this.$route.path
      }
    },
    watch: {
      $route (val) {
        this.current
      }
    }
  }
</script>

<style scoped>
  .header-wrapper {
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 64px;
    background: #515a6e;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 520px;
    margin: 0 auto;
    margin-right: 20px;
  }
</style>
