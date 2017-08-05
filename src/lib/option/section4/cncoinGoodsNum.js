
    var data = ["6", "2", "11", "2", "1", "1", "1", "1", "2", "3", "1", "1", "6", "1", "2", "3", "1", "1", "4", "1", "1", "5", "2", "2", "2", "1", "2", "1", "1", "2", "2", "6", "4", "2", "1", "6", "5", "1", "1", "1", "3", "4", "2", "1", "1", "3", "1", "1", "6", "1", "12", "14", "1", "9", "1", "2", "3", "2", "1", "1", "1", "7", "1", "3"];
    var xData = ["2015-08-17", "2015-08-18", "2015-08-19", "2015-08-20", "2015-08-21", "2015-09-10", "2015-09-16", "2015-09-24", "2015-09-29", "2015-09-30", "2015-10-08", "2015-10-22", "2015-10-23", "2015-11-04", "2015-11-07", "2015-11-08", "2015-11-11", "2015-11-13", "2015-11-17", "2015-12-15", "2016-01-14", "2016-03-09", "2016-04-06", "2016-04-12", "2016-04-19", "2016-05-09", "2016-05-12", "2016-05-19", "2016-05-25", "2016-06-15", "2016-07-12", "2016-07-19", "2016-08-09", "2016-08-11", "2016-09-21", "2016-09-28", "2016-09-29", "2016-10-18", "2016-10-26", "2016-10-27", "2016-10-28", "2016-11-02", "2016-11-04", "2016-11-05", "2016-11-06", "2016-12-06", "2017-01-05", "2017-01-06", "2017-01-11", "2017-02-24", "2017-03-02", "2017-03-10", "2017-03-16", "2017-03-17", "2017-04-07", "2017-04-11", "2017-04-18", "2017-04-28", "2017-05-13", "2017-05-19", "2017-06-07", "2017-06-09", "2017-06-15", "2017-06-20"];

    var curData = [];
    data.forEach((item, i) => {
        item = parseInt(item);
        item = (i > 0 ? item + curData[i - 1][1] : item);
        curData.push([xData[i], item]);
    });
    export default {
        "title": [{
            "text": "中国金币商品数量",
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
            "data": ["数量"],
            "x2": "5%",
            "y": 40,
            "itemGap": 20,
            "textStyle": {
                "fontSize": 16
            },
            "show": false
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
            "type": "time",
            "boundaryGap": false,
            // "data": xData
        }],
        "yAxis": [{
            "name": "数量",
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
            "name": "数量",
            "type": "line",
            step: 'end',
            //"smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": curData,
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
                    "show": false,
                    "position": "top"
                }
            }
        }],
        "color": ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0", "#85ca36", "#1c9925", "#0d8b5f", "#0f9cd3", "#2f7e9b", "#2f677d", "#9b7fed", "#7453d6", "#3b1d98", "#27abb1", "#017377", "#015f63", "#b86868", "#5669b7", "#e5aab4", "#60b65f", "#98d2b2", "#c9c8bc", "#45c3dc", "#e17979", "#5baa5a", "#eaccc2", "#ffaa74"]
    }
