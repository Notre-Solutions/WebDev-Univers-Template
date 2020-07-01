import React from "react"
import Img from "gatsby-image"

const imgCard = ({ img, title, description, pageName }) => {
  return (
    <div className="grid-item">
      <Img
        className="img-responsive"
        alt=""
        fluid={img.childImageSharp.fluid}
      />
      <a href={`./${pageName}`} className="project-description">
        <div className="project-text-holder">
          <div className="project-text-inner">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default imgCard
