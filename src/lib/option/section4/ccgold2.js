export default  {
        "title": [{
            "text": "中钞贵金属单克毛利趋势",
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
            "right": "8%",
            "top": "18%",
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
            "data": ["长城金 100g", "长城金 10g", "长城金 200g", "长城金 20g", "长城金 30g", "长城金 500g", "长城金 50g", "长城金1000g", "长城金生肖版 100g", "长城金生肖版 10g", "长城金生肖版 200g", "长城金生肖版 20g", "长城金生肖版 30g", "长城金生肖版 500g", "长城金生肖版 50g"],
            "x2": "5%",
            "y": 40,
            "itemGap": 20,
            "textStyle": {
                "fontSize": 16
            },
            "show": true,
            // "orient": "vertical",
            // "x": "right",
            // "left": "right"
        },
        "xAxis": [{
            "name": "date_name",
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
            "data": ["2017-04-16", "2017-04-17", "2017-04-18", "2017-04-20", "2017-04-21", "2017-04-22", "2017-04-23", "2017-04-24", "2017-04-25", "2017-04-26", "2017-04-27", "2017-04-28", "2017-04-30", "2017-05-02", "2017-05-03", "2017-05-04", "2017-05-05", "2017-05-06", "2017-05-07", "2017-05-08", "2017-05-09", "2017-05-10", "2017-05-11", "2017-05-12", "2017-05-13", "2017-05-15", "2017-05-16", "2017-05-17", "2017-05-18", "2017-05-19", "2017-05-20", "2017-05-21", "2017-05-22", "2017-05-23", "2017-05-24", "2017-05-25", "2017-05-26", "2017-05-27", "2017-05-28", "2017-05-30", "2017-05-31", "2017-06-01", "2017-06-02", "2017-06-04", "2017-06-05", "2017-06-06", "2017-06-07", "2017-06-09", "2017-06-10", "2017-06-11", "2017-06-12", "2017-06-13", "2017-06-14", "2017-06-15", "2017-06-17", "2017-06-18", "2017-06-19", "2017-06-20", "2017-06-21", "2017-06-22", "2017-06-23", "2017-06-24", "2017-06-25", "2017-06-26", "2017-06-29", "2017-06-30", "2017-07-02"]
        }],
        "yAxis": [{
            "name": "price_diff",
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
            "name": "长城金 100g",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [8.75, 9.765, 10.69, 9.125, NaN, NaN, 10.135, 9.025, 10.31, 9.76, 9.09, NaN, NaN, 11.36, 11.89, 10.29, NaN, NaN, 9.285, 9.485, 9.74, 9.1, 8.095, NaN, NaN, 7.375, 7.99, 5.995, 10.385, NaN, NaN, 8.625, 7.185, 11.355, 8.355, 9.935, NaN, NaN, NaN, 10.085, 9.12, 9.78, NaN, 5.65, 7.6, 8.315, 9.715, NaN, NaN, 13.095, 9.345, 8.145, 9.41, 9.885, NaN, 10.175, 10.61, 9.185, 7.45, 8.75, NaN, NaN, 8.67, 11.01, NaN, NaN, NaN],
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
            "name": "长城金 10g",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [9.75, 10.765, 11.77, 10.195, NaN, NaN, 11.225, 10.035, 11.36, 10.81, 10.12, NaN, NaN, 12.39, 12.94, 11.37, NaN, NaN, 10.355, 10.485, 10.75, 10.18, 9.175, NaN, NaN, 8.375, 9.03, 7.065, 11.415, NaN, NaN, 9.625, 8.195, 12.355, 9.405, 10.975, NaN, NaN, NaN, 11.125, 10.12, 10.85, NaN, 6.69, 8.63, 9.335, 10.745, NaN, NaN, 14.115, 10.375, 9.145, 10.41, 10.915, NaN, 11.205, 11.64, 10.265, 8.47, 9.75, NaN, NaN, 9.71, 12.08, NaN, NaN, NaN],
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
            "name": "长城金 200g",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [8.75, 9.765, 10.69, 9.125, NaN, NaN, 10.135, 9.025, 10.305, 9.755, 9.09, NaN, NaN, 11.36, 11.885, 10.285, NaN, NaN, 9.285, 9.485, 9.74, 9.095, 8.09, NaN, NaN, 7.375, 7.99, 5.995, 10.385, NaN, NaN, 8.62, 7.185, 11.355, 8.35, 9.93, NaN, NaN, NaN, 10.08, 9.12, 9.78, NaN, 5.65, 7.6, 8.31, 9.71, NaN, NaN, 13.095, 9.345, 8.14, 9.405, 9.885, NaN, 10.175, 10.61, 9.18, 7.45, 8.75, NaN, NaN, 8.67, 11.01, NaN, NaN, NaN],
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
            "name": "长城金 20g",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [9.75, 10.765, 11.72, 10.145, NaN, NaN, 11.175, 10.035, 11.31, 10.76, 10.12, NaN, NaN, 12.39, 12.89, 11.32, NaN, NaN, 10.305, 10.485, 10.75, 10.13, 9.125, NaN, NaN, 8.375, 9.03, 7.015, 11.415, NaN, NaN, 9.625, 8.195, 12.355, 9.355, 10.925, NaN, NaN, NaN, 11.075, 10.12, 10.75, NaN, 6.69, 8.63, 9.335, 10.745, NaN, NaN, 14.115, 10.375, 9.145, 10.41, 10.915, NaN, 11.205, 11.64, 10.215, 8.47, 9.75, NaN, NaN, 9.71, 12.03, NaN, NaN, NaN],
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
            "name": "长城金 30g",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [9.75, 10.765, 11.703, 10.128, NaN, NaN, 11.158, 10.035, 11.327, 10.777, 10.12, NaN, NaN, 12.39, 12.907, 11.303, NaN, NaN, 10.288, 10.485, 10.75, 10.113, 9.108, NaN, NaN, 8.375, 8.997, 6.998, 11.415, NaN, NaN, 9.625, 8.195, 12.355, 9.372, 10.942, NaN, NaN, NaN, 11.092, 10.12, 10.75, NaN, 6.657, 8.63, 9.335, 10.712, NaN, NaN, 14.115, 10.375, 9.145, 10.41, 10.915, NaN, 11.205, 11.64, 10.198, 8.47, 9.75, NaN, NaN, 9.677, 12.013, NaN, NaN, NaN],
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
            "name": "长城金 500g",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [8.75, 9.765, 10.69, 9.125, NaN, NaN, 10.135, 9.025, 10.3, 9.75, 9.09, NaN, NaN, 11.36, 11.88, 10.28, NaN, NaN, 9.285, 9.485, 9.74, 9.09, 8.085, NaN, NaN, 7.375, 7.99, 5.995, 10.385, NaN, NaN, 8.615, 7.185, 11.355, 8.345, 9.925, NaN, NaN, NaN, 10.075, 9.12, 9.78, NaN, 5.65, 7.6, 8.305, 9.705, NaN, NaN, 13.095, 9.345, 8.135, 9.4, 9.885, NaN, 10.175, 10.61, 9.175, 7.45, 8.75, NaN, NaN, 8.67, 11.01, NaN, NaN, NaN],
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
            "name": "长城金 50g",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [8.75, 9.765, 10.69, 9.135, NaN, NaN, 10.145, 9.035, 10.32, 9.77, 9.1, NaN, NaN, 11.37, 11.9, 10.29, NaN, NaN, 9.295, 9.485, 9.75, 9.1, 8.095, NaN, NaN, 7.375, 7.99, 6.005, 10.395, NaN, NaN, 8.625, 7.195, 11.355, 8.365, 9.935, NaN, NaN, NaN, 10.085, 9.12, 9.79, NaN, 5.65, 7.61, 8.315, 9.725, NaN, NaN, 13.095, 9.355, 8.145, 9.41, 9.895, NaN, 10.185, 10.62, 9.185, 7.45, 8.75, NaN, NaN, 8.67, 11.02, NaN, NaN, NaN],
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
            "name": "长城金1000g",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [7.75, 8.765, 9.69, 8.125, NaN, NaN, 9.135, 8.025, 9.3, 8.75, 8.09, NaN, NaN, 10.36, 10.88, 9.28, NaN, NaN, 8.285, 8.485, 8.74, 8.09, 7.085, NaN, NaN, 6.375, 6.99, 4.995, 9.385, NaN, NaN, 7.615, 6.185, 10.355, 7.345, 8.925, NaN, NaN, NaN, 9.075, 8.12, 8.78, NaN, 4.65, 6.6, 7.305, 8.705, NaN, NaN, 12.095, 8.345, 7.135, 8.4, 8.885, NaN, 9.175, 9.61, 8.175, 6.45, 7.75, NaN, NaN, 7.67, 10.01, NaN, NaN, NaN],
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
            "name": "长城金生肖版 100g",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [11.75, 12.765, 13.69, 12.125, NaN, NaN, 13.135, 12.025, 13.31, 12.76, 12.09, NaN, NaN, 14.36, 14.89, 13.29, NaN, NaN, 12.285, 12.485, 12.74, 12.1, 11.095, NaN, NaN, 10.375, 10.99, 8.995, 13.385, NaN, NaN, 11.625, 10.185, 14.355, 11.355, 12.935, NaN, NaN, NaN, 13.085, 12.12, 12.78, NaN, 8.65, 10.6, 11.315, 12.715, NaN, NaN, 16.095, 12.345, 11.145, 12.41, 12.885, NaN, 13.175, 13.61, 12.185, 10.45, 11.75, NaN, NaN, 11.67, 14.01, NaN, NaN, NaN],
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
            "name": "长城金生肖版 10g",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [20.75, 21.765, 22.77, 21.195, NaN, NaN, 22.225, 21.035, 22.36, 21.81, 21.12, NaN, NaN, 23.39, 23.94, 22.37, NaN, NaN, 21.355, 21.485, 21.75, 21.18, 20.175, NaN, NaN, 19.375, 20.03, 18.065, 22.415, NaN, NaN, 20.625, 19.195, 23.355, 20.405, 21.975, NaN, NaN, NaN, 22.125, 21.12, 21.85, NaN, 17.69, 19.63, 20.335, 21.745, NaN, NaN, 25.115, 21.375, 20.145, 21.41, 21.915, NaN, 22.205, 22.64, 21.265, 19.47, 20.75, NaN, NaN, 20.71, 23.08, NaN, NaN, NaN],
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
            "name": "长城金生肖版 200g",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [11.75, 12.765, 13.69, 12.125, NaN, NaN, 13.135, 12.025, 13.305, 12.755, 12.09, NaN, NaN, 14.36, 14.885, 13.285, NaN, NaN, 12.285, 12.485, 12.74, 12.095, 11.09, NaN, NaN, 10.375, 10.99, 8.995, 13.385, NaN, NaN, 11.62, 10.185, 14.355, 11.35, 12.93, NaN, NaN, NaN, 13.08, 12.12, 12.78, NaN, 8.65, 10.6, 11.31, 12.71, NaN, NaN, 16.095, 12.345, 11.14, 12.405, 12.885, NaN, 13.175, 13.61, 12.18, 10.45, 11.75, NaN, NaN, 11.67, 14.01, NaN, NaN, NaN],
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
            "name": "长城金生肖版 20g",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [15.75, 16.765, 17.72, 16.145, NaN, NaN, 17.175, 16.035, 17.31, 16.76, 16.12, NaN, NaN, 18.39, 18.89, 17.32, NaN, NaN, 16.305, 16.485, 16.75, 16.13, 15.125, NaN, NaN, 14.375, 15.03, 13.015, 17.415, NaN, NaN, 15.625, 14.195, 18.355, 15.355, 16.925, NaN, NaN, NaN, 17.075, 16.12, 16.8, NaN, 12.69, 14.63, 15.335, 16.745, NaN, NaN, 20.115, 16.375, 15.145, 16.41, 16.915, NaN, 17.205, 17.64, 16.215, 14.47, 15.75, NaN, NaN, 15.71, 18.03, NaN, NaN, NaN],
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
            "name": "长城金生肖版 30g",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [15.75, 16.765, 17.703, 16.128, NaN, NaN, 17.158, 16.035, 17.327, 16.777, 16.12, NaN, NaN, 18.39, 18.907, 17.303, NaN, NaN, 16.288, 16.485, 16.75, 16.113, 15.108, NaN, NaN, 14.375, 14.997, 12.998, 17.415, NaN, NaN, 15.625, 14.195, 18.355, 15.372, 16.942, NaN, NaN, NaN, 17.092, 16.12, 16.783, NaN, 12.657, 14.63, 15.335, 16.712, NaN, NaN, 20.115, 16.375, 15.145, 16.41, 16.915, NaN, 17.205, 17.64, 16.198, 14.47, 15.75, NaN, NaN, 15.677, 18.013, NaN, NaN, NaN],
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
            "name": "长城金生肖版 500g",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [11.75, 12.765, 13.69, 12.125, NaN, NaN, 13.135, 12.025, 13.3, 12.75, 12.09, NaN, NaN, 14.36, 14.88, 13.28, NaN, NaN, 12.285, 12.485, 12.74, 12.09, 11.085, NaN, NaN, 10.375, 10.99, 8.995, 13.385, NaN, NaN, 11.615, 10.185, 14.355, 11.345, 12.925, NaN, NaN, NaN, 13.075, 12.12, 12.78, NaN, 8.65, 10.6, 11.305, 12.705, NaN, NaN, 16.095, 12.345, 11.135, 12.4, 12.885, NaN, 13.175, 13.61, 12.175, 10.45, 11.75, NaN, NaN, 11.67, 14.01, NaN, NaN, NaN],
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
            "name": "长城金生肖版 50g",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [11.75, 12.765, 13.69, 12.135, NaN, NaN, 13.145, 12.035, 13.32, 12.77, 12.1, NaN, NaN, 14.37, 14.9, 13.29, NaN, NaN, 12.295, 12.485, 12.75, 12.1, 11.095, NaN, NaN, 10.375, 10.99, 9.005, 13.395, NaN, NaN, 11.625, 10.195, 14.355, 11.365, 12.935, NaN, NaN, NaN, 13.085, 12.12, 12.79, NaN, 8.65, 10.61, 11.315, 12.725, NaN, NaN, 16.095, 12.355, 11.145, 12.41, 12.895, NaN, 13.185, 13.62, 12.185, 10.45, 11.75, NaN, NaN, 11.67, 14.02, NaN, NaN, NaN],
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
        }],
        "color": ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0", "#85ca36", "#1c9925", "#0d8b5f", "#0f9cd3", "#2f7e9b", "#2f677d", "#9b7fed", "#7453d6", "#3b1d98", "#27abb1", "#017377", "#015f63", "#b86868", "#5669b7", "#e5aab4", "#60b65f", "#98d2b2", "#c9c8bc", "#45c3dc", "#e17979", "#5baa5a", "#eaccc2", "#ffaa74"]
    };