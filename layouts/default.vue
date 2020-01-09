<template>
  <div class="main" ref="imageDom">
    <my-header />
    <div class="page">
      <nuxt />
    </div>
    <el-button
      type="primary"
      @click.native="clickGeneratePicture"
      style="position: absolute; bottom: 30%;"
    >保存图片</el-button>
  </div>
</template>
<script>
import myHeader from '@/components/public/header'
export default {
  components: {
    myHeader
  },
  data() {
    return {
      imgUrl: '',
      html2canvas: null
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
        eleLink.download = 'pictureName'
        // 触发点击
        document.body.appendChild(eleLink)
        eleLink.click()
        // 然后移除
        document.body.removeChild(eleLink)
      })
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/global.scss';
</style>
