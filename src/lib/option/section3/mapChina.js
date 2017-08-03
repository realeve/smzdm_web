var data = {
  'cache': 10,
  'timing': '7.453ms',
  'rows': 32,
  'cols': 2,
  'header': [{
    'title': 'name'
  }, {
    'title': 'value'
  }],
  'data': [{
    'name': '北京',
    'value': '57254'
  }, {
    'name': '江苏',
    'value': '55941'
  }, {
    'name': '上海',
    'value': '45738'
  }, {
    'name': '广东',
    'value': '45642'
  }, {
    'name': '浙江',
    'value': '44588'
  }, {
    'name': '山东',
    'value': '44261'
  }, {
    'name': '辽宁',
    'value': '32710'
  }, {
    'name': '河北',
    'value': '28968'
  }, {
    'name': '山西',
    'value': '23782'
  }, {
    'name': '河南',
    'value': '19532'
  }, {
    'name': '安徽',
    'value': '17914'
  }, {
    'name': '福建',
    'value': '16317'
  }, {
    'name': '黑龙江',
    'value': '14620'
  }, {
    'name': '湖南',
    'value': '13869'
  }, {
    'name': '湖北',
    'value': '13767'
  }, {
    'name': '四川',
    'value': '13495'
  }, {
    'name': '江西',
    'value': '12446'
  }, {
    'name': '天津',
    'value': '12137'
  }, {
    'name': '陕西',
    'value': '11796'
  }, {
    'name': '内蒙古',
    'value': '9250'
  }, {
    'name': '吉林',
    'value': '8470'
  }, {
    'name': '甘肃',
    'value': '7489'
  }, {
    'name': '广西',
    'value': '7103'
  }, {
    'name': '重庆',
    'value': '6856'
  }, {
    'name': '云南',
    'value': '5492'
  }, {
    'name': '新疆',
    'value': '4453'
  }, {
    'name': '贵州',
    'value': '3122'
  }, {
    'name': '宁夏',
    'value': '2707'
  }, {
    'name': '海南',
    'value': '1743'
  }, {
    'name': '青海',
    'value': '1387'
  }, {
    'name': '西藏',
    'value': '221'
  }],
  'title': '中国金币各地订单',
  'source': '数据来源:smzdm'
}

var option = {
  backgroundColor: '#404a59',
  title: [{
    text: '2015-2017中国金币全国各省市销量',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  }],
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    min: 0,
    max: 40000,
    left: 'left',
    top: 'bottom',
    text: ['高', '低'],
    textStyle: {
      color: '#fff'
    },
    calculable: true,
    color: ['#aE7CeC', '#6a71ba', '#2988b8']
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      dataView: {
        readOnly: false
      },
      restore: {},
      saveAsImage: {}
    }
  },
  series: [{
    type: 'map',
    mapType: 'china',
    roam: false,
    label: {
      normal: {
        show: true
      },
      emphasis: {
        show: true
      }
    },
    data: data.data
  }]
}
export default option
