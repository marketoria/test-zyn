


function comdify(n){//加千分符
       n=n+'';
    　　var re=/\d{1,3}(?=(\d{3})+$)/g;
    　　var n1=n.replace(/^(\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(re,"$&,")+s2;});
    　　return n1;
    }

var myChart2 = echarts.init(document.getElementById('left-bottom'));
var resData2={
	"valueKpi1": [14995422, 14998062, 15032332, 15037061, 15358675, 15674126, 15722415, 15830385],
	"valueKpi2": [34861393, 35042369, 35173484, 35496501, 36358935, 36705152, 36881229, 37079134],
	"maxkpi2": 37079134,
	"parm": {
		"TITLE": "电子券发行量趋势",
		"KPI1NAME": "终端券",
		"KPI2NAME": "消费券"
	},
	"maxkpi1": 15830385,
	"createDate": ["2017-12-02", "2017-12-03", "2017-12-04", "2017-12-05", "2017-12-07", "2017-12-09", "2017-12-10", "2017-12-11"]
}
;
// $.ajax({
//     url:getContextPath()+'/querykpmgs02.json',
//     type:'post',
//     dataType:'json',
//     cache:false,
//     async:false,
//     success:function(respdata){
//         resData2 = respdata
//         }
 
    
//  })
 var Xdate =resData2.createDate;
 var valueKpi1 =resData2.valueKpi1;
 var valueKpi2 =resData2.valueKpi2;
 var titledate =resData2.parm.TITLE;
 var kpi1name =resData2.parm.KPI1NAME;
 var kpi2name =resData2.parm.KPI2NAME;
 
 
 

 var   Xdatenew=[];
 for(var i=0;i<Xdate.length;i++){
 	Xdatenew[i]=Xdate[i].substring(5)

 }
var option2 = {
    textStyle:{
        fontFamily: "思源黑体",
    },
    title: {
        text: titledate,
        textStyle: {
            fontSize: 18,    
            color:'#c2e5fb' ,
            fontWeight:'normal'//'rgba(255,255,255, 0.9)'
        },
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:[kpi1name,kpi2name],
        textStyle:{
            fontSize:16,
             color:'#ddd'
        },
        right:0,
        top:40,
    },
   
    grid: {
        left: '3%',
        right: '12%',
        bottom: '5%',
        top:'25%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data :Xdatenew,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
        }
    ],
    series : [
     
       
        {
            name:kpi1name,
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'top',
                    formatter: function(params) {
                     	
                        
                        return comdify(params.value);
                        }
                                      
                }
            },
            areaStyle: {
            	normal: {
                opacity:0.8,
                color:"#9083b9",
                
            }
            },
            itemStyle:{
                normal:{
                	
                    color:'#764080',
                    fontWeight:'bloder'
                }
            },
            data:valueKpi1,
            
          
            
            
        },
       
        
        {
            name:kpi2name,
            type:'line',
            stack: '总量',
            label: {
                normal: {
                	 show: false,
                    position: 'top',
                     formatter: function(params) {
                        
                           return comdify(params.value);
                        }
                                      
                
                  
                }
            },
            areaStyle: {normal: {
            	color: '#98bcec',
                opacity: 0.8
                
            }},
            itemStyle:{
                normal:{
                
                    color:'#98bcec',
                    fontWeight:'bloder'
                }
            },
            data:valueKpi2
           
           
            
        }
    ]
};

myChart2.setOption(option2);