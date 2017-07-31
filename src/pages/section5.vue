<template>
    <div class="section">
        <div class="slide green-section">
            <div class="wrap">
                <h4>5.充分挖掘数据价值</h4>
            </div>
        </div>
        <v-page :title="'数据周期'" :content="content2" :fill="'#222'"></v-page>
        <v-page :title="'数据范围'" :content="content1"></v-page>
    </div>
</template>

<script>
import VPage from './VPage';
export default {
    components: {
        VPage
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