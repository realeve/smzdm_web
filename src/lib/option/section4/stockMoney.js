export default  {
        "title": [{
            "text": "各平台库存金额趋势图",
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
            "data": ["上币", "中国金币", "中钞贵金属", "沈币"],
            "x2": "5%",
            "y": 40,
            "itemGap": 20,
            "textStyle": {
                "fontSize": 16
            },
            "show": true
        },
        "xAxis": [{
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
            "boundaryGap": false,
            "data": ["2017-04-12", "2017-04-16", "2017-04-17", "2017-04-18", "2017-04-19", "2017-04-20", "2017-04-21", "2017-04-22", "2017-04-23", "2017-04-24", "2017-04-25", "2017-04-26", "2017-04-27", "2017-04-28", "2017-04-30", "2017-05-02", "2017-05-03", "2017-05-04", "2017-05-05", "2017-05-06", "2017-05-07", "2017-05-08", "2017-05-09", "2017-05-10", "2017-05-11", "2017-05-12", "2017-05-13", "2017-05-15", "2017-05-16", "2017-05-17", "2017-05-18", "2017-05-19", "2017-05-20", "2017-05-21", "2017-05-22", "2017-05-23", "2017-05-24", "2017-05-25", "2017-05-26", "2017-05-27", "2017-05-28", "2017-05-30", "2017-05-31", "2017-06-01", "2017-06-02", "2017-06-04", "2017-06-05", "2017-06-06", "2017-06-07", "2017-06-09", "2017-06-10", "2017-06-11", "2017-06-12", "2017-06-13", "2017-06-14", "2017-06-15", "2017-06-17", "2017-06-18", "2017-06-19", "2017-06-20", "2017-06-21", "2017-06-22", "2017-06-23", "2017-06-24", "2017-06-25", "2017-06-26", "2017-06-29", "2017-06-30", "2017-07-01", "2017-07-02"]
        }],
        "yAxis": [{
            "name": "库存金额",
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
        }],
        "series": [{
            "name": "上币",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", 5159043.5, 5152399.5, 5180209.5, 5141269.5, 5137075.5, 5137075.5, 5119112.5, 5137800.5, 1504834, 5227347, 5223681, 5211317, 5201919, "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
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
            "markLine": {
                "lineStyle": {
                    "normal": {
                        "type": "dashed"
                    }
                },
                "symbolSize": 0,
                "label": {
                    "normal": {
                        "position": "end",
                        "formatter": "{b}:\n{c}"
                    }
                },
                "data": [{
                    "type": "average",
                    "name": "平均值"
                }]
            },
            "label": {
                "normal": {
                    "show": false,
                    "position": "top"
                }
            }
        }, {
            "name": "中国金币",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [4763264, 4596535, 4595663, "-", "-", 4072623, 4063791, 3993833, 3990339, 4243258, 4205428, 4129781, 4061523, 2279630, 2254688, 2241828, 3823047, 3674331, 3473453, 3461111, 3461487, 3358052, 449043, 3172120, 3572680, 3461395, 3645212, 3641872, 3494990, 3446889, 3047267, 3266605, 2326544, 2311566, 3406237, 6236264, 5771568, 6066986, 7052918, 2507238, "-", 2503314, 6902454, 3485070, 2925175, 2825108, 6821328, 6723468, 6720703, 2647490, 6437945, 6426820, "-", "-", 2648622, 6581322, 6466411, 2286978, 2287414, 2401616, 2404077, 2075991, 6801195, 6789690, 6786624, 2486382, 2139228, 5923760, 5922758, 5905969],
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
            "markLine": {
                "lineStyle": {
                    "normal": {
                        "type": "dashed"
                    }
                },
                "symbolSize": 0,
                "label": {
                    "normal": {
                        "position": "end",
                        "formatter": "{b}:\n{c}"
                    }
                },
                "data": [{
                    "type": "average",
                    "name": "平均值"
                }]
            },
            "label": {
                "normal": {
                    "show": false,
                    "position": "top"
                }
            }
        }, {
            "name": "中钞贵金属",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": ["-", 1467422, 1465502, 1461333, "-", 1478487, 1478487, 1476708, 1475270, 1469079, 1469245, 1469245, 1457919, 1508561, 1536550, 1536550, 1526419, 1514001, 1454013, 1454013, 1454013, 1439373, 1377211, 1529957, 1529957, 1494536, 1510205, 1501087, 1541564, 1540982, 1545596, 1539546, 1534720, 1532760, 1594627, 1613520, 1654639, 1660878, 1674035, 1672525, 1671329, 1670993, 1665927, 1665726, 1662809, 1653159, 1657467, 1704265, 1844597, 1841925, 1593310, 1590811, 1577169, 1616824, 1619008, 1619032, 1616676, 1613537, 1613537, 1696915, 1696178, 1695663, 1702717, 1702717, 1702717, 1706746, 1699547, 1527814, "-", 1527135],
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
            "markLine": {
                "lineStyle": {
                    "normal": {
                        "type": "dashed"
                    }
                },
                "symbolSize": 0,
                "label": {
                    "normal": {
                        "position": "end",
                        "formatter": "{b}:\n{c}"
                    }
                },
                "data": [{
                    "type": "average",
                    "name": "平均值"
                }]
            },
            "label": {
                "normal": {
                    "show": false,
                    "position": "top"
                }
            }
        }, {
            "name": "沈币",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": ["-", "-", "-", "-", 6361496, 6387056, "-", 6392549, 6392159, 6391148, 6391148, 6400228, 6483696, 6455027, 6454657, 6453427, 6452823, 6438935, 6438587, 6437626, 6437626, 6398840, 6417239, 6395946, 6393660, 6394030, 6630773, 6628609, 6638188, 6651415, 6663956, 554872, 6662466, 6661306, 6661306, 6707196, 6698096, 6689550, 6662267, 6614391, 6613745, 6610979, 6610979, 6610325, 6610325, 6609475, 6611475, 6626586, 6626000, 6625405, 6624360, 6624360, 6624192, 6678081, 6674392, 6777599, 6787054, 6786516, 6786516, 6850685, 6792635, 6791980, 6790525, 6790525, 6790525, 6790525, 6941937, 6942517, 6942517, 6933217],
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
            "markLine": {
                "lineStyle": {
                    "normal": {
                        "type": "dashed"
                    }
                },
                "symbolSize": 0,
                "label": {
                    "normal": {
                        "position": "end",
                        "formatter": "{b}:\n{c}"
                    }
                },
                "data": [{
                    "type": "average",
                    "name": "平均值"
                }]
            },
            "label": {
                "normal": {
                    "show": false,
                    "position": "top"
                }
            }
        }],
        "color": ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0", "#85ca36", "#1c9925", "#0d8b5f", "#0f9cd3", "#2f7e9b", "#2f677d", "#9b7fed", "#7453d6", "#3b1d98", "#27abb1", "#017377", "#015f63", "#b86868", "#5669b7", "#e5aab4", "#60b65f", "#98d2b2", "#c9c8bc", "#45c3dc", "#e17979", "#5baa5a", "#eaccc2", "#ffaa74"]
    };