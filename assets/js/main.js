function imprimirPaciente(nombre, apellido, edad, ciudad, genero, pais){

	var nombre 						= document.getElementById("name").value
	var apellido			 		= document.getElementById("lastname").value
	var edad 						= document.getElementById("age").value
	var ciudad 						= document.getElementById("city").value
	var generoSelect 				= document.getElementById("gender");
	var genero 						= generoSelect.options[generoSelect.selectedIndex].value
	var paisSelect 					= document.getElementById("country");
	var pais 						= paisSelect.options[paisSelect.selectedIndex].value

	this.name 		= nombre;
	this.lastname 	= apellido;
	this.age 		= edad;
	this.city 		= ciudad;
	this.gender 	= genero;
	this.country 	= pais;

	//Nota: Cambia los alerts y escribe bajo los inputs.

	if(this.name.length == 0){
		alert("Escribe tu nombre")
		if(this.lastname.length == 0){
			alert("Escribe tu apellido")
			if(this.age.length == 0){
				alert("Escribe tu edad")
				if(this.city.length == 0){
					alert("Escribe tu ciudad")
				}
			}
		}
	}

	if(this.gender == 0){
		alert("Selecciona una opción en género");
	}else if(this.country == 0){
		alert("Selecciona una opción en país");
	}

	var div = document.createElement("div");
		div.setAttribute("class", "clase-pacientes")
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

};
 
