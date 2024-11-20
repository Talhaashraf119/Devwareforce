import React, { useRef } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const navbarToggler = useRef(null);

    const handleNavClick = () => {
        if (navbarToggler.current && navbarToggler.current.classList.contains('show')) {
            navbarToggler.current.classList.remove('show');
        }
    }
    
  return (
<header className="sticky-top">
    <nav className="navbar navbar-expand-lg">
    <Link to='/' className="navbar-brand px-4">
    <img src="\DevwareForce_digital_Agency__Logo-removebg-preview.png" alt="DevwareForce Logo" className="logo-image"/>
</Link>


        <button className="navbar-toggler me-4" type="button"ref={navbarToggler} data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex align-items-center mt-4">
                <li className="nav-item "onClick={handleNavClick}>
                    <Link to='/services' className="nav-link">What We Do</Link>
                </li>
                <li className="nav-item"onClick={handleNavClick}>
                <Link to='/contact' className="nav-link">Contact Us</Link>
                </li>
            
            </ul>
        </div>
    </nav>
</header>

    
    
  )
}

export default Navbar