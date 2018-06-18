function comdify(n){//加千分符
       n=n+'';
    　　var re=/\d{1,3}(?=(\d{3})+$)/g;
    　　var n1=n.replace(/^(\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(re,"$&,")+s2;});
    　　return n1;
    }
var geoCoordMap = {
    '新疆':[87.500966,  43.983832],
    '西藏':[90.959657,  29.881987],
   '青海':[101.703679, 36.733408],
   '甘肃':[103.764176, 36.198433],
   '内蒙古':[111.711808, 40.98898],
    '宁夏':[106.192619, 38.605171],
   '四川':[103.984944, 30.712171],
    '云南':[102.733927, 25.025991],
   '山西':[112.4121,36.6611],
    '陕西':[108.84183,  34.521021],
    '重庆':[106.413387, 29.689402],
    '贵州':[106.560565, 26.756654],
    '广西':[108.326706, 22.99805],
    '海南':[110.129641, 19.14162],
   '广东':[113.583592, 24.202287],
   '澳门':[113.551538, 22.109432],
   '香港':[114.066662, 22.588638],
    '台湾':[121.49917,  25.12653],
   '福建':[119.107522, 26.193691],
    '江西':[115.722419, 28.882959],
   '湖南':[112.778851, 28.363482],
   '湖北':[114.177046, 30.743959],
    '安徽':[117.120614, 31.943998],
    '浙江':[119.990592, 30.361806],
    '江苏':[118.665986, 32.194658],
   '河南':[113.441154, 34.8448],
    '山东':[116.973435, 36.763019],
    '上海':[121.315197, 31.314325],
    '河北':[114.397814, 38.170754],
    '天津':[117.194203, 39.180291],
  '北京':[116.384722, 39.977552],
    '辽宁':[123.412489, 41.875105],
    '吉林': [125.252219, 43.850841],
    '黑龙江':[126.503235, 45.86571]

    
};

 convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
var myChart3 = echarts.init(document.getElementById('main-center'));
var respData3={
	"data": [{
			"data": [{
					"name": "广东",
					"value": [1999831, "广东"]
				}, {
					"name": "山东",
					"value": [950576, "山东"]
				}, {
					"name": "河南",
					"value": [727678, "河南"]
				}, {
					"name": "辽宁",
					"value": [620828, "辽宁"]
				}, {
					"name": "河北",
					"value": [609385, "河北"]
				}, {
					"name": "北京",
					"value": [597698, "北京"]
				}, {
					"name": "浙江",
					"value": [554110, "浙江"]
				}, {
					"name": "四川",
					"value": [552020, "四川"]
				}, {
					"name": "江苏",
					"value": [474200, "江苏"]
				}, {
					"name": "湖北",
					"value": [427885, "湖北"]
				}, {
					"name": "上海",
					"value": [404913, "上海"]
				}, {
					"name": "湖南",
					"value": [393477, "湖南"]
				}, {
					"name": "山西",
					"value": [370663, "山西"]
				}, {
					"name": "福建",
					"value": [358422, "福建"]
				}, {
					"name": "广西",
					"value": [346760, "广西"]
				}, {
					"name": "陕西",
					"value": [341185, "陕西"]
				}, {
					"name": "安徽",
					"value": [338816, "安徽"]
				}, {
					"name": "天津",
					"value": [302409, "天津"]
				}, {
					"name": "黑龙江",
					"value": [267085, "黑龙江"]
				}, {
					"name": "内蒙古",
					"value": [249030, "内蒙古"]
				}, {
					"name": "重庆",
					"value": [212588, "重庆"]
				}, {
					"name": "吉林",
					"value": [209650, "吉林"]
				}, {
					"name": "江西",
					"value": [141298, "江西"]
				}, {
					"name": "新疆",
					"value": [138362, "新疆"]
				}, {
					"name": "贵州",
					"value": [136948, "贵州"]
				}, {
					"name": "云南",
					"value": [124265, "云南"]
				}, {
					"name": "海南",
					"value": [95911, "海南"]
				}, {
					"name": "宁夏",
					"value": [41190, "宁夏"]
				}, {
					"name": "青海",
					"value": [37621, "青海"]
				}, {
					"name": "西藏",
					"value": [7302, "西藏"]
				}
			],
			"top": [{
					"name": "广东",
					"value": [1999831, "广东"]
				}, {
					"name": "山东",
					"value": [950576, "山东"]
				}, {
					"name": "河南",
					"value": [727678, "河南"]
				}, {
					"name": "辽宁",
					"value": [620828, "辽宁"]
				}, {
					"name": "河北",
					"value": [609385, "河北"]
				}, {
					"name": "北京",
					"value": [597698, "北京"]
				}, {
					"name": "浙江",
					"value": [554110, "浙江"]
				}, {
					"name": "四川",
					"value": [552020, "四川"]
				}, {
					"name": "江苏",
					"value": [474200, "江苏"]
				}, {
					"name": "湖北",
					"value": [427885, "湖北"]
				}
			],
			"extremum": {
				"min": 7302,
				"max": 1999831
			}
		}, {
			"data": [{
					"name": "黑龙江",
					"value": [130120, "黑龙江"]
				}, {
					"name": "辽宁",
					"value": [108945, "辽宁"]
				}, {
					"name": "广东",
					"value": [96987, "广东"]
				}, {
					"name": "河南",
					"value": [68335, "河南"]
				}, {
					"name": "河北",
					"value": [44357, "河北"]
				}, {
					"name": "上海",
					"value": [44248, "上海"]
				}, {
					"name": "山东",
					"value": [11442, "山东"]
				}, {
					"name": "江西",
					"value": [8864, "江西"]
				}, {
					"name": "湖北",
					"value": [8768, "湖北"]
				}, {
					"name": "北京",
					"value": [7693, "北京"]
				}, {
					"name": "浙江",
					"value": [7318, "浙江"]
				}, {
					"name": "山西",
					"value": [6597, "山西"]
				}, {
					"name": "吉林",
					"value": [6422, "吉林"]
				}, {
					"name": "江苏",
					"value": [5459, "江苏"]
				}, {
					"name": "四川",
					"value": [5205, "四川"]
				}, {
					"name": "湖南",
					"value": [4196, "湖南"]
				}, {
					"name": "内蒙古",
					"value": [4103, "内蒙古"]
				}, {
					"name": "安徽",
					"value": [3341, "安徽"]
				}, {
					"name": "广西",
					"value": [3238, "广西"]
				}, {
					"name": "天津",
					"value": [3209, "天津"]
				}, {
					"name": "福建",
					"value": [2993, "福建"]
				}, {
					"name": "陕西",
					"value": [2489, "陕西"]
				}, {
					"name": "重庆",
					"value": [1675, "重庆"]
				}, {
					"name": "贵州",
					"value": [1614, "贵州"]
				}, {
					"name": "海南",
					"value": [1261, "海南"]
				}, {
					"name": "新疆",
					"value": [1126, "新疆"]
				}, {
					"name": "宁夏",
					"value": [812, "宁夏"]
				}, {
					"name": "云南",
					"value": [732, "云南"]
				}, {
					"name": "青海",
					"value": [233, "青海"]
				}, {
					"name": "西藏",
					"value": [86, "西藏"]
				}
			],
			"top": [{
					"name": "黑龙江",
					"value": [130120, "黑龙江"]
				}, {
					"name": "辽宁",
					"value": [108945, "辽宁"]
				}, {
					"name": "广东",
					"value": [96987, "广东"]
				}, {
					"name": "河南",
					"value": [68335, "河南"]
				}, {
					"name": "河北",
					"value": [44357, "河北"]
				}, {
					"name": "上海",
					"value": [44248, "上海"]
				}, {
					"name": "山东",
					"value": [11442, "山东"]
				}, {
					"name": "江西",
					"value": [8864, "江西"]
				}, {
					"name": "湖北",
					"value": [8768, "湖北"]
				}, {
					"name": "北京",
					"value": [7693, "北京"]
				}
			],
			"extremum": {
				"min": 86,
				"max": 130120
			}
		}, {
			"data": [{
					"name": "北京",
					"value": [33849853, "北京"]
				}, {
					"name": "吉林",
					"value": [4459452, "吉林"]
				}, {
					"name": "广东",
					"value": [3541214, "广东"]
				}, {
					"name": "山东",
					"value": [2796601, "山东"]
				}, {
					"name": "河南",
					"value": [2661730, "河南"]
				}, {
					"name": "江苏",
					"value": [2495969, "江苏"]
				}, {
					"name": "湖北",
					"value": [2366471, "湖北"]
				}, {
					"name": "天津",
					"value": [1956845, "天津"]
				}, {
					"name": "陕西",
					"value": [1910360, "陕西"]
				}, {
					"name": "河北",
					"value": [1657265, "河北"]
				}, {
					"name": "山西",
					"value": [1593465, "山西"]
				}, {
					"name": "四川",
					"value": [1454655, "四川"]
				}, {
					"name": "上海",
					"value": [1164363, "上海"]
				}, {
					"name": "贵州",
					"value": [805331, "贵州"]
				}, {
					"name": "安徽",
					"value": [565269, "安徽"]
				}, {
					"name": "内蒙古",
					"value": [524813, "内蒙古"]
				}, {
					"name": "青海",
					"value": [384151, "青海"]
				}, {
					"name": "重庆",
					"value": [358115, "重庆"]
				}, {
					"name": "黑龙江",
					"value": [316995, "黑龙江"]
				}, {
					"name": "辽宁",
					"value": [294695, "辽宁"]
				}, {
					"name": "湖南",
					"value": [263753, "湖南"]
				}, {
					"name": "宁夏",
					"value": [239203, "宁夏"]
				}, {
					"name": "江西",
					"value": [168017, "江西"]
				}, {
					"name": "广西",
					"value": [163709, "广西"]
				}, {
					"name": "浙江",
					"value": [137760, "浙江"]
				}, {
					"name": "福建",
					"value": [68309, "福建"]
				}, {
					"name": "海南",
					"value": [20833, "海南"]
				}, {
					"name": "云南",
					"value": [10150, "云南"]
				}, {
					"name": "西藏",
					"value": [1695, "西藏"]
				}, {
					"name": "新疆",
					"value": [241, "新疆"]
				}
			],
			"top": [{
					"name": "北京",
					"value": [33849853, "北京"]
				}, {
					"name": "吉林",
					"value": [4459452, "吉林"]
				}, {
					"name": "广东",
					"value": [3541214, "广东"]
				}, {
					"name": "山东",
					"value": [2796601, "山东"]
				}, {
					"name": "河南",
					"value": [2661730, "河南"]
				}, {
					"name": "江苏",
					"value": [2495969, "江苏"]
				}, {
					"name": "湖北",
					"value": [2366471, "湖北"]
				}, {
					"name": "天津",
					"value": [1956845, "天津"]
				}, {
					"name": "陕西",
					"value": [1910360, "陕西"]
				}, {
					"name": "河北",
					"value": [1657265, "河北"]
				}
			],
			"extremum": {
				"min": 241,
				"max": 33849853
			}
		}, {
			"data": [{
					"name": "广东",
					"value": [1999831, "广东"]
				}, {
					"name": "山东",
					"value": [950576, "山东"]
				}, {
					"name": "河南",
					"value": [727678, "河南"]
				}, {
					"name": "辽宁",
					"value": [620828, "辽宁"]
				}, {
					"name": "河北",
					"value": [609385, "河北"]
				}, {
					"name": "北京",
					"value": [597698, "北京"]
				}, {
					"name": "浙江",
					"value": [554110, "浙江"]
				}, {
					"name": "四川",
					"value": [552020, "四川"]
				}, {
					"name": "江苏",
					"value": [474200, "江苏"]
				}, {
					"name": "湖北",
					"value": [427885, "湖北"]
				}, {
					"name": "上海",
					"value": [404913, "上海"]
				}, {
					"name": "湖南",
					"value": [393477, "湖南"]
				}, {
					"name": "山西",
					"value": [370663, "山西"]
				}, {
					"name": "福建",
					"value": [358422, "福建"]
				}, {
					"name": "广西",
					"value": [346760, "广西"]
				}, {
					"name": "陕西",
					"value": [341185, "陕西"]
				}, {
					"name": "安徽",
					"value": [338816, "安徽"]
				}, {
					"name": "天津",
					"value": [302409, "天津"]
				}, {
					"name": "黑龙江",
					"value": [267085, "黑龙江"]
				}, {
					"name": "内蒙古",
					"value": [249030, "内蒙古"]
				}, {
					"name": "重庆",
					"value": [212588, "重庆"]
				}, {
					"name": "吉林",
					"value": [209650, "吉林"]
				}, {
					"name": "江西",
					"value": [141298, "江西"]
				}, {
					"name": "新疆",
					"value": [138362, "新疆"]
				}, {
					"name": "贵州",
					"value": [136948, "贵州"]
				}, {
					"name": "云南",
					"value": [124265, "云南"]
				}, {
					"name": "海南",
					"value": [95911, "海南"]
				}, {
					"name": "宁夏",
					"value": [41190, "宁夏"]
				}, {
					"name": "青海",
					"value": [37621, "青海"]
				}, {
					"name": "西藏",
					"value": [7302, "西藏"]
				}
			],
			"top": [{
					"name": "广东",
					"value": [1999831, "广东"]
				}, {
					"name": "山东",
					"value": [950576, "山东"]
				}, {
					"name": "河南",
					"value": [727678, "河南"]
				}, {
					"name": "辽宁",
					"value": [620828, "辽宁"]
				}, {
					"name": "河北",
					"value": [609385, "河北"]
				}, {
					"name": "北京",
					"value": [597698, "北京"]
				}, {
					"name": "浙江",
					"value": [554110, "浙江"]
				}, {
					"name": "四川",
					"value": [552020, "四川"]
				}, {
					"name": "江苏",
					"value": [474200, "江苏"]
				}, {
					"name": "湖北",
					"value": [427885, "湖北"]
				}
			],
			"extremum": {
				"min": 7302,
				"max": 1999831
			}
		}
	],
	"name": ["沃账户", "活跃账户", "电子券账户", "金融理财账户"],
	"parm": {
		"TITLE": "用户规模分布",
		"MAXNAME": "高",
		"MINNAME": "低"
	}
}
;
// $.ajax({
//    url:getContextPath()+'/querykpmgs03.json',
//    type:'post',
//    dataType:'json',
//    cache:false,
//    async:false,
//    success:function(respdata){
//        respData3 = respdata
//        }

   
// })
var TITLE =respData3.parm.TITLE;
var MAXNAME=respData3.parm.MAXNAME;
var MINNAME=respData3.parm.MINNAME;


var Linedate =respData3.name;
var mapdate=respData3.data;
// var xx =mapdate[0].extremum.max;
//console.log(mapdate)
//['#9fbddd', '#7cade3', '#5499E6']
var  color=['#e87465','#28c2c2','#6365af','#d26b20'];
var colordate =['#ddb926','#5499E6','#d48265','#ee4b3f'];
var inRangeColor= [
              
                   [ '#fed9d4','#f9b9b1','#f69e93','#e87465','#b54245',],
                   [ '#e6fffb','#b7f4ec','#8be8de','#62dbd2','#3fcec8','#28c2c2','#1a979b',],
               
                   [ '#d3d9fb','#c6cdf7','#b3bbe9','#a3a4da','#8386cb','#6365af','#52559c'],
                   [ '#fff8e8','#fde6bc','#fdd494','#febf70','#fda84d','#f88b2c','#d26b20',],

                  ]
 var option3 = {
    textStyle:{
        fontFamily: "思源黑体",
    },
    baseOption: {
    animationDurationUpdate: 2000,
    animationEasingUpdate: 'quinticInOut',
    timeline:{
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval:35000,
            right:'0%',
            top:10,
            width:160,
            height: null,
            symbol: 'circle',
            
            label:{
            	normal:{
            		textStyle:{
                        color:'#ccc',
                        fontSize:16,
            		},
            		
            		rotate:10,
            	},
                emphasis:{
                	textStyle:{
            			color:'#fff',
            		},
                }
            },
            itemStyle:{
            	normal:{
            		color:'#ddd',
            		
            		
            	},
            	  emphasis: {
                          color: '#fff'
                  }

            },
            
            lineStyle: {
                color:'rgba(0,73,134,0.6)'
            },
            checkpointStyle: {
              
            },
            controlStyle: {
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                    color: '#666',
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            tooltip : {
                show:false,
             },
            data:Linedate,
        
        },
       
    
    title: {
        text: TITLE,
        left: 'center',
        top:30,
        textStyle: {
            fontSize: 19,
            color: '#c2e5fb' ,
            fontWeight:'normal'//'rgba(255,255,255, 0.9)'
        }  
    },
    tooltip : {
        formatter: function(parm,ticket,callback){
            return parm.name+'&nbsp;'+':'+'&nbsp;'+comdify(parm.data.value[2])
        }
    },
    legend: {
        show: false,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['地点'],
       
    },
    grid: {
            left: 10,
            right: '45%',
            top: '75%',
            bottom: 5
        },
    geo: {
        map: 'china',
        // layoutCenter: ['50%', '50%'],
        aspectScale: 0.85, //地图中心在屏幕中的位置
        left:'4%',
        right:'6%',
        top: 0,
        regions: [
                  {name: '南海诸岛', value: 0, itemStyle: {normal: {opacity: 0, label: {show: false}}}},
//                  {name: '香港', value: 0, itemStyle: {normal: {opacity: 0, label: {show: false}}}},
//                  {name: '澳门', value: 0, itemStyle: {normal: {opacity: 0, label: {show: false}}}},
                 
                  ],
        label: {
            emphasis:{
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
               // areaColor: 'rgba(93,103,130, 0.5)',
            	areaColor: '#95d6fe',
                borderColor:  '#fff',
                borderWidth:1,
//                borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
                 areaColor: 'rgba(0,0,0, 0)',
                     borderColor:  '#ddd'
            },
        
        }
    },
    xAxis: {},
    yAxis: {},
    series: [ 
        {
            id: 'bar',
            type: 'bar',
            tooltip: {
                show: false
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#ddd'
                    }
                }
            },
            data: []
        },
        {
            name: '地点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 10,
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                        	 color:'#5f6060',
                        	 fontWeight:'bolder'
                        }
                    }
                },
                emphasis:{label:{show:true}}
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
            
            
        
                emphasis:{
                    areaColor: null,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            showEffectOn: 'render',
            data: []
              
        
    }
        
        ]      

    },
    options:[],
}
for (var i = 0; i < mapdate.length; i++) {
	
    option3.options.push({
    	 timeline:{
             axisType: 'category',
             orient: 'vertical',
             autoPlay: true,
             inverse: true,
             playInterval:35000,
             right:0,
             top:10,
             width:135,
             height: null,
             symbol: 'circle',
             checkpointStyle: {
                 color:color[i],
                 symbolSize:15,
                 borderWidth: 0
             },
          
         
         },
        visualMap: [{
        	show:false,
            // type:'piecewise',
            // type: 'continuous',
            calculable: true,
          
            left: 0,
            top: 200,
           dimension:2,
            itemWidth: 12,
            min: mapdate[i].extremum.min,
            max: mapdate[i].extremum.max,
            text: [MAXNAME, MINNAME],
            textStyle: {
                color: 'red',
            },
            inRange: {
                color: inRangeColor[i],
                symbolSize:[10,30],
                  
            },
            seriesIndex:1,
        },{
        	show:false,
            //  type: 'continuous',
            calculable: true,
         
            left: 0,
            top: 200,
            dimension:0,
            itemWidth: 12,
            min: mapdate[i].extremum.min,
            max: mapdate[i].extremum.max,
            text: [MAXNAME, MINNAME],
            textStyle: {
                color: '#ddd',
            },
            inRange: {
                color: inRangeColor[i],
               
                   
            },
            seriesIndex:0,
        }],
        xAxis: {
        	show : false,
            type: 'value',
            boundaryGap: [0, 0.1],
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false
            },
            max: (mapdate[i].extremum.max)*2.5//获取top10的最大值*2作为x的轴的坐标。
        },
        yAxis: {
        	show : false,
            type: 'category',
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#ddd'
                }
            },

            data: mapdate[i].top.map(function(ele) {
                return ele.name
            }).reverse()
        },
        series: [{
                id:'bar',
                type: 'bar',
                label: {
                    normal: {
                        position: 'right',
                        formatter: function(params) {
                         	
                            
                            return params.name + ': ' +comdify(params.value);
                            }
                    }
                },
                data: mapdate[i].top.map(function(ele) {
                    return ele.value[0]
                }).sort(function(a, b) {
                    return a -b
                })
            },
            {
                name: '地点',
                type: 'effectScatter',
                map: 'china',
                data:convertData(mapdate[i].data),
                itemStyle: {
                    normal: {
                     color: colordate[i],
                     
                },
              
            },
           
         
           
        }] 
    })
}
         
    
// console.log(option3);

myChart3.setOption(option3);