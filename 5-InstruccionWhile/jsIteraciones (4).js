function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	/*while(numero >= 0 && numero < 10)
		{
			alert("correcto");
			if (numero < -1 && numero > 11) 

				{
					alert("Incorrecto");
					numero = prompt("ingrese un número entre 0 y 10.");

				}//if
				break;	
		}//while
		*/ // ESTO NO VA

		while(numero <0 || numero >= 10)   // || esas dos barras significan O
			{
				alert("Incorrecto");
				numero = prompt("ingrese un número entre 0 y 10.");
			}
			alert("Correcto");
			document.getElementById('Numero').value=numero;

}//FIN DE LA FUNCIÓN