import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"

class navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
      in: false,
      collapsing: false,
    }
    this.toggleClass = this.toggleClass.bind(this)
  }
  toggleClass() {
    const collapsed = this.state.collapsed
    this.setState({ collapsed: !collapsed, collapsing: collapsed })
    setTimeout(
      () => this.setState({ collapsing: !collapsed, in: collapsed }),
      300
    )
  }
  render() {
    // <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="true">
    // <div class="navbar-collapse collapse in" id="navbar-collapse" aria-expanded="true" style="">

    return (
      <header>
        <nav className="navbar  navbar-fixed-top navbar-default">
          <div className="container">
            <button
              type="button"
              className={classnames("navbar-toggle", {
                collapsed: this.state.collapsed,
                collapsing: this.state.collapsing,
              })}
              onClick={this.toggleClass}
              // data-toggle="collapse"
              // data-target="#navbar-collapse"
              // aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div
              className={classnames("collapse navbar-collapse", {
                in: this.state.in,
              })}
              id="navbar-collapse"
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
