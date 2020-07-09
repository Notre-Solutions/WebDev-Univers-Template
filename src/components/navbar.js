import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"

class navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
      in: false,
      collapse: 'collapse',
      aria: false,
      height: {height: '1px'}
    }
    this.toggleClass = this.toggleClass.bind(this)
  }
  toggleClass() {
    const collapsed = this.state.collapsed
    this.setState({ collapsed: !collapsed, collapse: 'collapsing', aria: collapsed?false:true, height: collapsed?{height: '238px'}:{height:'1px'},in: false})
    setTimeout(
      () => this.setState({ collapse: 'collapse', in: collapsed,}), //
      300
    )
  }
  render() {
   

    return (
      <header>
        <nav className="navbar  navbar-fixed-top navbar-default">
          <div className="container">
            <button
              type="button"
              className={classnames("navbar-toggle", {
                collapsed: this.state.collapsed,
              })}
              onClick={this.toggleClass}
              data-toggle="collapse"
              data-target="#navbar-collapse"
              aria-expanded={this.state.aria}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div
              className={classnames(`navbar-collapse ${this.state.collapse}`, {
                in: this.state.in,
              })}
              id="navbar-collapse" aria-expanded={this.state.aria} style={this.state.height}
            >
              <ul className="nav navbar-nav ">
                <li>
                  <Link to="/">01 : Home</Link>
                </li>
                <li>
                  <Link to="/works">02 : Works</Link>
                </li>
                <li>
                  <Link to="/about">03 : About me</Link>
                </li>
                <li>
                  <Link to="/contact">04 : Contact</Link>
                </li>
                <li>
                  <Link to="/components">05 : Components</Link>
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
