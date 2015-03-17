$('#button').click(function(){
	var valor=$('#number').val();
	if($.isNumeric(valor) && valor>-1) // al menos mayor 0
	{
		circulares=obtenerCirculares(valor);
		// setea en verdadero
		esPrimoCircular=true;
		
		// comprueba que todos sean primos
		for (var i=0;i<circulares.length;i++)
		{
			var valorAux=parseInt(circulares[i])
			// si uno no es primos entonces no es un primo circular
			if(!esPrimo(valorAux))
				esPrimoCircular=false;
				
		}
		
	
		
		if(esPrimoCircular)
		{
			$('#resultado').html("Resultado:<span style='color:green';'> "+valor+" es un primo circular</span>.");
		}
		else
		{
			$('#resultado').html("Resultado:<span style='color:red';'> "+valor+" no es un primo circular</span>.");
		}
	}
	else
		$('#resultado').html("Resultado:<span style='color:red';'> "+'"'+valor+'"'+" no es un valor valido</span>.");
		
    
});

function esPrimo(n) {

	var cota = parseInt(Math.sqrt(n));
   // si es menor a 2 no es primo
   if (n < 2) {return false}
   
   // Asumimos que es primo hasta que se demuestre lo contrario
   var esPrimo = true;

   // Now check every whole number from 2 to the square root of n. If any of these divides n exactly, n cannot be prime.
   for (var i = 2; i <= cota; i++) {
      if (n % i == 0) {esPrimo = false}
   }

   // Finally return whether n is prime or not.
   return esPrimo;

} 

function obtenerCirculares(n)
{
	nCaracteres=n.toString();
	cantidadRotar=nCaracteres.length;
	
	lista = new Array();
	lista[0]=nCaracteres;
	for (var i=1;i<cantidadRotar;i++)
	{
		ultimoCaracterAux=lista[i-1][nCaracteres.length-1];
		// ultimo pasa a ser el primero
		lista[i]= ultimoCaracterAux+lista[i-1].substring(0, nCaracteres.length-1);
	}
	
	return lista;
}


// agregar un div barra trabajando y luego mostrar el resultado como que esta trabajando ^^ 