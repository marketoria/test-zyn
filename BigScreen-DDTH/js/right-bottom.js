








var myChart5 = echarts.init(document.getElementById('right-bottom'));
var Data5={
	"data": [{
			"name": "代理商资金归集",
			"value": [2349526400, 35.82]
		}, {
			"name": "电渠",
			"value": [968656400, 14.77]
		}, {
			"name": "通信交费",
			"value": [675267200, 10.29]
		}, {
			"name": "对公转账",
			"value": [602323800, 9.18]
		}, {
			"name": "对公充值",
			"value": [508589200, 7.75]
		}, {
			"name": "对公提现",
			"value": [296393100, 4.52]
		}, {
			"name": "自有厅归集",
			"value": [290743300, 4.43]
		}, {
			"name": "理财投资申购",
			"value": [181455300, 2.77]
		}, {
			"name": "电子券发放",
			"value": [143362100, 2.19]
		}, {
			"name": "迷你厅",
			"value": [142399300, 2.17]
		}
	],
	"parm": {
		"TITLE": "支付业务额分布",
		"NAME": "导航"
	}
}
;
// $.ajax({
//     url:getContextPath()+'/querykpmgt042.json',
//     type:'post',
//     dataType:'json',
//     cache:false,
//     async:false,
//     success:function(respdata){
//          Data5 = respdata
//         }

    
// })
var TITLE=Data5.parm.TITLE;
var NAME=Data5.parm.NAME;

var Kdata=Data5.data;
var seriesdate=[];
var color=['#9fa7d8', '#deb140', '#49dff0', '#034079', '#6f81da', '#e2690f','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
for(var i=0;i<Kdata.length;i++){
    var ss={
        value: Kdata[i].value,
        name: Kdata[i].name,
        itemStyle: {
            normal: {
                color: color[i]
            }
        },
    
    
    }
    seriesdate.push(ss);
}







var option5 = {
    textStyle:{
        fontFamily: "思源黑体",
    },
    title: {
        text: TITLE,
        left:0,
        top:0,
        textStyle: {
            color: '#c2e5fb',
            fontSize: 18,
            fontWeight:'normal'
        }  

    },
      
    tooltip: {
        trigger: 'item',
        formatter: function(parm,ticket,callback){
        	
            return parm.name+'&nbsp;' +'<br/>'+comdify(parm.data.value[0])+'&nbsp;'+'('+parm.data.value[1]+'%'+')'
        }
    },
        
        series: [{
    
            breadcrumb:false,//去掉option
            type: 'treemap',
            width: '90%',
            height: '80%',
            roam: true, //是否开启拖拽漫游（移动和缩放）
            nodeClick: false, //点击节点后的行为,false无反应
            label: {
                normal: {
                    textStyle: {
//                        fontWeight: 'bold',
                        fontSize: '16',
                    }
    
                }
    
            },
            colorAlpha:0.5,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        // formatter: "{b}"
                    },
                    borderWidth: 0.51,
                    borderColor: 'black'
                },
                /* emphasis: {
                     label: {
                         show: true
                     },
                     color: '#cc99cc',
                     borderWidth: 3,
                     borderColor: '#996699'
                 }*/
            },
         
            data: seriesdate,
    
            
    
           
                
                
                
    
        }]
    };




    
//var currentIndex1 =-1;
//
//setInterval(function () {
//    var dataLen1 = option5.series[0].data.length;
//   console.log(dataLen1)
//    
//    // 取消之前高亮的图形
//     myChart5.dispatchAction({
//        type: 'downplay',
//        seriesIndex:0,
//        dataIndex:currentIndex1,
//        
//        
//    });
//  
//    currentIndex1 = (currentIndex1 + 1) % dataLen1;
//    //高亮当前图形
//     myChart5.dispatchAction({
//         type: 'highlight',
//         seriesIndex: 0,
//         dataIndex:currentIndex1
//     });
//   显示 tooltip
//    myChart5.dispatchAction({
//        type: 'showTip',
//        seriesIndex: 0,
//        dataIndex:currentIndex1,
//      
//    });
//   
//}, 2000);
myChart5.setOption(option5)

if (option5 && typeof option5 === "object") { 
    
     myChart5.on('click', function (params) {
         if (params.componentType === "series") {
                
               relation.style.display='block';
         } 
     })
 }

    
             

