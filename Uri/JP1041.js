var x=document.getElementById('X');
var y=document.getElementById('Y');
var	tton=document.getElementById('Calcular');

var res=document.getElementById('Respuesta');
tton.addEventListener("click",Coordenadas);

function Coordenadas() 
{
	n1=parseInt(x.value);
	n2=parseInt(y.value);

	if (n1 > 0 && n2 > 0) 
	{
		res.innerHTML=" Q1";
	}

	if (n1 < 0 && n2 <0) 
	{
		res.innerHTML=" Q3"
	}

	if (n1 < 0 && n2 > 0) 
	{
		res.innerHTML=" Q2";
	}

	if (n1 > 0 && n2 < 0) 
	{
		res.innerHTML=" Q4"
	}

	if (n1 == 0 && n2 == 0) 
	{
		res.innerHTML=" Centro";
	}
	
	if (n1 == 0 && n2 > 0) 
	{
		res.innerHTML=" Linea Y"
	}
	
	if (n1 == 0 && n2 < 0) 
	{
		res.innerHTML=" Linea Y"
	}

	if (n1 > 0 && n2 == 0) 
	{
		res.innerHTML=" Linea X"
	}

	if (n1 < 0 && n2 == 0) 
	{
		res.innerHTML=" Linea X"
	}	

}