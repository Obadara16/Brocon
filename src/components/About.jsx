import React from 'react'
import about from '../images/about.jpg'

const About = () => {
  return (
    <section id='about'>
        <div className="about__container">
            <div className="about__image">
                <div className="image__container">
                    <a href="about.html" className="link"><img src={about} alt="about image" /></a>
                </div>
            </div>
            <div className="about__content">
                <h3>About Us</h3>
                <p>Brocon is an organization of undergraduate student consultants working to provide quality, pro-bono advisory services for our clients. We work with startup and growing companies from a variety of industries, ranging from technology to healthcare to fashion, providing innovative and effective solutions.</p>
                <a href="#info" className="btn">Learn More</a>
            </div>
		</div>
	</section>
  )
}

export default About