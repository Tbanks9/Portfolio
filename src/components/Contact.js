import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

const Contact = () => (
  <>
    <section className="contactSection" id="contact">
      <h2>CONTACT</h2>
      <div className="contactContainer">
        <div className="contactList">
          <div className="contactText">
            <FaEnvelope className="contactIcon" />
            <a href="mailto: timbanks099@gmail.com" target="_blank" rel="noopener noreferrer">timbanks099@gmail.com</a>
          </div>
          <div className="contactText">
            <FaGithub className="contactIcon" />
            <a href="https://github.com/Tbanks9" target="_blank" rel="noopener noreferrer">github.com/Tbanks9</a>
          </div>
          <div className="contactText">
            <FaLinkedin className="contactIcon" />
            <a href="https://linkedin.com/in/tim-banks/" target="_blank" rel="noopener noreferrer">linkedin.com/in/tim-banks</a>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Contact