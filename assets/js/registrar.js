window.onload = function(){

	document.getElementById("form-registro").onsubmit = function(element){
		element.preventDefault();
	}

	function registro(nombre, apellido, email, password){

		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.password = password;
	}

	document.getElementById("registrate").addEventListener("click", function(){

		var nombre = document.getElementById("nombre").value
		var apellido = document.getElementById("apellido").value
		var email = document.getElementById("email").value
		var password = document.getElementById("password").value
		
		if(password.length != 0 && email.length != 0 && apellido.length != 0 && nombre.length != 0){

			localStorage.setItem("nuevoUsuario",JSON.stringify(new registro(nombre,apellido,email,password)));
			document.getElementById("form-registro").reset()
			window.location = ""

		}else{

		}

	});

	// !/([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test(emailInput.value))

}