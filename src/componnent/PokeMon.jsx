import React from 'react'
import { useNavigate } from 'react-router';

const PokeMon = ({pokemon}) => {
  
    const {name,image} = pokemon;
    const navigate = useNavigate();
  return (
    <div className='place-items-center'>
     <h1 className='rext-lg'>Name: {name}</h1>
     <img src={image} alt={pokemon.image} />
     <button onClick={()=>navigate(`/pokemon/${name}`)} className="btn btn-primary">View Details</button>
    </div>
  )
}
export default PokeMon
