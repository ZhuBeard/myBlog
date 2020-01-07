<template>
  <div>
    <!-- <transition> -->
    <div class="figureBox">
      <div class="figure-flex" v-for="(item, index) in figures" :key="item.src">
        <figure @click="handleShow(index)">
          <img :src="item.src" alt />
          <figcaption>{{item.text}}</figcaption>
        </figure>
      </div>
    </div>
    <div v-for="item in figures" :key="item.src">
      <Pop v-if="item.isShow" :type="item.type" :title="item.text" :unmove="item.unmove">
        <component :is="currentTabComponent" />
      </Pop>
    </div>
    <!-- </transition> -->
  </div>
</template>
<script>
import Pop from './iconPor'
import showMe from '../home/showMe'
import { homeIcon } from '../imgurls'
export default {
  components: {
    Pop,
    showMe
  },
  props: {
    close: [Function],
    title: String,
    other: String
  },
  data() {
    return {
      currentTabComponent: '',
      figures: [
        {
          src: homeIcon.sup,
          text: '点赞',
          isShow: false,
          unmove: true,
          child: '',
          type: 'none',
          add: {
            num: 0,
            upSup: this.upSup()
          }
        },
        {
          src: homeIcon.readme,
          text: '说明',
          isShow: false,
          child: showMe,
          type: 'main'
        },
        {
          src: homeIcon.msg,
          text: '留言',
          isShow: false,
          child: '',
          type: 'wathet'
        },
        {
          src: homeIcon.setting,
          text: '设置',
          isShow: false,
          child: '',
          type: 'setting'
        }
      ]
    }
  },
  methods: {
    handleShow(index) {
      // 显示弹窗方法，先调用父关闭所有弹窗方法，100ms之后显示弹窗
      const open = new Promise(resolve => {
        this.closed()
        setTimeout(resolve, 100)
      })
      open.then(() => {
        this.figures[index].isShow = true
        this.currentTabComponent = this.figures[index].child
      })
    },
    resfule() {
      const newFig = this.figures
      newFig.map(n => (n.isShow = false))
      return newFig
    },
    closed() {
      const newFig = this.resfule()
      this.figures = newFig
    },
    handleHide() {
      this.close && this.closed() // 父组件的close方法
    },
    upSup() {
      // if (this.axiosUp === 3) return // 最多请求三次，还是错误就不请求了
      // axios
      //   .get('u/upSup/')
      //   .then(response => {
      //     if (response.data.status === 1) {
      //       this.setSup.call(this, response.data.data)
      //     } else {
      //       this.upSup()
      //       this.axiosUp++
      //     }
      //   })
      //   .catch(err => console.log(err))
    }
  }
}
</script>
