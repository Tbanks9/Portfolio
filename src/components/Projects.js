import React from 'react'
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import shotSpot from '../assets/Shotspot.png'
import chowVow from '../assets/Chow-vow.png'
import geographyGenius from '../assets/Geography-genius-1.png'
import snake from '../assets/Snake-1.png'

const clamp = (value, clampAt) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
}

const Projects = () => {
  const [style, set] = useSpring(() => ({
    transform: "perspective(600px) rotateY(0deg)"
  }))
  const bind = useScroll(event => {
    set({
      transform: `perspective(600px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
        }deg)`
    })
  })

  return (
    <>
      <section className="projectsSection" id="projects">
        <h2>PROJECTS</h2>
        <div className="projectContainer" {...bind()}>
          <animated.div className="card" style={{ ...style }}>
            <a href="http://shotspot-photography.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <h3>SHOTSPOT - SEI PROJECT 4</h3>
              <img src={shotSpot} alt="Shotspot" />
            </a>
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            <a href="https://chowvow.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <h3>CHOW VOW - SEI PROJECT 3</h3>
              <img src={chowVow} alt="Chow Vow" />
            </a>
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            <a href="https://geography-genius.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <h3>GEOGRAPHY GENIUS - SEI PROJECT 2</h3>
              <img src={geographyGenius} alt="Geography Genius" />
            </a>
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            <a href="https://snake-project.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <h3>SNAKE - SEI PROJECT 1</h3>
              <img src={snake} alt="Snake" />
            </a>
          </animated.div>
        </div>
      </section >
    </>
  )
}

export default Projects