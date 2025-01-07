import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import NavBar from './common/NavBar'
import PokeMonDetails from './pages/PokeMonDetails'

const App = () => {
  return (
     <>
     <NavBar />
      <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='favourite' element={<Favourite />}/>
      <Route exact path='pokemon/:name' element={<PokeMonDetails />}/>
     </Routes>
     </>
  )
}

export default App
