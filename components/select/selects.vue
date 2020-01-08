<template>
  <ul>
    <li v-for="(list, i) in lists" :key="i" @click.stop="onChoose(list, i)">{{list.value}}</li>
  </ul>
</template>
<script>
export default {
  props: {
    lists: [Array]
  },
  methods: {
    onChoose(list, i) {
      this.$emit('onChoose', list, i)
    }
  }
}
</script>
