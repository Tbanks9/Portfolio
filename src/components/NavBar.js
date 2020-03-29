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

// return (
//   <>
//     <section className="navSection">
//       <Navbar fixed="top" variant="dark" className="navbarContainer">
//         <Navbar.Brand href="#home">HOME</Navbar.Brand>
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">
//           <Nav className="justify-content-end">
//             <Nav.Link
//               href="#about"
//               to="#about"
//               spy={true}
//               smooth={true}
//               duration={500}>
//               ABOUT
//             </Nav.Link>
//             <Nav.Link href="#projects">PROJECTS</Nav.Link>
//             <Nav.Link href="#contact">CONTACT</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </section>
//   </>
// )