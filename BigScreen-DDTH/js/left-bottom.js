


function parseNum(num){
    var reg=/(?=(?!\b)(\d{3})+$)/g;  
    return String(num).replace(reg, ',');
}

var Data3={
	"data": {
		"VALUEKPI1": 56640900,
		"VALUEKPI2": 6531297500,
		"CREATE_DATE": {
			"date": 4,
			"day": 4,
			"hours": 0,
			"minutes": 0,
			"month": 0,
			"nanos": 0,
			"seconds": 0,
			"time": 1514995200000,
			"timezoneOffset": -480,
			"year": 118
		},
		"KPI1": 56405777,
		"KPI2": 1883332904,
		"KPI3": 100000000,
		"KPI4": 250019730000
	},
	"parm": {
		"TITLE": null,
		"KPI1NAME": "沃账户用户数",
		"KPI2NAME": "支付业务额",
		"KPI1UNIT": "(个)",
		"KPI2UNIT": "(元)",
		"TYPE1NAME": "未达到序时计划",
		"TYPE2NAME": "达到序时计划",
		"TYPE3NAME": "达到年计划"
	}
}
;
// $.ajax({
//     url:getContextPath()+'/querykpmgt02.json',
//     type:'post',
//     dataType:'json',
//     cache:false,
//     async:false,
//     success:function(respdata){
//          Data3= respdata
//         }

    
// })
var  dataname1=Data3.parm.TYPE1NAME
var  dataname2=Data3.parm.TYPE2NAME
var  dataname3=Data3.parm.TYPE3NAME
var TITLE =Data3.parm.TITLE;
var KPI1NAME =Data3.parm.KPI1NAME;
var KPI2NAME =Data3.parm.KPI2NAME;
var KPI1UNIT=Data3.parm.KPI1UNIT;
var KPI2UNIT=Data3.parm.KPI2UNIT;

var VALUEKPI1 =Data3.data.VALUEKPI1;
var KPI1 =Data3.data.KPI1;
var KPI3 =Data3.data.KPI3;
var MAX1=parseInt(KPI3*1.2);

var VALUEKPI2 =Data3.data.VALUEKPI2;
var KPI2 =Data3.data.KPI2;
var KPI4 =Data3.data.KPI4;
var MAX2=parseInt(KPI4*1.2);

var myChart3 = echarts.init(document.getElementById('left-bottom'));
var option3 = {
    textStyle:{
        fontFamily: "思源黑体",
    },
    legend: {
        x :0,
        bottom :0,
        selectedMode:false,  //图例禁止点击
//       orient:'vertical',
        data:[dataname1,dataname2,dataname3],
        textStyle:{
            fontSize:14,
            color:'#ddd'
        },
        itemWidth:15,
           
        
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
    xAxis : {  //这里有很多的show，必须都设置成不显示                     
        type : 'category',
        data : [],
        axisLine: {
            show: false 
        },
        splitLine:{
            show: false
         },
        splitArea: {
            interval: 'auto',
            show: false
         }
    },
yAxis : { //这里有很多的show，必须都设置成不显示                     
        type : 'value',
  
        axisLine: {
            show: false
         },
        splitLine:{
            show: false
         },
    },

toolbox: {  
   show: false,
},
    title : {
        text: TITLE,
        x:0,
        textStyle: {
            fontSize: 18,    
            color:'#c2e5fb',
            fontWeight:'normal'//'rgba(255,255,255, 0.9)'
        },
    },
    tooltip : {
    	formatter: function(params) {
        	       console.log(params.data)
                     return params.seriesName + ':' +comdify(params.data.value)+params.data.name  ;
                 },
       position:'right',	
       
    		},
     
    series : [
        {
            name: KPI1NAME,
            type: 'gauge',
            z: 3,
            min: 0,
            center: ['50%', '45%'], 
            max: MAX1,
            startAngle:180,
            endAngle:0,
            splitNumber: 5,
            radius: "80%",
            axisLine: {   
                show: true,         // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width:30,
                    shadowBlur:10,
                    color: [
                        [KPI1/MAX1, '#82cef2'],
                        [KPI3/MAX1, '#5476fb'],
                        [1, '#FE8463'],
                   
                    ],
                    opacity:0.9
                }
            },
            axisTick: {            // 坐标轴小标记
                
                length: 40,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {
                show: true,
                length:20,
                lineStyle: {
                    color:'auto',
                    
                }
            }, 
            axisLabel:{
            	show:false
            },
            pointer: {
                width:10
            },
          
            detail: {
                offsetCenter: ['0%', '-35%'],  
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
//                    fontWeight: 'bolder',
                    color: '#ddd',
                    fontSize:16,
                },
                formatter: function (value) {
                    return KPI1NAME+'\n'+'\n'+parseNum(value.toFixed(0))+KPI1UNIT;
                  
                }
            },
            data:[{value:VALUEKPI1,}]
        },
        {
            name: KPI2NAME,
            type: 'gauge',
            radius :'80%',
            min: 0,
            max:MAX2,
            center: ['50%', '45%'], 
            startAngle: 355,
            endAngle: 185,
            splitNumber: 5,
            axisLine: {
                show: true,
                 lineStyle: {
                    width:30,
                    shadowBlur:10,
                    color: [
                        [KPI2/MAX2, '#82cef2'],
                        [KPI4/MAX2, '#5476fb'],
                        [1, '#FE8463'],
                     
                    
                    ],
                    opacity:0.9
    
                }
            },
            axisTick: {            // 坐标轴小标记
                length:36,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    // opacity:0.9
                }
            },
          
            splitLine: {           // 分隔线
                length:20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto',
                    // opacity:0.9
                }
            },
            pointer: {
                width:10
            },
           
            detail: {
                offsetCenter: ['0%', '40%'],  
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
//                    fontWeight: 'bolder',
                    color: '#ddd',
                    fontSize:16,
                },
                formatter: function (value) {
                    return KPI2NAME+'\n'+'\n'+parseNum(value.toFixed(0))+KPI2UNIT;
                }
            },
            axisLabel:{
            	show:false
            },
            data:[{value: VALUEKPI2, }]
        },
        {
            name:dataname1,
            type:'bar',
            barWidth: '60%',  //不显示，可以随便设置 data:[0],
            itemStyle: {
                normal: {
                    color: '#82cef2',  //这里的图例要注意，颜色设置和仪表盘的颜色对应起来                                 }
                         }
            }
        },
        {
            name:dataname2,
            type:'bar',
            barWidth: '60%',  //不显示，可以随便设置 data:[0],
            itemStyle: {
                normal: {
                    color: '#5476fb',  //这里的图例要注意，颜色设置和仪表盘的颜色对应起来                                 }
                         }
            }
        },
        {
            name:dataname3,
            type:'bar',
            barWidth: '60%',  //不显示，可以随便设置 data:[0],
            itemStyle: {
                normal: {
                    color: '#FE8463',  //这里的图例要注意，颜色设置和仪表盘的颜色对应起来                                 }
                         }
            }
        },
    ]
};
myChart3.setOption(option3);