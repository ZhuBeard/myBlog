<template>
  <div>
    <nav ref="test" class="nav">
      <span>
        <img src="../../assets/img/logo.png" alt />
      </span>
      <template v-for="item in nav">
        <nuxt-link :to="item.herf" :key="item.text">{{item.text}}</nuxt-link>
      </template>
    </nav>
    <div class="times">
      <a target="_blank" href="https://github.com/">
        <img src alt />
      </a>
      <time>{{time}}</time>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.timeRe()
  },
  beforeMount() {
    // 组件渲染前 判断当前location为第几个，为第几个导航添加active样式
    const paths = []
    this.nav.map(i => paths.push(i.herf.toString()))
    const path = window.location.pathname.toString()
    const index = paths.indexOf(path) > -1 ? paths.indexOf(path) : 1
    this.handleIndex(index)
  },
  data() {
    return {
      nav: [
        { indent: true, text: 'HOME', herf: '/' },
        { indent: false, text: 'BLOG', herf: '/blog' },
        { indent: false, text: 'WORK', herf: '/work' },
        { indent: false, text: 'ABOUT', herf: '/about' }
      ],
      now: this.timer(),
      time: ''
    }
  },
  methods: {
    timer() {
      const time = new Date()
      return `${this.PollyTime(time.getHours())}:${this.PollyTime(
        time.getMinutes()
      )}:${this.PollyTime(time.getSeconds())}`
    },
    PollyTime(t) {
      const _t = +t < 10 ? `0${t}` : t
      return _t
    },
    handleIndex(index) {
      const newNav = this.nav
      newNav.forEach(t => (t.indent = false))
      newNav[index].indent = true
      this.nav = newNav
      this.now = index
      // this.setState({
      //   nav:newNav,
      //   now:index
      // });
    },
    timeRe() {}
  }
}
</script>
