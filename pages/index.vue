<template>
  <div class="app-center">
    <myText />
    <myFooter />
    <myIcon />
  </div>
</template>

<script>
import myText from '~/components/home/text'
import myFooter from '~/components/home/footer'
import myIcon from '~/components/icons'

export default {
  components: {
    myText,
    myFooter,
    myIcon
  }
}
</script>

<style lang="scss">
@import '@/assets/css/home.scss';
</style>
