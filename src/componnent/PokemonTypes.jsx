import axios from 'axios';
import React, {useEffect, useState } from 'react'

const PokemonTypes = () => {
const [typesT, setTypes] = useState([]);
const [selectType, setSelectTypes] = useState("");
// const [abilitiType, setAbilitiType] = useState([]);
// console.log(abilitiType);

const fetchPokemonTypes = async() =>{
  const getTypes = await axios.get("https://pokeapi.co/api/v2/type");
   const results = getTypes.data.results;
   setTypes(results);
    
};

// const featchAbility = async() =>{
//   const  getAbility = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
//    const results = getAbility.data;
//     setAbilitiType(results);
//     // console.log(results);
    
// };


useEffect(()=>{
fetchPokemonTypes();
 
},[]);

const handleType = (e) =>{
  const type = e.target.value;
  setSelectTypes(type)
};

  return (
    <div>
       <select value={selectType} onChange={handleType}>
        <option value="">All types</option>
         {typesT.map(type=>{
            return(
                 <>
                 {type.name ==="fire"?<option  >{type.name}</option>:""}
                 {type.name ==="water"?<option >{type.name}</option>:""}
                 {type.name ==="grass"?<option  >{type.name}</option>:""}
                 {/* {type.name ==="ss"?<option>{type.name}</option>:""} */}
                 </>
            )
         })}
       </select>
    </div>
  )
}

export default PokemonTypes
