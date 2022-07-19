import React from 'react'
import info from '../images/info.jpg'

const Info = () => {
  return (
    <section id='info'>
        <div className="info__container">
            <div className="info__content">
                <h3>Work With Brocon</h3>
                <p>As a client of Brocon, you'll be given a team of dedicated consultants ready to provide you with innovative solutions and strategies to help tackle any challenge in any industry. </p>
                <blockquote><i>"Working with Brocon to understand market dynamics for our potential therapeutic was a distinct pleasure. They truly went above and beyond, putting in several rounds of effort to generate the best possible prospectus." - Ben Van Handle, Co-Founder and CEO of Carthronix, INC.</i></blockquote>
                <a href="#services" className="btn">Learn More</a>
            </div>
            <div className="info__image">
                <div className="image round fit">
                    <a href="#" className="link"><img src={info} alt="" /></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Info