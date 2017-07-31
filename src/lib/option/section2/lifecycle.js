
    var xData = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000', '2100', '2200', '2300', '2400'];

    var data = ['10060', '6068', '4955', '3831', '2997', '2490', '2012', '1783', '1553', '1194', '1060', '764', '663', '689', '694', '503', '224', '147', '116', '85', '2', '1', '1'];
    var data1 = [];
    var sum = 0
    data.map(item => {
        sum += parseInt(item);
    })
    data.map((item, i) => {
        data1[i] = sum;
        sum -= item;
    });

    var dataAll = data1.map(item => (item * 100 / data1[0]).toFixed(2));
    var data2 = data.map(item => (item * 100 / data1[0]).toFixed(2));
    var data3 = [100, "100",
        "98",
        "92",
        "87",
        "85",
        "84",
        "77",
        "69",
        "65",
        "53",
        "48",
        "41",
        "36",
        "32",
        "21",
        "8",
        "5",
        5,
        "4", '', '', '', ''
    ];
    var option = {
        "title": [{
            "text": "京东贵金属商品生命周期",
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
        }],
        "grid": {
            "left": "5%",
            "right": "6%",
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
            "extraCssText": "padding:20px;color:#999;border-radius:5px;box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);",
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
        "dataZoom": [{
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
            "handleIcon": "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
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
            "handleIcon": "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
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
        }],
        "legend": {
            "data": ["Top100 商品数量", "商品数量", "Top100 衰减周期", "衰减周期"],
            "x2": "5%",
            "y": 40,
            "itemGap": 20,
            "textStyle": {
                "fontSize": 16
            },
            // "show": false
        },
        "xAxis": [{
            "name": "销售周期(天)",
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
            "boundaryGap": false,
            "data": xData //["200天", "300天", "400天", "500天", "600天", "700天", "800天", "900天", "1000天", "1100天", "1200天", "1300天", "1400天", "1500天", "1600天", "1700天", "1800天", "2000天"]
        }],
        "yAxis": [{
            "name": "商品数量百分比(%)",
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
        }],
        "series": [{
            "name": "Top100 商品数量",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": ["2", "2", "6", "5", "2", "1", "7", "8", "4", "12", "5", "7", "5", "4", "11", "13", "3", "1", 1, "4", '', '', '', ''],
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": true,
                        "position": "insideTop",
                        "formatter": "{c}"
                    },
                    "barBorderRadius": [2, 2, 0, 0],
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
        }, {
            "name": "Top100 衰减周期",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": data3,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": true,
                        "position": "insideTop",
                        "formatter": "{c}"
                    },
                    "barBorderRadius": [2, 2, 0, 0],
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
            },
            markPoint: {
                symbolSize: 80,
                symbol: 'rect',
                symbolOffset: [80, -20],
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [{
                    coord: [7, data3[7]],
                    label: {
                        normal: {
                            formatter: function(param) {
                                return '800天后剩余80% Top100商品'
                            },
                            textStyle: {
                                color: '#233',
                                fontSize: 15
                            }
                        }
                    }
                }, {
                    coord: [11, data3[11]],
                    label: {
                        normal: {
                            formatter: function(param) {
                                return 'TOP100商品中50%的\n生命周期在1200天左右'
                            },
                            textStyle: {
                                color: '#233',
                                fontSize: 15
                            }
                        }
                    }
                }]
            }
        }, {
            "name": "商品数量",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": data2,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": true,
                        "position": "insideTop",
                        "formatter": "{c}"
                    },
                    "barBorderRadius": [2, 2, 0, 0],
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
        }, {
            "name": "衰减周期",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": dataAll,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": true,
                        "position": "insideTop",
                        "formatter": "{c}"
                    },
                    "barBorderRadius": [2, 2, 0, 0],
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
            },
            markPoint: {
                symbolSize: 80,
                symbol: 'rect',
                symbolOffset: [80, -20],
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [{
                    coord: [1, dataAll[1]],
                    label: {
                        normal: {
                            formatter: function(param) {
                                return '200天后剩余80%商品'
                            },
                            textStyle: {
                                color: '#233',
                                fontSize: 15
                            }
                        }
                    }
                }, {
                    coord: [3, dataAll[3]],
                    label: {
                        normal: {
                            formatter: function(param) {
                                return '京东50%贵金属商品\n生命周期在400天'
                            },
                            textStyle: {
                                color: '#233',
                                fontSize: 15
                            }
                        }
                    }
                }]
            }
        }],
        "color": ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0", "#85ca36",
            "#1c9925", "#0d8b5f", "#0f9cd3", "#2f7e9b", "#2f677d", "#9b7fed", "#7453d6", "#3b1d98",
            "#27abb1", "#017377", "#015f63", "#b86868", "#5669b7", "#e5aab4", "#60b65f", "#98d2b2",
            "#c9c8bc", "#45c3dc", "#e17979", "#5baa5a", "#eaccc2", "#ffaa74"
        ]
    }

    export default option;
