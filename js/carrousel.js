let actual;
var person = prompt("Please enter your name", "Harry Potter");
var hour="00";
var min="00";
var secs="00";

window.onload = function(){
	actual=1
	document.getElementById("carr1").style.display="initial";
	document.getElementById("carr2").style.display="none";
	document.getElementById("carr3").style.display="none";
	setInterval(next,2000);
	if (person != null) {
  document.getElementById("text").innerHTML =  "Hello " + person + "! How are you today?";
	}
	 document.getElementById("clock").innerHTML =  hour+":"+min+":"+secs;
  setInterval(tick,1000);
}

function next(){
	document.getElementById("carr"+actual).style.display="none";
	if(actual<3) actual+=1;
	else actual=1;
	document.getElementById("carr"+actual).style.display="initial";
}

function past(){
	document.getElementById("carr"+actual).style.display="none";
	if(actual>1) actual-=1;
	else actual=3;
	document.getElementById("carr"+actual).style.display="initial";
}

function tick(){
	if(secs<59) secs= +secs +1;
	else {
		secs="00";
		if(min<59) min= +min +1;
	else {
		min="00";
		if(hour<59) hour= +hour +1;
	else {
		hour="00";
	}
}
}
document.getElementById("clock").innerHTML =  hour+":"+min+":"+secs;
}