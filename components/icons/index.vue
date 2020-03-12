<template>
  <div>
    <div class="figureBox">
      <div class="figure-flex">
        <figure @click="handleShow(index)">
          <img :src="figure.src" alt />
          <figcaption>{{figure.text}}</figcaption>
        </figure>
      </div>
    </div>
    <div>
      <transition name="figure">
        <Pop
          v-if="figure.isShow"
          :type="figure.type"
          :title="figure.text"
          :unmove="figure.unmove"
          @closed="closed"
        >
          <template #header>
            <component :is="currentTabComponent" :user="user" v-bind="figure" />
          </template>
        </Pop>
      </transition>
    </div>
  </div>
</template>
<script>
import Pop from './iconPor'
export default {
  components: {
    Pop
  },
  props: {
    close: [Function],
    title: String,
    user: String
  },
  data() {
    return {
      currentTabComponent: '',
      figure: {}
    }
  },
  beforeMount() {
    console.log(this.$attrs)

    this.figure = this.$attrs.figures
  },
  methods: {
    handleShow(index) {
      // 显示弹窗方法，先调用父关闭所有弹窗方法，100ms之后显示弹窗
      const open = new Promise(resolve => {
        this.closed()
        setTimeout(resolve(), 100)
      })
      open.then(() => {
        this.figure[index].isShow = true
        this.currentTabComponent = this.figure[index].child
      })
    },
    input(val) {
      console.log(val)
    }
  },
  watch: {
    testValue(val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss">
.figureBox {
  position: absolute;
  z-index: 800;
  top: 44px;
  right: -14px;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 480px) {
  .figureBox {
    flex-direction: row;
    top: 1rem;
    left: -1rem;
  }
}
</style>
