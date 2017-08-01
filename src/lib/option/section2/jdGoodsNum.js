
    var xData = ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700", "1800", "2000", "2500", "2600", "2900", "3300", "3800", "4700", "5000"];
    var yData = ["113", "80", "74", "45", "27", "25", "17", "21", "9", "8", "5", "10", "6", "5", "3", "2", "3", "4", "3", "2", "4", "1", "1", "1", "1", "7"];
    var series = xData.map((item, i) => {
        return [item, parseInt(yData[i])];
    });
    var option = {
    "title" : [
        {
            "text": "贵金属网店商品数量分布",
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
    "grid" : {
        "left": "5%",
        "right": "5%",
        "top": "8%",
        "bottom": "10%",
        "containLabel": true
    },
    "connectNulls" : true,
    "toolbox" : {
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
    "calculable" : true,
    "tooltip" : {
        "backgroundColor": "rgba(255,255,255,0.95)",
        "extraCssText": "padding:20px;color:#999;border-radius:5px;box-shadow: 0 0 7px rgba(0, 0, 0, 0.6)" +
                ";",
        "textStyle": {
            "color": "#333"
        },
        "trigger": "axis",
        "axisPointer": {
            "type": "cross",
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
    "dataZoom" : [
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
    "legend" : {
        "data": ["店铺数量"],
        "x2": "5%",
        "y": 40,
        "itemGap": 20,
        "textStyle": {
            "fontSize": 16
        },
        "show": false
    },
    "xAxis" : [
        {
            "name": "商品数量",
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
            scale: true,
            min: 100
        }
    ],
    "yAxis" : [
        {
            "name": "店铺数量",
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
    "series" : [
        {
            "name": "店铺数量",
            "type": "line",
            "smooth": true,
            "data": series,
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
            "symbol": "circle",
            "areaStyle": {
                "normal": {
                    "opacity": 0.4
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 0,
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
                name: '特别关注',
                symbolSize: 70,
                symbolRotate: 180,
                data: [
                    {
                        yAxis: 0,
                        xAxis: 100,
                        symbolOffset: [
                            0, 20
                        ],
                        label: {
                            normal: {
                                formatter: function () {
                                    return '\n\n行业内';
                                }
                            }
                        }
                    }, {
                        yAxis: 0,
                        xAxis: 203,
                        symbolSize: 90,
                        symbolRotate: 0,
                        label: {
                            normal: {
                                formatter: function () {
                                    return '中国金币\n宝泉';
                                }
                            }
                        }
                    }, {
                        yAxis: 0,
                        xAxis: 2503,
                        symbolSize: 90,
                        label: {
                            normal: {
                                formatter: function () {
                                    return '\n\n\n周大福\n自营';
                                }
                            }
                        }
                    }, {
                        yAxis: 0,
                        xAxis: 4690,
                        symbolSize: 90,
                        label: {
                            normal: {
                                formatter: function () {
                                    return '\n\n\n周大福\n京东';
                                }
                            }
                        }
                    }, {
                        yAxis: 0,
                        xAxis: 2000,
                        symbolSize: 90,
                        symbolRotate: 0,
                        label: {
                            normal: {
                                formatter: function () {
                                    return '周大福\n天猫';
                                }
                            }
                        }
                    }, {
                        yAxis: 0,
                        xAxis: 2565,
                        symbolSize: 70,
                        symbolRotate: 0,
                        label: {
                            normal: {
                                formatter: function () {
                                    return '周生生';
                                }
                            }
                        }
                    }, {
                        yAxis: 0,
                        xAxis: 1428,
                        label: {
                            normal: {
                                formatter: function () {
                                    return '\n\n菜百';
                                }
                            }
                        }
                    }
                ]
            }
        }
    ],
    "color" : [
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