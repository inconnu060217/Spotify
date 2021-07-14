import React from 'react';
import '../styles/Titre.css';

function Titre({title}) {
    return (
        <div className='title-content'>
            <h3 className='title-name'>{title}</h3>
        </div>
    )
}

export default Titre;
