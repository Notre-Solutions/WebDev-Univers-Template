import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import MasonryComp from "../components/masonry"
import Img from "gatsby-image"

const Landing = ({ data }) => {
  const { space } = data.markdownRemark.frontmatter.landingPage
  return (
    <Layout current="landing">
      <Img
        className="hero-full-container background-image-container white-text-container"
        fluid={space}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="hero-full-wrapper">
                <div className="text-content">
                  <h1>
                    Hello,
                    <br />
                    <span id="typed-strings">
                      <span>I'm James Dean</span>
                      <span>French Designer</span>
                      <span>Working as a Freelance</span>
                    </span>
                    <span id="typed"></span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Img>
    </Layout>
  )
}

export default Landing

export const pageQuery = graphql`
  query LandingPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        landingPage {
          space {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
