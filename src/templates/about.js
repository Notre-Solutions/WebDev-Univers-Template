import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AboutSection from "../components/aboutSection"
const about = ({ data }) => {
  const { profil, sections, title } = data.markdownRemark.frontmatter.aboutPage
  console.log(sections)
  return (
    <Layout current="About">
      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="section-container-spacer text-center">
                <h1 className="h2">{title}</h1>
              </div>

              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      {sections.map((section)=>{
                        return(
                          <AboutSection title={section.title} body={section.body}/>
                        )
                      })}
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
          sections{
            title
            body
          }
          title
        }
      }
    }
  }
`
