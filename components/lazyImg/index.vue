<template>
  <div :class="className" style="{!this.state.showIn" ? styles:{}}>
    <img ref="img" v-if="showIn" @DragStart="(e)=> e.preventDefault()" :src="this.img.src" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      showIn: false,
      w: this.props.w || '100%',
      h: this.props.h || '30vh',
      img: null,
      dom: null
    }
  },
  computed: {
    className() {
      return !this.state.showIn ? 'lazy lz-center' : 'lz-center lazy-load'
    }
  },
  beforeMount() {
    this.img = null
    this.parent = null
    this.dom = null
    clearTimeout(this.timeout)
    this.img = new Image()
    this.img.onload = this.loadImg()
    this.showImg = this._showImg()
  },
  mounted() {
    this.dom = this.$refs.img
    this.parent = this.dom.parentNode
    if (this.$attrs.w && this.$attrs.h) {
      if (parseInt(this.$attrs.w) > this.$attrs.offsetWidth) {
        this.w = '100%'
        this.h =
          (this.parent.offsetWidth / parseInt(this.props.w)) *
            parseInt(this.state.h) +
          'px'
      }
    }
    if (this.dom.offsetTop > this.parent.offsetHeight) {
      this.parent.addEventListener('scroll', this.showImg)
    } else {
      this.timeout = setTimeout(() => {
        this.img.src = this.props.src
      }, 300)
    }
  },
  methods: {
    // 当图片到达可视区域内时，请求图片src
    _showImg() {
      if (
        this.parent.scrollTop + this.parent.offsetHeight >=
        this.dom.offsetTop
      ) {
        this.img.src = this.$attrs.src
        this.parent.removeEventListener('scroll', this.showImg)
      }
    },
    // 图片缓存成功后，显示图片
    loadImg() {
      this.showIn = true
    }
  }
}
</script>
