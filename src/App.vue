<template>
  <div id="app">
    <v-menu/>
    <page/>
    <tips/>
  </div>
</template>

<script>
import VMenu from './components/Menu';
import Page from './components/Page';
import Tips from './components/Tips';

export default {
  components: {
    VMenu,
    Page,
    Tips
  },
  name: 'app'
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
