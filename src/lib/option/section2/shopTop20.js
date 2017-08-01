export default {
    "title" : [
        {
            "text": "京东市场热度TOP20贵金属商铺",
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
        }
    ],
    "tooltip" : {
        "backgroundColor": "rgba(255,255,255,0.95)",
        "extraCssText": "padding:20px;color:#999;border-radius:5px;box-shadow: 0 0 7px rgba(0, 0, 0, 0.6)" +
                ";",
        "textStyle": {
            "color": "#333"
        },
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "grid" : {
        "left": "5%",
        "right": "15%",
        "top": "8%",
        "bottom": "10%",
        "containLabel": true
    },
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
    "legend" : {
        "orient": "vertical",
        "x2": "5%",
        "data": [
            {
                "name": "COISE旗舰店",
                "icon": "pin"
            }, {
                "name": "JPF旗舰店",
                "icon": "pin"
            }, {
                "name": "MAO.MAO旗舰店",
                "icon": "pin"
            }, {
                "name": "TSL谢瑞麟官方旗舰店",
                "icon": "pin"
            }, {
                "name": "fate love饰品官方旗舰店",
                "icon": "pin"
            }, {
                "name": "中邮收藏旗舰店",
                "icon": "pin"
            }, {
                "name": "凡·碧缇旗舰店",
                "icon": "pin"
            }, {
                "name": "周大福京东旗舰店",
                "icon": "pin"
            }, {
                "name": "周生生京东旗舰店",
                "icon": "pin"
            }, {
                "name": "唯一珠宝旗舰店",
                "icon": "pin"
            }, {
                "name": "月下珠宝旗舰店",
                "icon": "pin"
            }, {
                "name": "月石缘官方旗舰店",
                "icon": "pin"
            }, {
                "name": "炙真银楼官方旗舰店",
                "icon": "pin"
            }, {
                "name": "炫银部落旗舰店",
                "icon": "pin"
            }, {
                "name": "瑞诺专卖店",
                "icon": "pin"
            }, {
                "name": "瑞诺旗舰店",
                "icon": "pin"
            }, {
                "name": "甲源收藏品专营店",
                "icon": "pin"
            }, {
                "name": "缔晶旗舰店",
                "icon": "pin"
            }, {
                "name": "菜百首饰旗舰店",
                "icon": "pin"
            }, {
                "name": "豪至尊银饰旗舰店",
                "icon": "pin"
            }
        ],
        "x": "right",
        "left": "right",
        "y": 40
    },
    "series" : [
        {
            "name": "京东商铺",
            "type": "pie",
            "selectedMode": "single",
            "radius": [
                0, "80%"
            ],
            "data": [
                {
                    "value": "431405.00",
                    "name": "周生生京东旗舰店"
                }, {
                    "value": "259305.00",
                    "name": "周大福京东旗舰店"
                }, {
                    "value": "103024.00",
                    "name": "菜百首饰旗舰店"
                }, {
                    "value": "71506.00",
                    "name": "炫银部落旗舰店"
                }, {
                    "value": "62700.00",
                    "name": "COISE旗舰店"
                }, {
                    "value": "54636.00",
                    "name": "JPF旗舰店"
                }, {
                    "value": "51112.00",
                    "name": "缔晶旗舰店"
                }, {
                    "value": "50752.00",
                    "name": "瑞诺旗舰店"
                }, {
                    "value": "48302.00",
                    "name": "凡·碧缇旗舰店"
                }, {
                    "value": "44850.00",
                    "name": "MAO.MAO旗舰店"
                }, {
                    "value": "43779.00",
                    "name": "炙真银楼官方旗舰店"
                }, {
                    "value": "41329.00",
                    "name": "月下珠宝旗舰店"
                }, {
                    "value": "40209.00",
                    "name": "TSL谢瑞麟官方旗舰店"
                }, {
                    "value": "39943.00",
                    "name": "瑞诺专卖店"
                }, {
                    "value": "37406.00",
                    "name": "豪至尊银饰旗舰店"
                }, {
                    "value": "35759.00",
                    "name": "中邮收藏旗舰店"
                }, {
                    "value": "35741.00",
                    "name": "fate love饰品官方旗舰店"
                }, {
                    "value": "35606.00",
                    "name": "甲源收藏品专营店"
                }, {
                    "value": "34604.00",
                    "name": "月石缘官方旗舰店"
                }, {
                    "value": "33838.00",
                    "name": "唯一珠宝旗舰店"
                }
            ],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            },
            "center": [
                "50%", "50%"
            ],
            "labelLine": {
                "normal": {
                    "show": true,
                    "length2": 10,
                    "length": 15
                }
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