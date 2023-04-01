import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Footer.css'
import Logo from '../Logo/Logo.png';
const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="box-container">
          <div className="box" data-aos="fade-up" data-aos-delay={150}>
          <NavLink><img className='imgLogoFooter' src={Logo} alt="Logo" />  </NavLink>
                  <div className='webName'>
                       AnhDuy bakery
   
                   </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, ad?
            </p>
            
          </div>
          <div className="box"  data-aos-delay={300}>
            <h3>quick links</h3>
           

            <NavLink to = '/' className="links">
              {" "}
              <i className="fas fa-arrow-right" />
            Home{" "}
            </NavLink>

       

            <NavLink to = '/Bread' className="links">
              {" "}
              <i className="fas fa-arrow-right" />
              Bread{" "}
            </NavLink>
            <NavLink to = '/Cake' className="links">
              {" "}
              <i className="fas fa-arrow-right" />
              Cake{" "}
            </NavLink>
            <NavLink to = '/Bestseller' className="links">
              {" "}
              <i className="fas fa-arrow-right" />
              Bestseller{" "}
            </NavLink>

          </div>
          <div className="box" data-aos="fade-up" data-aos-delay={450}>
            <h3>contact info</h3>
            <p>
              {" "}
              <i className="fas fa-map" /> HaNoi, VietNam{" "}
            </p>
            <p>
              {" "}
              <i className="fas fa-phone" /> +84 528 512 254  {" "}
            </p>
            <p>
              {" "}
              <i className="fas fa-envelope" /> nguyenbinhduong200209@gmail.com {" "}
            </p>
            <p>
              {" "}
              <i className="fas fa-clock" /> 7:00am - 10:00pm{" "}
            </p>
          </div>

        </div>
      </section>
      <div className="credit">
         <span> Solo Khong kho  </span>
      </div>
    </div>
  )
   
  
}

export default Footer