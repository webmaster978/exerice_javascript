var a = document.getElementById('grace');
a.width = 500;

var t = document.getElementById('mat');
t.src="img/1.JPG";

var mondiv = document.getElementById('div1');
mondiv.innerHTML = 'tobby';

var mondiv2 = document.getElementById('div2');
alert(mondiv2.innerHTML);

var l = document.getElementById('monLien');
l.setAttribute('toby','shikote');
l.href="http://google.com";

var v = document.getElementById('monpart');
v.style.color='red';
v.style.font-size='';


var b = document.getElementByTagName('div');
for (var i = 0; i < b.length; i ++){
	alert(b[i].id);
}




