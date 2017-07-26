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
                        <strong>行业内</strong>:本文研究数据集中在2017年4月1日至6月30日之间，部分商铺采用了历史数据。</p>
                    <p>
                        <strong>行业外</strong>:本文研究数据集中在2017年4月1日至6月30日之间，部分商铺采用了历史数据。</p>
                </div>
            </div>
    
        </div>
        <simple-page :title="'数据范围'" :content="content1"></simple-page>
    </div>
</template>

<script>
import SimplePage from './simplePage';
export default {
    components: {
        SimplePage
    },
    data() {
        return {
            content1: `<p><strong>行业内</strong>:本文研究数据集中在2017年4月1日至6月30日之间，部分商铺采用了历史数据。</p>
            <p><strong>行业外</strong>:本文研究数据集中在2017年4月1日至6月30日之间，部分商铺采用了历史数据。</p>`,
        }
    },
    computed: {
        typeStatus() {
            return this.$store.state.typeStatus;
        }
    },
};
</script>