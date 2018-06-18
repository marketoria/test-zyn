


var myChart4 = echarts.init(document.getElementById('right-bottom'));
var resData4={
	"data": [{
			"name": "代理商资金归集",
			"value": 4699052800
		}, {
			"name": "通信交费",
			"value": 1350534400
		}, {
			"name": "电渠",
			"value": 968656400
		}, {
			"name": "集团内其他",
			"value": 707874822
		}, {
			"name": "集团外其他",
			"value": 628851541
		}, {
			"name": "对公转账",
			"value": 602323800
		}, {
			"name": "对公充值",
			"value": 508589200
		}, {
			"name": "对公提现",
			"value": 296393100
		}
	],
	"parm": {
		"TITLE": "支付业务分布"
	},
	"sum": [{
			"name": "集团内",
			"value": 7726118422
		}, {
			"name": "集团外",
			"value": 2036157641
		}
	]
}
;
// var color=['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
// $.ajax({
//     url:getContextPath()+'/querykpmgf05.json',
//     type:'post',
//     dataType:'json',
//     cache:false,
//     async:false,
//     success:function(respdata){
//         resData4 = respdata
//         }
 
    
//  })
 var  titledate =resData4.parm.TITLE;
 var  datavalue =resData4.data;
 var  datasum =resData4.sum;
 
var length={
	    normal: {
	        show: true,
	         length:10,
	         length2:5,
	    }
	};	





//datavalue[datavalue.length-1]['labelLine']=length
		       
		    
//console.log(datavalue);

 var  option4 = {
    textStyle:{
        fontFamily: "思源黑体",
        
    },
   title: {
       text: titledate,
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

       formatter: function(params) {
             	     
       //return params.name + ': ' +comdify(params.value)+'('+params.percent+'%' +')';
       return params.name +'('+params.percent+'%' +')';
       }

   },
   legend: {
    x : 'center',
    y : 'bottom',

    selectedMode:'single',
    textStyle:{
        fontSize:14,
        color:'red'
    }
    
},
   series: [
       {
           name:'',
           type:'pie',
           
           radius: [0, '25%'],
           center:['49%','55%'],

           label: {
               normal: {
                   position: 'inside',
                 
                   textStyle:{
                       color:'#03296e',
                       fontWeight: 'bolder',
                    	   
                       
                    }
              },
          
           },
           
           labelLine: {
               normal: {
                   show: false
               }
           },
           data:datasum,
           color:[ '#8db6ff','#fff794', 'red', ],
         
         
       },
       {
           name:'',
           type:'pie',
           radius: ['35%', '50%'],
           center:['49%','55%'],
           color:['#f9cb8d','#fff794', '#4ba0fd', '#8db6ff', '#5476fb','#82cef2',  '#ef9151', '#f5b45a',],
           labelLine: {
               normal: {
                   show: true,
                    length:10,
                    length2:5,
               }
           },
           data:datavalue,
           label: {
               normal: {
                  
                 
                   textStyle:{
                      
                       fontWeight: 'bolder',
                    	   
                       
                    }
              },
          
           },
           itemStyle: {
            normal: {
               opacity:0.9,
               
               
            },
         
            emphasis: {
                opacity:0.9,
            }
            },
          
           
           
            	
            
       },
     
    ]

};





var currentIndex =-1;

setInterval(function () {
    var dataLen = option4.series[1].data.length;
   
    
    // 取消之前高亮的图形
    myChart4.dispatchAction({
        type: 'downplay',
        seriesIndex:1,
        dataIndex:currentIndex,
        
    });
    currentIndex = (currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart4.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex:currentIndex
    });
    // 显示 tooltip
    myChart4.dispatchAction({
        type: 'showTip',
        seriesIndex: 1,
        dataIndex:currentIndex
    });
}, 2000);


myChart4.setOption(option4);


if (option4 && typeof option4 === "object") { 
    
     myChart4.on('click', function (params) {
         if (params.componentType === "series") {
              
               relation3.style.display='block';
         } 
     })
 }