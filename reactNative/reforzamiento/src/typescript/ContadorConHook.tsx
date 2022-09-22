import React from 'react'
import useCounter from '../hooks/useCounter'

const ContadorConHook = () => {

    const {contador, acumular} = useCounter(100);

  return (
    <div>
        <h3>Contador con Hook: {contador}</h3>
        <button onClick={()=> acumular(-1)}>-</button>
        &nbsp;
        <button onClick={()=> acumular(1)}>+</button>
    </div>
  )
}

export default ContadorConHook