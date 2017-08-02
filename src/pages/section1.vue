<template>
    <div class="section">
        <div class="slide blue-section">
            <div class="wrap">
                <h4>1.数据来源及预处理</h4>
                <p class="content">爬虫、分词、可视化</p>
            </div>
        </div>
        <div class="slide light-section">
            <div class="wrap">
                <h4>数据周期</h4>
                <div class="content">
                    <p>
                        <strong>行业内</strong>:沈币京东店、沈币微分销店铺、上币有赞店铺(数据截止至2017年4月30日)、上币微店(5月2日后迁移至此)、中钞贵金属网上商城。</p>
                    <p>
                        <strong>行业外</strong>:中国金币网上商城、天猫贵金属类店铺(约80家)、京东贵金属类所有店铺(截至本文成稿计397家)、周大福自营官方商城。</p>
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <h4>数据周期</h4>
                <div class="content">
                    <blockquote>
                        <ol>
                            <li>
                                中国金币公司作为总公司的
                                <span class="red-text bold">友商</span>长期垄断贵金属货币发售，故将
                                <strong>金币公司网上商城</strong>作为重点研究对象；
                            </li>
                            <li>
                                根据贵金属市场的特点，不对
                                <strong>淘宝</strong>C2C平台进行研究；
                            </li>
                            <li>
                                <strong>苏宁易购、国美、亚马逊</strong>等平台由于销量较低未做研究；
                            </li>
                            <li>
                                在传统珠宝店铺中，
                                <strong>周大福</strong>作为私营企业代表，其自营官方商城建设较为完整，故将其纳入研究范围；
                            </li>
                            <li>
                                <strong>总公司京东店、西钞公司自建商城</strong>在2017年7月后开通网络商铺，以及周生生、谢瑞麟等其它企业由于未建商城或其他原因，不纳入研究范围。
                            </li>
                        </ol>
                    </blockquote>
                </div>
            </div>
        </div>
        <div class="slide light-section">
            <div class="wrap">
                <h4>数据量</h4>
                <div class="content row">
                    <div class="col-6 right">
                        <img src="/static/img/section01/datalist.jpg" alt="数据量">
                    </div>
                    <div class="col-4 margin-left-20">
                        根据各平台的特点，主要采集了用户咨询、商品交易记录、用户评论、商品基本属性(名称、价格、材质)、销售周期、库存、上海黄金交易所每日金价等信息。
                        <p>数据存储至数据库后约
                            <strong>6GB</strong>。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <h4>数据采集与存储</h4>
                <div class="content">
                    <ol>
                        <li>使用
                            <span class="bold">NodeJS</span>编写
                            <strong>爬虫程序</strong>采集各大平台数据，数据存储至
                            <span class="bold">MySQL数据库</span>
                        </li>
                        <li>不涉及机密与他人隐私，所收集数据仅用于本研究，不提供给任何机构或个人</li>
                    </ol>
                    <blockquote class="margin-top-20">
                        主要难点包括
                        <span class="underline">数据增量采集与备份、反爬虫策略、用户请求模拟以及非结构化数据处理</span>等方面。
                    </blockquote>
                </div>
            </div>
        </div>
        <div v-if="mobile" class="slide light-section">
            <video loop muted autoplay data-autoplay>
                <source src="/static/video/web_crawler_sample01.mp4" type="video/mp4">
            </video>
        </div>
        <div v-if="mobile" class="slide light-section">
            <video loop muted autoplay data-autoplay>
                <source src="/static/video/web_crawler_sample02.mp4" type="video/mp4">
            </video>
        </div>
    
        <v-page title="异常情况自动发送邮件" content='<img src="/static/img/section01/mail.jpg" alt="爬虫错误提示">' />
    
        <div class="slide">
            <div class="wrap">
                <h4>中文分词</h4>
                <!-- @click="segWord" :class="{word:wordStatus}" -->
                <div class="content segment">
                    <span v-for="word in wordSeg" :key="word" :class="{'red-text':word=='商品'}">{{word}}</span>
                    <h6>(鼠标移至上方文字分词)</h6>
                </div>
            </div>
        </div>
        <div class="slide light-section">
            <div class="wrap">
                <h4>中文分词</h4>
                <ol class="content">
                    <li>盘古分词</li>
                    <li>结巴分词</li>
                    <li>BosonNLP</li>
                    <li>新浪云</li>
                    <li>搜狗分词</li>
                    <li class="strong red-text">腾讯文智</li>
                </ol>
            </div>
        </div>
    
        <v-page title="自然语言处理(NLP)" content="Natural Language Processing，研究人与计算机之间用自然语言进行有效通信的理论和方法，本文主要使用NLP做语句情感分析。"></v-page>
    
        <div class="slide light-section">
            <div class="wrap">
                <div class="content">
                    <blockquote>
                        这个手链是代别人买的，东西挺好。只是没有送小物品，说好了有的。为什么没有送？我自己买的却送了。真不知为什么？开店不能这么开啊！
                        <h5 class="text-right">———— 摘自京东某五星好评</h5>
                    </blockquote>
                    <div class="bar">
                        <div class="negative">55% 负面</div>
                        <span class="text">正面 45%</span>
                    </div>
                </div>
            </div>
        </div>
    
        <v-page content='<img src="/static/img/section01/comment.jpg" alt="带有负面情绪的五星好评">' title="带有负面情绪的五星好评"></v-page>
    
        <div class="slide light-section">
            <div class="wrap">
                <h4>数据计算及可视化</h4>
                <div class="content">
                    <ul>
                        <li>
                            数据库提供聚类、统计、计算
                        </li>
                        <li class="bold">
                            <span class="red-text">Tableau</span>做探索性分析</li>
                        <li class="bold">自主开发的数据处理框架实现可视化(基于百度
                            <span class="red-text">ECharts</span>，部分图表使用阿里
                            <span class="red-text">G2</span>)</li>
                    </ul>
                </div>
            </div>
            <arc-line :fill="'#4fc08d'"></arc-line>
        </div>
    </div>
</template>
<style lang="less" scoped>

.segment {
    span {
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        transition: 1s margin,0s 1s background;
        transition-timing-function: linear;
    }
    &:hover {
        span {
            margin: 0 5px;
            border-radius: 2px;
        }
        .red-text{
            background: #f66;
        }
    }
}


// .word span {
//     animation: wordSegment 2s; // animation-direction:alternate;
//     .word-margin;
// }

// @keyframes wordSegment {
//     0% {
//         margin: 0;
//         padding: 0;
//         border-radius: 0;
//     }
//     100% {
//         .word-margin;
//     }
// }

@bar-height: 50px;
@seg-value: 55%;
@pad-top: 10px;
.bar {
    height: @bar-height;
    width: 80%;
    background: #1c8bea;
    margin: 30px auto;
    border-radius: @bar-height/2;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    display: flex;
    color: #fff;
    font-size: 14pt;
    .text {
        padding-left: 20px;
        padding-top: @pad-top;
    }
    .negative {
        width: @seg-value;
        background: #ea3c3e;
        border-radius: @bar-height/2 0 0 @bar-height/2;
        height: 100%;
        position: relative;
        text-align: right;
        padding-top: @pad-top;
        padding-right: 20px;
        &:after {
            content: "";
            width: 5px;
            height: @bar-height+10;
            position: absolute;
            right: -3px;
            top: -5px;
            background: #fff;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
            border-radius: 3px;
        }
    }
}
</style>
<script>
import VPage from './VPage';
export default {
    components: {
        VPage
    },
    data() {
        return {
            mobile:process.env.NODE_ENV !== 'mobile',
            wordStatus: false,
            wordSeg: ['亚马逊', '平台', '曾经', '的', '统计', '数据', '表示', '，', '具有', '差', '评', '的', '商品', '平均', '转化率', '甚至', '还', '高于', '没有', '评价', '的', '商品', '。', '评价', '作为', '商家', '服务', '的', '表象', '体现', '，', '既', '承载', '了', '用户', '对于', '商品', '和', '服务', '的', '意见', '和', '态度', '，', '更', '承载', '了', '用户', '对', '商品', '和', '服务', '的', '诉求', '。']
        };
    },
    // methods: {
    //     segWord() {
    //         this.wordStatus = !this.wordStatus;
    //     }
    // }
};
</script>