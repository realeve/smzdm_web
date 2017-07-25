<template>
  <div>
    <div class="section page">
      <video id="up_video" loop muted autoplay data-autoplay>
        <source src="/static/video/theme.mp4" type="video/mp4">
      </video>
      <div class="wrap">
        <p class="tip content">按
          <span class="key">F11</span> 键进入全屏</p>
        <div class="main_title">
          <h2>什么值得卖</h2>
          <h3>中国贵金属网上销售市场分析</h3>
          <small>技术质量部 李宾</small>
          <small>企管规划部 倪震</small>
        </div>
      </div>
    </div>
    <div class="section split" id="about">
      <div class="wrap typed">
        <h4>第一章 公司高层</h4>
  
        <span id="type1"></span>
      </div>
    </div>
    <div class="section split" id="chapter2">
      <div class="wrap">
        <h4>第二章 优秀宣传语</h4>
      </div>
    </div>
    <div class="section split" id="chapter3">
      <div class="wrap">
        <h4>第三章 其他宣传语</h4>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import 'fullpage.js';
import Typed from 'typed.js';

export default {
  name: 'page',
  data() {
    return {

    };
  },
  computed: {
    el() {
      return $(this.$el);
    },
    isInited: {
      get() {
        return this.$store.state.inited;
      },
      set(val) {
        this.$store.commit('setInitStatus', val);
      }
    }
  },
  methods: {
    getAnchors() {
      var pages = {
        data: [5, 1, 1, 1, 3],
        desc: ['1stPage', '2ndPage', '3rdPage', '4thPage', 'lastPage']
      };
      var anchors = [];
      pages.data.map(function (val, idx) {
        anchors.push(pages.desc[idx]);
        for (var i = 1; i < val; i++) {
          anchors.push('');
        }
      });
      return anchors;
    },
    init() {

      var typed;
      let params = {
        verticalCentered: true,
        css3: true,
        navigation: false,
        anchors: this.getAnchors(),
        menu: '#nav',
        easing: 'easeInOutCubic',
        afterLoad: function (anchor, pageName) {
          if (pageName == 1 && !typed) {
            typed = new Typed("#type1", {
              strings: ["一部法规  ^500  一面旗帜", "对成钞未来变革发展根本性、方向性、原则性的系统思考", "与时俱进的价值罗盘", "与战略相接、与文化相通、与员工相融的管理大纲"],
              typeSpeed: 100,
              loop: true
            });
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
#up_video {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  z-index: 4;
}

.main_title {
  .content;
  small {
    color: #fff;
    font-size: 18pt;
    padding: 0px 10px;
  }
  h2 {
    font-size: 40pt;
  }
  h3 {
    font-size: 30pt;
    padding: 40px 0;
  }
}
</style>
