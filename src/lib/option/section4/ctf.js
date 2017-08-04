export default  {
        "title": [{
            "text": "周大福商品价格变化情况",
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
                "fontSize": 14,
                "fontWeight": "normal"
            },
            "x2": 10,
            "y2": 3
        }],
        "tooltip": {
            "backgroundColor": "rgba(255,255,255,0.95)",
            "extraCssText": "padding:20px;color:#999;border-radius:5px;box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);",
            "textStyle": {
                "color": "#333"
            },
            "trigger": "item",
            "formatter": "{a} <br/>{b}: {c} ({d}%)"
        },
        "grid": {
            "left": "5%",
            "right": "5%",
            "top": "8%",
            "bottom": "10%",
            "containLabel": true
        },
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
        "legend": {
            "orient": "vertical",
            "x2": "5%",
            "data": [{
                "name": "价格类型",
                "icon": "pin"
            }, {
                "name": "计价类型",
                "icon": "pin"
            }]
        },
        "series": [{
            "name": "价格类型",
            "type": "pie",
            "selectedMode": "single",
            "radius": ["5%", "40%"],
            "data": [{
                "value": "1428.00",
                "name": "价格变化",
                "itemStyle": {
                    "normal": {
                        "color": "#61A5E8"
                    }
                }
            }, {
                "value": "241.00",
                "name": "价格固定",
                "itemStyle": {
                    "normal": {
                        "color": "#7ECF51"
                    }
                }
            }],
            "label": {
                "normal": {
                    "show": true,
                    "position": "inner"
                }
            },
            "itemStyle": {
                "normal": {
                    "borderColor": "#fbfbfb",
                    "borderWidth": 1,
                    "opacity": 1
                },
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }, {
            "name": "计价类型",
            "type": "pie",
            "selectedMode": "single",
            "radius": ["40%", "80%"],
            "data": [{
                "value": "910.00",
                "name": "定价类",
                "itemStyle": {
                    "normal": {
                        "color": "#61A5E8"
                    }
                }
            }, {
                "value": "518.00",
                "name": "计价类",
                "itemStyle": {
                    "normal": {
                        "color": "#61A5E8"
                    }
                }
            }, {
                "value": "239.00",
                "name": "定价类",
                "itemStyle": {
                    "normal": {
                        "color": "#7ECF51"
                    }
                }
            }, {
                "value": "2.00",
                "name": "计价类",
                "itemStyle": {
                    "normal": {
                        "color": "#7ECF51"
                    }
                }
            }],
            "label": {
                "normal": {
                    "show": true,
                    "position": "inner"
                }
            },
            "itemStyle": {
                "normal": {
                    "borderColor": "#fbfbfb",
                    "borderWidth": 1,
                    "opacity": 0.9
                },
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }],
        "color": ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0", "#85ca36", "#1c9925", "#0d8b5f", "#0f9cd3", "#2f7e9b", "#2f677d", "#9b7fed", "#7453d6", "#3b1d98", "#27abb1", "#017377", "#015f63", "#b86868", "#5669b7", "#e5aab4", "#60b65f", "#98d2b2", "#c9c8bc", "#45c3dc", "#e17979", "#5baa5a", "#eaccc2", "#ffaa74"]
    };