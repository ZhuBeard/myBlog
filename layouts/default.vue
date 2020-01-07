<template>
  <div class="main">
    <my-header />
    <div class="page">
      <nuxt />
    </div>
  </div>
</template>
<script>
import myHeader from '@/components/public/header'
export default {
  components: {
    myHeader
  }
}
</script>
<style lang="scss">
@import '@/assets/css/global.scss';
</style>
