<template>
  <main class="pagescroll">
    <div style="height:auto;paddingBottom:6rem" class="app-center">
      <ListCompon :title="'Desgin'" :figures="desginFigu" @shows="show" @close="close" />
      <ListCompon :title="'Code'" :figures="codeFigu" @shows="show" @close="close" />
      <!-- <div onclick="{this.toAbout}" class="{more}">
        <span class="{moreIcon}">
          <i></i>
        </span>
        <span class="needsclick">VIEW MORE</span>
      </div>{this.state.switchin?
      <Switch type="enter" callback="{this.switchOut.bind(this)}" />:''}-->
    </div>
  </main>
</template>
<script>
import { workIcon } from '@/components/imgurls'
import code from '@/components/work/code'
import desgin from '@/components/work/design'
import ListCompon from '@/components/work/listcomponents'
export default {
  components: {
    ListCompon
  },
  data() {
    return {
      desginFigu: [
        {
          src: workIcon.logo1,
          text: '优品养车logo',
          isShow: false,
          child: desgin.logo1,
          type: 'white'
        },
        {
          src: workIcon.logo2,
          text: '优品养车logo',
          isShow: false,
          child: desgin.logo2,
          type: 'white'
        },
        {
          src: workIcon.chick,
          text: '老思鸡H5',
          isShow: false,
          child: desgin.chicken,
          type: 'white'
        },
        {
          src: workIcon.moneky,
          text: '校招H5',
          isShow: false,
          child: desgin.monky,
          type: 'white'
        }
      ],
      codeFigu: [
        {
          src: workIcon.game,
          text: '五子棋',
          isShow: false,
          child: code.game,
          type: 'white'
        },
        {
          src: workIcon.jquo,
          text: 'jQuo',
          isShow: false,
          child: code.jquo,
          type: 'white'
        },
        {
          src: workIcon.pictring,
          text: 'pictring',
          isShow: false,
          child: code.pictring,
          type: 'white'
        },
        {
          src: workIcon.chick,
          text: '老思鸡H5',
          isShow: false,
          child: code.chicken,
          type: 'white'
        },
        {
          src: workIcon.vue,
          text: 'vue-pictring',
          isShow: false,
          child: code.vuePictring,
          type: 'white'
        },
        {
          src: workIcon.blog,
          text: 'My Blog',
          isShow: false,
          child: code.myblog,
          type: 'white'
        }
      ],
      switchin: true
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/work.scss';
</style>
