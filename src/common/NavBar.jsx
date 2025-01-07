import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <div className="min-w-screen navbar bg-base-100 md:w-[1200px]">
  <div className="flex-1">
      <Link className="btn btn-ghost text-xl" to={"/"}>Pokemon App</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 space-x-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/favourite"}>Favourite</Link>
    </ul>
  </div>
</div>
  )
}

export default NavBar
