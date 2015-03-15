function validateLogin(){
	var successlogin = false;
	var loginObject = { "success":"false","message":"","role":"user"};

	var user = $("#username").val();
	var pass = $("#password").val();
	console.log("The username used is:"+user);
	if(user!="") {
		if(pass!="") {
			if(user=="antonio"||user=="susana"||user=="yazmin"||user=="claudia"||user=="nallely"||user=="jimena"||user=="admin") {
				if (pass=="12345") {
					successlogin = true;
					// Nuevo manejo de Rol
					loginObject.success = successlogin;
				}
				// Manejo de Rol
				if (user=="antonio"||user=="admin") {
					loginObject.role = "admin";
				}
				//
			} else {
				successlogin = false;
				messageError = "Usuario o Contraseña Invalidos, vuelve a intentar.";
				// Nuevo manejo de Rol
				loginObject.success = successlogin;
				loginObject.message = messageError;
			}	
		} else {
			messageError = "Debes de introducir una contraseña";
			// Nuevo manejo de Rol
			loginObject.message = messageError;
		}
	} else {
		messageError = "Debes de introducir un usuario";
		// Nuevo manejo de Rol
		loginObject.message = messageError;
	}
	// return successlogin;
	// Nuevo manejo de Rol
	return loginObject;
}