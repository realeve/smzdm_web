<template>
    <div class="section">    
        <simple-page :title="'总结'" :content="'这里是总结的内容'" :fill="'#fff'"></simple-page>
        <simple-page :title="'总结'" :content="'这里是总结的内容'" :fill="'#fff'"></simple-page>
        <simple-page :title="'总结'" :content="'这里是总结的内容'" :fill="'#fff'"></simple-page>
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