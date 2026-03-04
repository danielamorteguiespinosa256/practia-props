import React from "react";
import { useState, useEffect } from 'react';

const PostConEfecto = () => {

    const [mensajes, setMensajes] = useState(0)

useEffect(() =>{
    document.title = `Tienes ${mensajes} mensajes nuevos`;
    }, [mensajes]);

  return (
    <div>
        <h2>Bandeja de entrada</h2>
        <p>Mensajes sin leer: {mensajes} </p>
        <button onClick={() => setMensajes(mensajes + 1)}>Recivir nuevo mensajes
        </button>
    </div>
  );
}

export default PostConEfecto;