export default  {
            "title": [{
                "text": "京东历年贵金属销售总量比较",
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
                "right": "15%",
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
                show:0,
                "data": [{
                    "name": "2010",
                    "icon": "pin"
                }, {
                    "name": "2011",
                    "icon": "pin"
                }, {
                    "name": "2012",
                    "icon": "pin"
                }, {
                    "name": "2013",
                    "icon": "pin"
                }, {
                    "name": "2014",
                    "icon": "pin"
                }, {
                    "name": "2015",
                    "icon": "pin"
                }, {
                    "name": "2016",
                    "icon": "pin"
                }, {
                    "name": "2017",
                    "icon": "pin"
                }],
                "x": "right",
                "left": "right",
                "y": 40
            },
            "series": [{
                "name": "year",
                "type": "pie",
                "selectedMode": "single",
                "radius": [0, "80%"],
                "data": [{
                    "value": "17.00",
                    "name": "2010"
                }, {
                    "value": "2199.00",
                    "name": "2011"
                }, {
                    "value": "44137.00",
                    "name": "2012"
                }, {
                    "value": "127611.00",
                    "name": "2013"
                }, {
                    "value": "392033.00",
                    "name": "2014"
                }, {
                    "value": "850072.00",
                    "name": "2015"
                }, {
                    "value": "996512.00",
                    "name": "2016",
                    selected:true
                }, {
                    "value": "385086.00",
                    "name": "2017"
                }],
                "itemStyle": {
                    "emphasis": {
                        "shadowBlur": 10,
                        "shadowOffsetX": 0,
                        "shadowColor": "rgba(0, 0, 0, 0.5)"
                    }
                },
                label: {
                    normal: {
                        position: 'inner',
                        formatter: function (param) {
                            if (param.percent > 10) {
                                return `${param.name}年\n\n${parseInt(param.value)} ( ${param.percent}% )`;
                            }else{
                                return ''
                            }
                        },
                        textStyle: {
                            fontSize: 18
                        }
                    }
                },
                "center": ["50%", "50%"],
                "labelLine": {
                    "normal": {
                        "show": true,
                        "length2": 10,
                        "length": 15
                    }
                }
            }],
            "color": ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0", "#85ca36", "#1c9925", "#0d8b5f", "#0f9cd3", "#2f7e9b", "#2f677d", "#9b7fed", "#7453d6", "#3b1d98", "#27abb1", "#017377", "#015f63", "#b86868", "#5669b7", "#e5aab4", "#60b65f", "#98d2b2", "#c9c8bc", "#45c3dc", "#e17979", "#5baa5a", "#eaccc2", "#ffaa74"]
        };