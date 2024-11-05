class Cliente {
    constructor (nombre, apellido, direccion, numIdent){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.numIdent = numIdent;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    getApellido(){
        return this.apellido;
    }

    setApellido(apellido){
        this.apellido=apellido;
    }

    getDireccion(){
        return this.direccion;
    }

    setDireccion(direccion){
        this.direccion = direccion;
    }

    getNumIdent(){
        return this.numIdent;
    }

    setNumIdent(numIdent){
        this.numIdent = numIdent;
    }

    
}

export { Cliente };
