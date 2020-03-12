

var img = new Array();
img[0]="1.png";
img[1]="2.png";
img[2]="3.png";
img[3]="4.png";

	
function rand(n){
	return(Math.floor(Math.random()*n+1));
}
/*
function caramelos(){
	var renglon=document.querySelectorAll(img);
	for(i=0;i<renglon.length;i++){
		
	}
}*/

$(function(){
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
	var canvas = document.getElementById("tablero");
	tablero = canvas.getContext("2d");
	
	$(".btn-reinicio").on("click",function(){
	
		comenzar();
		
	});
});

function comenzar(){
	var imagen=new Image;
	imagen.src="image/"+img[rand(4)-1]+"";
	imagen.addEventListener("load", function(){
		tablero.drawImage(imagen,1,1,90,30);
	},false);

}
