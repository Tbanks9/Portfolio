import React from 'react'
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import { DiHeroku } from "react-icons/di"
import { FaGithub, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'

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
        <h2> PROJECTS </h2>
        <div className="sliderContainer">
          <FaAngleDoubleLeft className="faa-passing" />
          <h3> SWIPE </h3>
          <FaAngleDoubleRight className="faa-passing-reverse" />
        </div>
        <div className="projectContainer" {...bind()}>
          <animated.div className="card" style={{ ...style }}>
            <h3>SHOTSPOT - SEI PROJECT 4</h3>
            <img src={shotSpot} alt="Shotspot" />
            <div className="projectLinks">
              <div className="gitHubLink">
                <a href="https://github.com/Tbanks9/Shotspot" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="projectIcon" />
                  <p>GITHUB</p>
                </a>
              </div>
              <div className="herokuLink">
                <a href="https://shotspot-photography.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <DiHeroku className="projectIcon" />
                  <p>HEROKU</p>
                </a>
              </div>
            </div>
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            <h3>CHOW VOW - SEI PROJECT 3</h3>
            <img src={chowVow} alt="Chow Vow" />
            <div className="projectLinks">
              <div className="gitHubLink">
                <a href="https://github.com/Tbanks9/Chow-Vow" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="projectIcon" />
                  <p>GITHUB</p>
                </a>
              </div>
              <div className="herokuLink">
                <a href="https://chowvow.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <DiHeroku className="projectIcon" />
                  <p>HEROKU</p>
                </a>
              </div>
            </div>
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            <h3>GEOGRAPHY GENIUS - SEI PROJECT 2</h3>
            <img src={geographyGenius} alt="Geography Genius" />
            <div className="projectLinks">
              <div className="gitHubLink">
                <a href="https://github.com/Tbanks9/Geography-genius" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="projectIcon" />
                  <p>GITHUB</p>
                </a>
              </div>
              <div className="herokuLink">
                <a href="https://geography-genius.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <DiHeroku className="projectIcon" />
                  <p>HEROKU</p>
                </a>
              </div>
            </div>
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            <h3>SNAKE - SEI PROJECT 1</h3>
            <img src={snake} alt="Snake" />
            <div className="projectLinks">
              <div className="gitHubLink">
                <a href="https://github.com/Tbanks9/Snake" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="projectIcon" />
                  <p>GITHUB</p>
                </a>
              </div>
              <div className="herokuLink">
                <a href="https://snake-project.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <DiHeroku className="projectIcon" />
                  <p>HEROKU</p>
                </a>
              </div>
            </div>
          </animated.div>
        </div>
      </section >
    </>
  )
}

export default Projects