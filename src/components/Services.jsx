import React from 'react'
import service1 from '../images/service1.jpg'
import service2 from '../images/service2.jpg'
import service3 from '../images/service3.jpg'


const Services = () => {
  return (
    <section id='services'>
        <p></p>
        <div className="services__container">
            <header className="service__header">
                <h2>Become a Part of the Team</h2>
                <p>Interested in consulting, business, or working with start-ups? Apply to join our team in our next recruitment cycle!</p>
                
            </header>
            <p>Brocon members come from a variety of backgrounds, with representation from diverse majors and  <br/> several states and countries.</p>
            <p>We are team players, critical thinkers, and dedicated consultants. And we are a community that strives to uplift one <br/> another in our personal and professional pursuits.</p>
            <div className="services__elements">
                <div className="services__element">
                    <div className="services__image">
                        <img src={service1} alt="service-image-1" />
                    </div>
                </div>
                <div className="services__element">
                    <div className="services__image">
                        <img src={service2} alt="service-image-2" />
                    </div>
                </div>
                <div className="services__element">
                    <div className="services__image">
                        <img src={service3} alt="service-image-3" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services