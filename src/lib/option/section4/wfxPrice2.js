var data = ["2017熊猫精致银币150g", "2017熊猫精致银币1kg", "2017版熊猫金币五枚套装", "“金鸡送福”生肖大银章(1000g)", "熊猫金币发行35周年套装", "一宫两陵银章套装"];
var option = {
  "title": [{
    "text": "沈币商品价格趋势(500元以上)",
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
  }],
  "legend": {
    selected:{
      "“吉祥如意”肖鸡贺岁银盘":false,
      "“富贵大吉”肖鸡贺岁银条":false,
      "“金鸡送宝”吊坠(12g)":false,
      "吉羊含穗银章":false,
      "平安扣吊坠(12g)":false,
      "母爱 纯银心形吊坠":false,
      "熊猫金币发行35周年":false,
      "生肖鸡年彩色银章(15g)":false,
      "鸡年贺岁彩色银条":false
    },
    data: data,
    "x2": "5%",
    "y": 50,
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
    "data": ["2017-04-18 01:39:10", "2017-04-18 02:34:25", "2017-04-19 00:05:05", "2017-04-20 18:31:47", "2017-04-22 00:44:55", "2017-04-23 16:31:32", "2017-04-24 20:57:35", "2017-04-25 21:01:56", "2017-04-26 20:02:24", "2017-04-27 19:42:56", "2017-04-28 20:41:12", "2017-04-30 19:31:23", "2017-05-02 00:24:53", "2017-05-03 19:50:56", "2017-05-04 19:46:46", "2017-05-05 22:18:19", "2017-05-06 22:00:30", "2017-05-07 09:01:09", "2017-05-08 20:00:40", "2017-05-09 19:53:09", "2017-05-10 18:54:30", "2017-05-11 19:09:18", "2017-05-12 14:56:40", "2017-05-13 21:44:50", "2017-05-15 00:11:37", "2017-05-16 22:23:38", "2017-05-17 19:17:24", "2017-05-18 19:44:22", "2017-05-19 21:09:01", "2017-05-20 18:05:08", "2017-05-21 19:46:28", "2017-05-22 12:09:23", "2017-05-23 13:05:21", "2017-05-24 14:23:40", "2017-05-25 13:05:59", "2017-05-26 14:03:53", "2017-05-27 20:37:54", "2017-05-28 20:46:58", "2017-05-30 12:45:03", "2017-05-31 19:31:11", "2017-06-01 21:29:10", "2017-06-02 19:07:35", "2017-06-04 19:35:08", "2017-06-05 13:01:13", "2017-06-06 15:29:01", "2017-06-07 12:31:30", "2017-06-09 00:35:17", "2017-06-10 12:03:25", "2017-06-11 21:42:45", "2017-06-12 20:32:11", "2017-06-13 19:09:18", "2017-06-14 20:06:09", "2017-06-15 20:41:47", "2017-06-17 15:27:01", "2017-06-18 22:21:46", "2017-06-19 00:44:02", "2017-06-20 20:09:14", "2017-06-21 19:26:56", "2017-06-22 20:25:23", "2017-06-23 22:44:05", "2017-06-24 19:06:57", "2017-06-25 11:44:33", "2017-06-26 19:52:04", "2017-06-29 00:09:53", "2017-06-30 21:58:33", "2017-07-01 10:44:31", "2017-07-02 11:29:46"]
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
    "name": "2017熊猫精致银币150g",
    "type": "line",
    "smooth": false,
    "barMaxWidth": "100",
    "barMinHeight": 15,
    "data": ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", 1250, 1250, 1250, 1250, 1250, 1250, 1250, 1250, 1500, 1500, 1500],
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
    },
    "step": "end"
  }, {
    "name": "2017熊猫精致银币1kg",
    "type": "line",
    "smooth": false,
    "barMaxWidth": "100",
    "barMinHeight": 15,
    "data": ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 7000, 7000, 7000],
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
    },
    "step": "end"
  }, {
    "name": "2017版熊猫金币五枚套装",
    "type": "line",
    "smooth": false,
    "barMaxWidth": "100",
    "barMinHeight": 15,
    "data": ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", 17000, 17000, 17000, 17000, 17000, 17000, 17000, 17000, 17000, 17000, 17000, 17000, 17000, 17000, 17000, 17000, 17000, 17000, 17000, 17000, 17200, 17200, 17200, 17200, 17200, 17200, 17200, 17200, 17200, 17200, 17200, 17200, 17200, 17200, 17200, 17200, 17200, 17200, 17200, 17200, 17200, 17200, 17200, 17200],
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
    },
    "step": "end"
  }, {
    "name": "“吉祥如意”肖鸡贺岁银盘",
    "type": "line",
    "smooth": false,
    "barMaxWidth": "100",
    "barMinHeight": 15,
    "data": [340, 306, 306, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 272, 272, 272, 272, 272, 272, 272, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 272, 272, 272, 272, 272, 272, 272, 272, 272, 340, 340, 340, 340, 340, 340, 272, 272, 272, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340],
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
    },
    "step": "end"
  }, {
    "name": "“富贵大吉”肖鸡贺岁银条",
    "type": "line",
    "smooth": false,
    "barMaxWidth": "100",
    "barMinHeight": 15,
    "data": [255, 230, 230, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 204, 204, 204, 204, 204, 204, 204, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 204, 204, 204, 204, 204, 204, 204, 204, 204, 255, 255, 255, 255, 255, 255, 204, 204, 204, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
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
    },
    "step": "end"
  }, {
    "name": "“金鸡送宝”吊坠(12g)",
    "type": "line",
    "smooth": false,
    "barMaxWidth": "100",
    "barMinHeight": 15,
    "data": [169, 152, 152, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 130, 130, 130, 130, 130, 130, 130, 130, 130, 169, 169, 169, 169, 169, 169, "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", 169, 169, 169, 169],
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
    },
    "step": "end"
  }, {
    "name": "“金鸡送福”生肖大银章(1000g)",
    "type": "line",
    "smooth": false,
    "barMaxWidth": "100",
    "barMinHeight": 15,
    "data": [8000, 7200, 7200, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000],
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
    },
    "step": "end"
  }, {
    "name": "一宫两陵银章套装",
    "type": "line",
    "smooth": false,
    "barMaxWidth": "100",
    "barMinHeight": 15,
    "data": [855, 770, 770, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855, 855],
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
    },
    "step": "end"
  }, {
    "name": "吉羊含穗银章",
    "type": "line",
    "smooth": false,
    "barMaxWidth": "100",
    "barMinHeight": 15,
    "data": [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 240, 240, 240, 240, 240, 240, 240, 300, 300, 300, "-", 300, 300, 300, 300, 300, 300, 240, 240, 240, 240, 240, 240, 240, 240, 240, 300, 300, 300, 300, 300, 300, 240, 240, 240, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
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
    },
    "step": "end"
  }, {
    "name": "平安扣吊坠(12g)",
    "type": "line",
    "smooth": false,
    "barMaxWidth": "100",
    "barMinHeight": 15,
    "data": [168, 151, 151, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168],
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
    },
    "step": "end"
  }, {
    "name": "母爱 纯银心形吊坠",
    "type": "line",
    "smooth": false,
    "barMaxWidth": "100",
    "barMinHeight": 15,
    "data": [168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
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
    },
    "step": "end"
  }, {
    "name": "熊猫金币发行35周年",
    "type": "line",
    "smooth": false,
    "barMaxWidth": "100",
    "barMinHeight": 15,
    "data": ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", 330, 330, 330, 330, 350, 350, 350, 350, 350, 350, 350, "-", "-", "-", "-"],
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
    },
    "step": "end"
  }, {
    "name": "熊猫金币发行35周年套装",
    "type": "line",
    "smooth": false,
    "barMaxWidth": "100",
    "barMinHeight": 15,
    "data": ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", 3135, 3135, 3135, 3135, 3200, "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
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
    },
    "step": "end"
  }, {
    "name": "生肖鸡年彩色银章(15g)",
    "type": "line",
    "smooth": false,
    "barMaxWidth": "100",
    "barMinHeight": 15,
    "data": [163, 147, 147, 163, 163, 163, 163, 163, 163, 163, 163, 163, 163, 163, 163, 163, 163, 163, 130, 130, 130, 130, 130, 130, 130, 163, 163, 163, "-", 163, 163, 163, 163, 163, 163, 130, 130, 130, 130, 130, 130, 130, 130, 130, 163, 163, 163, 163, 163, 163, 130, 130, 130, 163, 163, 163, 163, 163, 163, 163, 163, 163, 163, 163, 163, 163, 163],
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
    },
    "step": "end"
  }, {
    "name": "鸡年贺岁彩色银条",
    "type": "line",
    "smooth": false,
    "barMaxWidth": "100",
    "barMinHeight": 15,
    "data": ["-", "-", "-", "-", "-", "-", "-", "-", 345, 345, 345, 345, 345, 345, 345, 345, 345, 345, 276, 276, 276, 276, 276, 276, 276, 345, 345, 345, "-", 345, 345, 345, 345, 345, 345, 276, 276, 276, 276, 276, 276, 276, 276, 276, 345, 345, 345, 345, 345, 345, 276, 276, 276, 345, 345, 345, 345, 345, 345, 345, 345, 345, 345, 345, 345, 345, 345],
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
    },
    "step": "end"
  }],
  "color": ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0", "#85ca36", "#1c9925", "#0d8b5f", "#0f9cd3", "#2f7e9b", "#2f677d", "#9b7fed", "#7453d6", "#3b1d98", "#27abb1", "#017377", "#015f63", "#b86868", "#5669b7", "#e5aab4", "#60b65f", "#98d2b2", "#c9c8bc", "#45c3dc", "#e17979", "#5baa5a", "#eaccc2", "#ffaa74"]
};

export default option;