     



var Data2={
	"valueKpi1": [5124908900, 3472845300, 9041346000, 1130774000],
	"valueKpi2": [153203910000, 20421520000, 212567250000, 17030960000],
	"parm": {
		"TITLE": "KPI指标完成进度",
		"SHOWNAME": "未完成占比"
	},
	"deptname": ["业拓部", "互金部", "企金部", "移动部"]
}
;
// $.ajax({
//     url:getContextPath()+'/querykpmgt01.json',
//     type:'post',
//     dataType:'json',
//     cache:false,
//     async:false,
//     success:function(respdata){
//          Data2 = respdata
//         }

    
// })

//var xAxisData = Data2.deptname;
//测试
var  xAxisData = [];
xAxisData.push(Data2.deptname[2]);
xAxisData.push(Data2.deptname[3]);
xAxisData.push(Data2.deptname[1]);
xAxisData.push(Data2.deptname[0]);


var valueKpi1 =[];
valueKpi1.push(Data2.valueKpi1[2]);
valueKpi1.push(Data2.valueKpi1[3]);
valueKpi1.push(Data2.valueKpi1[1]);
valueKpi1.push(Data2.valueKpi1[0]);


var valueKpi2 =[];
valueKpi2.push(Data2.valueKpi2[2]);
valueKpi2.push(Data2.valueKpi2[3]);
valueKpi2.push(Data2.valueKpi2[1]);
valueKpi2.push(Data2.valueKpi2[0]);


var SHOWNAME =Data2.parm.SHOWNAME;
var dataValue = 100;
var firstvalue = (valueKpi1[0]/valueKpi2[0])*100
var secondvalue = (valueKpi1[1]/valueKpi2[1])*100
var treevalue = (valueKpi1[2]/valueKpi2[2])*100
var fourtvalue = (valueKpi1[3]/valueKpi2[3])*100

var firstPieData = parseInt(firstvalue)
var secondPieData = parseInt(secondvalue)
var threePieData = parseInt(treevalue)
var fourPieData =  parseInt(fourtvalue)

var TITLE =Data2.parm.TITLE;

//console.log(xAxisData)
var valueKpi11=[]
for(var i=0;i<valueKpi1.length;i++){
      valueKpi11[i]=(valueKpi1[i]/100000000).toFixed(2)
}

//console.log(valueKpi11)
//
//var max = valueKpi11[0];
//
//for(var i=1;i<valueKpi11.length;i++){ 
//
//  if(max<valueKpi11[i])max=valueKpi11[i];
//
//}

//console.log(max);
var labelTop = {
    normal: {
        label: {
            show: true,
            fontSize: 14,
            position: 'center',
            formatter: '{b}',
            textStyle: {
                baseline: 'bottom',
                color: '#fff'
            }
        },
        labelLine: {
            show: false
        }
    }
};
var labelBottom = {
    normal: {
        color: '#ccc',
        opacity:0.5,
        position: 'none',
        label: {
            show: true,
            position: 'center'
        },
        labelLine: {
            show: false
        }
    }
};


var labelFromatter = {
    normal: {
        label: {
            formatter: function(params) {
                return (dataValue - params.value)+'%';
            },
            color: '#fff',
            textStyle: {
                baseline: 'top'
            }
        },
//        color: {
//            type: 'linear',
//            x: 1,
//            y: 0,
//            x2: 0,
//            y2: 1,
//            colorStops: [{
//                offset: 0,
//                color: '#00fff6' // 0% 处的颜色00fff6
//            }, {
//                offset: 1,
//                color: '#005aff' // 100% 处的颜色
//            }],
//            globalCoord: false // 缺省为 false
//        },
        color:'#F3A43B',
        shadowColor: '#0c3da3',
        shadowBlur: 10,
        shadowOffsetX: 1,
        shadowOffsetY: 1
    }
};
var labelFromatter1 = {
    normal: {
        label: {
            formatter: function(params) {
                return (dataValue - params.value)+'%';
            },

            color: '#fff',
            textStyle: {
                baseline: 'top'
            }
        },
//        color: {
//            type: 'linear',
//            x: 1,
//            y: 0,
//            x2: 0,
//            y2: 1,
//            colorStops: [{
//                offset: 0,
//                color: '#f5f4af' // 0% 处的颜色
//            }, {
//                offset: 1,
//                color: 'yellow' // 100% 处的颜色
//            }],
//            globalCoord: false // 缺省为 false
//        },
        color:'#27727B',
        shadowColor: '#0c3da3',
        shadowBlur: 10,
        shadowOffsetX: 1,
        shadowOffsetY: 1
    }
};
var labelFromatter2 = {
    normal: {
        label: {
            formatter: function(params) {
                return (dataValue - params.value)+'%';
            },
            color: '#fff',
            textStyle: {
                baseline: 'top'
            }
        },
//        color: {
//            type: 'linear',
//            x: 1,
//            y: 0,
//            x2: 0,
//            y2: 1,
//            colorStops: [{
//                offset: 0,
//                color: '#70fc1d' // 0% 处的颜色
//            }, {
//                offset: 1,
//                color: '#5d7f00' // 100% 处的颜色
//            }],
//            globalCoord: false // 缺省为 false
//        },
        color:'#FE8463',
        shadowColor: '#0c3da3',
        shadowBlur: 10,
        shadowOffsetX: 1,
        shadowOffsetY: 1
    }
};
var labelFromatter3 = {
    normal: {
        label: {
            formatter: function(params) {
                return (dataValue - params.value)+'%';
            },
            color: '#fff',
            textStyle: {
                baseline: 'top'
            }
        },
//        color: {
//            type: 'linear',
//            x: 1,
//            y: 0,
//            x2: 0,
//            y2: 1,
//            colorStops: [{
//                offset: 0,
//                color: '#731313' // 0% 处的颜色
//            }, {
//                offset: 1,
//                color: '#705151' // 100% 处的颜色
//            }],
//            globalCoord: false // 缺省为 false
//        },
        color:'#9BCA63',
        shadowColor: '#0c3da3',
        shadowBlur: 10,
        shadowOffsetX: 1,
        shadowOffsetY: 1
    }
};

var radius = [20, 40];

var myChart1 = echarts.init(document.getElementById('left-top'));
var option1 = {
    textStyle:{
        fontFamily: "思源黑体",
    },
      tooltip: {
          show: true,
          trigger: 'item',
          formatter: '{b} : {c}%',
      },
      
      title : {
        text:TITLE,
        x:0,
        textStyle: {
            fontSize: 18,    
            color:'#c2e5fb',
            fontWeight:'normal'//'rgba(255,255,255, 0.9)'
        },
    },
      grid: {
          left: '4%',
          right: '4%',
          top: '45%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: {
          type: 'category',
          boundaryGap: true,
          axisTick: {
              show: false
          },
          axisLine: {
              lineStyle: {
                  color: '#fff'
              },
              onZero: true
          },
          splitLine: {
        	  show: false,
              lineStyle: {
                  type: 'dotted',
                  color: '#1978D9'
              }
          },
          data:xAxisData
      },
      yAxis: {
          type: 'value',
          name:'(亿元)',
         
          axisTick: {
              show: false
          },
          axisLine: {
              lineStyle: {
                  color: '#fff'
              },
              onZero: false
          },
          axisLabel: {
              fontSize: 11,
              color: '#A5CADB'
          },
          splitLine: {
        	  show: false,
              lineStyle: {
                  type: 'dotted',
                  color: '#1978D9'
              }
          },
          scale: true
      },
      series: [{
          name:'',
          type: 'bar',
//          barGap:'30%',
          barWidth:'50',
          itemStyle: {
//              normal: {
//                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
//                      offset: 0,
//                      color: "#032b3e" // 0% 处的颜色
//                  }, {
//                      offset: 1,
//                      color: "#0d9abb" // 100% 处的颜色
//                  }], false),
//              }
        	  normal:{
        		  color:'#9083b9'
        	  }
          },
          label: {
              normal: {
                  show: true,
                  position:'top',
                
              }
          },
          data:valueKpi11,
          tooltip: {
            formatter: '{b} : {c}'
        }
            
         
       
      },{
          type: 'pie',
          center: ['12%', '24%'],
          startAngle: 180,
          radius: radius,
          clockwise: false,
          itemStyle: labelFromatter,
          data: [{
              name: SHOWNAME,
              value: dataValue - firstPieData,
              itemStyle:labelBottom
          }, {
              name: xAxisData[0],
              value: firstPieData,
              itemStyle: labelTop
          }],
         
      }, {
          type: 'pie',
          center: ['37%', '24%'],
          radius: radius,
          startAngle: 180,
          clockwise: false,
          itemStyle: labelFromatter1,
          data: [{
              name: SHOWNAME,
              value: dataValue - secondPieData,
              itemStyle: labelBottom
          }, {
              name: xAxisData[1],
              value: secondPieData,
              itemStyle: labelTop
          }],
        
      }, {
          type: 'pie',
          center: ['62%', '24%'],
          radius: radius,
          startAngle: 180,
          clockwise: false,
          itemStyle: labelFromatter2,
          data: [{
              name:SHOWNAME,
              value: dataValue - threePieData,
              itemStyle: labelBottom
          }, {
              name:  xAxisData[2],
              value: threePieData,
              itemStyle: labelTop
          }],
        
      },{
        type: 'pie',
        center: ['87%', '24%'],
        radius: radius,
        startAngle: 180,
        clockwise: false,
        itemStyle: labelFromatter3,
        data: [{
            name: SHOWNAME,
            value: dataValue - fourPieData,
            itemStyle: labelBottom
        }, {
            name:  xAxisData[3],
            value: fourPieData,
            itemStyle: labelTop
        }],
      
    }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart1.setOption(option1);
 


                     

