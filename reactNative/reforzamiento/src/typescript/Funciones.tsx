import React from 'react'

const Funciones = () => {

    // Al definir los tipos en parametros y return te indica error 
    // al llamar la funcion si no cumple con los tipos declarados

    const sumar = (a: number, b: number):number =>{
        return a + b;
    }

  return (
    <div>
        <h3>Funciones</h3>
        <p>El resultado es: {sumar(1, 3)} </p>
        {//Error
        /*<p>El resultado es: {sumar(1, '')} </p>*/}
    </div>
  )
}

export default Funciones