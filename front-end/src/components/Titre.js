import React from 'react';
import '../styles/Titre.css';

function Titre({title}) {
    return (
        <div className='title-title-content'>
            <p className='title-name'>{title}</p>
        </div>
    )
}

export default Titre
