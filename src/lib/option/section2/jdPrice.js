var series = [];

function getSeries(data) {
    return {
        "name": "数量",
        "type": "line",
        "smooth": true,
        "barMaxWidth": "100",
        "barMinHeight": 15,
        "data": data,
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
                "borderWidth": 4,
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
    };
}

var data = [
    "9517",
    "6885",
    "3833",
    "2922",
    "2250",
    "2059",
    "1961",
    "1723",
    "1658",
    "1619",
    "1022",
    "1168",
    "1059",
    "954",
    "731",
    "689",
    "666",
    "609",
    "561",
    "603",
    "343",
    "380",
    "322",
    "322",
    "322",
    "300",
    "300",
    "246",
    "266",
    "332",
    "191",
    "194",
    "187",
    "158",
    "136",
    "148",
    "106",
    "116",
    "119",
    "178",
    "79",
    "83",
    "92",
    "91",
    "78",
    "92",
    "66",
    "67",
    "69"
];

var xAxis = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
    "1100",
    "1200",
    "1300",
    "1400",
    "1500",
    "1600",
    "1700",
    "1800",
    "1900",
    "2000",
    "2100",
    "2200",
    "2300",
    "2400",
    "2500",
    "2600",
    "2700",
    "2800",
    "2900",
    "3000",
    "3100",
    "3200",
    "3300",
    "3400",
    "3500",
    "3600",
    "3700",
    "3800",
    "3900",
    "4000",
    "4100",
    "4200",
    "4300",
    "4400",
    "4500",
    "4600",
    "4700",
    "4800",
    "4900"
];

data = data.map((item, i) => {
    return [xAxis[i], item];
});

series.push(getSeries(data));
var sum = 0;
data.forEach(item => {
    sum += parseInt(item[1]);
})
var percent = data.map(item => parseFloat(item[1]) / sum);
for (let i = 1; i < percent.length - 1; i++) {
    percent[i] = percent[i - 1] + percent[i];
}
percent[percent.length - 1] = 1;
percent = percent.map((item, i) => {
    return [
        xAxis[i],
        (item * 100).toFixed(2)
    ];
});

var plateroSeries = getSeries(percent);
plateroSeries = Object.assign(plateroSeries, {
    symbolSize: 0,
    name: 'Pareto',
    yAxisIndex: 1,
    markLine: {
        symbol: 'none',
        lineStyle: {
            normal: {
                type: 'dotted'
            }
        },
        data: [
            {
                name: '80%',
                yAxis: 80,
                label: {
                    normal: {
                        show: false
                    }
                }
            }, {
                name: '80%',
                xAxis: '1350'
            }, {
                name: '50%',
                yAxis: 50
            }, {
                name: '50%',
                xAxis: '430'
            }
        ]
    }
})
series.push(plateroSeries);

series.push({
    type: 'scatter',
    data: [
        [
            1350, 80
        ],
        [430, 50]
    ],
    symbolSize: 10,
    yAxisIndex: 1,
    label: {
        normal: {
            show: true,
            formatter: function (param) {
                if (param.dataIndex == 0) {
                    return '80%商品价格低于1350元'
                } else {
                    return '50%商品价格低于450元'
                }
            },
            offset: [
                100, -10
            ],
            textStyle: {
                color: '#233',
                fontSize: 14
            }
        }
    }
});
series.push({
    type: 'effectScatter',
    data: [
        [
            1350, 80
        ],
        [430, 50]
    ],
    symbolSize: 15,
    yAxisIndex: 1
});
var option = {
    "title": [
        {
            "text": "京东贵金属商品整体价格区间",
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
        "show": false,
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
        }
    ],
    "legend": {
        "data": [
            "数量", 'Pareto'
        ],
        "x2": "5%",
        "y": 40,
        "itemGap": 20,
        "textStyle": {
            "fontSize": 16
        }
    },
    "xAxis": [
        {
            "name": "均价",
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
            "type": "value",
            "boundaryGap": true
        }
    ],
    "yAxis": [
        {
            "name": "数量",
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
        }, {
            "name": "帕累托",
            "nameLocation": "middle",
            "nameGap": 35,
            "nameTextStyle": {
                "fontSize": 16
            },
            "type": "value",
            "position": "right",
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
    "series": series,
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
};

export default option;
