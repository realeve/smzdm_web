<template>
    <div>
        <div class="chart-title">{{title}}<small>(单位:万元)</small></div>
        <div ref="chart" class="chart"></div>
    </div>
</template>
<script>
import G2 from 'g2';
G2.track(false);

export default {
    props: {
        title: {
            default() {
                return '中国金币月度销售额'
            }
        }
    },
    methods: {
        init() {
            let data = [{
                sales: 83932352,
                month: "一月"
            }, {
                sales: 13817464,
                month: "二月"
            }, {
                sales: 31012111,
                month: "三月"
            }, {
                sales: 40766294,
                month: "四月"
            }, {
                sales: 9291257,
                month: "五月"
            }, {
                sales: 30645160,
                month: "六月"
            }, {
                sales: 11445755,
                month: "七月"
            }, {
                sales: 11541997,
                month: "八月"
            }, {
                sales: 7474790,
                month: "九月"
            }, {
                sales: 17897693,
                month: "十月"
            }, {
                sales: 36046672,
                month: "十一月"
            }, {
                sales: 44313329,
                month: "十二月"
            }];
            data = data.map(item => {
                item.sales = item.sales / 10000;
                return item;
            });
            let Frame = G2.Frame;
            let frame = new Frame(data);
            frame = Frame.combinColumns(frame, ['sales'], 'count', '总销量', 'month');

            let chart = new G2.Chart({
                container: this.$refs.chart,
                // forceFit: true,
                height: 800,
                width:800
            });
            chart.source(frame);
            chart.coord('polar', {
                inner: 0.1
            });

            // 不显示图例
            chart.legend(false); 
            
            chart.intervalStack()
                .position('month*count')
                .color('总销量', ['#6cb7f2',])
                .style({
                    lineWidth: 1,
                    stroke: '#fff'
                });
            chart.render();
        }
    },
    mounted() {
        this.init();
    }
}
</script>
<style scoped lang="less">
.chart-title {
    font-size: 30pt;
    font-weight: lighter;
    color: #404040;
    margin: 0;
    text-align: center;
    small{
        padding-left:15px;
        font-size: 15pt;
    }
}

.chart {
    width: 100%;
}
</style>
