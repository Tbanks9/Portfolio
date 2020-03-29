import React from 'react'
import { AnimatedOnScroll } from "react-animated-css-onscroll"
import Skills from './Skills'

class About extends React.Component {

  render() {
    return (
      <>
        <section className="aboutSection" id="about">
          <h2>ABOUT</h2>
          <div className="columnWrapper">
            <AnimatedOnScroll animationIn="fadeInDownBig" animationInDuration={1200}>
              <div className='aboutColumns'>
                <div className="aboutColumnText">
                  <p>I developed an interest in programming after spending time working alongside software engineers in my last role. I began learning front-end languages in my spare time, and my programming journey truly kicked-off when I enrolled in an immersive course at General Assembly, learning a variety of new programming languages and frameworks.</p>
                  <p>I’m continuing to learn every day, and love getting stuck into daily challenges. I'm excited to bring this passion to a junior full-stack position, where I can continue improving and apply my skills as a programmer.</p>
                </div>
                <Skills />
              </div>
            </AnimatedOnScroll>
          </div>
        </section >
      </>
    )
  }
}

export default About