var  option = {
        "title": [{
            "text": "京东热度TOP10店铺商品周期比较",
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
            "right": "15%",
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
            "data": ["COISE旗舰店", "JPF旗舰店", "MAO.MAO旗舰店", "凡·碧缇旗舰店", "周大福京东旗舰店", "周生生京东旗舰店", "炫银部落旗舰店", "瑞诺旗舰店", "缔晶旗舰店", "菜百首饰旗舰店"],
            "x2": "5%",
            "y": 40,
            "itemGap": 20,
            "textStyle": {
                "fontSize": 16
            },
            "show": true,
            "orient": "vertical",
            "x": "right",
            "left": "right"
        },
        "xAxis": [{
            "name": "商品上架时长（单位：天）",
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
            "data": [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000]

        }],
        "yAxis": [{
            "name": "市场热度",
            "nameLocation": "middle",
            "nameGap": 75,
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
            "name": "COISE旗舰店",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [507, 3018, 208, 675, 3565, 668, 6343, 5820, 3752, 1050, 204, 13255, 15662, 6366, 1588, "-", "-", "-", "-", "-"],
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
            "symbolSize": "0",

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
            "name": "JPF旗舰店",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [2428, 856, 51, 96, 6891, 4224, 1333, 115, 2717, 2593, 1307, 6504, 120, 2590, 2243, 5458, 14213, 835, "-", "-"],
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
            "symbolSize": "0",

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
            "name": "MAO.MAO旗舰店",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [2013, 83, 4618, 337, 1185, 3565, 1229, 2136, 1596, 2875, 1244, 680, 6680, 702, 2631, 6133, 4092, 2990, "-", "-"],
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
            "symbolSize": "0",

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
            "name": "凡·碧缇旗舰店",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [4942, 5285, 4152, 2779, 1188, 1410, 556, 5144, 9572, 1391, 2439, 7264, 1194, 394, 477, 38, "-", "-", "-", "-"],
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
            "symbolSize": "0",

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
            "name": "周大福京东旗舰店",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [1897, 3564, 11307, 2977, 9407, 10885, 3412, 9504, 8074, 8367, 8909, 9165, 28351, 21981, 2206, 5300, 2701, 9542, 43794, 57781],
            markPoint: {
                symbolSize: 40,
                symbol: 'circle',
                name: '周大福',
                data: [{
                    coord: [19, 57781],
                    label: {
                        normal: {
                            formatter: function() {
                                return '周大福';
                            }
                        }
                    }
                }]
            },
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
            "symbolSize": "0",

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
            "name": "周生生京东旗舰店",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [2379, 5293, 1414, 2462, 20577, 6022, 6116, 12959, 6815, 6878, 10448, 15258, 14760, 16674, 105247, 197986, "-", "-", "-", "-"],
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
            "symbolSize": "0",
            markPoint: {
                symbolSize: 40,
                symbol: 'circle',
                name: '周生生',
                data: [{
                    coord: [15, 197986],
                    label: {
                        normal: {
                            formatter: function() {
                                return '周生生';
                            }
                        }
                    }
                }]
            },
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
            "name": "炫银部落旗舰店",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [975, 1920, 4883, 3180, 1711, 3253, 2628, 6267, 6439, 4925, 2258, 2480, 9272, 749, 7869, 8758, 3918, "-", "-", "-"],
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
            "symbolSize": "0",

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
            "name": "瑞诺旗舰店",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [342, 199, 1668, 2070, 2749, 3800, 6930, 9278, 1625, 2853, 1877, 4428, 3844, 887, 156, 2469, 3417, 2123, "-", "-"],
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
            "symbolSize": "0",

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
            "name": "缔晶旗舰店",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [2621, 2503, 345, 6558, 1363, 3616, 3211, 12200, 150, 344, 1327, 40, 2227, 10419, 4168, "-", "-", "-", "-", "-"],
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
            "symbolSize": "0",

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
            "name": "菜百首饰旗舰店",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [1932, 5228, 5829, 5494, 4728, 3695, 10787, 4552, 7536, 16332, 20255, 15060, 1418, "-", "-", "-", "-", "-", "-", "-"],
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
            "symbolSize": "0",

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
        }],
        "color": ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0", "#85ca36", "#1c9925", "#0d8b5f", "#0f9cd3", "#2f7e9b", "#2f677d", "#9b7fed", "#7453d6", "#3b1d98", "#27abb1", "#017377", "#015f63", "#b86868", "#5669b7", "#e5aab4", "#60b65f", "#98d2b2", "#c9c8bc", "#45c3dc", "#e17979", "#5baa5a", "#eaccc2", "#ffaa74"]
    }

export default option;