



function getCurDate()
{
var d = new Date();
var week;
    switch (d.getDay()){
    case 1: week="星期一"; break;
    case 2: week="星期二"; break;
    case 3: week="星期三"; break;
    case 4: week="星期四"; break;
    case 5: week="星期五"; break;
    case 6: week="星期六"; break;
    default: week="星期天";
}
var years = d.getFullYear();
var month = add_zero(d.getMonth()+1);
var days = add_zero(d.getDate());
var hours = add_zero(d.getHours());
var minutes = add_zero(d.getMinutes());
var seconds=add_zero(d.getSeconds());
var ndate1 = years+"年"+month+"月"+days+"日 "+" "+week
var ndate2 = hours+"点"+minutes+"分"+seconds+"秒";
var divT1=document.getElementById("time-left");
var divT2=document.getElementById("time-right");
divT1.innerHTML= ndate1;
divT2.innerHTML= ndate2;
}
function add_zero(temp)
{
if(temp<10) return "0"+temp;
else return temp;
}
setInterval("getCurDate()",100);