<template>
  <div class="colors">
    <Color v-for="(color, i) in colors" :key="i" :color="color" @colorChoose="bgChoose" />
  </div>
</template>
<script>
import Color from './color'
export default {
  components: {
    Color
  },
  data() {
    return {
      colors: [
        {
          value: 'main-bg',
          isChoose: false
        },
        {
          value: 'green-bg',
          isChoose: false
        },
        {
          value: 'red-bg',
          isChoose: false
        },
        {
          value: 'black-bg',
          isChoose: false
        },
        {
          value: 'colour-bg',
          isChoose: false
        },
        {
          value: 'grid-bg',
          isChoose: false
        }
      ],
      color: null
    }
  },
  mounted() {
    let hasClass
    let color
    if (process.client) {
      color = document.getElementById('__nuxt').className
    }
    const newColors = this.colors.map(i => {
      if (i.value === color) {
        i.isChoose = true
        hasClass = 1
      }
      return i
    })
    if (!hasClass) newColors[0].isChoose = true
    this.color = newColors
  },
  methods: {
    bgChoose(index) {
      const _index = this.colors.indexOf(index)
      this.colorChoose(_index)
      if (process.client) {
        document.getElementById('__nuxt').className = this.colors[_index].value
      }
    },
    colorChoose(index) {
      const newColors = this.colors.filter((c, i) => {
        c.isChoose = i === index
        return c
      })
      this.colors = newColors
    }
  }
}
</script>
