import React from 'react'

const TargetaUsuario = (props) => {
  return (
    <div style={{ border: '2px solid black', padding: '10px', margin:'10px'}}>
        <h3>jugador: {props.nombre}</h3>
        <p>juego favorito: {props.juegoFavorito}</p>
    </div>
    )
}

export default TargetaUsuario;