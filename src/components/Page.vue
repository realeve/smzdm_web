<template>
  <div>
    <main-page></main-page>
    <preface></preface>
    <!-- 数据预处理 -->
    <template>
      <div class="section green-section">
        <div class="wrap">
          <h4>1.数据来源及预处理</h4>
        </div>
      </div>
      <simple-page :title="'数据周期'" :content="content2" :fill="'#f5f5f5'"></simple-page>
      <simple-page :title="'数据范围'" :content="content1"></simple-page>
    </template>
  
    <template>
      <div class="section red-section">
        <div class="wrap">
          <h4>2.贵金属网络销售市场综述</h4>
        </div>
      </div>
      <simple-page :title="'数据周期'" :content="content2" :fill="'#f5f5f5'"></simple-page>
      <simple-page :title="'数据范围'" :content="content1"></simple-page>
    </template>
  
    <template>
      <div class="section green-section">
        <div class="wrap">
          <h4>3.用户分析</h4>
        </div>
      </div>
      <simple-page :title="'数据周期'" :content="content2" :fill="'#f5f5f5'"></simple-page>
      <simple-page :title="'数据范围'" :content="content1"></simple-page>
    </template>
  
    <template>
      <div class="section green-section">
        <div class="wrap">
          <h4>4.运营策略分析</h4>
        </div>
      </div>
      <simple-page :title="'数据周期'" :content="content2" :fill="'#f5f5f5'"></simple-page>
      <simple-page :title="'数据范围'" :content="content1"></simple-page>
    </template>
  
    <template>
      <div class="section green-section">
        <div class="wrap">
          <h4>5.充分挖掘数据价值</h4>
        </div>
      </div>
      <simple-page :title="'数据周期'" :content="content2" :fill="'#f5f5f5'"></simple-page>
      <simple-page :title="'数据范围'" :content="content1"></simple-page>
    </template>
  
    <simple-page :title="'总结'" :content="'这里是总结的内容'" :fill="'#fff'"></simple-page>  
    <div class="section green-section">
      <arc-line :fill="'#41b883'"></arc-line>
      <div class="wrap">
        <h4>敬请指正</h4>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import 'fullpage.js';

import MainPage from '../pages/main';
import Preface from '../pages/preface';
import SimplePage from '../pages/simplePage';
import ArcLine from './ArcLine';

export default {
  name: 'page',
  components: {
    MainPage,
    Preface,
    SimplePage,
    ArcLine
  },
  data() {
    return {
      content1: '本文研究数据集中在2017年4月1日至6月30日之间，部分商铺采用了历史数据。',
      content2: '本文研究数据集中在2017年4月1日至6月30日之间，部分商铺采用了历史数据。'
    }
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
    }
  },
  methods: {
    getAnchors() {
      let pages = {
        data: [5, 1, 1, 1, 3],
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
    init() {
      let params = {
        verticalCentered: true,
        css3: true,
        navigation: false,
        anchors: this.getAnchors(),
        menu: '#nav',
        easing: 'easeInOutCubic',
        afterLoad: (anchor, pageName) => {
          if (pageName == 2 && !this.typeStatus) {
            this.typeStatus = true;
          }
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
