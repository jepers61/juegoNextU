/*var img = new Array;
img[0]="image/1.png";
img[1]="image/2.png";
img[2]="image/3.png";
img[3]="image/4.png";

function rand(n){
	return(Math.floor(Math.random()*n+1));
}

function caramelos(){
	var renglon=document.querySelectorAll(img);
	for(i=0;i<renglon.length;i++){
		
	}
}*/

$(document).ready(function(){
  (function() {
    setInterval(function(){
      var tit = document.getElementById('titulo');
      if(tit.className == 'luz'){
        tit.className = 'luz on';
      }else{
        tit.className = 'luz';
      }
    },1000);
  }) ();
	comenzar();
});

function comenzar(){
	var canvas = document.getElementById("canvas");
	canvas = canvas.getContext("2d");
	
}
