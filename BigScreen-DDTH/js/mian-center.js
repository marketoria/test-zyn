
function comdify(n){//加千分符
       n=n+'';
    　　var re=/\d{1,3}(?=(\d{3})+$)/g;
    　　var n1=n.replace(/^(\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(re,"$&,")+s2;});
    　　return n1;
    }
var myChart4 = echarts.init(document.getElementById('main-center'));
   
var geoCoordMap = {
    '新疆':[87.500966,  43.983832],
    '西藏':[90.959657,  29.881987],
   '青海':[101.703679, 36.733408],
   '甘肃':[103.764176, 36.198433],
   '内蒙古':[111.711808, 40.98898],
    '宁夏':[106.192619, 38.605171],
   '四川':[103.984944, 30.712171],
    '云南':[102.733927, 25.025991],
   '山西':[112.521289, 38.025365],
    '陕西':[108.84183,  34.521021],
    '重庆':[106.413387, 29.689402],
    '贵州':[106.560565, 26.756654],
    '广西':[108.326706, 22.99805],
    '海南':[110.129641, 19.14162],
   '广东':[113.183592, 23.202287],
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
convertData2 = function (data) {
    var resdata = [];
    for (var i = 0; i<data.length; i++) {
        var dataItem = data[i];
      
        var fromCoord = geoCoordMap[dataItem.fromName];
        var toCoord = geoCoordMap[dataItem.toName];
        if (fromCoord && toCoord) {
            resdata.push({
                fromName: dataItem.fromName,
                toName: dataItem.toName,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return resdata;

};


var respData3={
	"area": [{
			"name": "黑龙江",
			"value": 1
		}, {
			"name": "吉林",
			"value": 1
		}, {
			"name": "辽宁",
			"value": 1
		}, {
			"name": "北京",
			"value": 2
		}, {
			"name": "河北",
			"value": 2
		}, {
			"name": "内蒙古",
			"value": 2
		}, {
			"name": "天津",
			"value": 2
		}, {
			"name": "湖北",
			"value": 3
		}, {
			"name": "湖南",
			"value": 3
		}, {
			"name": "山东",
			"value": 3
		}, {
			"name": "江西",
			"value": 4
		}, {
			"name": "上海",
			"value": 4
		}, {
			"name": "浙江",
			"value": 4
		}, {
			"name": "安徽",
			"value": 5
		}, {
			"name": "福建",
			"value": 5
		}, {
			"name": "江苏",
			"value": 5
		}, {
			"name": "广东",
			"value": 6
		}, {
			"name": "广西",
			"value": 6
		}, {
			"name": "海南",
			"value": 6
		}, {
			"name": "甘肃",
			"value": 7
		}, {
			"name": "河南",
			"value": 7
		}, {
			"name": "宁夏",
			"value": 7
		}, {
			"name": "青海",
			"value": 7
		}, {
			"name": "山西",
			"value": 7
		}, {
			"name": "陕西",
			"value": 7
		}, {
			"name": "新疆",
			"value": 7
		}, {
			"name": "贵州",
			"value": 8
		}, {
			"name": "四川",
			"value": 8
		}, {
			"name": "西藏",
			"value": 8
		}, {
			"name": "云南",
			"value": 8
		}, {
			"name": "重庆",
			"value": 8
		}
	],
	"data": [{
			"data": [{
					"name": "湖南",
					"value": [1816915317.93, "湖南"]
				}, {
					"name": "北京",
					"value": [1694135496.63, "北京"]
				}, {
					"name": "山东",
					"value": [1556203749.68, "山东"]
				}, {
					"name": "江苏",
					"value": [1419867192.5, "江苏"]
				}, {
					"name": "广东",
					"value": [1046476263.87, "广东"]
				}, {
					"name": "浙江",
					"value": [871162626.7, "浙江"]
				}, {
					"name": "河南",
					"value": [844957088.53, "河南"]
				}, {
					"name": "湖北",
					"value": [738979976.04, "湖北"]
				}, {
					"name": "辽宁",
					"value": [637357177.5, "辽宁"]
				}, {
					"name": "贵州",
					"value": [615161159.82, "贵州"]
				}, {
					"name": "河北",
					"value": [600167188.22, "河北"]
				}, {
					"name": "四川",
					"value": [593362843.48, "四川"]
				}, {
					"name": "上海",
					"value": [544766475.06, "上海"]
				}, {
					"name": "广西",
					"value": [519516501.6, "广西"]
				}, {
					"name": "安徽",
					"value": [514092879.01, "安徽"]
				}, {
					"name": "陕西",
					"value": [484638646.96, "陕西"]
				}, {
					"name": "新疆",
					"value": [428376844.87, "新疆"]
				}, {
					"name": "内蒙古",
					"value": [357954506.42, "内蒙古"]
				}, {
					"name": "黑龙江",
					"value": [309968614.69, "黑龙江"]
				}, {
					"name": "江西",
					"value": [293625034.14, "江西"]
				}, {
					"name": "吉林",
					"value": [269191147.05, "吉林"]
				}, {
					"name": "天津",
					"value": [246209256.83, "天津"]
				}, {
					"name": "山西",
					"value": [245975990.23, "山西"]
				}, {
					"name": "福建",
					"value": [217096824.64, "福建"]
				}, {
					"name": "云南",
					"value": [190675441.99, "云南"]
				}, {
					"name": "重庆",
					"value": [180860606.35, "重庆"]
				}, {
					"name": "宁夏",
					"value": [170530352.52, "宁夏"]
				}, {
					"name": "海南",
					"value": [125843389.41, "海南"]
				}, {
					"name": "青海",
					"value": [77616809.83, "青海"]
				}, {
					"name": "甘肃",
					"value": [77524165.44, "甘肃"]
				}, {
					"name": "西藏",
					"value": [10307247.85, "西藏"]
				}, {
					"name": "澳门",
					"value": [0, "澳门"]
				}, {
					"name": "香港",
					"value": [0, "香港"]
				}
			],
			"top": [{
					"name": "湖南",
					"value": [1816915317.93, "湖南"]
				}, {
					"name": "北京",
					"value": [1694135496.63, "北京"]
				}, {
					"name": "山东",
					"value": [1556203749.68, "山东"]
				}, {
					"name": "江苏",
					"value": [1419867192.5, "江苏"]
				}, {
					"name": "广东",
					"value": [1046476263.87, "广东"]
				}, {
					"name": "浙江",
					"value": [871162626.7, "浙江"]
				}, {
					"name": "河南",
					"value": [844957088.53, "河南"]
				}, {
					"name": "湖北",
					"value": [738979976.04, "湖北"]
				}, {
					"name": "辽宁",
					"value": [637357177.5, "辽宁"]
				}, {
					"name": "贵州",
					"value": [615161159.82, "贵州"]
				}
			],
			"extremum": {
				"min": 0,
				"max": 1816915317.93
			}
		}, {
			"data": [{
					"name": "海南",
					"value": [2460041, "海南"]
				}, {
					"name": "北京",
					"value": [2220405, "北京"]
				}, {
					"name": "广西",
					"value": [2035324.7, "广西"]
				}, {
					"name": "广东",
					"value": [1939415, "广东"]
				}, {
					"name": "山东",
					"value": [1928742, "山东"]
				}, {
					"name": "河南",
					"value": [1765387, "河南"]
				}, {
					"name": "新疆",
					"value": [1754586, "新疆"]
				}, {
					"name": "湖南",
					"value": [1718688, "湖南"]
				}, {
					"name": "江苏",
					"value": [1087755, "江苏"]
				}, {
					"name": "黑龙江",
					"value": [952396, "黑龙江"]
				}, {
					"name": "贵州",
					"value": [831471, "贵州"]
				}, {
					"name": "湖北",
					"value": [725141, "湖北"]
				}, {
					"name": "浙江",
					"value": [699001.5, "浙江"]
				}, {
					"name": "四川",
					"value": [490969.5, "四川"]
				}, {
					"name": "内蒙古",
					"value": [481368, "内蒙古"]
				}, {
					"name": "安徽",
					"value": [433156.5, "安徽"]
				}, {
					"name": "陕西",
					"value": [422971, "陕西"]
				}, {
					"name": "天津",
					"value": [389628, "天津"]
				}, {
					"name": "辽宁",
					"value": [332919, "辽宁"]
				}, {
					"name": "河北",
					"value": [206501, "河北"]
				}, {
					"name": "江西",
					"value": [178222, "江西"]
				}, {
					"name": "上海",
					"value": [172859.9, "上海"]
				}, {
					"name": "云南",
					"value": [147701, "云南"]
				}, {
					"name": "山西",
					"value": [121238, "山西"]
				}, {
					"name": "福建",
					"value": [121072, "福建"]
				}, {
					"name": "甘肃",
					"value": [83578, "甘肃"]
				}, {
					"name": "重庆",
					"value": [66580, "重庆"]
				}, {
					"name": "吉林",
					"value": [59431, "吉林"]
				}, {
					"name": "宁夏",
					"value": [38702, "宁夏"]
				}, {
					"name": "青海",
					"value": [33526, "青海"]
				}, {
					"name": "西藏",
					"value": [2341, "西藏"]
				}, {
					"name": "香港",
					"value": [0, "香港"]
				}, {
					"name": "澳门",
					"value": [0, "澳门"]
				}
			],
			"top": [{
					"name": "海南",
					"value": [2460041, "海南"]
				}, {
					"name": "北京",
					"value": [2220405, "北京"]
				}, {
					"name": "广西",
					"value": [2035324.7, "广西"]
				}, {
					"name": "广东",
					"value": [1939415, "广东"]
				}, {
					"name": "山东",
					"value": [1928742, "山东"]
				}, {
					"name": "河南",
					"value": [1765387, "河南"]
				}, {
					"name": "新疆",
					"value": [1754586, "新疆"]
				}, {
					"name": "湖南",
					"value": [1718688, "湖南"]
				}, {
					"name": "江苏",
					"value": [1087755, "江苏"]
				}, {
					"name": "黑龙江",
					"value": [952396, "黑龙江"]
				}
			],
			"extremum": {
				"min": 0,
				"max": 2460041
			}
		}
	],
	"line": [],
	"name": ["支付业务额", "支付笔数"],
	"parm": {
		"TITLE": "支付业务量分布",
		"MAXNAME": "高",
		"MINNAME": "低"
	}
}
;
// $.ajax({
//    url:getContextPath()+'/querykpmgt03.json',
//    type:'post',
//    dataType:'json',
//    cache:false,
//    async:false,
//    success:function(respdata){
//        respData3 = respdata
//        }

   
// })

var  color0=['#6365af','#5476fb'];
var dataColor=respData3.area;
var color=['#113b6b','#6dc1fd','#3c9bb1','#deb140','#617ad6','#868fca','#46abfb','#bae7fe','#b9bcdf',];
var regionsColor=[];
for(var i=0;i<dataColor.length;i++){
    var region = {name:dataColor[i].name,itemStyle: {
        normal: {
            areaColor: color[dataColor[i].value],
//            color: color[dataColor[i].value],
            color:'red',
            opacity:1,
        }
    }};
    regionsColor.push(region);
}
//console.log(regionsColor)
var zz=[ 
         {name:"南海诸岛",
    itemStyle:{
        normal:{opacity:0,label:{show:false},borderWidth:"0",borderColor:"#10242b",areaStyle:{color:'#10242b'}},
       
    }
},
//{name:"香港",
//    itemStyle:{
//        normal:{opacity:0,label:{show:false},borderWidth:"0",borderColor:"#10242b",areaStyle:{color:'#10242b'}},
//       
//    }
//},
//{name:"澳门",
//    itemStyle:{
//        normal:{opacity:0,label:{show:false},borderWidth:"0",borderColor:"#10242b",areaStyle:{color:'#10242b'}},
//       
//    }
//},
]
var yy=regionsColor;
var oo=yy.concat(zz);
	
//console.log( regionsColor)
var TITLE =respData3.parm.TITLE;
var MAXNAME=respData3.parm.MAXNAME;
var MINNAME=respData3.parm.MINNAME;


var Linedate =respData3.name;
var mapdate=respData3.data;
var Lines=respData3.line;

var colordate =['red','black',];
var inRangeColor= [    [ '#d3d9fb','#c6cdf7','#b3bbe9','#a3a4da','#8386cb','#6365af','#52559c'], [ '#e6f7ff','#bae7fe','#95d6fe','#6dc1fd','#46abfb','#2493fc','#1770d6','#0a53b1',],]
  var option4= {
    textStyle:{
        fontFamily: "思源黑体",
       
    },
    baseOption: {
    timeline:{
        axisType: 'category',
        orient: 'vertical',
        autoPlay: true,
        inverse: true,
        playInterval:35000,
        right:0,
        top:10,
        width:110,
        height: null,
        symbol: 'circle',
        zlevel:1,
        z:3,
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
//            color:'red',
//            borderColor:'red',
          borderWidth: 0
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
    // backgroundColor: '#000',
    title: {
        text: TITLE,    
        left: 'center',
        top:30,
        textStyle: {
            color: '#c2e5fb',
            fontSize:19,
            fontWeight:'normal'
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
        data: ['地点', '线路','颜色'],
       
    },
    grid: {
        left: 10,
        right: '45%',
        top: '75%',
        bottom: 5
    },
    geo: {
        map: 'china',
        left:'4%',
        right:'6%',
        top: 0,
       
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
       
        aspectScale: 0.85, //地图中心在屏幕中的位置
       
        itemStyle: {
            normal: {
               //空值
            	
                position: 'bottom',
                borderColor:  '#ddd',
                borderWidth:1,
             
            },
            emphasis: {
                areaColor: 'rgba(0,0,0, 0)',
               borderColor:  '#ddd'
           },
         
        },
        regions:oo

    },
    xAxis: {},
    yAxis:{},
   
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
    },{
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        polyline:true,
      
        data: []
    },
  
    
]
    },

    options:[],
}
    for (var i = 0; i < mapdate.length; i++) {
        option4.options.push({
        	  timeline:{
        	        axisType: 'category',
        	        orient: 'vertical',
        	        autoPlay: true,
        	        inverse: true,
        	        playInterval:35000,
        	        right:0,
        	        top:10,
        	        width:110,
        	        height: null,
        	        symbol: 'circle',
        	        zlevel:1,
        	        z:3,
        	  
        	        checkpointStyle: {
        	            color:color0[i],
//        	            borderColor:'red',
        	            borderWidth: 0,
        	            symbolSize:15,
        	        },
        	    
        	     
        	    
        	    },
            visualMap: [{
            	show:false,
                // type: 'continuous',
                calculable: true,
                
                left: 0,
                top:200,
                itemWidth: 12,
                dimension:2,
                min: mapdate[i].extremum.min,
                max: mapdate[i].extremum.max,
                text: [MAXNAME, MINNAME],
                textStyle: {
                    color: '#ddd',
                },
                inRange: {
                    color: inRangeColor[i],
                    symbolSize:[10,30],
                },
                seriesIndex:1,
                
            },{
            	show:false,
                // type: 'continuous',
                calculable: true,
             
                left: 0,
                top:200,
                itemWidth: 12,
                dimension:0,
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
                
            },
        
        ],
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
                max: (mapdate[i].extremum.max)*2.5
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
            series: [
                {
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
                        data:mapdate[i].top.map(function(ele) {
                            return ele.value[0]
                        }).sort(function(a, b) {
                            return a - b
                        }),
                       
                },{
                        name: '地点',
                        type: 'effectScatter',
                        map: 'china',
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
                        data: convertData(mapdate[i].data),
//                        itemStyle: {
//                            normal: {
//                                color: colordate[i],
//                                
//                            },
//                        
//                        }
                },{
                        name: '线路',
                        type: 'lines',
                        data: convertData2(Lines),
                        lineStyle: {
                            normal: {
                                width: '',
                                color: '#a6c84c',
                                curveness: 0.5
                            }
                        },
                        lineStyle: {
                            normal: {
                                width: '',
                                color: '#a6c84c',
                                curveness: 0.2
                            }
                        },
                        effect: {
                            show: true,
                            period: 6,
                            trailLength: 0.7,
                            color: '#fff',
                            symbolSize: 4
                        }      
                }, 
         
            ]

        })
    }
      




    myChart4.setOption(option4);


