<template>
  <Windo :type="type" :title="title">
    <slot></slot>
  </Windo>
</template>
<script>
import Windo from '../windo'
export default {
  components: {
    Windo
  },
  props: {
    type: String,
    title: String
  },
  // mounted() {
  //   this.doc.appendChild(this.node)
  // },
  // beforeMount() {
  //   this.doc.removeChild(this.node)
  //   this.doc = null
  // },
  data() {
    return {
      // doc: document.querySelector('.main'),
      // node: document.createElement('div')
    }
  },
  clearboth(e) {
    e.stopPropagation()
  }
}
</script>
