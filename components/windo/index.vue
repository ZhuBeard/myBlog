
<template>
  <div ref="pops" :class="myClass" v-drag>
    <p :style="'cursor: '+$attrs.unmove ? 'auto' : ''" v-if="type !== 'none'">
      <a title="关闭" @click="onClose()"></a>
      {{title}}
    </p>
    <slot></slot>
  </div>
</template>
<script>
/**
 * 图标弹窗组件
 * props.noClose  是否有关闭按钮
 * props.unmove 是否可拖动
 * props.title 标题文本
 * props.type 颜色样式
 */
export default {
  props: {
    noClose: Boolean,
    type: String,
    title: String,
    unmove: Boolean
  },
  computed: {
    myClass() {
      return this.noClose
        ? `figure-pop-about figure-style-${this.type}`
        : `figure-pop figure-style-${this.type}`
    }
  },
  data() {
    return {
      isMove: false,
      positions: {
        // 弹窗的位置
        left: 0,
        top: 0,
        constx: 0,
        consty: 0,
        w: 0,
        h: 0
      }
    }
  },
  methods: {
    // handleMove(event) {
    //   if (this.$attrs.unmove) return false
    //   this.positions.left =
    //     event.clientX - this.positions.constx + this.positions.w / 2
    //   this.positions.top =
    //     event.clientY - this.positions.consty + this.positions.h / 2
    //   this.$refs.pops.style.left = ~~this.positions.left + 'px'
    //   this.$refs.pops.style.top = ~~this.positions.top + 'px'
    // },
    // handleDown(event) {
    //   if (this.$attrs.unmove) return
    //   const pops = this.$refs.pops.getBoundingClientRect()
    //   this.positions.w = pops.width
    //   this.positions.h = pops.height
    //   this.positions.constx = event.clientX - pops.left // 因为弹窗用translate(-50%)来居中，所以posiiton需要减去宽高一半
    //   this.positions.consty = event.clientY - pops.top
    //   this.isMove = true
    // },
    // handleUp() {
    //   this.isMove = false
    // },
    onClose() {
      this.$emit('onClose')
    }
  },
  directives: {
    drag(el, bindings, vm) {
      const _this = vm.context
      if (!_this.$children[0].$attrs.move) return false
      el.onmousedown = function(e) {
        var disx = e.pageX - el.offsetLeft
        var disy = e.pageY - el.offsetTop
        document.onmousemove = function(e) {
          el.style.left = e.pageX - disx + 'px'
          el.style.top = e.pageY - disy + 'px'
        }
        document.onmouseup = function() {
          document.onmousemove = document.onmouseup = null
        }
      }
    }
  }
}
</script>
