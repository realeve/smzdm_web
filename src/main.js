// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import router from './router';
import store from './store';
Vue.config.productionTip = false;


// Register public component
import ArcLine from './components/ArcLine.vue';
Vue.component('arc-line', ArcLine);

import VChart from './components/ECharts';
Vue.component('v-chart',VChart);

import VPage from './pages/VPage';
Vue.component('v-page',VPage);

new Vue({
  el: '#app',
  // router,
  store,
  template: '<App/>',
  components: { App },
});
