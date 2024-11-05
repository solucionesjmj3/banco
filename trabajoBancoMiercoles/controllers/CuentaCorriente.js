import Cuenta from "./Cuenta";

class CuentaCorriente extends Cuenta {
    constructor(numCuenta, saldo, descubiertoPermit){
        super(numCuenta, saldo);
        this.descubiertoPermit = descubiertoPermit;
    }
    realizarTransferencia(numCuentTrans,valor){
        if (valor > 0){
            return `El valor de ${valor} pesos a sido transferido correctamente a la cuenta ${numCuentTrans}`
        }else{
            return "Ingrese un valor a transferir superior a 0 pesos"
        }
    }
}