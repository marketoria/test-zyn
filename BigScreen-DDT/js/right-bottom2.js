
var myChart5 = echarts.init(document.getElementById('right-bottom'));

var resData5={
	"valueKpi1": [{
			"name": "定期",
			"value": 190664073.73
		}, {
			"name": "信贷",
			"value": 45127867.5
		}, {
			"name": "活期",
			"value": 44107118.51
		}, {
			"name": "基金",
			"value": 122976.45
		}, {
			"name": "保险",
			"value": 13860.35
		}
	],
	"parm": {
		"TITLE": "金融理财产品构成"
	}
}
;
// $.ajax({
//    url:getContextPath()+'/querykpmgs05.json',
//    type:'post',
//    dataType:'json',
//    cache:false,
//    async:false,
//    success:function(respdata){
//        resData5= respdata
//        }

   
// })
var valuedate=resData5.valueKpi1;
var titledate =resData5.parm.TITLE;
var option5 = {
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
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            var res;
            res = params.name + ' : ' + params.percent + '%';
            return res;
        }
    },

    series: [{
        name: '',
        type: 'pie',
        center:['55%','60%'],
        selectedMode: 'single',
        radius: ['45%', '72%'],
        label: {
            normal: {
                position: 'outside',
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            }
        },
        labelLine: {
            normal: {
                show: true,
                length:10,
                length2:10,
            }
        },
        data: valuedate,
        color:['#4ba0fd', '#8db6ff', '#5476fb','#82cef2','#277ad7'],
    
    }]
};



var currentIndex =-1;

setInterval(function () {
    var dataLen = option5.series[0].data.length;
    // console.log(dataLen)
    
    // 取消之前高亮的图形
    myChart5.dispatchAction({
        type: 'downplay',
        seriesIndex:0,
        dataIndex:currentIndex,
        
    });
    currentIndex = (currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart5.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex:currentIndex
    });
    // 显示 tooltip
    myChart5.dispatchAction({
        type: 'showTip',
        seriesIndex:0,
        dataIndex:currentIndex
    });
}, 2000);

myChart5.setOption(option5);