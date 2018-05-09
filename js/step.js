var i=1;
var g=1;
var p = 0;
var t = 0;


	/*Fleche droite avance*/

	document.getElementById("right").addEventListener("click", function(){
	    var x = document.getElementById("frm1");
		var h = x.length;
		var foo = 100/h;
		var j = h+1;
	
	document.getElementById("progressbar").style.width= foo*g+"%";

	/*switch de question*/	
		var p = g++;
		var t = p-1;

		document.getElementById(t).classList.toggle("toggleCv");
		document.getElementById(p).classList.toggle("toggleCv");
		document.getElementById("recul").innerHTML = ""

	/*arrivé à la fin*/
		var fab = h
		if (g==fab) {
			document.getElementById("control").classList.toggle("toggleCv");
		}
	});

	/*Fleche gauche recule*/

	document.getElementById("left").addEventListener("click", function(){
    
    /*calcul % recule form*/

	var x = document.getElementById("frm1");
	var h = x.length;
	var foo = 100/h;
	
	document.getElementById("progressbar").style.width= (foo*g)-h+"%";
	document.getElementById("recul").innerHTML = "Rechargez votre page pour modifier vos réponses";
});