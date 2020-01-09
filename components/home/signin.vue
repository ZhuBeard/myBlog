<template>
  <div class="sginDiv">
    <img :src="nameInput ? homeImgs.smile: homeImgs.mail" alt />
    <h1>{{nameInput ? '第一次来吧，取个名呗':'邮箱地址登陆'}}</h1>
    <p>{{nameInput ? '净化荧屏，世界和平。请勿使用敏感词汇':'邮箱地址是您的唯一标示，认真点啊'}}</p>
    <div class="sginInput">
      <input type="text" :placeholder="nameInput ?'请输入用户名':'请输入您的邮箱'" ref="inputer" v-model="email" />
      <button :class="erro?'buttonAnimate':''" @click="nameInput ? getName() : getUser()">OK</button>
    </div>
    <transition :duration="200" name="fade">
      <div class="erroText">{{erroText}}</div>
    </transition>
  </div>
</template>
<script>
import { homeImg } from '../imgurls'
export default {
  data() {
    return {
      email: null,
      nameInput: false,
      erro: false,
      erroText: '',
      homeImgs: homeImg
    }
  }
}
</script>
<style lang="scss">
$color_error: #f95f56;
.sginDiv {
  padding: 16px 80px;
  img {
    display: block;
    margin: 42px auto 20px auto;
  }
  h1 {
    text-align: center;
    color: #1a1a1a;
    font-weight: bold;
    font-size: 1.6rem;
  }
  p {
    text-align: center;
    color: #ccc;
    font-size: 1rem;
    background: none;
    border: none;
    line-height: 2;
  }
  .sginInput {
    width: 360px;
    margin: 30px auto;
    position: relative;
    input {
      float: left;
      width: 200px;
      height: 48px;
      border-radius: 24px;
      background-color: #f1f1f1;
      border: none;
      font-size: 14px;
      padding-left: 12px;
    }
    button {
      display: block;
      width: 128px;
      height: 48px;
      background-color: #f95f56;
      font-size: 1.2rem;
      color: #fff;
      font-weight: bold;
      float: right;
      border-radius: 24px;
    }
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }
}
.erroText {
  position: absolute;
  bottom: 10px;
  text-align: center;
  width: 100%;
  left: 0;
  color: $color_error;
}
.buttonAnimate {
  animation: erroText 0.3s ease-in-out forwards;
}

@keyframes erroText {
  0% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(-6px);
  }
  40% {
    transform: translateX(6px);
  }
  65% {
    transform: translateX(-6px);
  }
  90% {
    transform: translateX(6px);
  }
  100% {
    transform: translateX(0);
  }
}
@media screen and (max-width: 480px) {
  .sginDiv {
    padding: 16px 0;
    img {
      margin: 1.6rem auto 1rem auto;
    }
    .sginInput {
      width: 96vw;
      input {
        display: block;
        float: none;
        margin: 0 auto;
      }
      button {
        float: none;
        margin: 1.6rem auto;
      }
    }
  }
}
</style>
