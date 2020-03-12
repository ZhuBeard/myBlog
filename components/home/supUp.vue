<template>
  <div>
    <div class="supBox">
      <div class="addSupNum">
        <h1>THANK U!</h1>
        <addSup v-bind="$attrs"></addSup>
      </div>
      <div ref="imgs">
        <template v-for="(i, index) in parrotsSrcs">
          <img :src="i" :key="index" />
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { parrotMix } from '@/mixins/parrotUrl'
import addSup from './addSup'
export default {
  mixins: [parrotMix],
  components: {
    addSup
  },
  data() {
    return {
      parrots2: [],
      SIZE: 30,
      imgLoad: 0,
      windowSize: {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
      },
      closeOut: null
    }
  },
  computed: {
    a() {
      return Math.round(this.SIZE * this.DIAMETER * 0.208333)
    },
    mouse() {
      return {
        x: this.a + this.OFFSET,
        y: this.a + this.OFFSET
      }
    },
    current() {
      return this.OFFSET
    }
  },
  mounted() {
    for (var i = 0; i < this.PARROTS; i++) {
      this.parrots2[i] = { x: 0, y: 0, X: 0, Y: 0 }
    }
    // this.props.add.upSup()
    // this.draw()
    this.mouse = {
      x: this.windowSize.w / 2,
      y: this.windowSize.h / 2
    }
    this.roundOut = setTimeout(() => {
      this.mouse = {
        x: this.windowSize.w + 600,
        y: 0
      }
    }, 3000)
    this.closeOut = setTimeout(() => {
      this.$attrs.close()
    }, 4500)
  },
  beforeDestroy() {
    cancelAnimationFrame(this.darw)
    clearTimeout(this.roundOut)
    clearTimeout(this.closeOut)
    this.darw = this.makeCircle = null
    this.retruns = true
  },
  methods: {
    draw() {
      if (this.retruns) return
      var parrot = this.parrots2[0]
      var prevParrot = this.parrots2[0]
      parrot.x = parrot.X += (this.mouse.x - parrot.X) * this.SPEED
      parrot.y = parrot.Y += (this.mouse.y - parrot.Y) * this.SPEED
      for (var _i2 = this.PARROTS - 1; _i2 > 0; --_i2) {
        parrot = this.parrots2[_i2]
        prevParrot = this.parrots2[_i2 - 1]
        parrot.x = parrot.X += (prevParrot.x - parrot.X) * this.SPEED
        parrot.y = parrot.Y += (prevParrot.y - parrot.Y) * this.SPEED
      }
      this.makeCircle(this.$refs.imgs)
      requestAnimationFrame(this.draw())
    },
    makeCircle(dom) {
      if (this.retruns) return
      // eslint-disable-next-line no-void
      var parrot = void 0
      let curren = this.current
      curren -= this.ROTATION
      for (var _i = this.PARROTS - 1; _i > -1; --_i) {
        parrot = this.parrots2[_i]
        dom.children[_i].style.transform =
          'translate(' +
          Math.round(
            parrot.x + this.a * Math.cos((curren + _i) / this.SPACING) - 15
          ) +
          'px,' +
          Math.round(
            parrot.y + this.a * Math.sin((curren + _i) / this.SPACING) - 15
          ) +
          'px)'
      }
    }
  }
}
</script>
