<template>
    <div class="section">
        <div class="slide dark-section">
            <div class="wrap">
                <h4>3.用户分析</h4>
                <div class="content">
                    评论分析、情感分析、用户画像
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <h4>1.用户评论</h4>
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
                <h4>评论分析</h4>
                <div class="content">
                本次分析中我们通过京东贵金属商品类的<strong>240万</strong>条商品评论（共计<strong>5600万字</strong>）的挖掘，力求还原贵金属消费者的全貌。
                <p>对评论数据的处理主要采用了前文所提到的中文分词以及自然语言处理技术</p>
                </div>
            </div>
        </div>
        <v-chart :option="option.jdComment"/>
        <v-page fill="true" content='用户对商品的整体满意程度较高，出现频率最多的词语如<strong>不错、满意、喜欢</strong>等词语超过<strong class="red-text">290万次</strong>，另外也有像质量、物流、款式、做工这些对<strong>商品品质及服务态度</strong>等方面的描述，同时也有像朋友、老婆、妈妈、女朋友、生日礼物等表示<strong>产品用途</strong>的词语。'></v-page>
        <v-page content='对TOP100的高频词汇做两两间的相关程度分析，<span class="underline">将两个词同时在一条评论中出现一次视为1</span>，统计出250万条评论中用户评论分词间相关度大于10000的词语关系'></v-page>
        <v-chart :option="option.cmtRelation"></v-chart>
        <v-page fill="true" title="用户关注点" content='将用户对品质、外观、价格、物流的关键词分类，例如将<strong>“便宜”、“实惠”</strong>等划分为价格，将<strong>“外观漂亮”、“美观”</strong>等划分为外观，得到用户在价格、物流等环节的关注度'></v-page>
        <v-chart :option="option.userCarePoint"></v-chart>
        <v-page fill="true" title="受众分析 —— 商品用途" content="通过对评论中显示为用途的关键词<strong>（如“老板”、“同事”、“母亲”等表示用于送礼，“自己”、“自用”等表示用于自用）</strong>，统计出产品用途分类。用户购买贵金属产品多用于送礼，<strong>商家在营销上可考虑提供刻字以及礼品包装等服务</strong>。"></v-page>
        <v-chart :option="option.goodsUsage"></v-chart>
        <v-chart :option="option.giftUsage"></v-chart>
        <v-chart :option="option.gift2Whom"></v-chart>
        <div class="slide">
            <div class="wrap">
                <h4>受众分析</h4>
                <div class="content">
                从送礼人群的身份标签来看，在贵金属产品中女性的钱最好赚（女友和妈妈），这可能跟贵金属饰品多为女性使用的特点有关，另外用于人际交往的部分也有很多（老板、同事、朋友），而用于男性（男士、爸爸、男友、老公）的礼品较少。</div>
            </div>
        </div>
        <v-page fill="true" title="礼品特征" content="作为礼品的商品，价格主要集中在<strong>2000元以内</strong>，材质主要为<strong>黄金</strong>制品，这些信息可用作厂商商品选型参考"></v-page>
        <v-chart :option="option.giftPrice"></v-chart>
        <v-chart :option="option.giftMaterial"></v-chart>
        <div class="slide light-section">
            <div class="wrap">
                <h4>用户情感分析</h4>
                <div class="content">
                <ol>
                    <li>京东贵金属商品大多数评分在4至5星，其中5星产品居多；</li>
                    <li>用户对贵金属商品主要为正面情绪，集中在0.8-1分之间；</li>
                    <li>有部分商品用户星级在3-5分之间，但情绪分析结果中有负面情绪，对于这部分评论应该重点关注以提升商家服务品质；</li>
                </ol></div>
            </div>
        </div>
        <v-chart :option="option.userScore"></v-chart>
        <v-chart :option="option.userSA"></v-chart>
        <!--v-page content='<img src="/static/img/section03/scorencomment.jpg" alt="用户评论与评分">'></v-page-->
        <v-page fill="true" title="订单数与用户情感得分" content="随着销量的增加，用户情绪趋正面，得分在0.8以上，<strong>用户对销量较少的产品有大量负面情绪</strong>，在后期的运营过程中需注意该部分评论内容。"></v-page>
        <v-chart :option="option.scoreNSale"></v-chart>
        <v-page title="负面情绪得分分析" content="将情绪分析得分在0.3分以下的评论分词统计。从分词统计结果来看，用户不满意的点主要集中在品质和服务方面。"></v-page>
        <v-chart :option="option.wordCloudObj"></v-chart>
        <v-page title="用户对图片的负面情绪" content='<img src="/static/img/section03/obj.jpg" alt="小">'></v-page>
        <v-chart :option="option.wordCloudN"></v-chart>
        <v-page title="用户对真伪的负面情绪" content='<img src="/static/img/section03/n.jpg" alt="不知道">'></v-page>

        <div class="slide">
            <div class="wrap"><div class="content">
                <blockquote>由于本文是针对京东贵金属贵类的所有商品分析，对于长期的销售运营来讲，可通过充分利用爬虫、分词、语义分析针对指定商户（自家店铺及友商）的所有产品进行分析，进而实现<strong>智能客服或舆情分析预警</strong>，另外还可以通过用户评论为新品开发及升级提供参考。</blockquote>
            </div></div>
        </div>

        <div class="slide light-section">
            <div class="wrap">
                <h4>用户画像</h4>
                <div class="content">
                    <blockquote>
                        搜索指数:以搜索引擎海量网民行为数据为基础的数据分享平台，它能提示某关键字的搜索规模、涨跌态势、新闻舆论等。
                    </blockquote>
                        <p>接下来将以"中国金币"作为关键词引用<strong>百度指数</strong>的数据来还原贵金属制品的人群画像</p>
                </div>
            </div>
        </div>
        <v-page title="整体趋势" content='<img src="/static/img/section03/searchIdx.jpg" alt="搜索指数">'></v-page>
        <v-page title="需求图谱" content='<img src="/static/img/section03/needMap.jpg" alt="需求图谱">'></v-page>
        <v-page title="人群画像" content='<img src="/static/img/section03/userMap.jpg" alt="人群画像">'></v-page>
        <v-page title="年龄与性别分布" content='<img src="/static/img/section03/user.jpg" alt="年龄分布">'></v-page>
        <v-chart :fill="'#404a59'" :option="option.mapChina" :arc="'#c0392b'"></v-chart>

    </div>
</template>

<script>
    import option from '../lib/option/section3';
    export default {
        data() {
            return {
                option
            }
        },
    };
</script>