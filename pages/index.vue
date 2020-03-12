<template>
  <div class="app-center">
    <myText />
    <myFooter />
    <myIcon v-for="(item, index) in figures" :key="index" :user="user" :figures="item" />
  </div>
</template>

<script>
// import html2canvas from 'html2canvas'
import myText from '~/components/home/text'
import myFooter from '~/components/home/footer'
import myIcon from '~/components/icons'
import { homeIcon } from '~/components/imgurls'
import showMe from '~/components/home/showMe'
import setting from '~/components/home/setting'
import Msg from '~/components/home/msg'
import SupUp from '~/components/home/supUp'

export default {
  head() {
    return {
      title: '博客首页'
    }
  },
  components: {
    myText,
    myFooter,
    myIcon
  },
  data() {
    return {
      user: 'zhuBeard',
      modelType: 'ok',
      figures: [
        {
          src: homeIcon.sup,
          text: '点赞',
          isShow: false,
          child: SupUp,
          type: 'none',
          add: {
            num: 0,
            upSup: this.upSup()
          },
          close: () => {
            this.closed()
          }
        },
        {
          src: homeIcon.readme,
          text: '说明',
          isShow: false,
          child: showMe,
          type: 'main',
          move: true
        },
        {
          src: homeIcon.msg,
          text: '留言',
          isShow: false,
          child: Msg,
          type: 'wathet',
          move: true
        },
        {
          src: homeIcon.setting,
          text: '设置',
          isShow: false,
          child: setting,
          type: 'setting',
          move: true
        }
      ]
    }
  },
  methods: {
    getSups() {
      // if (this.upload === 3) return; //最多请求三次，还是错误就不请求了
      // axios.get('u/showSup/').then(response => {
      //   if (response.data.status === 1) {
      //     this.setSup(response.data.data.supNum)
      //   } else {
      //     this.getSups()
      //     this.upload++
      //   }
      // }).catch(err => console.log(err))
    },
    upSup() {
      // if (this.axiosUp === 3) return; //最多请求三次，还是错误就不请求了
      // axios.get('u/upSup/').then(response => {
      //   if (response.data.status === 1) {
      //     this.setSup.call(this, response.data.data)
      //   } else {
      //     this.upSup()
      //     this.axiosUp++
      //   }
      // }).catch(err => console.log(err))
    },
    setSup(num) {
      const newFigures = this.figures
      newFigures[0].add.num = num
      this.figures = newFigures
    },
    resfule() {
      const newFig = this.figures
      newFig.map(n => (n.isShow = false))
      return newFig
    },
    close() {
      const newFig = this.resfule()
      this.figures = newFig
    },
    shows(n) {
      const index = this.figures.indexOf(n)
      const newFig = this.resfule()
      newFig[index].isShow = true
      this.figures = newFig
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/home.scss';
</style>
