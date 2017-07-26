<template>
    <div class="section">
        <div class="slide blue-section">
            <div class="wrap">
                <h4>1.数据来源及预处理</h4>
            </div>
        </div>
        <div class="slide">
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
        <div class="slide">
            <div class="wrap">
                <h4>数据量</h4>
                <div class="content row">
                    <div class="col-6 right">
                        <img src="/static/img/section01/datalist.jpg" alt="数据量">
                    </div>
                    <div class="col-4 margin-left-20">
                        根据各平台的特点，主要采集了用户咨询、商品交易记录、用户评论、商品基本属性(名称、价格、材质)、销售周期、库存、上海黄金交易所每日金价等信息。
                    </div>
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <h4>数据采集与存储</h4>
                <div class="content">
                    <ol>
                        <li>使用<span class="bold">NodeJS</span>编写<strong>爬虫程序</strong>采集各大平台数据，数据存储至<span class="bold">MySQL数据库</span></li>
                        <li>不涉及机密与他人隐私，所收集数据仅用于本研究，不提供给任何机构或个人</li>
                    </ol>
                    <blockquote class="margin-top-20">
                        主要难点包括<span class="underline">数据增量采集与备份、反爬虫策略、用户请求模拟以及非结构化数据处理</span>等方面。
                    </blockquote>
                </div>
            </div>
        </div>
        <div class="slide">
            <video loop muted autoplay data-autoplay>
                <source src="/static/video/web_crawler_sample.mp4" type="video/mp4">
            </video>
            <div class="wrap">
                <div class="main_title">
                    <h4>这里可以写一些文字</h4>
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <h4>异常情况自动发送邮件</h4>
                <div class="content">
                    <img src="/static/img/section01/mail.jpg" alt="爬虫错误提示">
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <h4>a标签及列表示例</h4>
                <div class="content">
                    <ul>
                        <li>
                            <a href="http://www.chinagoldcoin.net" target="_blank" rel="noopener">中国金币</a>
                        </li>
                        <li>这里是列表示例</li>
                        <li>这里是列表示例</li>
                        <li>这里是列表示例</li>
                        <li>这里是列表示例</li>
                        <li>这里是列表示例</li>
                    </ul>
                </div>
            </div>
            <arc-line :fill="'#4fc08d'"></arc-line>
        </div>
    </div>
</template>

<script>
export default {
};
</script>
