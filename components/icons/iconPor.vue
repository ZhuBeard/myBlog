<template>
  <Windo @onClose="closeWin()" v-bind="$attrs">
    <slot name="header"></slot>
  </Windo>
</template>
<script>
import Windo from '../windo'
export default {
  inheritAttrs: false,
  components: {
    Windo
  },
  data() {
    return {
      // doc: document.querySelector('.main'),
      // node: document.createElement('div')
    }
  },
  methods: {
    closeWin() {
      this.$emit('closed')
    },
    clearboth(e) {
      e.stopPropagation()
    }
  }
}
</script>
