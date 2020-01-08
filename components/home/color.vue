<template>
  <span :class="color.isChoose ? `${color.value}`: color.value" @click="choose(color)"></span>
</template>
<script>
export default {
  props: {
    color: Object
  },
  methods: {
    choose(color) {
      this.$emit('colorChoose', color)
    }
  }
}
</script>
