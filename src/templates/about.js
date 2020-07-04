import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AboutSection from "../components/aboutSection"
const about = ({ data }) => {
  const { profil } = data.markdownRemark.frontmatter.aboutPage

  return (
    <Layout current="About">
      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="section-container-spacer text-center">
                <h1 className="h2">01 : About me</h1>
              </div>

              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <AboutSection
                        title="Consectetur adipiscing"
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus at sem quis varius. Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per
                        inceptos himenaeos. Cras ultrices hendrerit nisl."
                      />
                      <AboutSection
                        title="Ut enim ad minim"
                        body="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      />
                      <AboutSection
                        title="Maecenas luctus at sem quis varius"
                        body="Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Phasellus
                        iaculis magna sagittis elit sagittis, at hendrerit lorem
                        venenatis. Morbi accumsan iaculis blandit. Cras ultrices
                        hendrerit nisl."
                      />
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <Img
                        className="img-responsive"
                        alt=""
                        fluid={profil.childImageSharp.fluid}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default about
export const pageQuery = graphql`
  query AboutPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        aboutPage {
          profil {
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
