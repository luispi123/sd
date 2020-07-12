	//Para los intentos
	var juegoPalabras = new Array("cocoman", "celular", "vaso", "pitillo",
			"lampara", "esfero", "codes", "google","medicina","aguacate","murcielago","arbol","hakunamatata");
	var letrasUtilizadas = "";
	var MAXINTENTOS = 9;
	var intentos = 0;
	//Palabra a encontrar
	var palabraOculta = "";
	var palabraActual;
	//Para pedir cada letra
	var letra = "";

	/***
	 * Configuracion del juego
	 ***/
	function comenzarJuego() {

		var index = Math.floor(Math.random() * juegoPalabras.length);
		palabraOculta = juegoPalabras[index].toUpperCase();
		palabraActual = new Array(palabraOculta.length);
		letrasUtilizadas = "";
		intentos = 0;

		document.getElementById('cabeza').style.display = 'none';
		document.getElementById('cuerpo').style.display = 'none';
		document.getElementById('brazos').style.display = 'none';
		document.getElementById('piernas').style.display = 'none';
		document.getElementById('cuerda').style.display = 'none';
		document.forms[0].elements['letra'].focus();

		//Llena la palabra actual con espacios
		for ( var i = 0; i < palabraActual.length; i++) {
			palabraActual[i] = 0;
		}

		mostrarInformacion();
	}

	function validarPalabra(letra) {

		var encontroPalabra = false;
		var coincidencias = 0;
		letrasUtilizadas += letra.toUpperCase() + " ";

		//Aqui esta la magia que valida si la palabra existe			
		for ( var i = 0; i < palabraActual.length; i++) {
			if (letra.charAt(0).toUpperCase() == palabraOculta.charAt(i)) {
				palabraActual[i] = 1;
				encontroPalabra = true;
			}
		}

		if (!encontroPalabra) {
			intentos++;
		}

		//Validaciones para mostrar el morraco
		if (intentos == 1) {
			document.getElementById('cabeza').style.display = 'block';
		}

		if (intentos == 2) {
			document.getElementById('cuerpo').style.display = 'block';
		}
		if (intentos == 3) {
			document.getElementById('brazos').style.display = 'block';
			document.getElementById('piernas').style.display = 'block';
		}
		if (intentos == 4) {
			document.getElementById('cuerda').style.display = 'block';
		}

		//Muestra la informacion actual del juego
		mostrarInformacion();

		//Valida si gano el juego
		for ( var i = 0; i < palabraActual.length; i++) {
			if (palabraActual[i] == 1) {
				coincidencias++;
			}
		}
		if (coincidencias == palabraOculta.length) {
			ganarJuego();
		}

		if (intentos == MAXINTENTOS) {
			palabraActual = palabraOculta;
			mostrarInformacion();
			gameOver();
		}
		
		document.forms[0].elements['letra'].focus();
		document.forms[0].elements['letra'].value = "";
	}

	function gameOver() {
		alert("Perdiste!!");
		if (confirm(" Deseas a jugar otra vez ?")) {
			comenzarJuego();
		} else {
			alert("Gracias por jugar =)");
		}
	}

	function ganarJuego() {
		alert("Buena Ganaste! ");
		if (confirm(" Deseas a jugar otra vez ?")) {
			comenzarJuego();
		} else {
			alert("Gracias por jugar =)");
		}
	}

	/**
	 * Muestra la informacion con cada intento de palabra
	 **/
	function mostrarInformacion() {

		//Obtiene la palabra visible
		var palabraVisible = "";
		for ( var i = 0; i < palabraActual.length; i++) {
			if (palabraActual[i] != 0) {
				palabraVisible += "<span> " + palabraOculta.charAt(i)
						+ " </span>";
			} else {
				palabraVisible += "<span> __ </span>";
			}
		}

		var informacionJuego = "<div id='informacionJuego'> ";
		informacionJuego += "<table>";
		informacionJuego += "   <tr>";
		informacionJuego += "      <td> Max. Numero de Intentos </td>";
		informacionJuego += "      <td><strong>" + MAXINTENTOS + "</strong></td>";
		informacionJuego += "   </tr>";
		informacionJuego += "   <tr>";
		informacionJuego += "      <td> Intentos </td>";
		informacionJuego += "      <td><strong>" + intentos + "</strong></td>";
		informacionJuego += "   </tr>";
		informacionJuego += "   <tr>";
		informacionJuego += "      <td> Palabra Visible </td>";
		informacionJuego += "      <td>" + palabraVisible + "</td>";
		informacionJuego += "   </tr>";
		informacionJuego += "   <tr>";
		informacionJuego += "      <td> Letras Utilizadas </td>";
		informacionJuego += "      <td><span>" + letrasUtilizadas
				+ "</span></td>";
		informacionJuego += "   </tr>";
		informacionJuego += "</table>";
		informacionJuego += "</div>";

		document.getElementById('resultado').innerHTML = informacionJuego;
	}

	function recorrerPalabra() {

		//var codigo = "";
		for ( var i = 0; i < palabra.length; i++) {
			//alert(palabra.charAt(i));
			//codigo += "<br/>" + palabra.charAt(i);
			document.getElementById('resultado').innerHTML = palabra.charAt(i);
		}
		//document.getElementById('resultado').innerHTML = codigo; 		   
	}
