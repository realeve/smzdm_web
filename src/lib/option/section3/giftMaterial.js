export default {
        "title": [{
            "text": "礼品材质",
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
                "name": "其它",
                "icon": "pin"
            }, {
                "name": "铂金",
                "icon": "pin"
            }, {
                "name": "银",
                "icon": "pin"
            }, {
                "name": "黄金",
                "icon": "pin"
            }]
        },
        "series": [{
            "name": "type",
            "type": "pie",
            "selectedMode": "single",
            "radius": [0, "80%"],
            "data": [{
                "value": "261.00",
                "name": "其它"
            }, {
                "value": "2238.00",
                "name": "铂金"
            }, {
                "value": "4554.00",
                "name": "银"
            }, {
                "value": "14002.00",
                "name": "黄金"
            }],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            },
            "center": ["50%", "50%"],
            "label": {
                "normal": {
                    "position": "inner"
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            }
        }],
        "color": ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0", "#85ca36", "#1c9925", "#0d8b5f", "#0f9cd3", "#2f7e9b", "#2f677d", "#9b7fed", "#7453d6", "#3b1d98", "#27abb1", "#017377", "#015f63", "#b86868", "#5669b7", "#e5aab4", "#60b65f", "#98d2b2", "#c9c8bc", "#45c3dc", "#e17979", "#5baa5a", "#eaccc2", "#ffaa74"]
    };