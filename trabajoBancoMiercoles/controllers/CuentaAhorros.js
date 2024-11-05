import Cuenta from "./Cuenta";

class CuentaAhorros extends Cuenta{
    constructor(numCuenta, saldo, tasaInteres){
        super(numCuenta, saldo);
        this.tasaInteres = tasaInteres;
    }
    calcularInteres(saldo){
        return (saldo * this.tasaInteres) / 100;
    }
}