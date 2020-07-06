import React from "react"
import "@fortawesome/fontawesome-free/css/all.css"
import "../css/main.min.css"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import Navbar from "./navbar"
import Footer from './footer'

const Layout = ({ children, current }) => {
  return (
    <main className={`content-wrapper ${current}`}>
      <Helmet></Helmet>
      <Navbar/>
      {children}
      {
        ()=>{
          if(current!=='landing'){
            return(<Footer/>)
          }
        }
      }
      
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
