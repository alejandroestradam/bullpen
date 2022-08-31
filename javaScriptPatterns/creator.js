// Proporciona una interfaz para crear objetos en una superclase, 
//mientras permite a las subclases alterar el tipo de objetos que se crearán.

class MiClase {
    constructor(p1,p2){
        this.propiedad = p1
        this.propiedad2 = p2
    }
    metodo (){
        //Metodo
    }
}

const instancia = new MiClase (4,2);
console.log(instancia);


// Other way to write it, before class sintaxis

function MiClase2 (p1,p2){
    this.propiedad = p1
    this.propiedad2 = p2
    this.metodo = () => {
        //Método
    }
}

const instancia2 = new MiClase2(4,2);
console.log(instancia2);