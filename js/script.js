// JavaScript Document

function $(id){return typeof id==='string'?document.getElementById(id):id;}

window.onload = function(){
	var lis = $('bot-menu').getElementsByTagName('li');
	var secs = $('content').getElementsByTagName('section');
	var con = $('content');
	
	for(var i=0; i<lis.length; i++){
		lis[i].index = i;
		lis[i].onclick = function(){
			
			for(var j=0; j<lis.length; j++){
				lis[j].className = "";
				//console.log(secs[this.index].getElementsByTagName('h1')[0].style.animation);
				secs[j].getElementsByTagName('h1')[0].style.animation = "";
				secs[j].getElementsByTagName('p')[0].style.animation = "";
			}
			this.className = "selected";
			switch(this.index){
				case 0:
					con.style.transform = "translateY(0%)";
					toDown(secs[this.index]);
					toUp(secs[this.index]);
					break;
				case 1:
					con.style.transform = "translateY(-100%)";
					toDown(secs[this.index]);
					toUp(secs[this.index]);
					break;
				case 2:
					con.style.transform = "translateY(-200%)";
					toDown(secs[this.index]);
					toUp(secs[this.index]);
					break;
				case 3:
					con.style.transform = "translateY(-300%)";
					toDown(secs[this.index]);
					toUp(secs[this.index]);
					break;
				case 4:
					con.style.transform = "translateY(-400%)";
					toDown(secs[this.index]);
					toUp(secs[this.index]);
					break;
			}	
			//console.log(secs[this.index].getElementsByTagName('h1')[0].style.animation);		
		
			function toDown(Obj){ 
				Obj.getElementsByTagName('h1')[0].style.animation = "toDown .7s ease-in-out .3s backwards";
			}
			function toUp(Obj){ 
				Obj.getElementsByTagName('p')[0].style.animation = "toUp .7s ease-in-out .3s backwards";
			}
		}
	}
	
}

















