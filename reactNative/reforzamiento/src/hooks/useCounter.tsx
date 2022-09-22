import React, { useState } from 'react'

//Custom hook con valor inicial que al no ser definido es 10 por defect
// y siempre tiene que ser un numero

const useCounter = (inicial: number = 10) => {

    const [contador, setContador] = useState(inicial);

    const acumular = (numero: number) =>{
        setContador(contador + numero);
    }

  return {
    contador,
    acumular
    }
  
}

export default useCounter