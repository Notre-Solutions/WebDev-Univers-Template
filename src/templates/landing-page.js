import React from "react"
import Layout from "../components/layout"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Typed from "../components/typed_animation"
import BackgroundImage from "gatsby-background-image"

const Landing = ({ data }) => {
  const { backgroundImage, title } = data.markdownRemark.frontmatter.landingPage
  return (
    <Layout current="landing">
      <BackgroundImage
        className="hero-full-container background-image-container white-text-container"
        fluid={backgroundImage}
      >
        <Typed className=".typed-landing " strings={[title]} />
      </BackgroundImage>
    </Layout>
  )
}

export default Landing

export const pageQuery = graphql`
  query LandingPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        landingPage {
          title
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`
