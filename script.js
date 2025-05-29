function validarApellido() {
    const apellido = document.getElementById("apellido").value.trim();
    const error = document.getElementById("errorApellido");
    if (!/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/.test(apellido)) {
        error.textContent = "Solo se permiten letras.";
        return false;
    }
    error.textContent = "";
    return true;
}

function validarNombre() {
    const nombre = document.getElementById("nombre").value.trim();
    const error = document.getElementById("errorNombre");
    if (!/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/.test(nombre)) {
        error.textContent = "Solo se permiten letras.";
        return false;
    }
    error.textContent = "";
    return true;
}

function validarDni() {
    const dni = document.getElementById("dni").value.trim();
    const error = document.getElementById("errorDni");
    if (!/^\d{8}$/.test(dni)) {
        error.textContent = "Debe contener exactamente 8 dígitos numéricos.";
        return false;
    }
    error.textContent = "";
    return true;
}

function validarFechaNacimiento() {
    const fecha = document.getElementById("date").value;
    const error = document.getElementById("errorFecha");
    const fechaIngresada = new Date(fecha);
    const fechaLimite = new Date("2005-12-31");
    if (!fecha || fechaIngresada <= fechaLimite) {
        error.textContent = "Debe haber nacido después del 31 de diciembre de 2005.";
        return false;
    }
    error.textContent = "";
    return true;
}

function validarFormulario() {
    const validaciones = [
        validarApellido(),
        validarNombre(),
        validarDni(),
        validarFechaNacimiento(),
    ];
    const msg = document.getElementById("msg");
    if (validaciones.every(Boolean)) {
        msg.innerHTML = "<p>Formulario Validado!</p>";
    } else {
        msg.innerHTML = "<p>Formulario no validado, por favor corrija los errores.</p>";
    }
}

function realizarPreguntas() {
    const preguntas = [
        "¿Cuál es tu color favorito?",
        "¿Cual es el nombre de tu mascota?",
        "¿Cual es tu nacionalidad?"
    ];
    let respuestas = [];

    preguntas.forEach((pregunta) => {
        let respuesta = prompt(pregunta);
        respuestas.push(respuesta ? respuesta : "Sin respuesta");
    });

    let htmlAgregar = "<h3>Respuestas:</h3><ul>";
    respuestas.forEach((resp, idx) => {
        htmlAgregar += `<li><strong>${preguntas[idx]}</strong> ${resp}</li>`;
    });
    htmlAgregar += "</ul>";

    document.getElementById("respuestas").innerHTML = htmlAgregar;
}

