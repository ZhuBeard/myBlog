<template>
  <div class @mousemove="clearboth">
    <!-- <div class="dialog-bg">
      <slot></slot>
    </div>-->
  </div>
</template>
<script>
export default {
  methods: {
    clearboth(e) {
      e.stopPropagation()
    }
  }
}
</script>
