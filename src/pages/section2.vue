<template>
    <div class="section">
        <div class="slide">
            <div class="wrap">
                <h4>2.贵金属网络销售市场综述</h4>
            </div>
        </div>
        <v-charts :option="option.cbpcSaleNum"></v-charts>
        <v-charts :option="option.wordCloud"></v-charts>
        <simple-page :title="'数据周期'" :content="content2" :fill="'#fff'"></simple-page>
        <simple-page :title="'数据范围'" :content="content1"></simple-page>
        <v-charts></v-charts>
    </div>
</template>

<script>
import SimplePage from './simplePage';
import VCharts from '../components/ECharts';

// 建议建立单独的文件存储options列表，写好对应的注释，文件按章节按目录分类
import cbpcSaleNum from '../lib/option/cbpc_salenum'; 
import wordCloud from '../lib/option/wordCloud';

export default {
    components: {
        SimplePage,
        VCharts
    },
    data() {
        return {
            option:{
                cbpcSaleNum,
                wordCloud
            },
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