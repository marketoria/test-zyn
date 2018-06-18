function init1(elem,str){
	//console.log("elem=",elem,"; str=",str,"; elem.length=",elem.length);
	for(var i=0;i<elem.length;i++){
		//console.log("elem",i," ",elem.length-1-i," ",elem.length-1,elem.substring(elem.length-1-i,elem.length-i));
		var xx = elem.substring(elem.length-1-i,elem.length-i);
		//console.log("xx",xx);
		$('#'+str+i).css('visibility','visible');//style.display='block';
		if(xx!=',')moveStep(''+str+i,xx);
	}
}

//改变指定div的显示数值，无动画效果
function moveStep1(id, number) {
	var j = parseInt(number);
	id = '#' + id;
	var i = parseInt($(id).css('margin-top').replace('px', ''));

	//console.log("id", id);
	//console.log("old margin-top", $(id).css('margin-top'));
	$(id).css('margin-top', (-j * 210) + 'px');	
}

//改变指定div的显示数值，具有动画效果
function moveStep(id,number){
	var j = parseInt(number);
	id='#'+id;
	var i = parseInt($(id).css('margin-top').replace('px', ''));
	function move(id){		
		//console.log("id",id);
		//console.log("old margin-top",$(id).css('margin-top'));
		var marginTop_int = parseInt($(id).css('margin-top').replace('px', ''));
		if(marginTop_int==-j*210){
			clearInterval(interval);
			return;
		}
		
		$(id).css('margin-top',i+'px');		
		if(i<=-2100){
			i=0;
		}else{
			i+=-35;
		}
		//console.log("i="+i);
		//console.log("new margin-top",$(id).css('margin-top'));
	}	
	var interval = setInterval(move, 20,id);
}

// moveStep("cnt_0",8);
// moveStep("cnt_1",9);

// moveStep("cnt_0",3);
// moveStep("cnt_1",2);
