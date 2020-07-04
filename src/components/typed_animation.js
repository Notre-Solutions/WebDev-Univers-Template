import React, { Component } from "react"
import Typed from "typed.js"

class TypedReactDemo extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 75,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    }
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy()
  }

  render() {
    return (
      <div className="wrap">
        {/* <h1>Typed.js</h1> */}
        <div className="type-wrap">
          <h1
            style={{ whiteSpace: "pre" }}
            ref={el => {
              this.el = el
            }}
          />
        </div>
        {/* <button onClick={() => this.typed.toggle()}>Toggle</button>
        <button onClick={() => this.typed.start()}>Start</button>
        <button onClick={() => this.typed.stop()}>Stop</button>
        <button onClick={() => this.typed.reset()}>Reset</button>
        <button onClick={() => this.typed.destroy()}>Destroy</button> */}
      </div>
    )
  }
}

export default TypedReactDemo