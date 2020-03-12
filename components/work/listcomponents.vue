<template>
  <div :style="{'z-index': $attrs.style?20:10}" class="{Css.codeBox}">
    <span>{{$attrs.title}}</span>
    <div class="figureBox">
      <Icon v-for="(item, i) in $attrs.figures" :key="i" />
    </div>
    <hr align="center" width="100%" color="#1e1e1e" size="1" />
  </div>
</template>
<script>
import Icon from '../icons'
export default {
  components: {
    Icon
  }
}
</script>
