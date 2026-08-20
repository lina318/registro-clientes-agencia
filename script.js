const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let destino = document.getElementById("destino").value;

    let mensaje = document.getElementById("mensaje");


    if (
        nombre == "" ||
        apellido == "" ||
        telefono == "" ||
        correo == "" ||
        destino == ""
    ) {

        mensaje.innerHTML =
        "Error: faltan datos del cliente.";

        mensaje.style.color = "red";
        mensaje.style.backgroundColor = "#ffe1e1";
        mensaje.style.padding = "10px";

    } else {

        mensaje.innerHTML =
        "¡Cliente registrado correctamente! Gracias por utilizar nuestro sistema.";

        mensaje.style.color = "green";
        mensaje.style.backgroundColor = "#d9f0d9";
        mensaje.style.padding = "10px";

        formulario.reset();
    }

});
