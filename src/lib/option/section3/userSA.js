export default {
        "title": [{
            "text": "用户评价情绪分布(平均评分4.5星以上产品)",
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
            "data": [{
                "name": "0.5及以下",
                "icon": "pin"
            }, {
                "name": "0.6",
                "icon": "pin"
            }, {
                "name": "0.7",
                "icon": "pin"
            }, {
                "name": "0.8",
                "icon": "pin"
            }, {
                "name": "0.9",
                "icon": "pin"
            }, {
                "name": "1.0",
                "icon": "pin"
            }],
            "x": "right",
            "left": "right",
            "y": 40
        },
        "series": [{
            "name": "情绪得分",
            "type": "pie",
            "selectedMode": "single",
            "radius": [0, "80%"],
            "data": [{
                "value": 42.00 + 76.00 + 122.00 + 136.00 + 210.00 + 813.00,
                "name": "0.5及以下"
            }, {
                "value": "1139.00",
                "name": "0.6"
            }, {
                "value": "3612.00",
                "name": "0.7"
            }, {
                "value": "12943.00",
                "name": "0.8"
            }, {
                "value": "17643.00",
                "name": "0.9"
            }, {
                "value": "8239.00",
                "name": "1.0"
            }],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
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
        // "color": ["rgb(60,72,92)", "rgb(243,111,91)", "rgb(38,185,139)", "rgb(68,68,68)", "#998899", "rgb(148,205,97)", "rgb(138,148,184)", "rgb(45,164,168)", "rgb(141,74,143)", "rgb(67,87,114)", "rgb(254,167,67)", "rgb(106,117,141)", "rgb(207,34,87)", "rgb(207,97,80)", "rgb(143,167,133)", "rgb(71,74,83)", "rgb(138,143,146)", "rgb(218,61,61)", "rgb(113,37,86)", "rgb(228,108,96)", "rgb(185,61,95)", "rgb(92,151,180)", "rgb(52,184,170)", "rgb(252,192,104)", "rgb(60,207,227)", "rgb(235,56,38)", "rgb(98,201,145)"]
    };