import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <div>
    <footer className="footer">
   <div className="footer-content">
     <div className="logo-and-description">
     <h1>Devware Force</h1>
       <p className="footer-description">
         At Devware Force, our vision is to provide digital services to assist businesses propagate in a digital environment and grab a lot of success. Our goal is to help businesses succeed in this digital era as a leading provider of digital services. We can meet all your needs in a precise and creative manner because we possess a wide range of expertise in the digital landscape.
       </p>
       <div className="social-icons">
         <a href="#" className="social-icon"><i className="fab fa-facebook-f" /></a>
         <a href="https://www.instagram.com/devwareforce/" className="social-icon"><i className="fab fa-instagram" /></a>
       </div>
     </div>
     <div className="footer-details">
       <div className="contact-details">
         <h3>CONTACT DETAILS</h3>
         <p><i className="fa fa-envelope" style={{ color: 'white', textDecoration: 'none' }} /> devwareforce@gmail.com</p>
         <p><i className="fa fa-phone"style={{ color: 'white', textDecoration: 'none' }} /><a style={{ color: 'white', textDecoration: 'none' }} href="https://wa.me/+923004612583">
        +92 300 4612583
</a></p>
         
       </div>
       <div className="our-services">
         <h3>OUR SERVICES</h3>
         <ul>
         <ul>
  <li>
    <Link style={{ color: 'white', textDecoration: 'none' }} to="/services" >Website Development</Link>
  </li>
  <li>
    <Link style={{ color: 'white', textDecoration: 'none' }} to="/services" >App Development</Link>
  </li>
  <li>
    <Link style={{ color: 'white', textDecoration: 'none' }} to="/services" >Software Development</Link>
  </li>
  <li>
    <Link  style={{ color: 'white', textDecoration: 'none' }}to="/services" >Digital Marketing</Link>
  </li>
  <li>
    <Link style={{ color: 'white', textDecoration: 'none' }}to="/services" >Designing Services</Link>
  </li>
  <li>
    <Link style={{ color: 'white', textDecoration: 'none' }} to="/services">SEO Services</Link>
  </li>
  <li>
    <Link style={{ color: 'white', textDecoration: 'none' }} to="/services" >Content Writing</Link>
  </li>
</ul>

         </ul>
       </div>
       
     </div>
   </div>
   <div className="footer-bottom">
     <p>Copyrights 2024 Devware Force - All rights reserved.</p>
     
   </div>
 </footer></div>
  )
}

export default Footer