<template>
    <div class="section">
        <div class="slide green-section">
            <div class="wrap">
                <h4>5.数据安全</h4>
                <div class="content">
                    通过对公开的采集，我们通过传统的分析手段对于贵金属市场的用户、店铺、市场、运营等方面做了较为详细的解读，但在此期间我们同时也在思考在采用第三方平台或是自建平台都可能遇到的一些问题。
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <h4>不规范的数据接口</h4>
                <div class="content">
                    <p>在对中国金币所采集的评论数据观察中我们发现接口字段中包含用户个人手机信息。</p>
                    <img src="/static/img/section05/comment.jpg" alt="用户身份信息">
                </div>
            </div>
        </div>
        <div class="slide light-section">
            <div class="wrap">
                <h4>页面中的数据</h4>
                <div class="content">
                    <p>尽管这些信息在页面中显示正常，但自建系统不规范的数据接口容易造成用户信息泄露。</p>
                    <img src="/static/img/section05/cncoin.jpg" alt="用户身份信息">
                </div>
            </div>
        </div>
        
        <div class="slide">
            <div class="wrap">
                <h4>1100条用户手机信息</h4>
                <div class="content">
                    <p>中国金币的8900条评论中共有1100条这样的记录，其中包含不重复用户774人，同时有多名用户有多次购买记录。</p>
                    <blockquote>注:以上信息我们仅作为数据分析使用，未提供给任何第三方。</blockquote>
                    <img src="/static/img/section05/mobile.jpg" alt="用户身份信息">
                </div>
            </div>
        </div>
        
        <div class="slide">
            <div class="wrap">
                <h4>用户个人信息安全</h4>
                <div class="content">
                    <blockquote>虽然从市场竞争的角度来讲可以针对友商的这种不完善收集相关数据用作营销，但从平台方的角度来讲，自建销售平台应该加强安全审核。针对平台返回的所有数据及所有接口涉及用户信息的做好保密工作，某些重要信息的泄露可能会给用户带来财产损失，同时也对平台带来负面影响。</blockquote>
                </div>
            </div>
        </div>

        <div class="slide light-section">
            <div class="wrap">
                <h4>店铺数据价值</h4>
                <div class="content">
                    <blockquote>虽然从市场竞争的角度来讲可以针对友商的这种不完善收集相关数据用作营销，但从平台方的角度来讲，<strong>自建销售平台应该加强安全审核</strong>。针对平台返回的所有数据及所有接口涉及用户信息的做好保密工作，某些重要信息的泄露可能会给用户带来财产损失，同时也对平台带来负面影响。</blockquote>
                </div>
            </div>
        </div>
        
        <div class="slide">
            <div class="wrap">
                <h4>店铺数据的价值</h4>
                <div class="content">
                    <p>本次分析的所有数据均来自公开信息，从中挖掘出了大量的规律。对于平台方来讲应该如何做好防范<strong>让这些公开信息对第三方的获取难度变得更高</strong>？</p>
                    <ol>
                        <li>良好的反爬虫策略</li>
                        <li>隐藏必要的信息</li>
                    </ol>
                </div>
            </div>
        </div>
        
        <div class="slide light-section">
            <div class="wrap">
                <h4>良好的反爬虫策略</h4>
                <div class="content">
                    <p>对于一些大的平台(如天猫或京东)有<strong>专门的反爬虫团队</strong>对平台数据保护，具体技术本文不做赘述。另外一些虽然在此期间某些平台作过多次系统升级调整，部分平台甚至做了数据反爬虫的处理(如周大福)</p>
                    <img src="/static/img/section05/ctf01.jpg" alt="周大福">
                </div>
            </div>
        </div>
        
        <div class="slide">
            <div class="wrap">
                <h4>良好的反爬虫策略</h4>
                <div class="content">
                    <p>虽然这种反爬虫容易被绕过，但也能预防大多数不具经验的初级用户。</p>
                    <img src="/static/img/section05/ctf02.jpg" alt="周大福">
                </div>
            </div>
        </div>
        
        <div class="slide">
            <div class="wrap">
                <h4>隐藏必要的数据</h4>
                <div class="content">
                    <ol>
                        <li>商品基础信息包含了价格等关键因素，这些信息是必须要告知消费者的</li>
                        <li>库存信息可根据自身的情况选择隐藏还是显示</li>
                        <li>评论信息作为用户间沟通的桥梁反应了用户对商品的直观感受，应当开放。</li>
                        <li>订单记录作为商家最重要的数据<strong>建议隐藏</strong>，这也是由于大多数自建平台不具备反爬虫手段。</li>
                    </ol>
                </div>
            </div>
            <arc-line :fill="'#87c1b3'"></arc-line>
        </div>
    </div>
</template>
