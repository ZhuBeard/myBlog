<template>
  <article class="work-pop-main">
    <h1>老思鸡H5</h1>
    <p>“关于区块链品牌推广的养成类微信h5”</p>
    <h5>Loading页:</h5>
    <LazyImg w="320px" h="563px" :src="chicken" />
    <p>“它真的不是小游戏，只是一只H5”</p>
    <p>“即便设计风格和交互都像极了游戏界面”</p>
    <h5>其它一些页面:</h5>
    <LazyImg w="320px" h="569px" :src="chicken1" />
    <LazyImg w="320px" h="569px" :src="chicken2" />
    <LazyImg w="320px" h="569px" :src="chicken3" />
    <p>或许你可以扫描二维码亲自体验一下～</p>
    <LazyImg w="280px" h="280px" :src="chickenCode" />
    <strong>END</strong>
  </article>
</template>
<script>
import LazyImg from '@/components/lazyImg'
export default {
  components: {
    LazyImg
  },
  data() {
    return {
      chicken: 'http://cdn.toofook.com/my-blog/work/chicken.gif',
      chicken1: 'http://cdn.toofook.com/my-blog/work/chicken1.jpg',
      chicken2: 'http://cdn.toofook.com/my-blog/work/chicken2.jpg',
      chicken3: 'http://cdn.toofook.com/my-blog/work/chicken3.jpg',
      chickenCode: 'http://cdn.toofook.com/my-blog/work/chikenCode.png'
    }
  }
}
</script>
