import { Cuenta } from './Cuenta.js';


let cuentas = [];
let clientes = [];
let cuenta1 = new Cuenta(4614192,1000000);
let cuenta2 = new Cuenta(6600444,2000000);

cuentas.push(cuenta1);
cuentas.push(cuenta2);


console.log(clientes,cuentas);


/*Eventos CSS*/

document.getElementById("retirar").onclick = () => {
    document.getElementById("menuP").style.display = "none";
    document.getElementById("menuR").style.display = "flex";
}

document.getElementById("consignar").onclick = () => {
    document.getElementById("menuP").style.display = "none";
    document.getElementById("menuC").style.display = "flex";
}


document.getElementById("transferir").onclick = () => {
    document.getElementById("menuP").style.display = "none";
    document.getElementById("menuT").style.display = "flex";
}

document.getElementById("consulta").onclick= () =>{
    document.getElementById("menuP").style.display = "none";
    document.getElementById("menuCon").style.display = "grid";
    document.getElementById("menuCon").classList.add("animacion");
    document.getElementById("cuent1").innerText = cuenta1.getCuenta();
    document.getElementById("sald1").innerText = cuenta1.getSaldo();
    document.getElementById("cuent2").innerText = cuenta2.getCuenta();
    document.getElementById("sald2").innerText = cuenta2.getSaldo();
}

document.getElementById("salirR").onclick = () =>{
    document.getElementById("menuR").style.display = "none";
    document.getElementById("menuP").style.display = "grid";
    document.getElementById("result1").innerText = "";
    document.getElementById("result2").innerText = "";
    parseFloat(document.getElementById("valorRetirado").value = "");
}
document.getElementById("salirC").onclick = () =>{
    document.getElementById("menuC").style.display = "none";
    document.getElementById("menuP").style.display = "grid";
    document.getElementById("result1C").innerText = "";
    document.getElementById("result2C").innerText = "";
    parseFloat(document.getElementById("valorConsignado").value = "");
}

document.getElementById("salirT").onclick = () =>{
    document.getElementById("menuT").style.display = "none";
    document.getElementById("menuP").style.display = "grid";
    document.getElementById("result1T").innerText = "";
    document.getElementById("result2T").innerText = "";
    document.getElementById("cuentaTransferida").value = "";
    parseFloat(document.getElementById("valorTransferido").value = "");
}

document.getElementById("salirCon").onclick = () =>{
    document.getElementById("menuCon").style.display = "none";
    document.getElementById("menuP").style.display = "grid";
}





/*Funciones de eventos */

document.getElementById("botonRetirado").onclick = function cambiarValor () {
    let valorRetirado = parseFloat(document.getElementById("valorRetirado").value);
    const boton = document.getElementById("alertButton");
    boton.classList.remove("hidden");
    if (valorRetirado > 0 && valorRetirado < cuenta1.getSaldo()) {
        cuenta1.setSaldo(cuenta1.getSaldo() - valorRetirado);
        document.getElementById("result1").innerText = valorRetirado.toString();
        document.getElementById("result2").innerText = cuenta1.getSaldo();
        boton.classList.add("success");
        boton.innerHTML = "Retiro Completado";
    }else{
        boton.classList.add("error");
        boton.innerHTML = "No tiene saldo suficiente";
    }
    setTimeout(function() {
        boton.classList.add("hidden");
        boton.classList.remove("success", "error");
    }, 3000);
};



document.getElementById("botonConsignado").onclick = () => {
    const boton = document.getElementById("alertButtonC");
    boton.classList.remove("hidden");
    let valorConsignado = parseFloat(document.getElementById("valorConsignado").value);
    if (valorConsignado > 0) {
        cuenta1.setSaldo(cuenta1.getSaldo() + valorConsignado);
        document.getElementById("result1C").innerText = valorConsignado.toString();
        document.getElementById("result2C").innerText = cuenta1.getSaldo();
            boton.classList.add("success");
            boton.innerHTML = "Acción correcta";
    }else{
        boton.classList.add("error");
        boton.innerHTML = "Acción incorrecta";
    }
    setTimeout(function() {
        boton.classList.add("hidden");
        boton.classList.remove("success", "error");
    }, 3000);
    
};

document.getElementById("botonTransferir").onclick= () => {
    var cuentaTrans = document.getElementById("cuentaTransferida").value;
    var saldoTransferido = parseFloat(document.getElementById("valorTransferido").value) ;
    var cuentaEncontrada = buscarCuenta(cuentaTrans);
    console.log(cuentaEncontrada)
    function cambiarValor () {
        const boton = document.getElementById("alertButtonT");
        boton.classList.remove("hidden");
        if (saldoTransferido > 0 && saldoTransferido < cuenta1.getSaldo()) {
            cuentaEncontrada.setSaldo(cuentaEncontrada.getSaldo() + saldoTransferido)
            cuenta1.setSaldo(cuenta1.getSaldo() - saldoTransferido);
            document.getElementById("result1T").innerText = saldoTransferido.toString();
            document.getElementById("result2T").innerText = cuenta1.getSaldo();
            boton.classList.add("success");
            boton.innerHTML = "Transferecia Completada";
        }else{
            boton.classList.add("error");
            boton.innerHTML = "No tiene saldo suficiente";
        }
        setTimeout(function() {
            boton.classList.add("hidden");
            boton.classList.remove("success", "error");
        }, 3000);
    }
    cambiarValor();
}

// Función para crear una nueva cuenta con un número de cuenta aleatorio

function generarNumCuenta() {
    return Math.floor(Math.random() * 9000000) + 1000000;  // Genera un número de 7 dígitos
}

function crearCuenta(valor) {
    let numCuenta = generarNumCuenta();
    let nuevoCliente = new Cliente();
    let nuevaCuenta = new Cuenta(numCuenta, valor);
    cuentas.push(nuevaCuenta);
    return nuevaCuenta;
}

function buscarCuenta(numCuenta){
    return cuentas.find(function(numero){
        return numero.numCuenta == numCuenta;
    })
}

var resultado = buscarCuenta("4614192");
console.log(resultado);
console.log(JSON.parse(localStorage.getItem('localCuenta')));
console.log(JSON.parse(localStorage.getItem('localCliente')));
