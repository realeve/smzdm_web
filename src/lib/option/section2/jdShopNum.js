export default {
    "title" : [
        {
            "text": "京东各地店铺数量",
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
            "end": 40
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
        "data": ["数量"],
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
            "name": "地区",
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
            "boundaryGap": true,
            data: [
                '深圳',
                '北京',
                '上海',
                '广州',
                '厦门',
                '佛山',
                '东莞',
                '莆田',
                '山东',
                '武汉',
                '成都',
                '石狮',
                '贵州',
                '杭州',
                '南京',
                '苏州',
                '义乌',
                '浙江',
                '重庆',
                '福建',
                '广东',
                '哈尔滨',
                '河南',
                '青岛',
                '陕西',
                '沈阳',
                '威海',
                '温州',
                '无锡',
                '云南',
                '安徽',
                '福州',
                '河北',
                '鹤庆',
                '湖北',
                '湖南',
                '淮安',
                '惠州',
                '济南',
                '济源',
                '江苏',
                '廊坊',
                '丽江',
                '洛阳',
                '马鞍山',
                '秦皇岛',
                '泉州',
                '汕头',
                '绍兴',
                '石家庄',
                '天津',
                '潍坊',
                '扬州',
                '诸暨'
            ]

        }
    ],
    "yAxis" : [
        {
            "name": "店铺数",
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
            "type": "bar",
            "barMaxWidth": "100",
            "barMinHeight": 15,
            data: [
                148,
                46,
                35,
                15,
                7,
                6,
                5,
                5,
                5,
                5,
                4,
                4,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
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
            "symbolSize": "12",
            "sampling": "average",
            "symbol": "circle",
            "lineStyle": {
                "normal": {
                    "width": 3,
                    "type": "solid",
                    "shadowColor": "rgba(0,0,0,0)",
                    "shadowBlur": 0,
                    "shadowOffsetX": 0,
                    "shadowOffsetY": 0
                }
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "insideTop"
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