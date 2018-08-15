<template>
  <section class="container">
    <Breadcrumb :style="{margin: '20px 0'}">
      <BreadcrumbItem>精品专辑</BreadcrumbItem>
    </Breadcrumb>
    <Card>
      <div style="min-height: 200px;">
        精品专辑
      </div>
    </Card>
  </section>
</template>

<script>
  export default {
    name: 'Album',
    layout: 'base-layout',
    middleware: 'authenticated'
  }
</script>

<style scoped>
  .container {
    min-height: 100%;
  }
</style>
