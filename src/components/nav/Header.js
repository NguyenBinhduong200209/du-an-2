import React from 'react'
import { json, Link, NavItem, NavLink } from "reactstrap";
import {
    Modal,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
  } from "reactstrap";
  import { FacebookOutlined, PhoneOutlined } from '@ant-design/icons';   
  import Logo from '../Logo/Logo.png';
const Header = () => {
  return (
    <div>
     <header className="header " id="top">
        
        <nav className="navbar">
            <NavLink><img className='imgLogo' src={Logo} alt="Logo" />  </NavLink>
        <div className='webName'>
                AnhDuy bakery
   
        </div>
                 
          <NavLink
            data-aos="zoom-in-left"
            data-aos-delay={300}
            to="/"
            className="title"
          >
            home
          </NavLink>
          <NavLink
            data-aos="zoom-in-left"
            data-aos-delay={600}
            to="/Destination"
            className="title"
          >
            Bread
          </NavLink>
          <NavLink
            data-aos="zoom-in-left"
            data-aos-delay={600}
            to="/Gallery"
            className="title"
          >
            Cake
          </NavLink>
          <NavLink
            data-aos="zoom-in-left"
            data-aos-delay={600}
            to="/Blogs"
            className="title"
          >
            bestseller
          </NavLink>
          <NavLink
            data-aos="zoom-in-left"
            data-aos-delay={600}
            to=""
            className="title"
          >
            <FacebookOutlined  className='headerIcon' />
          </NavLink>
          <NavLink
            data-aos="zoom-in-left"
            data-aos-delay={600}
            to=""
            className="title"
          >
            <PhoneOutlined className='headerIcon'/>
          </NavLink>
          
        </nav>
        </header>   
    </div>      
  )
}

export default Header