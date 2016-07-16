function Mostrar()
{

	var contador=0;
	var acumulador=0;
	/*var numero;
	while(contador<5)
		{
			contador=contador+1;
			numero= prompt("Ingrese numero " + contador);
			acumulador = acumulador + numero;
		}
		*/
	var numero;
	while(contador <5)
		{
			contador=contador + 1;
			numero= prompt("Ingrese numero " + contador);
			acumulador = acumulador + parseInt(numero);
		}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN


//HACER TODO DE TODAS LAS MANERAS!!!!
// HACER EJERCICIO 12(TP) ES EL MAS IMPORTANTE- 5(TP)- 7(TP)- 9(TP)- 11(TP)