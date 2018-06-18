








var myChart55 = echarts.init(document.getElementById('relation-right-top'));

var Data55={
	"bank": ["中信银行", "郑州银行", "长安银行", "浙江民泰商行", "莱商银行", "兴业银行", "上海农商行", "江南农商行", "江苏长江商行", "江阴农商银行", "无锡农商行", "湖州银行", "宁波通商银行", "贵州农村信用社", "其他", "民生银行", "海南农村信用社", "威海商行", "邢台银行", "邮储银行", "杭州银行", "遂宁银行", "雅安商行", "宜宾商行", "建设银行", "上海银行", "柳州银行", "宁波银行", "苏州银行", "潍坊银行", "青海银行", "广东南粤银行", "临商银行", "浙江稠州商行", "洛阳银行", "济宁银行", "渤海银行", "广州银行", "泰安银行", "宁波东海银行", "张家口银行", "中国银行", "交通银行", "广州农商行", "青岛银行", "常熟农商银行", "嘉兴银行", "厦门国际银行", "东营银行", "工商银行", "平安银行", "富滇银行", "天津农商行", "德州银行", "北京农商银行", "天津滨海农商行", "枣庄银行", "海南银行", "光大银行", "天津银行", "泉州银行", "焦作中旅银行", "中原银行", "衡水银行", "秦皇岛商行", "南京银行", "农业银行", "承德银行", "齐商银行", "太仓农商行", "张家港农商行", "福建海峡银行", "齐鲁银行", "烟台银行", "西安银行", "招商银行", "华夏银行", "北京银行", "厦门银行", "重庆农商行", "内蒙古银行", "河北银行", "温州银行", "浦发银行", "广发银行", "日照银行", "乐山商业银行", "贵州银行", "邯郸银行"],
	"data": [[{
				"name": "协议支付",
				"value": "网联"
			}, {
				"name": "协议支付",
				"value": "银联"
			}
		], [{
				"name": "代付",
				"value": "银联"
			}
		], [{
				"name": "快捷支付",
				"value": "网联"
			}, {
				"name": "快捷支付",
				"value": "银联"
			}
		], [{
				"name": "代收",
				"value": "银联"
			}
		], [{
				"name": "银联",
				"value": "工商银行"
			}, {
				"name": "银联",
				"value": "农业银行"
			}, {
				"name": "银联",
				"value": "中国银行"
			}, {
				"name": "银联",
				"value": "交通银行"
			}, {
				"name": "银联",
				"value": "光大银行"
			}, {
				"name": "银联",
				"value": "中信银行"
			}, {
				"name": "银联",
				"value": "民生银行"
			}, {
				"name": "银联",
				"value": "上海银行"
			}, {
				"name": "银联",
				"value": "承德银行"
			}, {
				"name": "银联",
				"value": "富滇银行"
			}, {
				"name": "银联",
				"value": "广州农商行"
			}, {
				"name": "银联",
				"value": "海南农村信用社"
			}, {
				"name": "银联",
				"value": "柳州银行"
			}, {
				"name": "银联",
				"value": "南京银行"
			}, {
				"name": "银联",
				"value": "宁波银行"
			}, {
				"name": "银联",
				"value": "齐商银行"
			}, {
				"name": "银联",
				"value": "厦门银行"
			}, {
				"name": "银联",
				"value": "苏州银行"
			}, {
				"name": "银联",
				"value": "天津农商行"
			}, {
				"name": "银联",
				"value": "威海商行"
			}, {
				"name": "银联",
				"value": "潍坊银行"
			}, {
				"name": "银联",
				"value": "郑州银行"
			}, {
				"name": "银联",
				"value": "重庆农商行"
			}, {
				"name": "银联",
				"value": "青海银行"
			}, {
				"name": "银联",
				"value": "内蒙古银行"
			}, {
				"name": "银联",
				"value": "德州银行"
			}, {
				"name": "银联",
				"value": "广东南粤银行"
			}, {
				"name": "银联",
				"value": "临商银行"
			}, {
				"name": "银联",
				"value": "长安银行"
			}, {
				"name": "银联",
				"value": "浙江稠州商行"
			}, {
				"name": "银联",
				"value": "浙江民泰商行"
			}, {
				"name": "银联",
				"value": "莱商银行"
			}, {
				"name": "银联",
				"value": "洛阳银行"
			}, {
				"name": "银联",
				"value": "济宁银行"
			}, {
				"name": "银联",
				"value": "邢台银行"
			}, {
				"name": "银联",
				"value": "渤海银行"
			}, {
				"name": "银联",
				"value": "广州银行"
			}, {
				"name": "银联",
				"value": "河北银行"
			}, {
				"name": "银联",
				"value": "青岛银行"
			}, {
				"name": "银联",
				"value": "温州银行"
			}, {
				"name": "银联",
				"value": "建设银行"
			}, {
				"name": "银联",
				"value": "招商银行"
			}, {
				"name": "银联",
				"value": "邮储银行"
			}, {
				"name": "银联",
				"value": "华夏银行"
			}, {
				"name": "银联",
				"value": "浦发银行"
			}, {
				"name": "银联",
				"value": "平安银行"
			}, {
				"name": "银联",
				"value": "广发银行"
			}, {
				"name": "银联",
				"value": "兴业银行"
			}, {
				"name": "银联",
				"value": "北京银行"
			}, {
				"name": "银联",
				"value": "上海农商行"
			}, {
				"name": "银联",
				"value": "北京农商银行"
			}, {
				"name": "银联",
				"value": "常熟农商银行"
			}, {
				"name": "银联",
				"value": "江南农商行"
			}, {
				"name": "银联",
				"value": "江苏长江商行"
			}, {
				"name": "银联",
				"value": "江阴农商银行"
			}, {
				"name": "银联",
				"value": "太仓农商行"
			}, {
				"name": "银联",
				"value": "无锡农商行"
			}, {
				"name": "银联",
				"value": "张家港农商行"
			}, {
				"name": "银联",
				"value": "天津滨海农商行"
			}, {
				"name": "银联",
				"value": "天津银行"
			}, {
				"name": "银联",
				"value": "杭州银行"
			}, {
				"name": "银联",
				"value": "湖州银行"
			}, {
				"name": "银联",
				"value": "嘉兴银行"
			}, {
				"name": "银联",
				"value": "福建海峡银行"
			}, {
				"name": "银联",
				"value": "泉州银行"
			}, {
				"name": "银联",
				"value": "厦门国际银行"
			}, {
				"name": "银联",
				"value": "东营银行"
			}, {
				"name": "银联",
				"value": "齐鲁银行"
			}, {
				"name": "银联",
				"value": "日照银行"
			}, {
				"name": "银联",
				"value": "泰安银行"
			}, {
				"name": "银联",
				"value": "烟台银行"
			}, {
				"name": "银联",
				"value": "枣庄银行"
			}, {
				"name": "银联",
				"value": "焦作中旅银行"
			}, {
				"name": "银联",
				"value": "中原银行"
			}, {
				"name": "银联",
				"value": "宁波东海银行"
			}, {
				"name": "银联",
				"value": "宁波通商银行"
			}, {
				"name": "银联",
				"value": "海南银行"
			}, {
				"name": "银联",
				"value": "乐山商业银行"
			}, {
				"name": "银联",
				"value": "遂宁银行"
			}, {
				"name": "银联",
				"value": "雅安商行"
			}, {
				"name": "银联",
				"value": "宜宾商行"
			}, {
				"name": "银联",
				"value": "贵州农村信用社"
			}, {
				"name": "银联",
				"value": "贵州银行"
			}, {
				"name": "银联",
				"value": "西安银行"
			}, {
				"name": "银联",
				"value": "邯郸银行"
			}, {
				"name": "银联",
				"value": "衡水银行"
			}, {
				"name": "银联",
				"value": "秦皇岛商行"
			}, {
				"name": "银联",
				"value": "张家口银行"
			}, {
				"name": "银联",
				"value": "其他"
			}
		], [{
				"name": "网联",
				"value": "工商银行"
			}, {
				"name": "网联",
				"value": "中国银行"
			}, {
				"name": "网联",
				"value": "建设银行"
			}, {
				"name": "网联",
				"value": "交通银行"
			}, {
				"name": "网联",
				"value": "招商银行"
			}, {
				"name": "网联",
				"value": "平安银行"
			}, {
				"name": "网联",
				"value": "光大银行"
			}, {
				"name": "网联",
				"value": "华夏银行"
			}, {
				"name": "网联",
				"value": "民生银行"
			}, {
				"name": "网联",
				"value": "北京银行"
			}, {
				"name": "网联",
				"value": "上海银行"
			}, {
				"name": "网联",
				"value": "南京银行"
			}
		], ],
	"parm": {
		"TITLE": "金融能力覆盖"
	},
	"pay": ["协议支付", "代付", "快捷支付", "代收", "银联", "网联", ]
}
;
// $.ajax({
//     url:getContextPath()+'/querykpmgf06.json',
//     type:'post',
//     dataType:'json',
//     cache:false,
//     async:false,
//     success:function(respdata){
//     Data55 = respdata
// }


// })
var  color=['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
var TITLE = Data55.parm.TITLE;
var Pay = Data55.pay;
var Bank = Data55.bank
var Data = Data55.data;

var bankdata=[];
var Paydata=[];
var Linkdata=[];
var categories = [];

for (var i = 0; i < Pay.length; i++) {
    categories[i] = {
        name: Pay[i]
    };
}


for(var i=0;i<Bank.length;i++){
    var samll ={
    name:Bank[i],
    symbolSize:10,
    itemStyle: {
    normal: {
    color: 'rgba(78,126,237,0.8)',
    
        }
    }
}
bankdata.push(samll);
}
for(var i=0;i<Pay.length;i++){
        var big ={
        name:Pay[i],
        symbolSize:25,
        itemStyle: {
        normal: {
            color:color[i]
            },

            },
            category:Pay[i]    

        }
        Paydata.push(big);
}

var concatdata =Paydata.concat(bankdata);

//console.log(concatdata);




concatdata[6]=concatdata.splice(8,1,concatdata[6])[0]
concatdata[7]=concatdata.splice(60,1,concatdata[7])[0]
concatdata[8]=concatdata.splice(59,1,concatdata[8])[0]
for(var i=0;i<Data.length;i++){
    for(var j=0;j<Data[i].length;j++){
        var yy={
            
                 source:Data[i][j].name,
                 target:Data[i][j].value,
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
                         color:color[i]
                     
                         }
                     }
             }
         Linkdata.push(yy) 
    }
       
     
}

//console.log(Linkdata);
var option55 = {
    textStyle:{
        fontFamily: "思源黑体",
    },
animationDurationUpdate: 1000,
animationEasingUpdate: 'quinticInOut',


text: TITLE,
textStyle:{
    color:'#c2e5fb',
    fontSize:18,
},
// legend: [{
//         textStyle:{
//             color:'#ddd'
//         },
//         show:true,
//          orient:'vertical',
//          top:'center',
//          right:0,
//         data: Pay
      
//      }],



series: [{

categories:categories,
type: 'graph',

ribbonType: true,
layout: 'circular',
cursor:'pointer',
circular: {
rotateLabel: true
},

roam: true,
focusNodeAdjacency: true,

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
        fontSize:14
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


data:concatdata,

links:Linkdata


}]
};
myChart55.setOption(option55);







