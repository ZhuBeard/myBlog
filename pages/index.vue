<template>
  <div class="app-center">
    <myText />
    <myFooter />
    <myIcon :user="user" />
  </div>
</template>

<script>
// import html2canvas from 'html2canvas'
import myText from '~/components/home/text'
import myFooter from '~/components/home/footer'
import myIcon from '~/components/icons'

export default {
  components: {
    myText,
    myFooter,
    myIcon
  },
  data() {
    return {
      user: 'zhuBeard',
      modelType: 'ok'
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/home.scss';
</style>
