window.onload = function()
{
	inicio();
}

function inicio()
{
	//crea la tabla inicial para mostrar las imagenes que representa cada letra	
	var CrearTabla = function()
	{
		var txt = "<table id='Tabla'>";
		var divTabla = 65;
		var LetraAscii = "";
		var cont = 0;
		for(var i = 1; i <= 3; i++) // filas
		{
			txt += "<tr>";
			for(var c = 1; c <= 9; c++)//columnas
			{
				if(divTabla >= 91) // si la variable pasa de 90 es decir Z
				{
					divTabla = 63; //63 es el signo de pregunta en ascii
				}
				LetraAscii = String.fromCharCode(divTabla);
				txt += "<td><center> <strong>"+LetraAscii+"</strong></center><img src = 'Imagenes/"+cont+".jpg'  id = '"+(divTabla)+"'/></td>";
				divTabla++;
				LetraAscii++;
				cont++;
			}
			txt += "</tr>";
		}
		txt += "</table>";
		return txt;
	}
	nom_div("Iniciales").innerHTML = CrearTabla();

	nom_div("Codificar").addEventListener("click", function()
	{
		var FraseAscii = [];
		var ImagenCapturada = [];
		var Imprimir = "";
    	var Frase = nom_div("Palabra").value;    	
    	Frase = Frase.replace(/\s/g,'');// quita los espacios
    	Frase = Frase.toUpperCase();

    	for(var i=0; i<Frase.length; i++)
    	{
    		FraseAscii[i] = Frase.charCodeAt(i);
    		ImagenCapturada[i] = nom_div(FraseAscii[i]).getAttribute("src");
    		Imprimir += "<img src="+ImagenCapturada[i]+">";    		
    	}

    	nom_div("Respuesta").innerHTML= Imprimir;
	}); // fin del evento clic
}// final de la función inicio

// funcion que permite capturar el id de un elemento de html
function nom_div(div)
{
	return document.getElementById(div);
}