let youzan = [
    [
        "2016-04", "208280"
    ],
    [
        "2016-05", "111718"
    ],
    [
        "2016-06", "85520"
    ],
    [
        "2016-07", "423460"
    ],
    [
        "2016-08", "85532"
    ],
    [
        "2016-09", "508060"
    ],
    [
        "2016-10", "295356"
    ],
    [
        "2016-11", "1794541"
    ],
    [
        "2016-12", "492045"
    ],
    [
        "2017-01", "266780"
    ],
    [
        "2017-02", "90415"
    ],
    ["2017-03", "356080"]
];

let xData = youzan
    .map(item => item[0])
    .concat(["2017-04", "2017-05", "2017-06", "2017-07"])
// "中钞贵金属工艺品", "中钞贵金属投资品", "沈币"
let y1 = youzan
    .map(item => '-')
    .concat([478921, 578926, 734921, 735600]);
let y2 = youzan
    .map(item => '-')
    .concat([1339116, 1428392, 2869582, 2869582]);
let y3 = youzan
    .map(item => '-')
    .concat([1297728, 2672992, 3470780, 3495952]);
let y4 = [parseInt(youzan[0][1])];
youzan.map((item, i) => {
    if (i) {
        y4.push(y4[i - 1] + parseInt(item[1]));
    }
});

var option = {
    "title": [
        {
            "text": "总公司旗下店铺月度交易额(累计值)",
            "x": "center",
            "top": 10
        }, {
            "text": "数据来源:smzdm",
            "borderWidth": 0,
            "textStyle": {
                "fontSize": 10,
                "fontWeight": "normal"
            },
            "x": 5,
            "y2": 0
        }, {
            "text": "©成都印钞有限公司 技术质量部",
            "borderColor": "#999",
            "borderWidth": 0,
            "textStyle": {
                "fontSize": 10,
                "fontWeight": "normal"
            },
            "x": "right",
            "y2": 3
        }
    ],
    "grid": {
        "left": "5%",
        "right": "5%",
        "top": "8%",
        "bottom": "10%",
        "containLabel": true
    },
    "connectNulls": true,
    "toolbox": {
        "left": "left",
        "show": true,
        "feature": {
            "mark": {
                "show": true
            },
            "dataView": {
                "show": true,
                "readOnly": false
            },
            "dataZoom": {
                "show": true,
                "yAxisIndex": "none"
            },
            "magicType": {
                "show": true,
                "type": ["line", "bar", "stack", "tiled"]
            },
            "restore": {
                "show": true
            },
            "saveAsImage": {
                "show": true
            }
        },
        "top": 10
    },
    "calculable": true,
    "tooltip": {
        "backgroundColor": "rgba(255,255,255,0.95)",
        "extraCssText": "padding:20px;color:#999;border-radius:5px;box-shadow: 0 0 7px rgba(0, 0, 0, 0.6)" +
                ";",
        "textStyle": {
            "color": "#333"
        },
        "trigger": "axis",
        "axisPointer": {
            "type": "line",
            "lineStyle": {
                "color": "#aaa"
            },
            "crossStyle": {
                "color": "#aaa"
            },
            "shadowStyle": {
                "color": "rgba(128,200,128,0.1)"
            }
        }
    },
    "dataZoom": [
        {
            "type": "inside",
            "realtime": true,
            "start": 0,
            "end": 100
        }, {
            "show": false,
            "realtime": true,
            "start": 0,
            "end": 100,
            "height": 30,
            "y2": 25,
            "textStyle": {
                "color": "#8392A5"
            },
            "handleIcon": "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1." +
                    "3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V2" +
                    "4.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            "dataBackground": {
                "areaStyle": {
                    "color": "#8392A5"
                },
                "lineStyle": {
                    "opacity": 0.8,
                    "color": "#8392A5"
                }
            },
            "handleStyle": {
                "color": "#fff",
                "shadowBlur": 3,
                "shadowColor": "rgba(0, 0, 0, 0.6)",
                "shadowOffsetX": 2,
                "shadowOffsetY": 2
            }
        }, {
            "show": false,
            "yAxisIndex": 0,
            "filterMode": "empty",
            "width": 12,
            "height": "70%",
            "handleSize": 8,
            "showDataShadow": false,
            "right": 5,
            "textStyle": {
                "color": "#8392A5"
            },
            "handleIcon": "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1." +
                    "3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V2" +
                    "4.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            "dataBackground": {
                "areaStyle": {
                    "color": "#8392A5"
                },
                "lineStyle": {
                    "opacity": 0.8,
                    "color": "#8392A5"
                }
            },
            "handleStyle": {
                "color": "#fff",
                "shadowBlur": 3,
                "shadowColor": "rgba(0, 0, 0, 0.6)",
                "shadowOffsetX": 2,
                "shadowOffsetY": 2
            }
        }
    ],
    "legend": {
        "data": [
            "中钞贵金属工艺品", "中钞贵金属投资品", "沈币", "上币"
        ],
        "x2": "5%",
        "y": 40,
        "itemGap": 20,
        "textStyle": {
            "fontSize": 16
        },
        "show": true
    },
    "xAxis": [
        {
            "name": "日期",
            "nameTextStyle": {
                "fontSize": 16
            },
            "axisTick": {
                "show": true,
                "length": 8,
                "lineStyle": {
                    "color": "#aaa",
                    "width": 2
                },
                "alignWithLabel": true
            },
            "axisLabel": {
                "textStyle": {
                    "fontSize": 16
                }
            },
            "splitArea": {
                "show": false
            },
            "type": "category",
            "boundaryGap": 0,
            "data": xData
        }
    ],
    "yAxis": [
        {
            "name": "销售额",
            "nameLocation": "middle",
            "nameGap": 35,
            "nameTextStyle": {
                "fontSize": 16
            },
            "type": "value",
            "position": "left",
            "scale": true,
            "axisLabel": {
                "show": true,
                "interval": "auto",
                "margin": 10,
                "textStyle": {
                    "fontSize": 16
                }
            },
            "axisTick": {
                "show": false
            },
            "splitArea": {
                "show": false
            }
        }
    ],
    "series": [
        {
            "name": "中钞贵金属工艺品",
            stack: '中钞贵金属',
            "type": "bar",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": y1, // [478921, 578926, 734921, 735600],
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": true,
                        "position": "insideTop",
                        "formatter": "{c}"
                    },
                    "barBorderRadius": [
                        2, 2, 0, 0
                    ],
                    "borderColor": "rgba(255,255,255,0.95)",
                    "borderWidth": 0,
                    "lineStyle": {
                        "width": 1
                    }
                }
            },
            "symbolSize": "12",
            "sampling": "average",
            "symbol": "circle",
            "lineStyle": {
                "normal": {
                    "width": 2,
                    "type": "solid",
                    "shadowColor": "rgba(0,0,0,0)",
                    "shadowBlur": 0,
                    "shadowOffsetX": 0,
                    "shadowOffsetY": 0
                }
            },
            "label": {
                "normal": {
                    "show": false,
                    "position": "top"
                }
            }
        }, {
            "name": "中钞贵金属投资品",
            stack: '中钞贵金属',
            "type": "bar",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": y2, //[1339116, 1428392, 2869582, 2869582],
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": true,
                        "position": "insideTop",
                        "formatter": "{c}"
                    },
                    "barBorderRadius": [
                        2, 2, 0, 0
                    ],
                    "borderColor": "rgba(255,255,255,0.95)",
                    "borderWidth": 0,
                    "lineStyle": {
                        "width": 1
                    }
                }
            },
            "symbolSize": "12",
            "sampling": "average",
            "symbol": "circle",
            "lineStyle": {
                "normal": {
                    "width": 2,
                    "type": "solid",
                    "shadowColor": "rgba(0,0,0,0)",
                    "shadowBlur": 0,
                    "shadowOffsetX": 0,
                    "shadowOffsetY": 0
                }
            },
            "label": {
                "normal": {
                    "position": "top",
                    formatter: function (param) {
                        return ((y1[param.dataIndex] + param.data) / 10000).toFixed(0) + '万'
                    }
                }
            }
        }, {
            "name": "沈币",
            "type": "bar",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": y3, //[1297728, 2672992, 3470780, 3495952],
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": true,
                        "position": "insideTop",
                        "formatter": "{c}"
                    },
                    "barBorderRadius": [
                        2, 2, 0, 0
                    ],
                    "borderColor": "rgba(255,255,255,0.95)",
                    "borderWidth": 0,
                    "lineStyle": {
                        "width": 1
                    }
                }
            },
            "symbolSize": "12",
            "sampling": "average",
            "symbol": "circle",
            "lineStyle": {
                "normal": {
                    "width": 2,
                    "type": "solid",
                    "shadowColor": "rgba(0,0,0,0)",
                    "shadowBlur": 0,
                    "shadowOffsetX": 0,
                    "shadowOffsetY": 0
                }
            },
            "label": {
                "normal": {
                    "position": "top",
                    formatter: function (param) {
                        return (param.data / 10000).toFixed(0) + '万'
                    }
                }
            }
        }, {
            "name": "上币",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": y4,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": true,
                        "position": "insideTop",
                        "formatter": "{c}"
                    },
                    "barBorderRadius": [
                        2, 2, 0, 0
                    ],
                    "borderColor": "rgba(255,255,255,0.95)",
                    "borderWidth": 0,
                    "lineStyle": {
                        "width": 1
                    }
                }
            },
            "symbolSize": "12",
            "sampling": "average",
            "symbol": "circle",
            "lineStyle": {
                "normal": {
                    "width": 2,
                    "type": "solid",
                    "shadowColor": "rgba(0,0,0,0)",
                    "shadowBlur": 0,
                    "shadowOffsetX": 0,
                    "shadowOffsetY": 0
                }
            },
            "label": {
                "normal": {
                    "show": false,
                    "position": "top"
                }
            },
            markPoint: {
                data: [
                    {
                        type: 'max',
                        label: {
                            normal: {
                                formatter: function (param) {
                                    return (param.value / 10000).toFixed(0) + '万元';
                                }
                            }
                        }
                    }
                ],
                symbolSize: 80
            }
        }
    ],
    "color": [
        "#61A5E8",
        "#7ECF51",
        "#EECB5F",
        "#E4925D",
        "#E16757",
        "#9570E5",
        "#605FF0",
        "#85ca36",
        "#1c9925",
        "#0d8b5f",
        "#0f9cd3",
        "#2f7e9b",
        "#2f677d",
        "#9b7fed",
        "#7453d6",
        "#3b1d98",
        "#27abb1",
        "#017377",
        "#015f63",
        "#b86868",
        "#5669b7",
        "#e5aab4",
        "#60b65f",
        "#98d2b2",
        "#c9c8bc",
        "#45c3dc",
        "#e17979",
        "#5baa5a",
        "#eaccc2",
        "#ffaa74"
    ]
}

export default option;