import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
const overlapCard = ({ fluid, title, subtitle, body, link }) => {
  return (
    <div>
      <Link to="/work" title="" className="black-image-project-hover">
        <Img fluid={fluid} alt="" className="img-responsive" />
      </Link>
      <div className="card-container card-container-lg">
        <h4>{title}</h4>
        <h3>{subtitle}</h3>
        <p>{body}</p>
        <Link to={`/${link["slug"]}`} className="btn btn-default">
          {link["text"]}
        </Link>
      </div>
    </div>
  )
}

export default overlapCard
