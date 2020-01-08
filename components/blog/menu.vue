<template>
  <div class="blog-menu-content">
    <ul class="blog-menu-list">
      <li
        v-for="item in articles"
        :class="item.number == currentArticle.number? 'blog-menu-index' : 'blog-menu-wait'"
        :key="item.id"
        @click="changeArticle(item)"
      >
        <h3 class="blog-menu-title">{{item.title}}</h3>
        <div>
          <span class="blog-menu-time">{{item.created_at}}</span>
          <span v-for="i in item.labels" :key="i.id">
            <a
              class="blog-menu-label"
              target="_blank"
              :href="i.url"
              :style="`color:#${i.color}`"
            >{{i.name}}</a>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    articles: [Array],
    currentArticle: [Object]
  },
  methods: {
    changeArticle(artical) {
      this.$emit('onchangeArtical', artical)
    }
  }
}
</script>
