import React from 'react'

    const nombre = "alex";
    const edad = 17;
    const anioNacimiento = 2007 - edad;

const MatematicasMagicas = () => {
  return (
    <div className='tarjeta'>
        <h2>Perfil de {nombre}</h2>
        <p> si tienes {edad} años, naciste aproximadamente en {anioNacimiento}</p>
        <p>¿Cuanto 5 por 5? ¡es {5*5}! </p>

    </div>
  )
}

export default MatematicasMagicas