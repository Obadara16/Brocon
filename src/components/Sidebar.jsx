import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import '../sidebar.css'
import { useState } from 'react';
import '../styles.css'


const Sidebar = () => {
    const [activeNav, setActiveNav] = useState('#')
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 600) {
          setNavbar(true);
        }else {
          setNavbar(false);
        }
      }
    
      window.addEventListener('scroll', changeBackground);

  return (
    <nav className={navbar ? 'navigation active' : 'navigation'}>
        <div className="navbar-container">
            <a href="index.html" className='brand__name'>Brocon</a>
            <Menu right>
            <ul>
                <li><a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a></li>
                <li><a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a></li>
                <li><a href="#info" onClick={() => setActiveNav('#info')} className={activeNav === '#info' ? 'active' : ''}>Info</a></li>
                <li><a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>Services</a></li>
            </ul>
            </Menu>
        </div>
    </nav>
  )
}

export default Sidebar