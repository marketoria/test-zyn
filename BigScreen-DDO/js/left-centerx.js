



 var myChart1 = echarts.init(document.getElementById('left-center'));
 var resData1={
	"valueKpi1": [369, 465, 1072, 2584, 65],
	"valueKpi2": [231, 254, 1077, 5589, 5664],
	"maxkpi2": 5664,
	"parm": {
		"TITLE": "业务规模",
		"KPI1NAME": "累计沃账户用户数",
		"KPI2NAME": "年度累计支付业务额",
		"KPI1UNIT": "(亿元)",
		"KPI2UNIT": "(万户)"
	},
	"maxkpi1": 2584,
	"createDate": ["2014", "2015", "2016", "2017", "2018"]
}
;
//  $.ajax({
//     url:getContextPath()+'/querykpmgf02.json',
//     type:'post',
//     dataType:'json',
//     cache:false,
//     async:false,
//     success:function(respdata){
//         resData1 = respdata
//         }

    
// })




var Xdate =resData1.createDate;
var valueKpi1 =resData1.valueKpi1;
var valueKpi2 =resData1.valueKpi2;
var titledate =resData1.parm.TITLE;
var kpi1unit = resData1.parm.KPI1UNIT;
var kpi2unit = resData1.parm.KPI2UNIT;
var kpi1name =resData1.parm.KPI2NAME;
var kpi2name =resData1.parm.KPI1NAME;
var kpi1max=parseInt(resData1.maxkpi1);
var kpi2max=parseInt(resData1.maxkpi2);
//console.log(kpi1name)
var option1 = {
    textStyle:{
        fontFamily: "思源黑体",
    },

    title : {
        text: titledate,
        x:0,
        textStyle: {
            fontSize: 18,    
            color:'#c2e5fb',
            fontFamily: "思源黑体",//'rgba(255,255,255, 0.9)'
            fontWeight:'normal'
        },
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left:'13%',
        right:'13%',
    },
   
    legend: {
        data:[kpi1name,kpi2name],
        textStyle:{
            fontSize:12,
            color:'#ddd',
            fontFamily: "思源黑体",
            
        },
        bottom:0,
        selectedMode:'single',
    },
    xAxis: [
        {
            type: 'category',
            // axisTick: {
            //     alignWithLabel: true
            // },
            data: Xdate,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
        }
    ],
    yAxis: [
        {  
            type: 'value',
            name: kpi1unit,
            
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            splitLine: {
                show: false,
               
            },
//            max:kpi1max
          
        },  
        {
            type: 'value',
            name: kpi2unit,
            position:'right',
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            splitLine: {
                show: false,
               
            },
//            max:kpi2max
            
        }
    ],
    series: [
        {
            name:kpi1name,
            type:'bar',
            data:valueKpi1,
         
            label: {
                normal: {
                    show: true,
                    
                    formatter: function(params) {
                        
                        return comdify(params.value);
                    },
                    textStyle:{
                       color:'#fff'
                       
                    }
        
                  
                },
       
            },
            itemStyle:{
                normal:{
                    opacity:0.9,
                   
                    color:'#9083b9',
                }
            },
            yAxisIndex: 0,
        },
        {
            name:kpi2name,
            type:'bar',
            yAxisIndex: 1,
            data:valueKpi2,
            label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        
                        return comdify(params.value);
                     },
                     textStyle:{
                    	 color:'#fff',
                    	
                      }
          
                }
            },
            itemStyle:{
                normal:{
                    opacity:0.9,
                    color:'#82cef2',
                }
            },
        }
      
    ]
};
myChart1.setOption(option1)

var Index =true;

setInterval(function () {
   if(Index){
    myChart1.dispatchAction({
        type: 'legendUnSelect',
        name:kpi1name,
       
    });
    myChart1.dispatchAction({
        type: 'legendSelect',
        name:kpi2name,
     
    });
    Index = false;
   
   }else{
    myChart1.dispatchAction({
        type: 'legendUnSelect',
        name:kpi2name,
       
    });
    myChart1.dispatchAction({
        type: 'legendSelect',
        name:kpi1name,
     
    }); 
    Index = true;
   }


   
}, 5000);