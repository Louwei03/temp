function save(){

if (document.getElementById('T').checked){
	alert('Good Job');
	var TableT= document.getElementById('TeresaH');
	var RowT = TableT.insertRow(1);
	var TT = RowT.insertCell(0);
	var WT = RowT.insertCell(1);
	var Teacher = document.getElementById('Teacher');
	var Url = document.getElementById('Url');
	var Web = Teacher.value + "'s "+"Link!";
  	var Link = Web.link(Url.value);
  	TT.innerHTML = Teacher.value;
  	WT.innerHTML = Link;
  }

if (document.getElementById('F').checked){
	alert('Good Job Franky');
	var TableF= document.getElementById('FrankH');
	var RowF = TableF.insertRow(1);
	var TF = RowF.insertCell(0);
	var WF = RowF.insertCell(1);
	var Teacher = document.getElementById('Teacher');
	var Url = document.getElementById('Url');
	var Web = Teacher.value + "'s "+"Link!";
  	var Link = Web.link(Url.value);
  	TF.innerHTML = Teacher.value;
  	WF.innerHTML = Link;
  }

 if (document.getElementById('V').checked){
	alert('Good Job Vinvin');
	var TableV= document.getElementById('VinvinH');
	var RowV = TableV.insertRow(1);
	var TV = RowV.insertCell(0);
	var WV = RowV.insertCell(1);
	var Teacher = document.getElementById('Teacher');
	var Url = document.getElementById('Url');
	var Web = Teacher.value + "'s "+"Link!";
  	var Link = Web.link(Url.value);
  	TV.innerHTML = Teacher.value;
  	WV.innerHTML = Link;

  }



}

