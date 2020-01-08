<template>
  <div class="text">
    <span :class="span1?'animate':''">Hey There</span>
    <br />
    <span :class="span2?'animate':''">I'm 🐖🐖🐖🐖</span>
    <br />
    <span :class="span3?'animate':''">
      <strong>hhhhhhh</strong>
      <i :class="cursor?cursor:''"></i>
    </span>
  </div>
</template>
<script>
export default {
  mounted() {
    this.setTimeout0 = setTimeout(() => {
      this.span1 = true
    }, 1200)
    this.setTimeout1 = setTimeout(() => {
      this.span2 = true
    }, 1400)
    this.setTimeout2 = setTimeout(() => {
      this.span3 = true
    }, 1600)
    this.setTimeout3 = setTimeout(() => {
      this.cursor = true
    }, 2400)
  },
  beforeMount() {
    clearTimeout(this.setTimeout0)
    clearTimeout(this.setTimeout1)
    clearTimeout(this.setTimeout2)
    clearTimeout(this.setTimeout3)
  },
  data() {
    return {
      span1: false,
      span2: false,
      span3: false,
      cursor: false
    }
  }
}
</script>
