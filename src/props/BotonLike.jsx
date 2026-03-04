import React from 'react'
import { useState } from 'react'

const BotonLike = () => {
    const [likes, setLikes] = useState(0);
    const darLike = () => {

        setLikes(likes+1);
    };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>post: ¿la pizza con piña es buena?</h2>
        <button onClick={darLike} style={{ fontSize: '20px', padding: '10px'}}>
            Me gusta ({likes})
        </button>
        {likes > 10 && <p>¡Wow, esta esta volviendo viral!</p>}
        
    </div>
  );
}

export default BotonLike;