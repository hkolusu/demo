import React from 'react'
import {NavLink, Outlet} from "react-router-dom"

function Dashboard() {
  return (
    <div className='dashboard'>
        <nav>
            <NavLink to="/">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}

export default Dashboard