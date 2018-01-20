<template>
    <div class="terminal text-left">
        <div class="terminal-title-bar">
            <span>C:\WINDOWS\system32\cmd.exe</span>
            <div>
                <span class="tool">-</span>
                <span class="tool">□</span>
                <span class="tool">x</span>
            </div>
        </div>
        <div class="terminal-body">
            <div class="copyright">
                <p>Microsoft Windows [版本 10.0.14393]</p>
                <p style="margin-bottom:20px;"> (c) 2016 Microsoft Corporation。保留所有权利。</p>
            </div>
            <div>
                <span class="prompt">d:\></span>
                <span id="step1"></span>
                <span class="typed-cursor" v-show="step1.showCursor">&#9611;</span>
                <div v-show="step1.showData" v-html="step1.html"></div>
            </div>
            <div v-show="step2.showData">
                <span class="prompt">d:\smzdm\></span>
                <span id="step2"></span>
                <span class="typed-cursor" v-show="step2.showCursor">&#9611;</span>
                <div v-show="step2.showData" v-html="step2.html"></div>
            </div>
            <div v-show="step3.showData">
                <span class="typed-cursor" v-show="step3.showCursor">&#9611;</span>
                <ul v-show="step3.showData" ref="terminal">
                    <li v-for="(item,id) in step3.htmlList" :key="id" v-html="item"></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Typed from "typed.js";
import Prism from "prismjs";
import "./js/prism-batch";
import "./js/prism-json";

import jsonList from "./data/data.json";

export default {
  name: "terminal",
  data() {
    return {
      step1: {
        showData: false,
        showCursor: true,
        html: ""
      },
      step2: {
        showData: false,
        showCursor: false,
        html: ""
      },
      step3: {
        showData: false,
        showCursor: false,
        htmlList: []
      }
    };
  },
  computed: {
    terminalStatus() {
      let val = this.$store.state.terminalStatus;
      return val;
    }
  },
  watch: {
    terminalStatus(val) {
      if (val) {
        console.log("初始化组件", val);
        this.init();
      }
    }
  },
  methods: {
    initTyped({ cmd, $dom, componentPrev, componentNext }) {
      componentPrev.showCursor = false;
      var that = this;
      new Typed($dom, {
        strings: [cmd.cmd],
        typeSpeed: 0,
        showCursor: false,
        cursorChar: "&#9611;",
        contentType: "html",
        loop: false,
        onComplete: async function() {
          that.sleep(150).then(() => {
            componentPrev.html = cmd.output;
            componentPrev.showData = true;
            componentPrev.showCursor = false;
            if (componentNext) {
              that.sleep(200).then(() => {
                componentNext.showCursor = true;
                componentNext.showData = true;
              });
            }
          });
        }
      });
    },
    sleep(ms = 1000) {
      return new Promise(r => setTimeout(r, ms));
    },
    init() {
      console.log("initing");
      let cmd = {
        cmd: Prism.highlight("cd smzdm", Prism.languages.batch),
        output: ""
      };

      this.initTyped({
        cmd,
        $dom: "#step1",
        componentPrev: this.step1,
        componentNext: this.step2
      });
      this.sleep(1200)
        .then(() => {
          cmd = {
            cmd: Prism.highlight("npm start", Prism.languages.batch),
            output: '<span class="prompt ">></span> node ./bin/www'
          };
          this.initTyped({
            cmd,
            $dom: "#step2",
            componentPrev: this.step2,
            componentNext: this.step3
          });
          return this.sleep(2000);
        })
        .then(() => {
          this.step2.showCursor = false;
          this.step3.showCursor = false;
          this.initScrab();
        });
    },
    getJSONstr(json) {
      return Prism.highlight(JSON.stringify(json), Prism.languages.json);
    },
    initScrab() {
      let list = [
        "1.自动化任务队伍已开始,你可以定位到此处添加自己的任务;",
        "2.此处需添加任务的定时器，如 setInterval()",
        "系统初始化：数据库表单初始化，载入默认数据。此处哪项任务未完成则请自行取消注释信息.<br><br>",
        "正在读取 中国金币网上商城 商品属性"
      ];

      let that = this;

      async function addData() {
        for (let i = 0; i < list.length; i++) {
          await that.sleep(300);
          that.step3.htmlList.push(list[i]);
        }

        for (let i = 0; that.terminalStatus && i < jsonList.length; i++) {
          let time = Math.ceil(Math.random() * 1000 + 300);
          let item = jsonList[i];
          await that.sleep(time);
          that.step3.htmlList.push(
            `<br>【中国金币】:正在采集 第${i + 1}/${jsonList.length}条 数据`
          );
          that.step3.htmlList.push(that.getJSONstr(item));
          that.step3.htmlList.push(
            `系统提示：写入数据库成功,${time}毫秒后继续采集数据。`
          );
          that.$refs.terminal.scrollIntoView(false);
        }
      }

      addData();
    }
  },
  mounted() {
    if (this.terminalStatus) {
      this.init();
    }
  }
};
</script>

<style lang="less" scoped>
@import "./css/terminal.css";
@import "./css/prism-okaidia.min.css";

.terminal-body {
  flex: 1;
  background-color: #263238;
}

.terminal {
  border: none;
  border-radius: 0;
  padding: none;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100%;
  box-shadow: none;
  font-size: 14pt;
}

.terminal-title-bar {
  padding: 8px;
  text-align: left;
  background-color: #4c4a48;
  box-shadow: none; //inset rgba(255, 255, 255, 0.7) 0px 1px 1px;
  background-image: none;
  border-bottom: none;
  color: #fff;
  display: flex;
  justify-content: space-between;
  .tool {
    padding-right: 15px;
    font-size: 15px;
    line-height: 10px;
  }
}

.copyright p {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
