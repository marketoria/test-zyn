




 var myChart55 = echarts.init(document.getElementById('relation-right-bottom2'));
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
		}, {
			"name": "理财投资赎回",
			"value": [94131200, 1.43]
		}, {
			"name": "其他-代发",
			"value": [68174200, 1.04]
		}, {
			"name": "外部商户-资金归集",
			"value": [64260500, 0.98]
		}, {
			"name": "对私提现",
			"value": [45173200, 0.69]
		}, {
			"name": "消费贷款放款",
			"value": [28548100, 0.44]
		}, {
			"name": "话费托收",
			"value": [27430500, 0.42]
		}, {
			"name": "沃易购",
			"value": [23450200, 0.36]
		}, {
			"name": "电子券消费",
			"value": [16920400, 0.26]
		}, {
			"name": "行销设备",
			"value": [9222500, 0.14]
		}, {
			"name": "清账单",
			"value": [8738600, 0.13]
		}, {
			"name": "自助终端",
			"value": [6170500, 0.09]
		}, {
			"name": "外部收单",
			"value": [3646400, 0.06]
		}, {
			"name": "对私充值",
			"value": [1765100, 0.03]
		}, {
			"name": "沃钱包商圈",
			"value": [1702700, 0.03]
		}, {
			"name": "对私转账",
			"value": [1011000, 0.02]
		}, {
			"name": "员工服务",
			"value": [623900, 0.01]
		}, {
			"name": "其他内部商户（除代发外）",
			"value": [125500, 0]
		}, {
			"name": "外部商户（除POS收单外）",
			"value": [6900, 0]
		}
	],
	"parm": {
		"TITLE": "支付业务额分布",
		"NAME": "导航"
	}
}
;
// $.ajax({
//     url:getContextPath()+'/querykpmgt04.json',
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
var color=['#9fa7d8', '#deb140', '#49dff0', '#034079', '#6f81da', '#e2690f','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3','#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#e2690f','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3','#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#e2690f','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3','#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#e2690f','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
for(var i=0;i<Kdata.length;i++){
    var sss={
        value: Kdata[i].value,
        name: Kdata[i].name,
        itemStyle: {
            normal: {
                color: color[i]
            }
        },
    
    
    }
    seriesdate.push(sss);
}



// console.log(seriesdate)



var option55 = {
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
        formatter: function(parm,ticket,callback){
        	   return parm.name+'&nbsp;' +'<br/>'+comdify(parm.data.value[0])+'&nbsp;'+'('+parm.data.value[1]+'%'+')'
        }
    },
    
    calculable: true,
        series: [{
           
            name: NAME,
            type: 'treemap',
            roam: true, //是否开启拖拽漫游（移动和缩放）
            label: {
                normal: {
                    textStyle: {
                        fontWeight: 'bold',
                        fontSize: '16',
                    }
    
                }
    
            },
            colorAlpha:1,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{b}"
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

    myChart55.setOption(option55)

if (option55 && typeof option55 === "object") { 
    
     myChart55.on('click', function (params) {
         if (params.componentType === "series") {
                
               relation.style.display='block';
         } 
     })
 }

   