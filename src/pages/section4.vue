<template>
    <div class="section">
        <div class="slide red-section">
            <div class="wrap">
                <h4>4.运营分析</h4>
                <div class="content">
                    定价、库存、上新
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <h4>价格变动商品的提取</h4>
                <div class="content">
                    <ol>
                        <li>对商品按照ID聚类统计出<strong>含有多个价格的商品</strong>，只有单个价格的商品视为价格未变动。</li>
                        <li>对有价格变化的商品做筛选，得出价格变动情况。</li>
                    </ol>     
                </div>
            </div>
        </div>
        <v-chart :fill="'#262e3a'" :option="option.goldPrice"></v-chart>
        <v-chart fill="true" :option="option.wfxPrice"></v-chart>
        <v-chart :option="option.wfxPrice2"></v-chart>
        <div class="slide light-section">
            <div class="wrap">
                <h4>沈币定价规律</h4>
                <div class="content">
                    <ol>
                    <li>78件商品中共16款有价格变化，其中9款低于500元。</li>
                        <li>价格调整主要为了满足促销活动，<strong>不受黄金价格波动影响</strong>；</li>
                        <li>一次促销期间伴随多款500元以内的产品降价，同时在相同时间内恢复原价，此处可视为<strong>多款产品同时参加限时促销活动</strong>；</li>
                        <li>“熊猫金币发行35周年金银纪念币套装”在6月15日发售的5天以后价格从3135涨至3200元。</li>
                        <li><strong>沈币京东旗舰店</strong>在持续观测的4月20日至5月20日期间无产品价格变化。</li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <h4>上币有赞店</h4>
                <div class="content">
                    4月18日完成上币有赞平台的数据采集后，4月19日上币关闭有赞而转向其它平台，<strong>历史商品价格信息从订单交易中获取</strong>。
                    <p>上币在有赞店铺中共64件商品，其中26件商品(<strong>40%</strong>)涉及价格变化，大部分商品均为促销活动期间有过降价，<strong>大多数时间保持价格稳定</strong></p>
                </div>
            </div>
        </div>
        <v-chart :option="option.youzan" fill="true"></v-chart>
        <v-chart :option="option.youzan2"></v-chart>
        <v-chart :option="option.shangbi" fill="true"></v-chart>
        <v-page title="中钞贵金属" content="中钞贵金属74件商品中共17件产品有价格变化，除手串外，其余全为<strong>投资类</strong>商品"></v-page>

        <v-chart :option="option.ccgold" fill="true"></v-chart>
        <v-chart :option="option.ccgold2"></v-chart>
        <v-chart :option="option.ccgold3" fill="true"></v-chart>
        <v-chart :option="option.ccgold4"></v-chart>

        <div class="slide">
            <div class="wrap">
                <h4>中钞贵金属定价策略</h4>
                <div class="content">
                    <strong>中钞贵金属主要是投资品有价格调整，工艺品价格保持不变。</strong>
                    <ol>
                        <li>克重越高，毛利润越低:10克、20克、30克、50克重产品单克毛利润相同，在10元左右；</li>
                        <li>100克、200克、500克重产品单克毛利润相同，比上一档次的产品低1元；</li>
                        <li>相同克重的产品，生肖版比普通版贵，按以上档次分别贵11元、7元；</li>
                    </ol>
                </div>
            </div>
        </div>

        <v-page title="中国金币" content="中国金币网上商城共200件商品，其中涉及价格波动的24件商品<strong>全部为金币类产品，其定价规律同中钞长城相似</strong><p>中国金币享有贵金属纪念币的独家发行权，其单克溢价也从15元/g到180元/g不等，利润较高(中钞贵金属10克生肖银最高毛利润为20元/g)</p>"></v-page>

        <v-chart :option="option.cncoin" fill="true"></v-chart>
        <v-chart :option="option.cncoin2"></v-chart>

        <div class="slide">
            <div class="wrap">
                <h4>周大福</h4>
                <div class="content">
                    <p>周大福共1669件金银类商品中共1428件商品涉及价格变化，价格固定的商品主要为<strong>定价类产品</strong>.</p>
                    <blockquote>产品定价公式:产品售价 = 产品克重 X 单克金价 + 加工费</blockquote>
                    <p>京东店未标注加工费用，但同一货号的产品在官方商城有标注加工费用，另外同一商品在官方商城与京东旗舰店售价相同。</p>
                </div>
            </div>
        </div>        
        <v-chart :option="option.ctf" fill="true"></v-chart>
        <v-chart :option="option.ctf2"></v-chart>
        <v-chart :option="option.ctf3" fill="true"></v-chart>

        <div class="slide">
            <div class="wrap">
                <h4>京东</h4>
                <div class="content">
                    <p>京东商品数较多，我们仅在前期对<strong>TOP40</strong>的商家作持续价格变动观测，根据每天各店铺商品调价比例，我们选取了在40%以上的店铺对比分析(其中赛菲尔及老庙未显示用户评价得分)</p>
                    <p>据经验分析，大多数店铺均采用<strong>每日浮动金价乘以克重</strong>的模式，首饰类产品增加一定手续费，因篇幅有限，该部分不对各商家单克黄金溢价做过多分析。</p>
                </div>
            </div>
        </div>
        <div class="slide light-section">
            <div class="wrap">
                <h4>商品库存</h4>
                <div class="content">
                <p>本次分析我们采集了中钞贵金属、沈币、上币、中国金币总公司的库存信息，天猫和京东不显示当前库存量故未采集。</p>
                <p>在所采集的数据中，中国金币未直接当前库存数，我们通过<p>模拟向购物车添加指定数量的商品</p>探知中国金币的库存信息。为降低对中国金币的服务器压力以及提高效率，对此专门设计了算法。</p>
                </div>
            </div>
        </div>
        <v-chart :option="option.stockNum"></v-chart>
        <v-chart fill="true" :option="option.stockMoney"></v-chart>
        <v-chart :option="option.stockPercent"></v-chart>

    </div>
</template>

<script>
import option from '../lib/option/section4';
export default {      
    data() {
        return {
            option
        }
    }
};
</script>