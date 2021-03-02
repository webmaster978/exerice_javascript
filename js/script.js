var a = 19;
var y = 23;
console.log(a + y);
var d = 100;
var i = 20;
console.log(d / i);
var e = 18;
var t = 90;
console.log(e * t);
var q = 500;
var s = 354;
console.log(q - s);

function toby(a,b){
	return a+b;
}

console.log(toby(660,6));


function helloword(nom){
	alert('Helloword'+ nom +'!')
}
helloword(' Joel jt');

var tab=new Array();
tab[0]="Lundi";
tab[1]="Mardi";
tab[2]="Mercredi";
tab[3]="Jeudi";
tab[4]="Vendredi";
tab[5]="Samedi";
tab[6]="Dimanche";

console.table(tab);


var tabPage=new Array();
tabPage["Lundi"]="html";
tabPage["Mardi"]="css";
tabPage["Mercredi"]="javascript";
tabPage["Jeudi"]="React js";
tabPage["Vendredi"]="Angular";
tabPage["Samedi"]="php";
tabPage["Dimanche"]="vue js";

console.table(tabPage);
var j = 0;
document.write( "Le jour à l'indice " + j + " est " + tab[j] );
document.write( ". Nous avons le cours de " + tabPage[ tab[j] ] );

var mois=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
document.write("Affichage du tableau avant le tri :<br>");
// document.write(mois.join(", "));

/* Tri du tableau */
mois.sort();
document.write("<hr>Affichage du tableau trié :<br>");
document.write(mois.join(", "));

console.log(mois);

for (var i = 0; i < mois.length; i++) {
	// console.log(mois[i]);
	alert('le mois numero ' + (i+1) + ' est : ' + mois[i])
}
