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
        <div class="slide red-section">
            <div class="wrap">
                <h4>价格变动商品的提取</h4>
                <div class="content">
                    <ol>
                        <li>对商品按照ID聚类统计出含有多个价格的商品，只有单个价格的商品视为价格未变动。</li>
                        <li>对满足以上条件的商品做筛选，得出价格变动情况。</li>
                    </ol>     
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {      
    data() {
        return {
            
        }
    }
};
</script>