<template>
  <div :class="['numSpan', bright? 'bright' : '']">{{num}}</div>
</template>
<script>
export default {
  data() {
    return {
      num: parseInt(this.$attrs.add.num),
      bright: false,
      timeout: ''
    }
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.num += 1
      this.bright = true
    }, 1200)
  },
  beforeMount() {
    clearTimeout(this.timeout)
  }
}
</script>
