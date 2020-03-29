import React from 'react'
import { IoIosArrowDown } from "react-icons/io"
import ReactTypingEffect from "react-typing-effect"

class Home extends React.Component {

  handleClick = () => {
    this.nextComponent.scrollIntoView({ behavior: "smooth" })
  }

  render() {
    return (
      <>
        <section className="homeSection" id="home">
          <div className="homeTitle">
            <h3>TIM BANKS</h3>
            <ReactTypingEffect
              text="SOFTWARE ENGINEER."
              className="typingEffect"
              speed="100"
              eraseDelay="200000"
              typingDelay="1500"
            />
            <IoIosArrowDown onClick={this.handleClick} className="nextSection" />
          </div>
        </section>
        <div ref={(ref) => this.nextComponent = ref}></div>
      </>
    )
  }
}


export default Home