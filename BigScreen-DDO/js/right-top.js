




















var myChart5= echarts.init(document.getElementById('right-top'));

var Data502={
	"bank": ["建行", "其他", "中行", "上海银行", "农行", "平安", "光大银行", "工行", "交行", "招行", "广发银行", "浦发银行", "北京银行"],
	"data": [[{
				"name": "B2B网银",
				"value": "招行"
			}, {
				"name": "B2B网银",
				"value": "工行"
			}, {
				"name": "B2B网银",
				"value": "中行"
			}, {
				"name": "B2B网银",
				"value": "浦发银行"
			}, {
				"name": "B2B网银",
				"value": "光大银行"
			}, {
				"name": "B2B网银",
				"value": "建行"
			}, {
				"name": "B2B网银",
				"value": "农行"
			}, {
				"name": "B2B网银",
				"value": "交行"
			}, {
				"name": "B2B网银",
				"value": "其他"
			}
		], [{
				"name": "WEB网银",
				"value": "招行"
			}, {
				"name": "WEB网银",
				"value": "工行"
			}, {
				"name": "WEB网银",
				"value": "农行"
			}, {
				"name": "WEB网银",
				"value": "建行"
			}, {
				"name": "WEB网银",
				"value": "平安"
			}, {
				"name": "WEB网银",
				"value": "光大银行"
			}, {
				"name": "WEB网银",
				"value": "中行"
			}, {
				"name": "WEB网银",
				"value": "广发银行"
			}, {
				"name": "WEB网银",
				"value": "交行"
			}, {
				"name": "WEB网银",
				"value": "上海银行"
			}, {
				"name": "WEB网银",
				"value": "北京银行"
			}, {
				"name": "WEB网银",
				"value": "其他"
			}
		], [{
				"name": "代扣",
				"value": "农行"
			}, {
				"name": "代扣",
				"value": "中行"
			}, {
				"name": "代扣",
				"value": "工行"
			}, {
				"name": "代扣",
				"value": "建行"
			}, {
				"name": "代扣",
				"value": "光大银行"
			}, {
				"name": "代扣",
				"value": "交行"
			}, {
				"name": "代扣",
				"value": "招行"
			}, {
				"name": "代扣",
				"value": "平安"
			}, {
				"name": "代扣",
				"value": "广发银行"
			}, {
				"name": "代扣",
				"value": "浦发银行"
			}, {
				"name": "代扣",
				"value": "北京银行"
			}, {
				"name": "代扣",
				"value": "上海银行"
			}, {
				"name": "代扣",
				"value": "其他"
			}
		], [{
				"name": "刷卡",
				"value": "建行"
			}, {
				"name": "刷卡",
				"value": "工行"
			}, {
				"name": "刷卡",
				"value": "招行"
			}, {
				"name": "刷卡",
				"value": "农行"
			}, {
				"name": "刷卡",
				"value": "交行"
			}, {
				"name": "刷卡",
				"value": "中行"
			}, {
				"name": "刷卡",
				"value": "光大银行"
			}, {
				"name": "刷卡",
				"value": "广发银行"
			}, {
				"name": "刷卡",
				"value": "平安"
			}, {
				"name": "刷卡",
				"value": "浦发银行"
			}, {
				"name": "刷卡",
				"value": "北京银行"
			}, {
				"name": "刷卡",
				"value": "上海银行"
			}, {
				"name": "刷卡",
				"value": "其他"
			}
		]],
	"parm": {
		"TITLE": "金融能力覆盖"
	},
	"pay": ["B2B网银", "WEB网银", "代扣", "刷卡"]
}
;
// $.ajax({
//     url:getContextPath()+'/querykpmgf062.json',
//     type:'post',
//     dataType:'json',
//     cache:false,
//     async:false,
//     success:function(respdata){
//         Data502 = respdata
//         }

    
// })

var  color2=['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];

var TITLE2 = Data502.parm.TITLE;
var Pay2 = Data502.pay;
var Bank2 = Data502.bank
var Data2 = Data502.data;
var bankdata2=[];
var Paydata2=[];
var Linkdata2=[];
var categories2 = [];

for (var i = 0; i < Pay2.length; i++) {
    categories2[i] = {
        name: Pay2[i]
    };
}
for(var i=0;i<Bank2.length;i++){
    var samll ={
        name:Bank2[i],
        symbolSize:10,
        itemStyle: {
            normal: {
               color: 'rgba(78,126,237,0.8)',
              
            }
        }
    }
    bankdata2.push(samll);
}
for(var i=0;i<Pay2.length;i++){
    var big ={
        name:Pay2[i],
        symbolSize:25,
        itemStyle: {
            normal: {
               color:color2[i],
              
            }
        },
        category:Pay2[i]    
    }
    Paydata2.push(big);
}

var concatdata2 =Paydata2.concat(bankdata2);


for(var i=0;i<Data2.length;i++){
    for(var j=0;j<Data2[i].length;j++){
        var yy2={
            
                 source:Data2[i][j].name,
                 target:Data2[i][j].value,
                 name: '',
                 tooltip: {
                 trigger: 'item',
                 formatter: function(params, ticket, callback) {
                     return params.data.name;
                 }
                 },
                 symbolSize: [5, 20],
                 label: {
                 normal: {
                     formatter: function(params, ticket, callback) {
                         params.name = params.data.name;
                         return params.name;
                     },
                     show: true
                 }
                 },
                 lineStyle: {
                     normal: {
                         width: 2.0,
                         curveness: 0.2,
                         color:color2[i]
                     
                         }
                     }
             }
         Linkdata2.push(yy2) 
    }
       
     
}

var option5 = {
    textStyle:{
        fontFamily: "思源黑体",
    },
    
animationDurationUpdate: 1000,
animationEasingUpdate: 'quinticInOut',

 title: {
    text: TITLE2,
    textStyle:{
        color:'#c2e5fb',
        fontSize:18,
        fontWeight:'normal'
    },

   
},


series: [{
    
    categories:categories2,
    type: 'graph',

    ribbonType: true,
    layout: 'circular',
    cursor:'pointer',
    circular: {
        rotateLabel: true
    },

    roam: true,
    focusNodeAdjacency: true,
    width:180,
    height:200,
    label: {
        normal: {
            position: 'center',
            fontWeight: 'bold',
            formatter: '{b}',
            normal: {
                textStyle: {

                    fontFamily: '宋体',
                }
            }
        }
    },

    edgeSymbol: ['circle'],
    edgeSymbolSize: [4, 10],
    edgeLabel: {
        normal: {
            textStyle: {
                fontSize: 6,
                fontWeight: 'bold',
                fontFamily: '宋体'
            }
        }
    },

    itemStyle: {
        normal: {
            label: {
                rotate: true,
                show: true,
                textStyle: {
                    color: '#ddd',
                    // fontWeight: 'bold',
                    fontSize:12
                }
            },
         
        opacity:0.9,
      
        },
        emphasis: {
            label: {
                show: true
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
            }
        }
    },
    

    data:concatdata2,
    
    links:Linkdata2

    
}]
};
myChart5.setOption(option5);


if (option5 && typeof option5 === "object") { 
    
     myChart5.on('click', function (params) {
         if (params.componentType === "series") {
              
               relation.style.display='block';
         } 
     })
 }

