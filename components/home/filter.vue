<template>
  <div class>
    <Select :lists="lists" />
  </div>
</template>
<script>
import Select from '@/components/select'
export default {
  components: {
    Select
  },
  data() {
    return {
      lists: [
        {
          value: 'none',
          className: '',
          attribut: 'none'
        },
        {
          value: 'hue rotate',
          className: 'hue-rotate',
          attribut: 'hue rotate'
        },
        {
          value: 'negative',
          className: 'negative',
          attribut: 'negative'
        },
        {
          value: 'black and white',
          className: 'black-white',
          attribut: 'black and white'
        }
      ]
    }
  },
  methods: {}
}
</script>
