var dev = document.getElementById('container');

en = dev.childNodes;

for (var i = 0;i < en.length ; i++) {
	alert(en[i].innerHTML);
}
var n = document.getElementById('n');
 n.onclick = function(){
 	alert('Uptodate as a developpers');
 };

 var element=document.getElementById('montext');

 element.onmouseup = function(){
   element.innerHTML = 'UPTODATE';
 };

  element.onmousedown = function(){
   element.innerHTML = 'Joel jt';
 };
 var bb = document.getElementById('bb');
 bb.ondblclick = function(){
   bb.innerHTML = 'OUI';
 };