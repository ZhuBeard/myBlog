<template>
  <div>
    <div @mouseDown="clearboth" class="dialog-bg">
      <slot></slot>
    </div>
    <div v-html="nodes"></div>
  </div>
</template>
<script>
export default {
  methods: {
    clearboth(e) {
      e.stopPropagation()
    }
  },
  beforeMount() {
    if (process.client) {
      document.body.removeChild(this.nodes)
    }
  },
  computed: {
    nodes() {
      let node
      if (process.client) {
        node = document.createElement('div')
        document.body.appendChild(node)
      }
      return node
    }
  }
}
</script>
