<template>
  <div id="app">
    <v-menu/>
    <page/>
  </div>
</template>

<script>
import VMenu from './components/Menu';
import Page from './components/Page';
export default {
  components: {
    VMenu,
    Page
  },
  name: 'app',
  // data() {
  //   return {
  //     isFullScreen: false
  //   }
  // },
  // methods: {
  //   enterFullscreen() {
  //     let element = document.body;
  //     let requestMethod = element.requestFullScreen || element.webkitRequestFullscreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullscreen;
  //     if (requestMethod) {
  //       requestMethod.apply(element);
  //     }
  //   },
  //   fullScreen(event) {
  //     console.log(event);
  //     if (!this.isFullScreen) {
  //       enterFullscreen();
  //       this.isFullScreen = true;
  //     }
  //   }
  // }
};
</script>

<style lang="less">
@import './assets/css/main.css';
@import './assets/css/typed.css';
@import './assets/css/slider.less';
@import './assets/css/fullpage.css';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
