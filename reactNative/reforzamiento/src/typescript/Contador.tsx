import React, { useState } from 'react'

//Contador utilizando typescript y useState

const Contador = () => {
    const [contador, setContador] = useState(10);

    const acumular = (numero: number) =>{
        setContador(contador + numero);

    }

  return (
    <div>
        <h3>Contador: {contador}</h3>
        <button onClick={()=> acumular(-1)}>-</button>
        &nbsp;
        <button onClick={()=> acumular(1)}>+</button>
    </div>
  )
}

export default Contador;