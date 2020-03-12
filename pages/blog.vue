<template>
  <div class="page app-center">
    <div class="blog-main">
      <windo class="blog-menu-box" title="Blogs" type="white" :unmove="true" :noClose="true">
        <Menu
          :articles="artical"
          :currentArticle="currentArticle"
          @onchangeArtical="changeArtical"
        />
      </windo>

      <windo
        :noClose="true"
        :title="currentArticle.title"
        type="white"
        :unmove="true"
        class="blog-article-box"
      >
        <Artical ref="articleComponent" :data="currentArticle" />
      </windo>
      <!-- <div v-for="item in artical" :key="item.id">{{item.title}}</div> -->
    </div>
  </div>
</template>
<script>
import windo from '@/components/windo'
import Menu from '@/components/blog/menu'
import Artical from '@/components/blog/artical'
export default {
  head() {
    return {
      title: this.currentArticle.title
    }
  },
  components: {
    windo,
    Menu,
    Artical
  },
  data() {
    return {
      artical: [],
      currentArticle: {}
    }
  },
  async asyncData({ app }) {
    const { data } = await app.$axios.get(
      'https://api.github.com/repos/ArthurYung/my-voice/issues'
    )
    return {
      artical: data,
      currentArticle: data[0] || {}
    }
  },
  methods: {
    changeArtical(artical) {
      this.currentArticle = artical
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/blog.scss';
</style>
