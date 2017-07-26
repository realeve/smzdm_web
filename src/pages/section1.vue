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
                                因中国金币公司与印钞造币集团同为央行直属机构，且金币公司长期垄断贵金属货币发售，故将金币公司网上商城作为一个重点研究对象；
                            </li>
                            <li>
                                根据贵金属市场的特点，不对淘宝C2C平台进行研究；
                            </li>
                            <li>
                                苏宁易购、国美、亚马逊等店铺由于销量较低未做研究；
                            </li>
                            <li>
                                在传统珠宝店铺中，周大福作为私营企业代表，其自营官方商城的销量及店铺建设较为完整，故将其纳入研究范围；
                            </li>
                            <li>
                                中国印钞造币总公司、西钞公司在2017年7月后开通网络商铺，以及周生生、谢瑞麟等其它企业由于未建商城或其他原因，都没有纳入研究范围。
                            </li>
                        </ol>
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