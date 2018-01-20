<template>
    <div class="section about">
        <div class="wrap">
            <h4>背景</h4>
            <div class="typed">
                <span id="type1"></span>
            </div>
            <!-- <div class="content">
                <p>行业“十三五”规划中提出“大力发展货币文化产业”，“以电子商务、微信商务等新兴营销平台为依托，推动总公司、各企业积极搭建货币文化品牌推广平台和产品营销平台，逐步形成电商和传统营销渠道并重的营销网络“。</p>
                <p>沈阳造币、上海造币、中钞长城、西钞、南钞等印制企业先后在天猫、京东、微店以及其他电商平台开设店铺或自建贵金属销售网站。</p>
                <p>课题组在学习数据爬虫以及NodeJS、MongoDB等新技术的同时，希望借此机会与行业相关运营人员交流数据化分析方法指导决策。</p>
            </div> -->
        </div>
    </div>
</template>

<script>
import Typed from "typed.js";

export default {
  //   name: "main",
  computed: {
    typeStatus() {
      return this.$store.state.typeStatus;
    }
  },
  watch: {
    typeStatus() {
      this.init();
    }
  },
  methods: {
    init() {
      new Typed("#type1", {
        strings: [
          `行业“十三五”规划中提出“大力发展货币文化产业”，“以电子商务、微信商务等新兴营销平台为依托，推动总公司、各企业积极搭建货币文化品牌推广平台和产品营销平台，逐步形成电商和传统营销渠道并重的营销网络“。<br><br>
              沈阳造币、上海造币、中钞长城、西钞、南钞等印制企业先后在天猫、京东、微店以及其他电商平台开设店铺或自建贵金属销售网站。<br><br>
              课题组在学习数据爬虫以及NodeJS、MongoDB等新技术的同时，希望借此机会与行业相关运营人员交流数据化分析方法指导决策。`
        ],
        shuffle: true
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>