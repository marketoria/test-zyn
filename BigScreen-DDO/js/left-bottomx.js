















var rocket = 'path://M-244.396,44.399c0,0,0.47-2.931-2.427-6.512c2.819-8.221,3.21-15.709,3.21-15.709s5.795,1.383,5.795,7.325C-237.818,39.679-244.396,44.399-244.396,44.399z M-260.371,40.827c0,0-3.881-12.946-3.881-18.319c0-2.416,0.262-4.566,0.669-6.517h17.684c0.411,1.952,0.675,4.104,0.675,6.519c0,5.291-3.87,18.317-3.87,18.317H-260.371z M-254.745,18.951c-1.99,0-3.603,1.676-3.603,3.744c0,2.068,1.612,3.744,3.603,3.744c1.988,0,3.602-1.676,3.602-3.744S-252.757,18.951-254.745,18.951z M-255.521,2.228v-5.098h1.402v4.969c1.603,1.213,5.941,5.069,7.901,12.5h-17.05C-261.373,7.373-257.245,3.558-255.521,2.228zM-265.07,44.399c0,0-6.577-4.721-6.577-14.896c0-5.942,5.794-7.325,5.794-7.325s0.393,7.488,3.211,15.708C-265.539,41.469-265.07,44.399-265.07,44.399z M-252.36,45.15l-1.176-1.22L-254.789,48l-1.487-4.069l-1.019,2.116l-1.488-3.826h8.067L-252.36,45.15z';
var _line = 'path://M0.626,200V0H0.374v200C0.462,200,0.551,200,0.626,200z';

var arr = [];
var r = 100;
for (var i = 0; i < 1000; i++) {
    var rad = 2 * Math.PI / 1000 * i;
    var x = Math.cos(rad) * r + 500;
    var y = Math.sin(rad) * r + 500;

    arr.push([x, y]);
}

var arr2 = [];
for (var i = 500; i < 1000; i++) {
    var rad = 2 * Math.PI / 1000 * i;
    var x = Math.cos(rad) * r + 500;
    var y = Math.sin(rad) * r + 500;

    arr2.push([x, y]);
}
for (var i = 0; i < 500; i++) {
    var rad = 2 * Math.PI / 1000 * i;
    var x = Math.cos(rad) * r + 500;
    var y = Math.sin(rad) * r + 500;

    arr2.push([x, y]);
}


var myChart2 = echarts.init(document.getElementById('left-bottom'));
var resData3={
	"data2": [0.8, 0.8, 0.8, 0.8, 0.8, 0.75],
	"data1": [0.9967, 0.9968, 1, 0.9969, 0.9977, 0.9869],
	"parm": {
		"TITLE": "支付系统运营能力",
		"KPI1NAME": "交易处理稳定性",
		"KPI2NAME": "平台运行稳定性",
		"KPI3NAME": "交易通道稳定性",
		"KPI4NAME": "信息安全控制能力",
		"KPI5NAME": "突发事件处理能力",
		"TYPE1NAME": "各项指标数据",
		"TYPE2NAME": "各项指标标准值",
		"KPI6NAME": "支付处理效率"
	}
}
;
// $.ajax({
//    url:getContextPath()+'/querykpmgf03.json',
//    type:'post',
//    dataType:'json',
//    cache:false,
//    async:false,
//    success:function(respdata){
//        resData3 = respdata
//        }

   
// })

var  datavalue=[];
for(var i=0;i<resData3.data1.length;i++){
	if(resData3.data1[i]*100==100){
		datavalue.push(
				(resData3.data1[i]*100)
				);
	}else{
			datavalue.push(
					(resData3.data1[i]*100).toFixed(2)
					);
}

}

//console.log(datavalue)
//console.log(typeof resData3.data1[0]);
var  datavalue2=[];
for(var i=0;i<resData3.data2.length;i++){
	datavalue2.push(resData3.data2[i]*100);
}

//console.log(datavalue2)
var  TYPE1NAME =resData3.parm.TYPE1NAME;
var  TYPE2NAME =resData3.parm.TYPE2NAME;
var  KPI1NAME =resData3.parm.KPI1NAME;
var  KPI2NAME =resData3.parm.KPI2NAME;
var  KPI3NAME =resData3.parm.KPI3NAME;
var  KPI4NAME =resData3.parm.KPI4NAME;
var  KPI5NAME =resData3.parm.KPI5NAME;
var  KPI6NAME =resData3.parm.KPI6NAME;
var  TITLEdata = resData3.parm.TITLE;
var MAXDate=resData3.data1;


function getMaximin(arr,maximin)
{ 
if(maximin=="max") 
{ 
return Math.max.apply(Math,arr); 
}
else if(maximin=="min") 
{ 
return Math.min.apply(Math, arr); 
} 
} 
var max = getMaximin(MAXDate,"max")*100;
//console.log(max)

var indicatorData = [{
    name: KPI1NAME,
   
}, {
    name: KPI2NAME,
 
}, {
    name: KPI3NAME,
   
}, {
    name: KPI4NAME,
  
}, {
    name: KPI5NAME,
 
},{
    name: KPI6NAME,
   
}];
function accMul(arg1, arg2) {  
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();  
    try { m += s1.split(".")[1].length } catch (e) { }  
    try { m += s2.split(".")[1].length } catch (e) { }  
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)  
} 
var rotate = 45;
var width = 4;
var option2 = {
    textStyle:{
        fontFamily: "思源黑体",
       color:'#fff',
       fontSize:14,
    },
    legend: {
        x : 'center',
        bottom : '0%',
        selectedMode:false,  //图例禁止点击
        data:[TYPE1NAME,TYPE2NAME],
        textStyle:{
            fontSize:14,
            color:'#ddd'
        }
        
    },
    title: {
        text: TITLEdata,
        left:0,
        top:0,
        textStyle: {
            color: '#c2e5fb',
            fontSize: 18,
            fontWeight:'normal'
        }  

    },
   
  
    grid: {
        z:1,    //grid作为柱状图的坐标系，其层级要和仪表图层级不同，同时隐藏 show:false,
        left: '-30%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        splitLine:{
            show: false    //隐藏分割线           

    }
},

tooltip: {
//	formatter:function(parm){
		
		
//		var tmp = "";
//		for (var key in parm){
//			tmp+="key="+key+" value="+parm[key]+"</br>";
//		}
//		console.info("tmp:"+tmp);
		
		
		
//		var str ="";
//		for(var i=0;i<indicatorData.length;i++){
	//		var val_tmp =accMul((parm.value)[i], 100)
	//		str+=indicatorData[i].name+"："+val_tmp+"%</br>";
	//	}
	//	return parm.seriesName+"</br>"+str;
	//}
	show:false
},
    xAxis: {

        max: 1,
        min: 0,
        interval: 100,
        show: false,
        silent: true

    },
    yAxis: {

        max: 1000,
        min: 0,
        interval: 100,
        show: false,
        silent: true
    },
    radar: {
        center: ['50%', '50%'],
        indicator: indicatorData,
        radius: '45%',
        splitNumber: 1,
        shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                fontSize: 12,
                fontFamily: "Microsoft YaHei"
            },
            
            padding: [8, 8, 8, 8]
        },
        splitLine: {

            lineStyle: {
                color: '#4f8bbe',
                opacity: 0.5,
                type: 'dotted'
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: '#0d6dba',
                opacity: 0
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#4f8bbe',
                opacity: 0.5,
                type: 'dotted'
            }
        },
        zlevel: 20
    },
    series: [
        
     


//        {
//            name: '左下红弧',
//            type: 'gauge',
//            radius: '89%',
//            startAngle: -160,
//            endAngle: -170,
//            
//            zlevel:22,
//            axisLine: {
//                lineStyle: {
//                    color: [
//                        [0.2, '#102d3d'],
//                        [1, '#102d3d']
//                    ],
//                    width: 4,
//                    shadowColor: '#102d3d',
//                    shadowOffsetX: 0,
//                    shadowOffsetY: -12,
//                    shadowBlur: 120,
//                    opacity: 1,
//                }
//
//            },
//            splitLine: {
//                show: false,
//            },
//            axisLabel: {
//                show: false,
//            },
//            axisTick: {
//                show: false,
//            },
//            detail: {
//                show: false
//            }
//        },

//
//        {
//            name: '右上红弧',
//            type: 'gauge',
//            radius: '89%',
//            startAngle: -340,
//            endAngle: -350,
//            zlevel:22,
//            axisLine: {
//                lineStyle: {
//                    color: [
//                        [0.2, '#102d3d'],
//                        [1, '#102d3d']
//                    ],
//                    width: 4,
//                    shadowColor: '#102d3d',
//                    shadowOffsetX: 0,
//                    shadowOffsetY: -12,
//                    shadowBlur: 120,
//                    opacity: 1,
//                }
//
//            },
//            splitLine: {
//                show: false,
//            },
//            axisLabel: {
//                show: false,
//            },
//            axisTick: {
//                show: false,
//            },
//            detail: {
//                show: false
//            }
//        },
        
        
        {
            name: '右外圈',
            type: 'gauge',
            radius: '89%',
            startAngle: -320,
            endAngle: -400,
            axisLine: {
                lineStyle: {
                    color: [
                        [0.2, '#0e313f'],
                        [0.8, '#0e313f'],
                        [1, '#0e313f']
                    ],
                    width: 4,
                    // shadowColor: '#102d3d',
                    shadowOffsetX: 0,
                    shadowOffsetY: -12,
                    shadowBlur: 120,
                    opacity: 1,
                }

            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            detail: {
                show: false
            }
        },
        
        {
            name: '左外圈',
            type: 'gauge',
            radius: '89%',
            startAngle: -140,
            endAngle: -220,
            axisLine: {
                lineStyle: {
                    color: [
                        [0.2, '#0e313f'],
                        [0.8, '#0e313f'],
                        [1, '#0e313f']
                    ],
                    width: 4,
                    // shadowColor: '#102d3d',
                    shadowOffsetX: 0,
                    shadowOffsetY: -12,
                    shadowBlur: 120,
                    opacity: 1,
                }

            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            detail: {
                show: false
            }
        },

        {
            name: '蓝色外圈1',
            type: 'gauge',
            radius: '70%',
            startAngle: -85 + rotate,
            endAngle: -115 + rotate,
            splitNumber: 4,
            axisLine: {
                lineStyle: {
                    color: [
                        [1, '#1e5a67']
                    ],
                    width: width,


                    opacity: 1,
                }

            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            detail: {
                show: false
            }
        }, {
            name: '蓝色外圈2',
            type: 'gauge',
            radius: '70%',
            startAngle: -155 + rotate,
            endAngle: 175 + rotate,
            splitNumber: 4,
            axisLine: {
                lineStyle: {
                    color: [
                        [1, '#1e5a67']
                    ],
                    width: width,


                    opacity: 1,
                }

            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            detail: {
                show: false
            }
        }, {
            name: '蓝色外圈3',
            type: 'gauge',
            radius: '70%',
            startAngle: 25 + rotate,
            endAngle: -5 + rotate,
            splitNumber: 4,
            axisLine: {
                lineStyle: {
                    color: [
                        [1, '#1e5a67']
                    ],
                    width: width,


                    opacity: 1,
                }

            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            detail: {
                show: false
            }
        }, {
            name: '蓝色外圈4',
            type: 'gauge',
            radius: '70%',
            startAngle: 95 + rotate,
            endAngle: 65 + rotate,
            splitNumber: 4,
            axisLine: {

                lineStyle: {
                    color: [
                        [1, '#1e5a67']
                    ],
                    width: width,
                    opacity: 1,
                }

            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            detail: {
                show: false
            }
        },

        {
            type: 'pie',

            radius: ['62%', '72%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value:0,
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#4dfaff',
                        opacity: 0.2
                    }
                }
            }]
        },

        {
            name: '雷达线ALL',
            type: 'radar',
            silent: true,
            lineStyle: {
                normal: {
                    type: 'dotted',
                    color: "#355862",
                    width: 2,
                    opacity: 1,

                }
            },
            data: [
                [max,max,max,max,max,max,]
            ],

           
            itemStyle: {
                normal: {
                    opacity: 0

                }
            },
            areaStyle: {
                normal: {
                    color: '#0d6dba',
                    opacity: 0
                }
            }
        },

        {
            name: '雷达线2',
            type: 'radar',
            silent: true,
            lineStyle: {
                normal: {
                    type: 'dotted',
                    color: "#355862",
                    width: 2,
                    opacity: 0.8,

                }
            },
            data: [
                [max/2,max/2,max/2,max/2,max/2,max/2]
            ],

            itemStyle: {
                normal: {
                    opacity: 0

                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    opacity: 0
                }
            }
        },

        {
            name: '雷达线3',
            type: 'radar',
            silent: true,
            lineStyle: {
                normal: {
                    type: 'dotted',
                    color: "#355862",
                    width: 2,
                    opacity: 0.6,

                }
            },
            data: [
                [max/3,max/3,max/3,max/3,max/3,max/3]
            ],

            itemStyle: {
                normal: {
                    opacity: 0

                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    opacity: 0
                }
            }
        },

        {
            name: '雷达线4',
            type: 'radar',
            silent: true,
            lineStyle: {
                normal: {
                    type: 'dotted',
                    color: "#355862",
                    width: 2,
                    opacity: 0.4,

                }
            },
            data: [
                [max/4,max/4,max/4,max/4,max/4,max/4]
            ],

            itemStyle: {
                normal: {
                    opacity: 0

                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    opacity: 0
                }
            }
        },

        {
            name: '雷达线5',
            type: 'radar',
            silent: true,
            lineStyle: {
                normal: {
                    type: 'dotted',
                    color: "#355862",
                    width: 2,
                    opacity: 0.2,

                },
                
            },
            data: [
                [max/5,max/5,max/5,max/5,max/5,max/5]
            ],

            itemStyle: {
                normal: {
                    opacity: 0

                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    opacity: 0
                }
            }
        },


        {
            name: '数据显示',
            type: 'radar',
            lineStyle: {
                normal: {
                    width: 0.1,
                    opacity: 0.1
                }
            },
//            data: datavalue,
            data : [
                    {
                        value : datavalue,
                        name : '数据显示',
                      
                        label: {
                                normal: {
                                    show: true,
                                    formatter:'{c}%', 
                                    offset:[0,0],
                                    position:'inside',
                                    distance:7,
                                   
                                  
                                },
                               
                            }
                    },
                   
                ],
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 10
                        }
                    },
                },
           
            areaStyle: {
                normal: {
                    color: '#98bcec',
                    opacity: 0.5
                }
            },
            zlevel: 22
        },
        
        {
            name: '数据标准',
            type: 'radar',
           
            data: [datavalue2],

            lineStyle:{
                 normal:{
                     color:'#3bbfc4',
                     opacity: 1
                 }
            },
            symbolSize: 3.5,
            itemStyle: {
                normal: {
                    borderColor: '#3bbfc4',
                    borderWidth: 2.5,
                }
            },
            zlevel: 21
        },





        {
            name: "仪盘表",
            type: "gauge",
            // min: 0,
            // max: 360,
            startAngle: 0,
            endAngle: 15,
            splitNumber:5,
            radius: '72%',
            // radius: ['72%', '92%'],
            zlevel:22,
            axisLine: {
                lineStyle: {
                    color: [
                        [0.1, "#102d3d"],
                        [1, "#0d2534"]
                    ],
                    // width: 90,
                    opacity:0
                },
            },
            axisTick: {
                lineStyle: {
                    // color: '#4dfdfe',
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                        {
                            color: '#4dfdfe',
                            offset: 0.9,
                        },
                        {
                            color: '#143a49',
                            offset: 0.2
                        }
                    ]),
                    width: 1,
                    opacity:[
                        [0.1, 1],
                        [0.5, 0.5],
                        [1, 0.1]
                    ]
                },
                
                length: '15%',
                splitNumber:10
            },
            pointer: { 
                shadowColor: '#fff', 
                shadowBlur: 5,
                show: false
            },
            axisLabel: {
                distance: 10,
                textStyle: {
                    color: "#fff"
                },
                show: false,
            },
            splitLine: {
                "show": false
            },
            itemStyle: {
                normal: {
                    color: "#494f50"
                }
            },
            detail: {
                
                show: false
            }
        },
        
        
        {
            name: "仪盘表",
            type: "gauge",
            // min: 0,
            // max: 360,
            startAngle: 180,
            endAngle: 195,
            splitNumber:5,
            radius: '72%',
            // radius: ['72%', '92%'],
            zlevel:22,
            axisLine: {
                lineStyle: {
                    color: [
                        [0.1, "#102d3d"],
                        [1, "#0d2534"]
                    ],
                    // width: 90,
                    opacity:0
                },
            },
            axisTick: {
                lineStyle: {
                    // color: '#4dfdfe',
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                        {
                            color: '#4dfdfe',
                            offset: 0.9,
                        },
                        {
                            color: '#143a49',
                            offset: 0.2
                        }
                    ]),
                    width: 2,
                    opacity:[
                        [0.1, 1],
                        [0.5, 0.5],
                        [1, 0.1]
                    ]
                },
                
                length: '15%',
                splitNumber: 2
            },
            pointer: { 
                shadowColor: '#fff', 
                shadowBlur: 5,
                show: false
            },
            axisLabel: {
                distance: 10,
                textStyle: {
                    color: "#fff"
                },
                show: false,
            },
            splitLine: {
                "show": false
            },
            itemStyle: {
                normal: {
                    color: "#494f50"
                }
            },
            detail: {
                
                show: false
            }
        },
        {
            name:'各项指标数据',
            type:'bar',
            barWidth: '60%',  //不显示，可以随便设置 data:[0],
            itemStyle: {
                normal: {
                    color: '#98bcec',  //这里的图例要注意，颜色设置和仪表盘的颜色对应起来                                 }
                         }
            }
        },
        {
            name:'各项指标标准值',
            type:'bar',
            barWidth: '60%',  //不显示，可以随便设置 data:[0],
            itemStyle: {
                normal: {
                    color: '#3bbfc4',  //这里的图例要注意，颜色设置和仪表盘的颜色对应起来                                 }
                         }
            }
        },
        

    ]
};
myChart2.setOption(option2);





setInterval(function(){
    
    var series1=option2.series[option2.series.length-4];
    series1.startAngle+=12;
    series1.endAngle=series1.startAngle+17;
    
    var series2=option2.series[option2.series.length-3];
    series2.startAngle+=12;
    series2.endAngle=series2.startAngle+17;
    
    
    myChart2.setOption(option2);
},100);
