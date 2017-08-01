<template>
    <div class="slide" :class="{'light-section':fill}">
        <div class="wrap">
            <div ref="chart" class="chart" :style="{height:chartHeight}"></div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts';
import 'echarts-wordcloud';
// import 'echarts-gl';

import theme from '../lib/theme';
import defaultOption from '../lib/defaultOption';

export default {
    props: {
        option: {
            type: Object,
            default() {
                return defaultOption;
            }
        },
        fill: {
            default() {
                return false;
            }
        }
    },
    mounted() {
        this.init();
    },
    computed: {
        chart() {
            return echarts.init(this.$refs.chart, theme);
        },
        chartHeight() {
            return window.innerHeight * 0.9 + 'px';
        }
    },
    methods: {
        resizeChart() {
            this.chart.resize();
        },
        initEvent() {
            window.onresize = () => {
                this.resizeChart();
            }
        },
        init() {
            this.initChart();
            this.initEvent();
        },
        initChart() {
            // 文字云导出时，自定义函数无法输出
            if (typeof this.option.series == 'object' && this.option.series.type == 'wordCloud') {
                this.option.series.textStyle = {
                    normal: {
                        color: param => theme.color[param.dataIndex % theme.color.length]
                    }
                };
            }

            if(this.fill){
                this.option.backgroundColor = '#f5f5f5';
            }

            this.option.toolbox = {
                show: false
            };

            if (Reflect.has(this.option, 'tooltip')) {
                if (Reflect.has(this.option.tooltip, 'axisPointer')) {
                    if (this.option.tooltip.axisPointer.type == 'line') {
                        this.option.tooltip.axisPointer = {
                            type: 'cross',
                            lineStyle: {
                                type: 'dashed'
                            }
                        };
                    }
                }
            }

            this.option.title[0].top = 0;
            this.chart.setOption(this.option);
        }
    }
};
</script>
<style scoped>
.chart {
    width: 90%;
    height: 90%;
}
</style>