import { useState } from "react";

const TiposBasicos = () => {

  const [state, setState] = useState();

  const nombre: string = "Fernando";
  const edad = 35;
  const estaActivo: boolean = true;
  const poderes: string[] = []; //'Velocidad', 'Volar', 'Respirar en el agua'


  return (
    <>
      <h3>TiposBasicos</h3>
      {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'} 
      <br/>
      {poderes.join(', ')}
    </>
  )
}

export default TiposBasicos;