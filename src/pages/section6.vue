<template>
    <div class="section">    
        <v-page :title="'总结'" :content="'这里是总结的内容'" :fill="'#fff'"></v-page>
        <v-page :title="'总结'" :content="'这里是总结的内容'" :fill="'#fff'"></v-page>
        <v-page :title="'总结'" :content="'这里是总结的内容'" :fill="'#fff'"></v-page>
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