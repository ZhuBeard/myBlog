<template>
  <div :class="`select-style-${ownstyle}`">
    <div @click="ShowLists" class="select-curr">{{curr}}</div>
    <div v-if="this.showlist">
      <Selects :lists="lists" @onChoose="choose" />
    </div>
  </div>
</template>
<script>
import Selects from './selects'
export default {
  components: {
    Selects
  },
  props: {
    lists: Array
  },
  mounted() {
    window.addEventListener('click', this.close)
  },
  beforeMount() {
    window.removeEventListener('click', this.close)
  },
  data() {
    return {
      ownstyle: 'ext',
      curr: this.lists[0].value,
      showlist: false,
      redux: () => {
        if (process.client) {
          return document.body.getAttribute('fileter')
        }
      }
    }
  },
  methods: {
    choose(list, index) {
      this.listFn(list.className, list.ttribut)
      this.curr = list.value
      this.showlist = false
    },
    _close(e) {
      if (!this.showlist) return
      this.showlist = false
      e.stopPropagation()
    },
    ShowLists(e) {
      this.showlist = !this.showlist
      e.stopPropagation()
    },
    listFn(c, n) {
      if (process.client) {
        document.body.className = c
        document.body.setAttribute('fileter', n)
      }
    }
  }
}
</script>
