import React from 'react'

// Interfaces permiten definir propiedades y tipos de OBJETOS
interface Persona {
    nombreCompleto: string,
    edad: number
    direccion: Direccion
}

interface Direccion {
    pais: string,
    casaNo: number
}

const TIposLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Fernando',
        edad: 35,
        direccion: {
            pais: 'Canada',
            casaNo: 615
        }
    }

    // TypeScript genera un error, cosa que JavaScript si permite que pase sin error.
    // persona.nombreCompleto = 'Fernando Aquino';

  return (
    <div>
        <h3>Tipos literales</h3>
    </div>
  )
}

export default TIposLiterales;