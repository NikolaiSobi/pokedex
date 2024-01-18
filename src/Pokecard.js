import React from 'react'


const Pokecard = ({name, id, type, exp}) => {
    return (
        <div >
            <p> {name} </p>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
            <p> Type: {type} </p>
            <p> EXP: {exp} </p>
            
        </div>
    )
}

export default Pokecard