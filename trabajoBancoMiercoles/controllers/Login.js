import { Cliente } from './Cliente.js';


document.getElementById("iniciar").onclick = function buscarCuenta(){
    var userInput = document.getElementById("userName").value;
    var contraInput = document.getElementById("contrasena").value;
    var localClientes = JSON.parse(localStorage.getItem('localClientes'));
    const boton = document.getElementById("alertButton");
    boton.classList.remove("hidden");
    var resultado = localClientes.find(function(cliente) {
        return cliente.nombre === userInput && cliente.numIdent === contraInput;
    });

    if (resultado) {
        console.log("Lo lograste");
        localStorage.setItem("user", userInput);

        window.location.href = "../templates/index.html";
    } else {
        boton.classList.add("error");
        boton.innerHTML = "Las credenciales son incorrectas";
    }
    setTimeout(function() {
        boton.classList.add("hidden");
        boton.classList.remove("success", "error");
    }, 3000);
}

