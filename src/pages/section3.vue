<template>
    <div class="section">
        <div class="slide dark-section">
            <div class="wrap">
                <h4>3.用户分析</h4>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <h4>用户评论</h4>
                <div class="content">
                    <blockquote>
                        亚马逊平台曾经的统计数据表示，具有差评的商品平均转化率甚至还高于没有评价的商品。评价作为商家服务的表象体现，既承载了用户对于商品和服务的意见和态度，更承载了用户对商品和服务的诉求。        
                    </blockquote>
                    <p>目前行业内多家企业尚未开通评论功能，行业外中国金币、天猫、京东、周大福等均正常开放。</p>
                </div>
            </div>
        </div>
        <div class="slide light-section">
            <div class="wrap">
                <h4>评价分析</h4>
                <div class="content">
                本次分析中我们通过京东贵金属商品类的<strong>240万</strong>条商品评论（共计<strong>5600万字</strong>）的挖掘，力求还原贵金属消费者的全貌。
                <p>对评论数据的处理主要采用了前文所提到的中文分词以及自然语言处理技术</p>
                </div>
            </div>
        </div>
        <v-chart :option="option.jdComment"/>
        <v-page content='用户对商品的整体满意程度较高，出现频率最多的词语如<strong>不错、满意、喜欢</strong>等词语超过<strong class="red-text">290万次</strong>，另外也有像质量、物流、款式、做工这些对<strong>商品品质及服务态度</strong>等方面的描述，同时也有像朋友、老婆、妈妈、女朋友、生日礼物等表示<strong>产品用途</strong>的词语。'></v-page>
        <v-page content='对TOP100的高频词汇做两两间的相关程度分析，<span class="underline">将两个词同时在一条评论中出现一次视为1</span>，统计出250万条评论中用户评论分词间相关度大于10000的词语关系'></v-page>
        <v-chart :option="option.cmtRelation"></v-chart>
        <v-page title="用户关注点" content='将用户对品质、外观、价格、物流的关键词分类，例如将<strong>“便宜”、“实惠”</strong>等划分为价格，将<strong>“外观漂亮”、“美观”</strong>等划分为外观，得到用户在价格、物流等环节的关注度'></v-page>
        <v-chart></v-chart>
    </div>
</template>

<script>
import VPage from './VPage';
import option from '../lib/option/section3';
export default {
    components: {
        VPage
    },
    data() {
        return {
            option
        }
    },
};
</script>