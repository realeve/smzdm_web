<template>
    <div class="section">
        <div class="slide green-section">
            <div class="wrap">
                <h4>1.数据来源及预处理</h4>
            </div>
        </div>
        <simple-page :title="'数据周期'" :content="content2" :fill="'#f5f5f5'"></simple-page>
        <simple-page :title="'数据范围'" :content="content1"></simple-page>
    </div>
</template>

<script>
import SimplePage from './simplePage';
export default {
    components:{
        SimplePage
    },
    data() {
        return {
            content1: '本文研究数据集中在2017年4月1日至6月30日之间，部分商铺采用了历史数据。',
            content2: '本文研究数据集中在2017年4月1日至6月30日之间，部分商铺采用了历史数据。'
        }
    },
    computed: {
        typeStatus() {
            return this.$store.state.typeStatus;
        }
    },
};
</script>