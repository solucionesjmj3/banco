class Cuenta {
    constructor(numCuenta, saldo){
        this.numCuenta = numCuenta;
        this.saldo = saldo;
    }

    getSaldo(){
        return this.saldo;
    }

    setSaldo(saldo){
        this.saldo = saldo;
    }

    getCuenta(){
        return this.numCuenta;
    }

    setCuenta(numCuenta){
        this.numCuenta = numCuenta;
    }

    consultarSaldo(){
        return this.getSaldo();
    }

    realizarDeposito(valorConsignar){
        this.setSaldo(valorConsignar + this.getSaldo());
        return this.getSaldo();
    }

    realizarRetiro(valorRetirar){

        if(this.getSaldo()> valorRetirar){
            this.setSaldo(this.getSaldo() - valorRetirar);
            return this.getSaldo();
        }else{
            console.log("No tienes suficiente dinero para retirar");
        }

        /**/
    }

}

export { Cuenta };

