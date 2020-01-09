<template>
  <div class="figure-pop-main">
    <ul class="settBox">
      <li>
        <div class="glitch">
          <img :src="require('@/assets/img/glitch.png')" alt />
        </div>
      </li>
      <li>🐖🐖🐖's Blog Web</li>
      <li>v2.1.0</li>
      <li>
        <hr align="center" width="60%" style="margin:'18px auto'" color="#b99f51" size="1" />
      </li>
      <li>
        <a @click="showSign">尚未登陆</a>
      </li>
      <li>
        <!-- <em>{this.props.other.user.name}</em> -->
      </li>
    </ul>
    <!-- <CSSTransition
      :in="isInput"
      key="testsss"
      timeout="{200}"
      unmountOnExit
      classNames="fade"
    >-->
    <Portal>
      <!-- <Pop unmove="{true}" close="{this.showSign.bind(this)}" title="登陆" type="white"> -->
      <!-- <SginIn
          user="{this.props.other.user}"
          close="{this.showSign.bind(this)}"
          isErro="{this.props.other.isErro}"
          setUser="{this.props.other.setUser}"
      />-->
      <!-- </Pop> -->
    </Portal>
    <!-- </CSSTransition> -->
  </div>
</template>
<script>
import Portal from '../public/portal'
export default {
  components: {
    Portal
  },
  data() {
    return {
      isInput: false // 是否弹出登陆框
    }
  },
  methods: {
    showSign() {
      this.isInput = !this.isInput
    }
  }
}
</script>
<style lang="scss">
.settBox {
  width: 400px;
  padding: 20px 0;
  li {
    text-align: center;
    line-height: 1.5;
    hr {
      margin: 20px auto;
    }
    em {
      background-color: #fff;
    }
  }
  li.settLink {
    color: #fff;
    font-weight: bold;
  }
}

.glitch {
  position: relative;
  width: 110px;
  height: 110px;
  background-color: #fff;
  border-radius: 50%;
  margin: 12px auto 24px auto;
  img {
    position: absolute;
    z-index: 3;
    top: 54%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@keyframes noise-anim {
  @for $i from 1 through 20 {
    #{$i*5%} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
    }
  }
}
.glitch:after {
  content: url('../../assets/img/glitch-2.png');
  position: absolute;
  left: calc(50% - 2px);
  top: 56%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 4;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2 {
  @for $i from 1 through 20 {
    #{$i*5%} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
    }
  }
}
.glitch:before {
  content: url('../../assets/img/glitch-3.png');
  position: absolute;
  left: calc(50% + 2px);
  top: 60%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 4;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim-2 3s infinite linear alternate-reverse;
}

@media screen and (max-width: 480px) {
  ul.settBox {
    width: 96vw;
  }
}
</style>
