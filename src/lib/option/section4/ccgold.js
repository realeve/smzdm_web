export default  {
        "title": [{
            "text": "中钞贵金属商品价格趋势",
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
            "show": true,
            "yAxisIndex": 0,
            "filterMode": "empty",
            "width": 20,
            "height": "70%",
            "handleSize": 25,
            "showDataShadow": false,
            "right": 5,
            "textStyle": {
                "color": "#8392A5"
            },
              start:0,
              end:40,
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
        // "legend": {
        //     "data": ["执·念 纯银手串", "熊猫金币2017", "长城金 100g", "长城金 10g", "长城金 200g", "长城金 20g", "长城金 30g", "长城金 500g", "长城金 50g", "长城金1000g", "长城金生肖版 100g", "长城金生肖版 10g", "长城金生肖版 200g", "长城金生肖版 20g", "长城金生肖版 30g", "长城金生肖版 500g", "长城金生肖版 50g"],
        //     "x2": "5%",
        //     "y": 40,
        //     "itemGap": 20,
        //     "textStyle": {
        //         "fontSize": 16
        //     },
        //     "show": true,
        //     "orient": "vertical",
        //     "x": "right",
        //     "left": "right"
        // },
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
            "data": ["20170416", "20170417", "20170418", "20170420", "20170421", "20170422", "20170423", "20170424", "20170425", "20170426", "20170427", "20170428", "20170430", "20170502", "20170503", "20170504", "20170505", "20170506", "20170507", "20170508", "20170509", "20170510", "20170511", "20170512", "20170513", "20170515", "20170516", "20170517", "20170518", "20170519", "20170520", "20170521", "20170522", "20170523", "20170524", "20170525", "20170526", "20170527", "20170528", "20170530", "20170531", "20170601", "20170602", "20170604", "20170605", "20170606", "20170607", "20170609", "20170610", "20170611", "20170612", "20170613", "20170614", "20170615", "20170617", "20170618", "20170619", "20170620", "20170621", "20170622", "20170623", "20170624", "20170625", "20170626", "20170629", "20170630", "20170702"]
        }],
        "yAxis": [{
            "name": "价格",
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
            "name": "执·念 纯银手串",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 280, 280, 280, 280, 280, 280, 280, 280, 280, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299, 299],
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
            "name": "熊猫金币2017",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [17611, 17611, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999, 17999],
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
            "name": "长城金 100g",
            "type": "line",
            "smooth": true,
            "barMaxWidth": "100",
            "barMinHeight": 15,
            "data": [29580, 29580, 29662, 29423, 29423, 29411, 29411, 29249, 29255, 29255, 29177, 29167, 29167, 29167, 28905, 28542, 28473, 28473, 28473, 28430, 28359, 28292, 28292, 28292, 28390, 28390, 28556, 28663, 28967, 28830, 28830, 28830, 28859, 29040, 28855, 28936, 28936, 28936, 28936, 28936, 28790, 28793, 28696, 28696, 29027, 29198, 29267, 29178, 29178, 29178, 28767, 28730, 28730, 28637, 28637, 28637, 28637, 28492, 28478, 28630, 28676, 28676, 28676, 28703, 28526, 28200, 28200],
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
            "data": [2968, 2968, 2977, 2953, 2953, 2952, 2952, 2935, 2936, 2936, 2928, 2927, 2927, 2927, 2901, 2865, 2858, 2858, 2858, 2853, 2846, 2840, 2840, 2840, 2849, 2849, 2866, 2877, 2907, 2893, 2893, 2893, 2896, 2914, 2896, 2904, 2904, 2904, 2904, 2904, 2889, 2890, 2880, 2880, 2913, 2930, 2937, 2928, 2928, 2928, 2887, 2883, 2883, 2874, 2874, 2874, 2874, 2860, 2858, 2873, 2878, 2878, 2878, 2881, 2863, 2830, 2830],
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
            "data": [59160, 59160, 59324, 58846, 58846, 58822, 58822, 58498, 58509, 58509, 58354, 58334, 58334, 58334, 57809, 57083, 56946, 56946, 56946, 56860, 56718, 56583, 56583, 56583, 56780, 56780, 57112, 57326, 57934, 57659, 57659, 57659, 57718, 58080, 57709, 57871, 57871, 57871, 57871, 57871, 57580, 57586, 57392, 57392, 58054, 58395, 58533, 58356, 58356, 58356, 57534, 57459, 57459, 57274, 57274, 57274, 57274, 56983, 56956, 57260, 57352, 57352, 57352, 57406, 57052, 56400, 56400],
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
            "data": [5936, 5936, 5953, 5905, 5905, 5903, 5903, 5870, 5871, 5871, 5856, 5854, 5854, 5854, 5801, 5729, 5715, 5715, 5715, 5706, 5692, 5679, 5679, 5679, 5698, 5698, 5732, 5753, 5814, 5786, 5786, 5786, 5792, 5828, 5791, 5807, 5807, 5807, 5807, 5807, 5778, 5778, 5760, 5760, 5826, 5860, 5874, 5856, 5856, 5856, 5774, 5766, 5766, 5748, 5748, 5748, 5748, 5719, 5716, 5746, 5756, 5756, 5756, 5761, 5726, 5660, 5660],
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
            "data": [8904, 8904, 8929, 8857, 8857, 8854, 8854, 8805, 8807, 8807, 8784, 8781, 8781, 8781, 8702, 8593, 8572, 8572, 8572, 8559, 8538, 8518, 8518, 8518, 8547, 8547, 8597, 8629, 8721, 8679, 8679, 8679, 8688, 8742, 8687, 8711, 8711, 8711, 8711, 8711, 8667, 8667, 8639, 8639, 8739, 8790, 8810, 8784, 8784, 8784, 8661, 8649, 8649, 8622, 8622, 8622, 8622, 8578, 8574, 8619, 8633, 8633, 8633, 8641, 8588, 8490, 8490],
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
            "data": [147900, 147900, 148310, 147115, 147115, 147055, 147055, 146245, 146270, 146270, 145885, 145835, 145835, 145835, 144520, 142705, 142365, 142365, 142365, 142150, 141795, 141455, 141455, 141455, 141950, 141950, 142780, 143315, 144835, 144145, 144145, 144145, 144295, 145200, 144270, 144675, 144675, 144675, 144675, 144675, 143950, 143965, 143480, 143480, 145135, 145985, 146330, 145890, 145890, 145890, 143835, 143645, 143645, 143185, 143185, 143185, 143185, 142455, 142390, 143150, 143380, 143380, 143380, 143515, 142630, 141000, 141000],
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
            "data": [14790, 14790, 14831, 14712, 14712, 14706, 14706, 14625, 14628, 14628, 14589, 14584, 14584, 14584, 14453, 14271, 14237, 14237, 14237, 14215, 14180, 14146, 14146, 14146, 14195, 14195, 14278, 14332, 14484, 14415, 14415, 14415, 14430, 14520, 14428, 14468, 14468, 14468, 14468, 14468, 14395, 14397, 14348, 14348, 14514, 14599, 14634, 14589, 14589, 14589, 14384, 14365, 14365, 14319, 14319, 14319, 14319, 14246, 14239, 14315, 14338, 14338, 14338, 14352, 14263, 14100, 14100],
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
            "data": [294800, 294800, 295620, 293230, 293230, 293110, 293110, 291490, 291540, 291540, 290770, 290670, 290670, 290670, 288040, 284410, 283730, 283730, 283730, 283300, 282590, 281910, 281910, 281910, 282900, 282900, 284560, 285630, 288670, 287290, 287290, 287290, 287590, 289400, 287540, 288350, 288350, 288350, 288350, 288350, 286900, 286930, 285960, 285960, 289270, 290970, 291660, 290780, 290780, 290780, 286670, 286290, 286290, 285370, 285370, 285370, 285370, 283910, 283780, 285300, 285760, 285760, 285760, 286030, 284260, 281000, 281000],
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
            "data": [29880, 29880, 29962, 29723, 29723, 29711, 29711, 29549, 29555, 29555, 29477, 29467, 29467, 29467, 29205, 28842, 28773, 28773, 28773, 28730, 28659, 28592, 28592, 28592, 28690, 28690, 28856, 28963, 29267, 29130, 29130, 29130, 29159, 29340, 29155, 29236, 29236, 29236, 29236, 29236, 29090, 29093, 28996, 28996, 29327, 29498, 29567, 29478, 29478, 29478, 29067, 29030, 29030, 28937, 28937, 28937, 28937, 28792, 28778, 28930, 28976, 28976, 28976, 29003, 28826, 28500, 28500],
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
            "data": [3078, 3078, 3087, 3063, 3063, 3062, 3062, 3045, 3046, 3046, 3038, 3037, 3037, 3037, 3011, 2975, 2968, 2968, 2968, 2963, 2956, 2950, 2950, 2950, 2959, 2959, 2976, 2987, 3017, 3003, 3003, 3003, 3006, 3024, 3006, 3014, 3014, 3014, 3014, 3014, 2999, 3000, 2990, 2990, 3023, 3040, 3047, 3038, 3038, 3038, 2997, 2993, 2993, 2984, 2984, 2984, 2984, 2970, 2968, 2983, 2988, 2988, 2988, 2991, 2973, 2940, 2940],
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
            "data": [59760, 59760, 59924, 59446, 59446, 59422, 59422, 59098, 59109, 59109, 58954, 58934, 58934, 58934, 58409, 57683, 57546, 57546, 57546, 57460, 57318, 57183, 57183, 57183, 57380, 57380, 57712, 57926, 58534, 58259, 58259, 58259, 58318, 58680, 58309, 58471, 58471, 58471, 58471, 58471, 58180, 58186, 57992, 57992, 58654, 58995, 59133, 58956, 58956, 58956, 58134, 58059, 58059, 57874, 57874, 57874, 57874, 57583, 57556, 57860, 57952, 57952, 57952, 58006, 57652, 57000, 57000],
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
            "data": [6056, 6056, 6073, 6025, 6025, 6023, 6023, 5990, 5991, 5991, 5976, 5974, 5974, 5974, 5921, 5849, 5835, 5835, 5835, 5826, 5812, 5799, 5799, 5799, 5818, 5818, 5852, 5873, 5934, 5906, 5906, 5906, 5912, 5948, 5911, 5927, 5927, 5927, 5927, 5927, 5898, 5899, 5880, 5880, 5946, 5980, 5994, 5976, 5976, 5976, 5894, 5886, 5886, 5868, 5868, 5868, 5868, 5839, 5836, 5866, 5876, 5876, 5876, 5881, 5846, 5780, 5780],
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
            "data": [9084, 9084, 9109, 9037, 9037, 9034, 9034, 8985, 8987, 8987, 8964, 8961, 8961, 8961, 8882, 8773, 8752, 8752, 8752, 8739, 8718, 8698, 8698, 8698, 8727, 8727, 8777, 8809, 8901, 8859, 8859, 8859, 8868, 8922, 8867, 8891, 8891, 8891, 8891, 8891, 8847, 8848, 8819, 8819, 8919, 8970, 8990, 8964, 8964, 8964, 8841, 8829, 8829, 8802, 8802, 8802, 8802, 8758, 8754, 8799, 8813, 8813, 8813, 8821, 8768, 8670, 8670],
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
            "data": [149400, 149400, 149810, 148615, 148615, 148555, 148555, 147745, 147770, 147770, 147385, 147335, 147335, 147335, 146020, 144205, 143865, 143865, 143865, 143650, 143295, 142955, 142955, 142955, 143450, 143450, 144280, 144815, 146335, 145645, 145645, 145645, 145795, 146700, 145770, 146175, 146175, 146175, 146175, 146175, 145450, 145465, 144980, 144980, 146635, 147485, 147830, 147390, 147390, 147390, 145335, 145145, 145145, 144685, 144685, 144685, 144685, 143955, 143890, 144650, 144880, 144880, 144880, 145015, 144130, 142500, 142500],
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
            "data": [14940, 14940, 14981, 14862, 14862, 14856, 14856, 14775, 14778, 14778, 14739, 14734, 14734, 14734, 14603, 14421, 14387, 14387, 14387, 14365, 14330, 14296, 14296, 14296, 14345, 14345, 14428, 14482, 14634, 14565, 14565, 14565, 14580, 14670, 14578, 14618, 14618, 14618, 14618, 14618, 14545, 14547, 14498, 14498, 14664, 14749, 14784, 14739, 14739, 14739, 14534, 14515, 14515, 14469, 14469, 14469, 14469, 14396, 14389, 14465, 14488, 14488, 14488, 14502, 14413, 14250, 14250],
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