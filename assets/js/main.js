function imprimirPaciente(nombre, apellido, edad, ciudad, genero, pais){

	var nombre 						= document.getElementById("name").value
	var apellido			 		= document.getElementById("lastname").value
	var edad 						= document.getElementById("age").value
	var ciudad 						= document.getElementById("city").value
	var generoSelect 				= document.getElementById("gender");
	var genero 						= generoSelect.options[generoSelect.selectedIndex].value
	var paisSelect 					= document.getElementById("country");
	var pais 						= paisSelect.options[paisSelect.selectedIndex].value
	
	var spanName 					= document.getElementById("span-name");
	var spanLastName 				= document.getElementById("span-lastname");
	var spanAge 					= document.getElementById("span-age");
	var spanGender 					= document.getElementById("span-gender");
	var spanCity 					= document.getElementById("span-city");
	var spanCountry 				= document.getElementById("span-country");

	this.name 		= nombre;
	this.lastname 	= apellido;
	this.age 		= edad;
	this.city 		= ciudad;
	this.gender 	= genero;
	this.country 	= pais;

	var regLetras = /^[a-zA-Z\u00E0-\u00FC]+$/; //Tildes
	var regNumeros = /[0-9]+/;

	//Validaciones de vacío

	if(this.name.length == 0 && this.lastname.length == 0 && this.city.length == 0 && this.age.length == 0 && this.country == 0 && this.gender == 0){
		alert("Todos los campos son obligatorios");
	}

	if(this.name.length == 0){
		spanName.innerHTML = "Escribe tu nombre"
	}else{
		spanName.innerHTML = " "
	}

	if(this.lastname.length == 0){
		spanLastName.innerHTML = "Escribe tu apellido"
	}else{
		spanLastName.innerHTML = " "
	}

	if(this.city.length == 0){
		spanCity.innerHTML = "Escribe tu ciudad"
	}else{
		spanCity.innerHTML = " "
	}

	if(this.age.length == 0){
		spanAge.innerHTML = "Escribe tu edad"
	}else{
		spanAge.innerHTML = " "
	}

	if(this.country == 0){
		spanCountry.innerHTML = "Selecciona una de las opciones"
	}else{
		spanCountry.innerHTML = " "	
	}

	if(this.gender == 0){
		spanGender.innerHTML = "Selecciona una de las opciones"
	}else{
		spanGender.innerHTML = " "	
	}

	//Validaciones de contenido

	if(this.name.length > 1 && this.name.search(regLetras)){
		spanName.innerHTML = " "
		alert("Ingresa sólo letras en nombre");
	}else if(this.lastname.length > 1 && this.lastname.search(regLetras)){
		spanLastName.innerHTML = " "	
		alert("Ingresa sólo letras en apellido");
	}else if(this.city.length > 1 && this.city.search(regLetras)){
		spanCity.innerHTML = " "
		alert("Ingresa sólo letras en ciudad");
	}else if(this.age.length > 1 && this.age.search(regNumeros)){
		spanAge.innerHTML = " "	
		alert("Ingresa sólo números en edad");
	}else{
		if(this.name.length > 1 && this.lastname.length > 1 && this.age.length > 1 && this.city.length > 1 && this.country != 0 && this.gender != 0){
		var div = document.createElement("div");
			div.setAttribute("class", "clase-pacientes");

		var parrafoNombre = document.createElement("p");
			parrafoNombre.innerHTML = "Nombre: " + this.name + " " + this.lastname;

		var parrafoEdad = document.createElement("p");
			parrafoEdad.innerHTML = "Edad: " + this.age;
		var parrafoPais = document.createElement("p");
			parrafoPais.innerHTML = "País: " + this.country

		div.appendChild(parrafoNombre);
		div.appendChild(parrafoEdad)
		div.appendChild(parrafoPais)	

		document.getElementById("pacientes").appendChild(div);
		document.getElementById("id-form").reset()

		alert("Registro válido")
		}
	}
};	

		/*

		if(this.name.length == 0){
			spanName.innerHTML = "Escribe tu nombre"
		}else if(this.name.search(regLetras)){
			alert("Ingresa sólo letras en nombre");
		}else{
			spanName.innerHTML = " "
		}

		if(this.lastname.length == 0){
			spanLastName.innerHTML = "Escribe tu apellido"
		}else if(this.lastname.search(regLetras)){
			alert("Ingresa sólo letras en apellido");	
		}else{
			spanLastName.innerHTML = " "
		}

		if(this.city.length == 0){
			spanCity.innerHTML = "Escribe tu ciudad"
		}else if(this.city.search(regLetras)){
			alert("Ingresa sólo letras en ciudad");
		}else{
			spanCity.innerHTML = " "
		}

		if(this.age.length == 0){
			spanAge.innerHTML = "Escribe tu edad"
		}else if(this.age.search(regNumeros)){
			alert("Ingresa sólo números en edad");
		}else{
			spanAge.innerHTML = " "
		}

		if(this.country == 0){
			spanCountry.innerHTML = "Selecciona una de las opciones"
		}else if(this.country != 0){
			spanCountry.innerHTML = " "
		}

		if(this.gender == 0){
			spanGender.innerHTML = "Selecciona una de las opciones"
		}else if(this.gender != 0){
			spanGender.innerHTML = " "
		}

	*/


		/*

		var soloLetras = function(e){
			var codigoTecla = e.keyCode;
			console.log(codigoTecla);
			if((codigoTecla >= 97 && codigoTecla <= 122) || (codigoTecla >=65 && codigoTecla <= 90) || codigoTecla == 39 || codigoTecla == 32){
				return true;
			}else{
				return false;
			}
		}

		this.name.onkeypress = soloLetras;
		this.lastname.onkeypress = soloLetras;

		*/

 
