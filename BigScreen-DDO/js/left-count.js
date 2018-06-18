var lock=true;
$(function(){
    
    titleCount2();
    titleCount3();
    titleCount();
})

function comdify(n){//加千分符
       n=n+'';
    　　var re=/\d{1,3}(?=(\d{3})+$)/g;
    　　var n1=n.replace(/^(\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(re,"$&,")+s2;});
    　　return n1;
    }

 //total 为传递过来的累加值  nums为想拆分成几个数 
function randomDivide(total, nums) {
    rest = total;
    const result = Array.apply(null, { length: nums })
        .map((n, i) => nums - i)
        .map(n => {
            const v = 1 + Math.floor(Math.random() * (rest / n * 2 - 1));
            rest -= v;
            return v;
        });
    result[nums - 1] += rest;
    return result;
}
var addTimeout;//定时器全局变量
var j=0;


function titleCount(){

var Data0={
	"data": {
		"dValue": 0,
		"KPI1": 6531297500
	},
	"parm": {
		"TITLE": "年度累计支付业务额",
		"TITLE1": "累计沃账户用户数量",
		"TITLE2": "上月沃账户活跃用户数量",
		"RATIO": 1.7
	}
}
;
    // $.ajax({
    //     url:getContextPath()+'/querykpmgf011.json',
    //     type:'post',
    //     dataType:'json',
    //     cache:false,
    //     async:false,
    //     success:function(respdata){
    //          Data0 = respdata//获取数据的数有TITLE这个不用管，有三个值一个KPI1(a值) KPI（B2-B1值）RATIO(C值)（系数值每次B值要乘以系数值然后页面展示A+B*C）
    //         }
    
        
    // }) 


 var TITLE1 = Data0.parm.TITLE;

var KPI1= parseInt(Data0.data.KPI1)+'';//A值//1000497878911
var KPI2= parseInt(Data0.data.dValue)+'';//每分钟累计差值20000
var KPI3= Data0.parm.RATIO;//C系数值2
//console.log(KPI1)
//console.log(KPI2)
var dataCountF ={name:TITLE1,value:KPI1};
var nameF = dataCountF.name;


var valueF = comdify(dataCountF.value)+'';//添加千分符


$("#titleCount").html(nameF);
if(lock){
    //console.log("初始化 年度业务额","lock:",lock)
    init1(valueF,'cnt1_')
    lock=false;
   
}

// $("#Count").find("span").each(function(){

//     $(this).remove();
// });
// for(var i=0;i<valueF.length;i++){
//     var xx = valueF.substring(i,i+1);
//     if(xx==','){
//         $("#Count").append('<span class="span2">,</span>');
//     }else if(xx=='.'){
//         $("#Count").append('<span class="span3">.</span>');
//     }else
//     {
//         var imagePath = "./img/"+xx+".png";
//         $("#Count").append('<span class="span1" style="background: url('+imagePath+') ;"></span>');
//     }
// }



if(parseInt(KPI2)>0){
    var result= randomDivide(KPI2*KPI3 , 10);//对累加值的差值分解成10个随机数
    //console.log(result)

    addTimeout = setInterval(function(){  
                 
                 KPI1= Math.ceil(Number(KPI1)+result[j]) ; //KPI为页面每6秒展示的值 在将其不变成字符串
                // console.log(KPI1)
                // console.log(result[j])
                var dataCount ={name:TITLE1,value:KPI1};
                var name = dataCount.name;
               
    
                var value = comdify(dataCount.value)+'';//添加千分符
                
                $("#titleCount").html(name);
                //console.log("第 ",j," 次调用init1");
                init1(value,'cnt1_')
                /*$("#Count").find("span").each(function(){
                
                    $(this).remove();
                });*/
                // for(var i=0;i<value.length;i++){
                //     var xx = value.substring(i,i+1);
                //     if(xx==','){
                //         $("#Count").append('<span class="span2">,</span>');
                //     }else if(xx=='.'){
                //         $("#Count").append('<span class="span2">.</span>');
                //     }
                //     else{
                //         var imagePath = "./img/"+xx+".png";
                //         $("#Count").append('<span class="span1" style="background: url('+imagePath+') ;"></span>');
                //     }
                // }
    
    
    
                j++;
                if(j==10){
                    j=0;
                    clearInterval(addTimeout);//清除定时器
                }
    
    
    
                },6000);//定时器每6秒执行一次
}else{
         console.log('没有获取累计差的值')
}
}



  
function titleCount2(){
    var Data1={
        "data": {
            "CREATE_DATE": {
                "date": 4,
                "day": 4,
                "hours": 0,
                "minutes": 0,
                "month": 0,
                "nanos": 0,
                "seconds": 0,
                "time": 1514995200000,
                "timezoneOffset": -480,
                "year": 118
            },
            "KPI1": 6531297500,
            "KPI2": 56640900,
            "KPI3": 11471472
        },
        "parm": {
            "TITLE": "年度累计支付业务额",
            "TITLE1": "累计沃账户用户数量",
            "TITLE2": "上月沃账户活跃用户数量",
            "RATIO": 1.7
        }
    };
    // $.ajax({
    //     url:getContextPath()+'/querykpmgf01.json',
    //     type:'post',
    //     dataType:'json',
    //     cache:false,
    //     async:false,
    //     success:function(respdata){
    //          Data1 = respdata
    //         }
    
        
    // })   

var TITLE2 = Data1.parm.TITLE1;


var KPI2=''+Data1.data.KPI2;
var KPI3=''+Data1.data.KPI3;
var dataCount2 ={name:TITLE2,value:KPI2};
var name2 = dataCount2.name;
var value2 = comdify(dataCount2.value);

$("#titleCount2").html(name2);
//console.log("累计沃账户用户数量 调用init1");
init1(value2,'cnt2_')
// $("#Count2").find("span").each(function(){
   
//     $(this).remove();
// });
// for(var i=0;i<value2.length;i++){
//     var xx2 = value2.substring(i-1,i);
    
//     if(xx2==','){
//         $("#Count2").append('<span class="span2">,</span>');
//     }else{
//         var imagePath2 = "./img/"+xx2+".png";
//         $("#Count2").append('<span class="span1" style="background: url('+imagePath2+') ;"></span>');
//     }
// }


}



function titleCount3(){
    var Data1={
        "data": {
            "CREATE_DATE": {
                "date": 4,
                "day": 4,
                "hours": 0,
                "minutes": 0,
                "month": 0,
                "nanos": 0,
                "seconds": 0,
                "time": 1514995200000,
                "timezoneOffset": -480,
                "year": 118
            },
            "KPI1": 6531297500,
            "KPI2": 56640900,
            "KPI3": 11471472
        },
        "parm": {
            "TITLE": "年度累计支付业务额",
            "TITLE1": "累计沃账户用户数量",
            "TITLE2": "上月沃账户活跃用户数量",
            "RATIO": 1.7
        }
    };
    // $.ajax({
    //     url:getContextPath()+'/querykpmgf01.json',
    //     type:'post',
    //     dataType:'json',
    //     cache:false,
    //     async:false,
    //     success:function(respdata){
    //          Data1 = respdata
    //         }
    
        
    // })   
    var TITLE3 = Data1.parm.TITLE2;
    var KPI3=''+Data1.data.KPI3;
var dataCount3 ={name:TITLE3,value:KPI3};
var name3 = dataCount3.name;
var value3 = comdify(dataCount3.value);
$("#titleCount3").html(name3);
//console.log("上月沃账户用户数量 调用init1");
init1(value3,'cnt3_')
// $("#Count3").find("span").each(function(){
   
//     $(this).remove();
// });
// for(var i=0;i<value3.length;i++){
//     var xx3 = value3.substring(i,i+1);
//     if(xx3==','){
//         $("#Count3").append('<span class="span2">,</span>');
//     }else{
//         var imagePath3 = "./img/"+xx3+".png";
//         $("#Count3").append('<span class="span1" style="background: url('+imagePath3+') ;"></span>');
//     }
// }


}




// setInterval(function(){
    
  
    
//     titleCount()
   
// },60000);
 
