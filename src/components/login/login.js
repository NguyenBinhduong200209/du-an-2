import React from 'react'
import "./login.css"
import { NavLink } from 'react-router-dom'
const login = () => {
  return (
    <div>
         <form className='form container'>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    <div className='btn1'>
                    <button className='btnLogin'>
                        <NavLink to='' className='link1'>Login</NavLink>
                    </button>
                    <button className='btnLogin'>
                        <NavLink to='/signup' className='link1'>Signup</NavLink>
                    </button>
                    </div>
                    
               
                </div>
                
               
      </form>
    </div>
  )
}

export default login