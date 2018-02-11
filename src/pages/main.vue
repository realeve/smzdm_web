<template>
  <div class="section page">
    <video v-if="mobile" class="up_video" loop muted autoplay data-autoplay>
      <source src="/static/video/theme.mp4" type="video/mp4">
    </video>
    <div class="wrap">
      <p class="tip">按
        <span class="key">F11</span> 键进入全屏</p>
      <div class="title">
        <div class="main_title">
          <h2>什么值得卖</h2>
          <h3>中国贵金属网上销售市场分析</h3>
          <small>技术质量部 李宾</small>
          <small>企管规划部 倪震</small>
          <p v-if="!showFooter">www.cbpc.ltd</p>
        </div>
        <div class="footer" v-if="showFooter">
          <small>
            <a href="http://www.miitbeian.gov.cn/" rel="noreferrer" target="_blank">蜀ICP备17016569号</a>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'main',
  data() {
    return {
      mobile: process.env.NODE_ENV != "mobile",
      showFooter: process.env.NODE_ENV != "development"
    };
  }
};
</script>

<style scoped lang="less">
.up_video {
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

.title {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.main_title {
  text-align: center;
  flex: 1;
  margin-top: 60%;
  .content;
  small {
    color: #fff;
    font-size: 18pt;
    padding: 0px 10px;
  }
  h2 {
    font-size: 40pt;
    background-image: -webkit-gradient(
      linear,
      0 0,
      right 0,
      from(#008aff),
      to(#40e4d5)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }
  h3 {
    font-size: 30pt;
    padding: 40px 0;
  }
}

.footer {
  .content;
  text-align: center;
  margin-bottom: 10px;
  a {
    text-decoration: none;
    color: #fff;
    font-weight: 100;
    font-size: 14pt;
  }
}
</style>
