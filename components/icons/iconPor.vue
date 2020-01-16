<template>
  <Windo @onclose="closeWin()" v-bind="$attrs">
    <slot name="header"></slot>
    <slot name="title" :scopes="scopeVal">{{scopeVal2}}</slot>
    <input type="text" v-on="inputListeners" v-model="testVal" />
  </Windo>
</template>
<script>
import Windo from '../windo'
export default {
  inheritAttrs: false,
  components: {
    Windo
  },
  computed: {
    inputListeners: function() {
      var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign(
        {},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function(event) {
            vm.$emit('update:value', event.target.value)
          }
        }
      )
    }
  },
  mounted() {
    console.log(this.$attrs)
  },
  data() {
    return {
      testVal: this.$attrs.value,
      scopeVal: '123',
      scopeVal2: '456'
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
