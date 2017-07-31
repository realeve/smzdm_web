<template>
  <div>
    <main-page/>
    <preface/>
    <section1/>
    <section2/>
    <section3/>
    <section4/>
    <section5/>
    <section6/>
    <v-page isSection="true" title="敬请指正" />
  </div>
</template>

<script>
import $ from 'jquery';
import 'fullpage.js';

import MainPage from '../pages/main';
import Preface from '../pages/preface';
import VPage from '../pages/VPage';

import section1 from '../pages/section1';
import section2 from '../pages/section2';
import section3 from '../pages/section3';
import section4 from '../pages/section4';
import section5 from '../pages/section5';
import section6 from '../pages/section6';

export default {
  name: 'page',
  components: {
    MainPage,
    Preface,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    VPage
  },
  computed: {
    el() {
      return $(this.$el);
    },
    // page初始化
    isInited: {
      get() {
        return this.$store.state.inited;
      },
      set(val) {
        this.$store.commit('setInitStatus', val);
      }
    },
    // 第二页打字效果初始化
    typeStatus: {
      get() {
        return this.$store.state.typeStatus;
      },
      set(val) {
        this.$store.commit('initTyped', val);
      }
    },
    tips: {
      get() {
        return this.$store.state.tips;
      },
      set(val) {
        this.$store.commit('setTips', val);
      }
    }
  },
  methods: {
    getAnchors() {
      let pages = {
        data: [3, 1, 1, 2, 1],
        desc: ['1stPage', '2ndPage', '3rdPage', '4thPage', 'lastPage']
      };
      let anchors = [];
      pages.data.map(function (val, idx) {
        anchors.push(pages.desc[idx]);
        for (var i = 1; i < val; i++) {
          anchors.push('');
        }
      });
      return anchors;
    },
    setCurIdx(sectionIdx, slideIdx) {
      let slideNum = $(`.section:nth(${sectionIdx - 1})`).find('.slide').length;
      this.tips = slideNum > 1 ? `${slideIdx + 1}/${slideNum}` : '';
    },
    init() {
      let params = {
        verticalCentered: true,
        css3: true,
        navigation: false,
        anchors: this.getAnchors(),
        menu: '#nav',
        easing: 'easeInOutCubic',
        loopHorizontal: false,
        afterLoad: (anchorLink, index) => {
          if (index == 2 && !this.typeStatus) {
            this.typeStatus = true;
          }
          this.setCurIdx(index, 0);
        },
        afterSlideLoad: (anchorLink, index, slideAnchor, slideIndex) => {
          this.setCurIdx(index, slideAnchor);
        }
      };

      this.el.fullpage(params);
    }
  },
  mounted() {
    if (this.isInited) {
      return;
    }
    this.isInited = true;
    this.init();
  }
};
</script>

<style scoped lang="less">

</style>
