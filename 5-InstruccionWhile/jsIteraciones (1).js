function Mostrar()
{
	//alert('iteración while');
	var contador = 0;
/*		if (contador < 10) 
			{
				alert("mensaje " + contador);
			}
		contador = contador + 1;		
		if (contador < 10) 
		{
			alert("mensaje " + contador);
		}
		contador = contador + 1;
		if (contador < 10) 
			{
				alert("mensaje " + contador);
			}
		contador = contador + 1;
		if (contador < 10) 
			{
				alert("mensaje " + contador);
			}			
			//ESTO NUNCA JAMAS HACER ESTO!!!!*/

/*	while (contador < 3) 
			{
				alert("mensaje " + contador);
				contador = contador + 1;
			}	
// el WHILE siempre tiene que tener salida, en este caso el contador = contador +1;				
*/

/*	while(true)
		{
			alert("mensaje " + contador);
			
			if (contador == 3)
				{
					break;
				}//if (contador == 3)
			contador = contador + 1;	
		}//while(true)
*/

	while(true) //1 es igual a poner true y 2 es igual aponer false
		{
			contador=contador+1;
			if (contador==3) 
				{
					continue; //no muestra esta opcion, pero continua con la orden
				}//if
			alert("while " + contador);
			if (contador==6) 
				{
					break;
				}	
			alert("FIN " + contador);	

		}//while			
}//FIN DE LA FUNCIÓN