<template>
  <div class="main" ref="imageDom">
    <my-header />
    <div class="page">
      <nuxt />
    </div>
    <Windo type="type" title="长按保存图片" @onclose="closeWin()" v-if="isShow">
      <img :src="imgUrl" alt style="width: 90%;" />
    </Windo>
    <!-- <el-button
      type="primary"
      @click.native="clickGeneratePicture"
      style="position: absolute; bottom: 30%;"
    >保存图片</el-button>-->
  </div>
</template>
<script>
import Windo from '@/components/windo'
import myHeader from '@/components/public/header'
export default {
  components: {
    myHeader,
    Windo
  },
  data() {
    return {
      imgUrl: '',
      html2canvas: null,
      isShow: false
    }
  },
  beforeMount() {
    this.html2canvas = require('html2canvas')
  },
  methods: {
    clickGeneratePicture() {
      this.html2canvas(this.$refs.imageDom).then(canvas => {
        // 转成图片，生成图片地址
        this.imgUrl = canvas.toDataURL('image/png')
        var eleLink = document.createElement('a')
        eleLink.href = this.imgUrl // 转换后的图片地址
        this.isShow = true
      })
    },
    closeWin() {
      this.isShow = false
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/global.scss';
</style>
