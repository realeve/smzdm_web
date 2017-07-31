<template>
    <div class="section">
        <div class="slide green-section">
            <div class="wrap">
                <h4>2.贵金属网络销售市场综述</h4>
                <p class="content">市场生态、商品生命周期、市场有多大、什么值得卖</p>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <h4>1.市场生态</h4>
                <div class="content">
                    通过对金币公司、中钞旗下子公司、京东商城、天猫商城、周大福自营店等网络平台销售的贵金属<strong>商品名称进行分词</strong>统计，我们发现，<span class="underline">高频词语集中在各类首饰、对材质和等级的描述、纪念日和礼物上，贵金属货币相关词汇相对来说并没有进入最热等级的队列。</span>
                </div>
            </div>
        </div>
        <v-page title="文字云" content="所有商品、京东TOP100"></v-page>
        <v-chart :option="option.wordCloud"/>
        <div class="slide light-section">
            <div class="wrap">
                <h4>贵金属市场总结</h4>
                <div class="content">
                    <ul>
                        <li>京东、天猫为代表的B2C自由竞争市场</li>
                        <li>以金币总公司为代表的独家经营市场</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <h4>金币总公司</h4>
                <div class="content">
                    <blockquote>
                    中国金币总公司成立于1987年，是中国人民银行直属的我国<span class="bold red-text">唯一经营贵金属纪念币</span>的行业性公司，<span class="bold red-text">履行贵金属货币的发售职能</span>，是中央银行货币发行职能的重要组成部分和业务延伸，是中央银行货币发行的重要支撑体系之一。 
                    <h5 class="text-right">——— 中国金币总公司官网</h5>
                    </blockquote>
                    <div>中国金币网上商城的产品线设计、价格定位、市场营销手段相对京东来说都缺少变化和波动，下面着重分析的是<span class="underline">京东、天猫的市场生态情况</span>。</div>
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <h4>2.商品生命周期</h4>
                <div class="content">
                    <blockquote>
                    京东不显示商品交易记录但在用户评论中包含订单日期，只有<span class="underline">真实发生的订单</span>才能进行商品评论。我们按一条评论对应一个订单进行统计计算京东商品的<strong>销售热度</strong>，该数据是基于<strong>250万</strong>笔订单生成。
                    </blockquote>
                </div>
            </div>
        </div>

        <v-chart :option="option.lifecycle"/>
        
        <v-page title="产品线的维持" content="随着时间的推移存续的商品数逐渐减少，整体市场中商品相比热销商品的生命周期下降更为明显，这也意味着有大量的商品将被市场所淘汰，<strong>商家应当定期上新维持良好的产品线。</strong>"></v-page>

        <v-page title="商品数量" content="京东TOP20店铺"></v-page>

        <v-page title="长线产品" content="以周生生、周大福等商铺为代表的市场业绩较高的卖家，其<strong>长线产品</strong>对于商铺评价销售业绩的拉动十分显著。"></v-page>

        <v-chart :option="option.top10lifecycle"/>

        <v-page title="周生生生命周期数据图"></v-page>

        <v-chart :option="option.cbpcSaleNum"/>
        <v-chart/>
    </div>
</template>

<script>
import VPage from './VPage';

    import option from '../lib/option/section2';

    export default {
        components: {
            VPage
        },
        data(){
            return{
                option
            };
        }
    };
</script>