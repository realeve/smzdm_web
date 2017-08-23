<template>
    <div class="section">
        <div class="slide green-section">
            <div class="wrap">
                <h4>2.贵金属网络销售市场综述</h4>
                <p class="content">市场生态、商品生命周期、市场规模、什么值得卖</p>
            </div>
        </div>
        
        <v-chart fill="true" :option="option.wordCloudAll" />
        
        <v-chart fill="true" :option="option.wordCloud" />
        <div class="slide">
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
                <h4>2.商品生命周期</h4>
                <div class="content">
                    <blockquote>
                        京东不显示商品交易记录但在用户评论中包含订单日期，只有
                        <span class="underline">真实发生的订单</span>才能进行商品评论。<br>我们按一条评论对应一个订单进行统计计算京东商品的
                        <strong>销售热度</strong>，该数据是基于
                        <strong>250万</strong>笔订单生成。
                    </blockquote>
                </div>
            </div>
        </div>
    
        <v-chart fill="true" :option="option.lifecycle" />
    
        <v-page title="产品线的维持" content="随着时间的推移存续的商品数逐渐减少，整体市场中商品相比热销商品的生命周期下降更为明显，这也意味着有大量的商品将被市场所淘汰，<strong>商家应当定期上新维持良好的产品线。</strong>" />
        
        <v-page title="长线产品" content="以周生生、周大福等商铺为代表的市场业绩较高的卖家，其<strong>长线产品</strong>对于商铺评价销售业绩的拉动十分显著。" />
    
        <v-chart fill="true" :option="option.top10lifecycle" />
        
        <!-- <v-page content="<blockquote>综合对各个平台贵金属产品销售周期的观察和比较，我们认为，市场50%数量商品的销售周期不足400天，以此为参考，<strong style='text-red'>目前市面上业绩领先的贵金属网络商铺，其销售收入主要来源于长线产品</strong>，因此贵金属网络销售需要在多方面为长线产品做好准备，比如产品设计、市场营销策略和持续投入等等。</blockquote>" /> -->
    
        <v-page title="3.贵金属市场规模" content="以<strong>京东和天猫</strong>为代表的贵金属市场占据了整个充分竞争市场的绝大部分份额，我们将以这两个平台的历史销售记录推测市场规模。" />
    
        <v-page fill="true" title="天猫市场规模" content="根据天猫商城贵金属市场商铺中<strong>25800件</strong>商品的历史销售业绩以及现价，我们计算出天猫商城贵金属历史销售业绩大约是<strong>50亿元</strong>人民币。根据近年来移动支付的发展以及天猫双11销售总额的逐年上升，我们可以<span class='underline bold'>假设天猫的50亿元销售额是逐渐递增的状态</span>，而这一规律在京东25万件商品的销售热度得以印证:" />
    
        <v-chart :option="option.jdSale2010" />
    
        <v-chart fill="true" :option="option.jdSaleByYear" />
    
        <v-page title="京东市场规模" content="如果整个贵金属自由市场中的增长规模如同上图，2017年销售额将为40%左右，那么天猫在2017年的贵金属销售规模大约会是20亿元。而京东有评论的商品SKU数大约是天猫的2倍，两者的市场规模约为<strong>60亿元</strong>。<blockquote>SPU:Standard Product Unit，标准产品单元。对电商来讲代表型号，与规格，颜色和款式无关。</blockquote>" />
    
        <v-chart fill="true" :option="option.ctf" />
    
        <v-page title="总市场规模" content='考虑其他如周生生、周大福(月均销售业绩1～2亿元)等知名品牌自建平台的总规模，因此我们推算<span class="underline bold red-text">2017年的贵金属市场的规模约是100亿元</span>。另外，贵金属网络销售还对线下销售有一定的替代效应。准确的掌握贵金属市场的规模是评估市场饱和程度的重要条件' />
    
        <v-chart fill="true" :option="option.cbpcSaleNum" />
    
        <v-page title="中钞贵金属" content="中钞贵金属从2017年1月至2017年7月共销售361万元，其中工艺品74万，投资品287万元，从后续章节的投资品定价策略分析得知其<strong>毛利润率为10元/g，投资品总利润约为10万元</strong>。" />
    
        <v-chart fill="true" :option="option.cbc" />
    
        <v-page title="央行旗下品牌" content="作为行业内销量最好的上币，其月度销售额与中国金币相比仍然相差较大，按2016年上币472万元销售额，中国金币实际1.8亿元销售额计算，上币销售额仅为中国金币的<strong>2.6%</strong>。" />
    
        <v-page fill="true" title="4.什么值得卖" content="在自由竞争市场，同一品牌相同产品的定价在不同平台基本没有差别(例如<strong>周大福在自营商城及京东中单价、手续费等均相同</strong>)，我们以京东商城为例，看看贵金属市场的整体定价情况。" />
    
        <v-chart :option="option.jdPrice" />
    
        <v-chart fill="true" :option="option.jdPriceAndSale"/>
    
        <v-chart :option="option.jdPriceTop100" />
    
        <v-page title="4.网购平台比较" content="我们整理了贵金属市场中包括京东、天猫，以及各热销品牌自营店共计<strong>480余家</strong>商铺的相关信息，对这些商铺的<strong>地理分布情况、店内陈列的商品数量以及店龄长短</strong>进行了比较。" />
    
        <v-chart fill="true" :option="option.jdShopNum" />
        <v-chart :option="option.jdGoodsNum" />
        <v-chart fill="true" :option="option.shopAge" />
    
        <div class="slide">
            <div class="wrap">
                <h4>本章总结</h4>
                <div class="content">
                    <ol>
                        <li>市场生态：京东/天猫
                            <strong>竞争市场</strong>与中国金币的
                            <strong>独家销售</strong>市场</li>
                        <li>商品生命周期：
                            <strong>400天</strong>以内</li>
                        <li>网上市场规模：
                            <strong>100亿元</strong>
                        </li>
                        <li>什么值得卖：
                            <strong>200元以下</strong>的商品</li>
                        <li>店铺位置：北、上、广、深</li>
                        <li>店铺商品数：行业内均在
                            <strong>100件</strong>以内，行业外优秀店铺做到上千件</li>
                    </ol>
                </div>
            </div>
            <arc-line :fill="'#222'"></arc-line>
        </div>
    
    </div>
</template>

<script>
import option from '../lib/option/section2';

export default {
    data() {
        return {
            option
        };
    }
};
</script>