
    var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a', '10a', '11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'
    ].map((item, i) => {
        return (i < 9 ? '0' : '') + i + ':00';
    });
    var days = ['周一', '周二', '周三',
        '周四', '周五', '周六', '周日'
    ];

    var data = [
        [0, 1, 63842],
        [0, 2, 191006],
        [0, 3, 36920],
        [0, 4, 142928],
        [0, 5, 54698],
        [0, 6, 236216],
        [0, 7, 164113],
        [1, 1, 21530],
        [1, 2, 35178],
        [1, 3, 19466],
        [1, 4, 44532],
        [1, 5, 24564],
        [1, 6, 96458],
        [1, 7, 43379],
        [2, 1, 5650],
        [2, 2, 55774],
        [2, 3, 4716],
        [2, 4, 30800],
        [2, 5, 11530],
        [2, 6, 19842],
        [2, 7, 2916],
        [3, 1, 1744],
        [3, 2, 16706],
        [3, 3, 8974],
        [3, 4, 18176],
        [3, 5, 8956],
        [3, 6, 10008],
        [3, 7, 4054],
        [4, 1, 2456],
        [4, 2, 18014],
        [4, 3, 2442],
        [4, 4, 13816],
        [4, 5, 4974],
        [4, 6, 19440],
        [4, 7, 3488],
        [5, 1, 3432],
        [5, 2, 18404],
        [5, 3, 13290],
        [5, 4, 26298],
        [5, 5, 12158],
        [5, 6, 90952],
        [5, 7, 5362],
        [6, 1, 16408],
        [6, 2, 54914],
        [6, 3, 21342],
        [6, 4, 105264],
        [6, 5, 45882],
        [6, 6, 47036],
        [6, 7, 17294],
        [7, 1, 3799136],
        [7, 2, 121898],
        [7, 3, 84334],
        [7, 4, 1448662],
        [7, 5, 118064],
        [7, 6, 119370],
        [7, 7, 44866],
        [8, 1, 3155486],
        [8, 2, 435243],
        [8, 3, 3471635],
        [8, 4, 9368309],
        [8, 5, 809156],
        [8, 6, 759702],
        [8, 7, 610458],
        [9, 1, 5779083],
        [9, 2, 20863220],
        [9, 3, 5507430],
        [9, 4, 7696141],
        [9, 5, 7232739],
        [9, 6, 1373499],
        [9, 7, 656133],
        [10, 1, 5124550],
        [10, 2, 16870488],
        [10, 3, 10955843],
        [10, 4, 7678811],
        [10, 5, 11438894],
        [10, 6, 1956415],
        [10, 7, 1475254],
        [11, 1, 4214937],
        [11, 2, 9701313],
        [11, 3, 15376994],
        [11, 4, 5561422],
        [11, 5, 8009517],
        [11, 6, 2075980],
        [11, 7, 1272464],
        [12, 1, 3082768],
        [12, 2, 5544827],
        [12, 3, 6538792],
        [12, 4, 3673576],
        [12, 5, 3085007],
        [12, 6, 1174428],
        [12, 7, 794752],
        [13, 1, 3604989],
        [13, 2, 3470900],
        [13, 3, 5359608],
        [13, 4, 3417591],
        [13, 5, 3388424],
        [13, 6, 1165795],
        [13, 7, 726180],
        [14, 1, 4861674],
        [14, 2, 5760011],
        [14, 3, 8383272],
        [14, 4, 11535405],
        [14, 5, 12098301],
        [14, 6, 1253760],
        [14, 7, 934433],
        [15, 1, 3787619],
        [15, 2, 3866312],
        [15, 3, 6747492],
        [15, 4, 7302839],
        [15, 5, 5673509],
        [15, 6, 984852],
        [15, 7, 912836],
        [16, 1, 2331518],
        [16, 2, 1535328],
        [16, 3, 3610056],
        [16, 4, 2830587],
        [16, 5, 3116037],
        [16, 6, 587722],
        [16, 7, 637689],
        [17, 1, 2220040],
        [17, 2, 447278],
        [17, 3, 1813710],
        [17, 4, 640456],
        [17, 5, 764565],
        [17, 6, 136710],
        [17, 7, 265257],
        [18, 1, 1055072],
        [18, 2, 251070],
        [18, 3, 1347767],
        [18, 4, 387199],
        [18, 5, 627421],
        [18, 6, 145260],
        [18, 7, 155266],
        [19, 1, 769214],
        [19, 2, 263479],
        [19, 3, 5295931],
        [19, 4, 274819],
        [19, 5, 627170],
        [19, 6, 138656],
        [19, 7, 177450],
        [20, 1, 708178],
        [20, 2, 212330],
        [20, 3, 959552],
        [20, 4, 218606],
        [20, 5, 500274],
        [20, 6, 191109],
        [20, 7, 157584],
        [21, 1, 754374],
        [21, 2, 232520],
        [21, 3, 795922],
        [21, 4, 267698],
        [21, 5, 590719],
        [21, 6, 218570],
        [21, 7, 231380],
        [22, 1, 487262],
        [22, 2, 175426],
        [22, 3, 643964],
        [22, 4, 224691],
        [22, 5, 295802],
        [22, 6, 216840],
        [22, 7, 122932],
        [23, 1, 275124],
        [23, 2, 114226],
        [23, 3, 353244],
        [23, 4, 128071],
        [23, 5, 250254],
        [23, 6, 121694],
        [23, 7, 690]
    ];
    data = data.map(item => {
        return [item[0], item[1] - 1, (item[2] / 10000).toFixed(2)];
    });

    data = data.map(item => {
        return [item[1], item[0], item[2]];
    });


    // 上币数据
    var data2 = [
        [0, 1, 11017],
        [0, 2, 44332],
        [0, 3, 101471],
        [0, 4, 90642],
        [0, 5, 24343],
        [0, 6, 27918],
        [0, 7, 9378],
        [1, 1, 7318],
        [1, 2, 5550],
        [1, 3, 4921],
        [1, 4, 21170],
        [1, 5, 17284],
        [1, 6, 5497],
        [1, 7, 7596],
        [2, 2, 838],
        [2, 3, 8550],
        [2, 4, 5271],
        [2, 5, 2220],
        [2, 6, 2704],
        [2, 7, 4396],
        [3, 1, 196],
        [3, 2, 688],
        [3, 3, 736],
        [3, 4, 4640],
        [3, 5, 3658],
        [3, 6, 216],
        [3, 7, 180],
        [4, 1, 2801],
        [4, 3, 2626],
        [4, 4, 3251],
        [4, 5, 574],
        [4, 6, 2864],
        [4, 7, 2900],
        [5, 1, 2008],
        [5, 3, 2443],
        [5, 4, 7900],
        [5, 5, 12217],
        [5, 6, 2153],
        [5, 7, 1468],
        [6, 1, 2466],
        [6, 2, 4810],
        [6, 3, 21474],
        [6, 4, 9842],
        [6, 5, 3844],
        [6, 6, 11948],
        [6, 7, 7236],
        [7, 1, 7138],
        [7, 2, 6438],
        [7, 3, 51093],
        [7, 4, 30106],
        [7, 5, 10944],
        [7, 6, 35695],
        [7, 7, 16683],
        [8, 1, 7127],
        [8, 2, 12356],
        [8, 3, 79138],
        [8, 4, 65464],
        [8, 5, 31665],
        [8, 6, 33446],
        [8, 7, 20622],
        [9, 1, 18209],
        [9, 2, 11266],
        [9, 3, 57036],
        [9, 4, 88652],
        [9, 5, 39291],
        [9, 6, 28417],
        [9, 7, 13017],
        [10, 1, 22045],
        [10, 2, 24611],
        [10, 3, 33170],
        [10, 4, 65830],
        [10, 5, 47990],
        [10, 6, 45626],
        [10, 7, 39564],
        [11, 1, 119274],
        [11, 2, 28452],
        [11, 3, 58566],
        [11, 4, 73365],
        [11, 5, 29785],
        [11, 6, 25619],
        [11, 7, 14228],
        [12, 1, 17575],
        [12, 2, 55986],
        [12, 3, 226182],
        [12, 4, 79642],
        [12, 5, 102006],
        [12, 6, 22790],
        [12, 7, 9870],
        [13, 1, 16402],
        [13, 2, 33480],
        [13, 3, 140183],
        [13, 4, 55567],
        [13, 5, 18723],
        [13, 6, 23225],
        [13, 7, 12768],
        [14, 1, 24576],
        [14, 2, 24486],
        [14, 3, 48988],
        [14, 4, 50695],
        [14, 5, 23194],
        [14, 6, 39682],
        [14, 7, 21586],
        [15, 1, 13019],
        [15, 2, 19431],
        [15, 3, 87184],
        [15, 4, 59500],
        [15, 5, 34572],
        [15, 6, 24758],
        [15, 7, 15234],
        [16, 1, 24662],
        [16, 2, 12660],
        [16, 3, 49835],
        [16, 4, 38627],
        [16, 5, 14022],
        [16, 6, 12729],
        [16, 7, 8625],
        [17, 1, 18437],
        [17, 2, 21301],
        [17, 3, 137272],
        [17, 4, 19590],
        [17, 5, 27713],
        [17, 6, 28457],
        [17, 7, 9474],
        [18, 1, 26825],
        [18, 2, 14344],
        [18, 3, 100120],
        [18, 4, 26288],
        [18, 5, 7078],
        [18, 6, 11292],
        [18, 7, 10286],
        [19, 1, 9792],
        [19, 2, 10052],
        [19, 3, 97744],
        [19, 4, 30010],
        [19, 5, 17683],
        [19, 6, 16877],
        [19, 7, 9102],
        [20, 1, 13676],
        [20, 2, 18124],
        [20, 3, 65764],
        [20, 4, 54594],
        [20, 5, 28921],
        [20, 6, 19023],
        [20, 7, 10367],
        [21, 1, 21722],
        [21, 2, 29329],
        [21, 3, 85133],
        [21, 4, 53180],
        [21, 5, 24799],
        [21, 6, 18508],
        [21, 7, 12945],
        [22, 1, 15324],
        [22, 2, 38435],
        [22, 3, 54890],
        [22, 4, 34177],
        [22, 5, 39484],
        [22, 6, 13790],
        [22, 7, 10562],
        [23, 1, 10108],
        [23, 2, 19982],
        [23, 3, 33494],
        [23, 4, 23832],
        [23, 5, 12097],
        [23, 6, 19329],
        [23, 7, 14523]
    ];
    data2 = data2.map(item => {
        return [item[0], item[1] - 1, item[2]];
    });

    data2 = data2.map(item => {
        return [item[1], item[0], item[2]];
    });


    var option = {
        title: {
            text: '不同时间与星期的销量情况',
            "x": "center",
            "top": 10,
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
        tooltip: {
            position: 'top',
            formatter: function(params) {
                return days[params.value[0]] + hours[params.value[1]] + ' : ' + '<br>' + params.value[2] + ' 万元';
            }
        },
        grid: {
            left: 20,
            bottom: 20,
            right: 20,
            containLabel: true
        },
        radiusAxis: {
            type: 'category',
            data: days,
            "splitLine": {
                "lineStyle": {
                    "color": ["#ddd"],
                    "width": 1,
                    type: 'dotted'
                },
                "show": true
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false
            }
        },
        angleAxis: {
            type: 'category',
            data: hours,
            boundaryGap: false,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd',
                    type: 'dotted'
                }
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#ccc',
                    width: 1,
                }
            }
        },
        polar: {},
        legend: {
            data: ['中国金币', '上币有赞店'],
            "x": "center",
            "y": 60,
            "itemGap": 20,
            "textStyle": {
                "fontSize": 16
            }
        },
        series: [{
            name: '中国金币',
            type: 'scatter',
            coordinateSystem: 'polar',
            symbolSize: function(val) {
                return val[2] / 25;
            },
            data: data,
            animationDelay: function(idx) {
                return idx * 5;
            }
        }, {
            name: '上币有赞店',
            type: 'scatter',
            coordinateSystem: 'polar',
            symbolSize: function(val) {
                return val[2] / 5000;
            },
            data: data2,
            animationDelay: function(idx) {
                return idx * 5;
            }
        }],
        "color": ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0", "#85ca36", "#1c9925", "#0d8b5f", "#0f9cd3", "#2f7e9b", "#2f677d", "#9b7fed", "#7453d6", "#3b1d98", "#27abb1", "#017377", "#015f63", "#b86868", "#5669b7", "#e5aab4", "#60b65f", "#98d2b2", "#c9c8bc", "#45c3dc", "#e17979", "#5baa5a", "#eaccc2", "#ffaa74"]
    };

    export default option;