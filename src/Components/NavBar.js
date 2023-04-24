import React from 'react'
import { Outlet, NavLink,Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate=useNavigate("")
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/login');

  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
    <div className="container-fluid">
      <a className="navbar-brand" >inotebook</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link inactive')} aria-current="page" to="/">Home</NavLink>
                      </li>
          <li className="nav-item">
          <NavLink  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link inactive')} aria-current="page" to="/AboutUs">AboutUs</NavLink>
        </li>
        
        
         
        </ul>
        <form className="d-flex" >
          {!localStorage.getItem('token')?
          <>
           <Link to="/login"> <button type="button" className=" btn btn-primary btn-sm mx-2" >Login</button></Link>
           <Link to="/signup"> <button type="button" className=" btn btn-primary btn-sm mx-1">Signup</button></Link>
           </> :<button type="button" className=" btn btn-primary btn-sm mx-2" onClick={handleLogout} >Logout</button>}
      </form>
      </div>
    </div>
  </nav>
  <Outlet/>
  </>
  )
}
