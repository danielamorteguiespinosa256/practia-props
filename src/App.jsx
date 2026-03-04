import React from 'react'
import Saludo from './props/Saludo'
import MatematicasMagicas from './props/MatematicasMagicas'
import TargetaUsuario from './props/TargetaUsuario'
import BotonLike from './props/BotonLike'
import PostConEfecto from './props/PostConEfecto'
const App = () => {
  return (
    <div>
      {/* props como atributos de html */}
      <TargetaUsuario nombre="lucia" juegoFavorito="valorant"/>
      <TargetaUsuario nombre="marcos" juegoFavorito="roblox"/>
      <TargetaUsuario nombre="julio" juegoFavorito="freefire"/>
      
    <Saludo/>
    <MatematicasMagicas/>
    <BotonLike/>
    <PostConEfecto/>
    </div>
  )
}

export default App