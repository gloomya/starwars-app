import React from 'react';
import Card from './Card';


const CardList = ({ characters }) => {
    return(
        <div>
        {
            characters.map((character, i) => {
                return (<Card 
                    key={i} 
                    name={characters[i].name} 
                    gender={characters[i].gender} 
                    hair_color={characters[i].hair_color}
                    skin_color={characters[i].skin_color} 
                    height={characters[i].height} 
                    mass={characters[i].mass} 
                />
                );
    })}
    </div>
    );
}
export default CardList;