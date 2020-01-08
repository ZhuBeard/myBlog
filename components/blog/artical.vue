<template>
  <div ref="article" class="article">
    <div class="article-center">
      <h1>{{data.title}}</h1>
      <span class="blog-menu-time">{{data.created_at}}</span>
      <span v-for="i in data.labels" :key="i.id">
        <a
          class="blog-menu-label"
          target="_blank"
          :href="i.url"
          :style="`color:#${i.color}`"
        >{{i.name}}</a>
      </span>
      <div class="view" v-html="html"></div>
    </div>
  </div>
</template>
<script>
import marked from 'marked'
import Prism from 'prismjs'
export default {
  props: {
    data: [Object]
  },
  data() {
    return {
      html: ''
    }
  },
  mounted() {
    this.getMarkArtical()
  },
  methods: {
    getMarkArtical() {
      const renderer = new marked.Renderer()
      marked.setOptions({
        highlight(code, lang) {
          if (Prism.languages[lang]) {
            return Prism.highlight(code, Prism.languages[lang], lang)
          }
          return code
        }
      })
      this.html = marked(this.data.body, { renderer })
    }
  },
  watch: {
    data() {
      this.getMarkArtical()
    }
  }
}
</script>
