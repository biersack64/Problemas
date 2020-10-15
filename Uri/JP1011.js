var rad=document.getElementById('Radio');
var Res=document.getElementById('Resultado');
var But=document.getElementById('Calcular')

But.addEventListener("click",Esfera);
function Esfera() 
{
	var radio=parseInt(rad.value);
	var V=(4.0/3)*3.1416*Math.pow(radio,3);
	Res.innerHTML="El volumen es "+ Math.round(V,1);
}
