import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"

class navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      active: false,
    }
    this.toggleClass = this.toggleClass.bind(this)
  }
  toggleClass() {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }
  render() {
    return (
      <header>
        <nav className="navbar  navbar-fixed-top navbar-default">
          <div className="container">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-collapse"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav ">
                <li>
                  <Link to="/">
                    01 : Home
                  </Link>
                </li>
                <li>
                  <Link to="/works" >
                    02 : Works
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    03 : About me
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    04 : Contact
                  </Link>
                </li>
                <li>
                  <Link to="/components">
                    05 : Components
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default navbar
