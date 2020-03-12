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
var caramelo = aleatorio(1,4);

function aleatorio(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleat = Math.random() * numPosibilidades;
    aleat = Math.floor(aleat);
    return parseInt(inferior) + aleat;
}


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

	nuevoCaramelo();
});

function nuevoCaramelo(){
	switch(caramelo){
		case 1:
			$(".col-1")
	}
}