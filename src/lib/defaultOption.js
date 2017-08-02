let option = {
    "title": [
        {
            "text": "chart Demo",
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
            "text": "©成都印钞有限公司",
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
            "数量", "Pareto"
        ],
        "x2": "5%",
        "y": 40,
        "itemGap": 20,
        "textStyle": {
            "fontSize": 16
        },
        // "show": false
    },
    "xAxis": [
        {
            "name": "价格",
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
            "boundaryGap": 0,
            // "data": ["50", "100", "150", "200", "250", "300", "350", "400", "500", "600",
            // "700", "750", "900", "1000", "1200", "1300", "1350", "1400", "1600", "1650",
            // "3000", "5900"]
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
            },
            "min": 0
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
    "series": [
        {
            "name": "数量",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            data: [
                [
                    "50", "10"
                ],
                [
                    "100", "18"
                ],
                [
                    "150", "20"
                ],
                [
                    "200", "6"
                ],
                [
                    "250", "5"
                ],
                [
                    "300", "4"
                ],
                [
                    "350", "2"
                ],
                [
                    "400", "1"
                ],
                [
                    "500", "1"
                ],
                [
                    "600", "1"
                ],
                [
                    "700", "4"
                ],
                [
                    "750", "1"
                ],
                [
                    "900", "1"
                ],
                [
                    "1000", "1"
                ],
                [
                    "1200", "1"
                ],
                [
                    "1300", "10"
                ],
                [
                    "1350", "1"
                ],
                [
                    "1400", "5"
                ],
                [
                    "1600", "3"
                ],
                [
                    "1650", "3"
                ],
                ["2000", "2"]
            ],
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
            "symbolSize": "0",
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
            "name": "Pareto",
            yAxisIndex: 1,
            markLine: {
                symbol: 'none',
                lineStyle: {
                    normal: {
                        type: 'dot'
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
                        xAxis: '1250'
                    }
                ]
            },
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            data: [
                [
                    "50", "10"
                ],
                [
                    "100", "28"
                ],
                [
                    "150", "48"
                ],
                [
                    "200", "54"
                ],
                [
                    "250", "59"
                ],
                [
                    "300", "63"
                ],
                [
                    "350", "65"
                ],
                [
                    "400", "66"
                ],
                [
                    "500", "67"
                ],
                [
                    "600", "68"
                ],
                [
                    "700", "72"
                ],
                [
                    "750", "73"
                ],
                [
                    "900", "74"
                ],
                [
                    "1000", "75"
                ],
                [
                    "1200", "76"
                ],
                [
                    "1300", "86"
                ],
                [
                    "1350", "87"
                ],
                [
                    "1400", "92"
                ],
                [
                    "1600", "95"
                ],
                [
                    "1650", "98"
                ],
                ["2000", "100"]
            ],
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
            "symbolSize": "0",
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
            type: 'scatter',
            data: [
                [
                    160, 50
                ],
                [1250, 80]
            ],
            symbolSize: 10,
            yAxisIndex: 1,
            label: {
                normal: {
                    show: true,
                    formatter: function (param) {
                        if (param.dataIndex == 0) {
                            return '50%商品价格低于160元'
                        } else if (param.dataIndex == 1) {
                            return '80%商品价格低于1250元'
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
        }, {
            type: 'effectScatter',
            data: [
                [
                    160, 50
                ],
                [1250, 80]
            ],
            symbolSize: 15,
            yAxisIndex: 1
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
};

export default option;