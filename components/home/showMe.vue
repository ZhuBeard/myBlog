<template>
  <div class="figure-pop-main">
    <ul class="settBox">
      <li>
        <div class="glitch">
          <img src="{homeImg.glitch}" alt />
        </div>
      </li>
      <li>Mr.Ou Personal Web</li>
      <li>v2.1.0</li>
      <li class="{Css.settLink}">
        <a class="needsclick" onClick="{this.toAbout}">View More</a>
      </li>
      <li>
        <hr align="center" width="60%" style="margin:'18px auto'" color="#b99f51" size="1" />
      </li>
      <li>
        <a onClick="{this.showSign.bind(this)}">尚未登陆</a>
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
