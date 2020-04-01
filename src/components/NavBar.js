import React from 'react'
import { Link } from 'react-scroll'

class NavBar extends React.Component {

  render() {
    return (
      <>
        <section className="navSection">
          <nav className="navbarContainer">
            <Link
              to="home"
              spy={true}
              smooth={true}
              delay={200}
              duration={1000}
              className="navLink"
              activeClass="activeClass"
            >
              HOME
            </Link>
            <div className="navEnd">
              <Link
                to="about"
                spy={true}
                smooth={true}
                delay={200}
                duration={1000}
                className="navLink"
                activeClass="activeClass"
              >
                ABOUT
            </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                delay={200}
                duration={1000}
                className="navLink"
                activeClass="activeClass"
              >
                PROJECTS
            </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                delay={200}
                duration={1000}
                className="navLink"
                activeClass="activeClass"
              >
                CONTACT
            </Link>
            </div>
          </nav>
        </section>
      </>
    )
  }
}

export default NavBar