import React from 'react';

const Card = ({ name, gender, hair_color, skin_color, height, mass }) => {
    return (
        <div className='bg-yellow dim dib ma2 w-20 pa3'>
            <div className='tl'>
                <h3 className='bb bw2 dark-grey ttu'>{name}</h3>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Hair Color:</strong> {hair_color}</p>
                <p><strong>Skin Color:</strong> {skin_color}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Mass:</strong> {mass}</p>
            </div>
        </div>
    )
}

export default Card;