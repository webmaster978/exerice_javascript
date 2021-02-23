
// var  ee = document.getElementById('ee');
// var me =  document.getElementById('me');
var mois=["facebook","whattsap","gmail","trello","telegram","twitter","instagram","updevcom","messenger","youtoube","github","isig-shop","google","slack","jtnet"];
var moi = [];
var mo  = [];
document.getElementById('btn').onclick = function(){
	var me = mois[Math.floor(Math.random() * 16)];
	var joel= mois[Math.floor(Math.random() * 16)];
	if (moi.includes(me)) {
		document.getElementById('ee').innerHTML='already exist';
	}
	else{
		document.getElementById('ee').innerHTML+= me + ' avec ' + joel + '</br>';
		moi.push(me);
		mo.push(joel);
		console.table(ee);
	}
}
// btn.onclick = function() {

// 	var m = mois [Math.floor(Math.random() * 10)];
   
//     if (moi.includes(m)) {
//     	document.getElementById('')
//     }
// } 
 //    if (ee.innerHTML == m) {

 //    	for (var i = 0; i < m.length; m+i) {
	// // console.log(mois[i]);
	// // alert('le mois numero ' + (i+1) + ' est : ' + mois[i])


    	
 //    	  // moi.push("m[i+1]");
 //    	  // console.table(moi);

 //    	  }	
 //    }


 
 

// var mois=["Janvier","Fevrier","Mars","Avril","Mai","Juin"]
// mois.pop();
// mois.push('Septembre');
// mois.shift();
// mois.unshift("Janvier");

// console.table(mois);