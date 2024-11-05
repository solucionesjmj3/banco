import { Cuenta } from './Cuenta.js';
import { Cliente } from './Cliente.js'

let cuentas = [];
let clientes = [];


function generarNumCuenta() {
    return Math.floor(Math.random() * 9000000) + 1000000;  // Genera un número de 7 dígitos
}

document.getElementById("crear").onclick= () => {
    let numCuenta = generarNumCuenta();
    let name = document.getElementById("rName").value;
    let lastname = document.getElementById("rApe").value;
    let address = document.getElementById("rDir").value;
    let ide = document.getElementById("rNum").value;
    const boton = document.getElementById("alertButton");
    boton.classList.remove("hidden");


    if (name != "" && lastname != "" &&address != ""&& ide != "") {
        boton.classList.add("success");
        boton.innerHTML = "Usuario creado";
        let nuevoCliente = new Cliente(name,lastname,address,ide);
        let nuevaCuenta = new Cuenta(numCuenta, 0);
        cuentas.push(nuevaCuenta);
        clientes.push(nuevoCliente)
        localStorage.setItem("localCuentas", JSON.stringify(cuentas));
        localStorage.setItem("localClientes", JSON.stringify(clientes));
        document.getElementById("rName").value = "";
        document.getElementById("rApe").value = "";
        document.getElementById("rDir").value = "";
        document.getElementById("rNum").value = "";
    }else{
        boton.classList.add("error");
        boton.innerHTML = "Por favor llene todos los campos";
    }
    setTimeout(function() {
        boton.classList.add("hidden");
        boton.classList.remove("success", "error");
    }, 3000);


    console.log(clientes,cuentas);
    console.log(JSON.parse(localStorage.getItem('localCuentas')));
    console.log(JSON.parse(localStorage.getItem('localClientes')));


}

