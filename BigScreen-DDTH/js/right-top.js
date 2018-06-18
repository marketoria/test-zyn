







var myChart6 = echarts.init(document.getElementById('right-top'));
var resData6={
	"valueKpi1": [{
			"name": "超市类",
			"value": 6460
		}, {
			"name": "娱乐类",
			"value": 8
		}, {
			"name": "餐饮类",
			"value": 9
		}, {
			"name": "其他类",
			"value": 8421
		}, {
			"name": "批发类",
			"value": 1
		}, {
			"name": "公益类",
			"value": 11
		}, {
			"name": "加油类",
			"value": 26
		}, {
			"name": "汽车类",
			"value": 7
		}, {
			"name": "房产类",
			"value": 6
		}
	],
	"valueKpi2": [{
			"name": "超市类",
			"value": 43
		}, {
			"name": "宾馆类",
			"value": 3
		}, {
			"name": "餐饮类",
			"value": 1
		}, {
			"name": "其他类",
			"value": 71
		}, {
			"name": "批发类",
			"value": 1
		}, {
			"name": "汽车类",
			"value": 5
		}, {
			"name": "房产类",
			"value": 2
		}
	],
	"parm": {
		"TITLE": "特约商户行业分布",
		"KPI1NAME": "网络特约商户",
		"KPI2NAME": "实体特约商户"
	}
}
;
// $.ajax({
//    url:getContextPath()+'/querykpmgt05.json',
//    type:'post',
//    dataType:'json',
//    cache:false,
//    async:false,
//    success:function(respdata){
//        resData6 = respdata
//        }

   
// })
var valueKpi1 = resData6.valueKpi1;
var valueKpi2 = resData6.valueKpi2;
var titledate =resData6.parm.TITLE;
var kpi1name =resData6.parm.KPI1NAME;
var kpi2name =resData6.parm.KPI2NAME;


var option6 = {
    textStyle:{
        fontFamily: "思源黑体",
    },
    title : {
        text: titledate,
        x:0,
        textStyle: {
            fontSize: 18,    
            color:'#c2e5fb' ,
            fontWeight:'normal'//'rgba(255,255,255, 0.9)'
        },
    },
    tooltip : {
        trigger: 'item',
        formatter: function(params) {
    	     
            return params.name + ': ' +comdify(params.value)+'('+params.percent+'%' +')';
            }

    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:[kpi1name,kpi2name],
        selectedMode:'single',
        textStyle:{
            fontSize:14,
            color:'#ddd'
        },
        color:['#deb140', '#49dff0',]
        
    },
 

    calculable : true,
    
    series : [
        
        {
            name:kpi1name,
            type:'pie',
            radius : [40, 100],
            center : ['50%', '50%'],
            roseType : 'radius',
            data:valueKpi1,
            labelLine: {//标签连接的线条    
                normal: {//默认状态    
                    // lineStyle: {    
                    //     color: 'rgba(255, 0, 0, 1)'//线条颜色    
                    // },    
                    smooth: 0.2,//线条的笔直程度    
                    length: 0,//线条上一节的长度    
                    length2: 10//线条下一节的长度    
                }    
            }, 
            label:{
                normal:{
                    textStyle:{
                        fontSize:14,
                        fontWeight:'bolder'
                    }
                    
                }
            },
            itemStyle:{
                normal:{
                    opacity:0.9,
                }
            },
           
            color:[ '#deb140', '#49dff0', '#6f81da', '#00ffb4', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
        },
         {
            name:kpi2name,
            type:'pie',
            radius : [40, 100],
            center : ['50%', '50%'],
            roseType : 'radius',
            data:valueKpi2,
            labelLine: {//标签连接的线条    
                normal: {//默认状态    
                    // lineStyle: {    
                    //     color: 'rgba(255, 0, 0, 1)'//线条颜色    
                    // },    
                    smooth: 0.2,//线条的笔直程度    
                    length: 0,//线条上一节的长度    
                    length2: 10//线条下一节的长度    
                }    
            },
            label:{
                normal:{
                    textStyle:{
                        fontSize:14,
                        fontWeight:'bolder'
                    
                    }
                    
                }
            }, 
            itemStyle:{
                normal:{
                    opacity:0.9,
                }
            },
            color:[ '#49dff0', '#deb140','#6f81da', '#00ffb4', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
        }
    ]
};

var currentIndex =-1;
setInterval(function () {
    var dataLen = option6.series[0].data.length;

    
    // 取消之前高亮的图形
    myChart6.dispatchAction({
        type: 'downplay',
        seriesIndex:0,
        dataIndex:currentIndex,
        
    });
    currentIndex = (currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart6.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex:currentIndex
    });
    // 显示 tooltip
    myChart6.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex:currentIndex
    });
}, 2000);
var currentIndex2 =-1;
setInterval(function () {
    var dataLen2 = option6.series[1].data.length;
  
    
    // 取消之前高亮的图形
    myChart6.dispatchAction({
        type: 'downplay',
        seriesIndex:1,
        dataIndex:currentIndex2,
        
    });
    currentIndex2 = (currentIndex2 + 1) % dataLen2;
    // 高亮当前图形
    myChart5.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex:currentIndex2
    });
    // 显示 tooltip
    myChart6.dispatchAction({
        type: 'showTip',
        seriesIndex:1,
        dataIndex:currentIndex2
    });
}, 2000);
var Index2 =true;
setInterval(function () {

   if(Index2){
    myChart6.dispatchAction({
        type: 'legendUnSelect',
        name:kpi1name,
       
    });
    myChart6.dispatchAction({
        type: 'legendSelect',
        name:kpi2name,
     
    });

    Index2 = false;

   
   }else{
    

    myChart6.dispatchAction({
        type: 'legendUnSelect',
        name:kpi2name,
       
    });
    myChart6.dispatchAction({
        type: 'legendSelect',
        name:kpi1name,
     
    }); 

    Index2 = true;
   }


   
}, 24000);
myChart6.setOption(option6)


