











var myChart1 = echarts.init(document.getElementById('left-top'));
var resData1={
	"valueKpi1": [54315, 60109, 79176, 175910, 394419, 169077, 94333],
	"valueKpi2": [49152300, 49212400, 49291600, 49467500, 50261900, 50632900, 50727200],
	"maxkpi2": 50727200,
	"parm": {
		"TITLE": "沃账户开户趋势",
		"KPI1NAME": "支付账户日新增数量",
		"KPI2NAME": "支付账户年累计数量",
		"KPI1UNIT": "户数",
		"KPI2UNIT": "户数"
	},
	"maxkpi1": 398663,
	"createDate": ["2017-12-02", "2017-12-03", "2017-12-04", "2017-12-05", "2017-12-07", "2017-12-09", "2017-12-10"]
}
;
// $.ajax({
//    url:getContextPath()+'/querykpmgs01.json',
//    type:'post',
//    dataType:'json',
//    cache:false,
//    async:false,
//    success:function(respdata){
//        resData1 = respdata
//        }

   
// })

var Xdate =resData1.createDate;
var valueKpi1 =resData1.valueKpi1;
var valueKpi2 =resData1.valueKpi2;
var titledate =resData1.parm.TITLE;
var kpi1unit = resData1.parm.KPI1UNIT;
var kpi2unit = resData1.parm.KPI2UNIT;
var kpi1name =resData1.parm.KPI1NAME;
var kpi2name =resData1.parm.KPI2NAME;
var kpi1max=parseInt(resData1.maxkpi1);
var kpi2max=parseInt(resData1.maxkpi2);



var   Xdatenew=[];
for(var i=0;i<Xdate.length;i++){
	Xdatenew[i]=Xdate[i].substring(5)

}
//console.log(Xdatenew);

var option1= {
    textStyle:{
        fontFamily: "思源黑体",
    },
    title : {
        text:titledate,
        x:0,
        textStyle: {
            fontSize: 18,    
            color:'#c2e5fb' ,
            fontWeight:'normal'//'rgba(255,255,255, 0.9)'
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
       
        axisPointer: {
             type: 'cross',
            label: {
                show: true,
                backgroundColor:'#333'
            }
        }
    
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '12%',
        top:'20%',
         //height:280,
        containLabel: true
    },
    
    legend: {
        data: [kpi1name, kpi2name],
        textStyle:{
            fontSize:12,
             color:'#ddd'
        },
        bottom:10,
    },
    xAxis: [{
        type: 'category',
        data: Xdatenew,
      
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        
    }],
    yAxis: [{
        type: 'value',
        name: kpi2unit,
     
      
        
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        splitLine: {
            show: false,
           
        }
      
    }, {
        type: 'value',
        name:kpi1unit,
//        max:kpi1max,
     
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        splitLine: {
            show: false,
           
        }
    }],
    series: [{
        name: kpi2name,
        type: 'bar',
        data:valueKpi2,
        // stack: '总量',
        label: {
            normal: {
                show: false,
                position: 'insideRight'
            }
        },
        itemStyle:{
            normal:{
            	  color: '#98bcec',
                  opacity: 0.5
            }
        },
    }, {
        name:kpi1name,
        type: 'line',
        yAxisIndex: 1,
        symbolSize:8,
        data:valueKpi1,
        lineStyle:{
            normal:{
                color:'#3bbfc4',
                opacity: 1
            }
       },
        itemStyle: {
            normal: {
            	   color:'#3bbfc4',
                borderColor: '#3bbfc4',
                borderWidth: 2.5,
            }
        },
      
    }]
};

myChart1.setOption(option1);