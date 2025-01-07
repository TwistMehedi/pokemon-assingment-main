

import React from 'react'

const Pagination = ({pokemonPerPage,totalPokemon,setCurrentPage}) => {

    let pages = [];
    for(let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage);i++){
        pages.push(i)
         
    }

  return (
     <ul className='flex justify-center'>
      {pages.map((page,index)=>{
        return(
            <button className='px-5 my-5' key={index} onClick={()=> setCurrentPage(page)}>{page}</button>
        )
      })}
     </ul>
  )
}

export default Pagination
