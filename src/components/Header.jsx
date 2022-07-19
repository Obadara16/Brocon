import React from 'react'
import '../styles.css'
import '../index.css'

const Header = () => {
  return (
    <section id="header">
        <div className="header__overlay">
            <div className='header__text'>
                <h1> BROCON</h1>
                <p> AFRICA'S PREMIER CONSULTANCY <br/> FOR STARTUPS </p>
            </div>
            <a href="#about" className="btn">Learn More</a>
        </div>
	</section>
  )
}

export default Header