import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { useState,useContext } from 'react';

  import { FacebookOutlined, PhoneOutlined ,ShoppingCartOutlined,LoginOutlined,UserOutlined} from '@ant-design/icons';   
  import Logo from '../Logo/Logo.png';
const Header = () => {
 

  return (
    <div>
     <header className="header " id="top">
        
        <nav className="navbar">
            <NavLink><img className='imgLogoHeader' src={Logo} alt="Logo" />  </NavLink>
        <div className='webName'>
                AnhDuy bakery
   
        </div>
                 
          <NavLink
            data-aos="zoom-in-left"
            data-aos-delay={300}
            to="/home"
            className="link"
          >
            home
          </NavLink>
          <NavLink
            data-aos="zoom-in-left"
            data-aos-delay={600}
            to="/Bread"
            className="link"
          >
            Bread
          </NavLink>
          <NavLink
            data-aos="zoom-in-left"
            data-aos-delay={600}
            to="/Cake"
            className="link"
          >
            Cake
          </NavLink>
          <NavLink
            data-aos="zoom-in-left"
            data-aos-delay={600}
            to="/Bestseller"
            className="link"
          >
            bestseller
          </NavLink>
          <NavLink
            data-aos="zoom-in-left"
            data-aos-delay={600}
            to="/"
            className="link"
          >
            <FacebookOutlined  className='headerIcon' />
          </NavLink>
          <NavLink
            data-aos="zoom-in-left"
            data-aos-delay={600}
            to=""
            className="link"
          >
            <PhoneOutlined className='headerIcon'/>
          </NavLink>
          <NavLink
            data-aos="zoom-in-left"
            data-aos-delay={600}
            to=""
            className="link"
          >
            <ShoppingCartOutlined className='headerIcon'/>
          </NavLink>
          <NavLink
            data-aos="zoom-in-left"
            data-aos-delay={600}
            to="/login"
            className="link"
          >
            <UserOutlined className='headerIcon' />
            
          </NavLink>
          
        </nav>
      </header> 
      <header className='header-bot-strip ' id=''>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text'>Free delivery within 5 km </p>
            </div>
            <div className='col-6'>
              <p className='text-end'>
                Hotline : +84 961 679 548
              </p>
            </div>
          </div>

        </div>

        </header>  
    </div>      
  )
}

export default Header