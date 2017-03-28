window.onload = function(){

	document.getElementById("id-form").onsubmit = function(e){
		e.preventDefault();
	}

	function paciente(nombre, apellido, edad, ciudad, genero, pais){

		this.name 		= nombre;
		this.lastname 	= apellido;
		this.age 		= edad;
		this.city 		= ciudad;
		this.gender 	= genero;
		this.country 	= pais;

	}

	var arrayPaciente = [];

	document.getElementById("submit-button").addEventListener("click", function(){

		var nombre 						= document.getElementById("name").value
		var apellido			 		= document.getElementById("lastname").value
		var edad 						= document.getElementById("age").value
		var ciudad 						= document.getElementById("city").value
		var generoSelect 				= document.getElementById("gender");
		var genero 						= generoSelect.options[generoSelect.selectedIndex].value
		var paisSelect 					= document.getElementById("country");
		var pais 						= paisSelect.options[paisSelect.selectedIndex].value

		if(nombre.length != 0 && apellido.length != 0 && edad.length !=0 && genero.length != 0 && ciudad.length != 0 && pais.length != 0){
			//arrayPaciente.push(new paciente(nombre, apellido, edad, ciudad, genero, pais))
			console.log(new paciente(nombre, apellido, edad, ciudad, genero, pais))
			localStorage.setItem("paciente", JSON.stringify(new paciente(nombre, apellido, edad, ciudad, genero, pais)));
			//divPaciente(arrayPaciente)
			document.getElementById("id-form").reset()
			window.location ="paciente.html"

		}else{
			var alerta = document.getElementById("alerta");
			alerta.innerHTML = "Todos los campos son obligatorios"
		}

	})

	function divPaciente(paciente){

		var container = document.getElementById("pacientes");
			container.innerHTML="";

		for(var i = 0; i < paciente.length; i++){
			var contenedorPaciente = document.createElement("div");
				contenedorPaciente.setAttribute("class", "clase-pacientes");

				for(var prop in paciente[i]){
					var dato = document.createElement("p");
						dato.innerHTML = prop + " : " + paciente[i][prop];
						contenedorPaciente.appendChild(dato);
				}

				container.appendChild(contenedorPaciente);
				document.getElementById("id-form").reset()
		}
	}





/*
	var nombre 						= document.getElementById("name").value
	var apellido			 		= document.getElementById("lastname").value
	
	var letras = function(e){

		var codeTecla = e.keyCode;

		if((codeTecla >= 97 && codeTecla <= 122) || (codeTecla >= 65 && codeTecla <= 90) || codeTecla == 39 || codeTecla == 32){
			this.nextElementSibling.nextElementSibling.innerHTML = "";
			return true;
		}else {
			this.nextElementSibling.nextElementSibling.innerHTML = "Este campo sólo permite letras"
			return false;
		}
	}

	nombre.onkeypress = letras;
	apellido.onkeypress = letras;

	var edad 						= document.getElementById("age").value

	var numeros = function(e){

		var codeTecla = e.keyCode;
		var longitud = this.value.length;

		if(longitud == 1){
			this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.focus();
		}

		if(codeTecla >= 48 && codeTecla <= 57 && this.value.length <= 2){
			return true;
		}else{
			return false;
		}		
	}

	edad.onkeypress = nuneros;

	var inputs = document.getElementsByClassName()
*/

}