<template>
  <div class="setting">
    <p>background</p>
    <Color />
    <p style="margin-top: 1.8rem">choose filter</p>
    <Fileter />
  </div>
</template>
<script>
import Color from './bgColor'
import Fileter from './filter'
export default {
  components: {
    Color,
    Fileter
  }
}
</script>
