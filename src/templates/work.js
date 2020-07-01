import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const work = ({ data }) => {
  const {
    work1,
    work2,
    work3,
    work4,
  } = data.markdownRemark.frontmatter.workPage
  return (
    <Layout current="Work">
      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Img fluid={work1} className="img-responsive" alt="" />
              <div className="card-container">
                <div className="text-center">
                  <h1 className="h2">001 : Fringilla sit amet</h1>
                </div>
                <p>
                  Nulla facilisi. Vivamus vestibulum, elit in scelerisque
                  ultricies, nisl nunc pulvinar ligula, id sodales arcu sapien
                  in nisi. Quisque libero enim, mattis non augue posuere,
                  venenatis dapibus urna.
                </p>

                <blockquote>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante."
                  </p>
                  <small className="pull-right">Irina Martin</small>
                </blockquote>
              </div>
            </div>

            <div className="col-md-8 col-md-offset-2 section-container-spacer">
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <Img fluid={work2} className="img-responsive" alt="" />
                  <p>Menphis skyline</p>
                </div>
                <div className="col-xs-12 col-md-6">
                  <Img fluid={work3} className="img-responsive" alt="" />
                  <p>Menphis skyline</p>
                </div>
              </div>
            </div>

            <div className="col-xs-12">
              <Img fluid={work4} className="img-responsive" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default work

export const pageQuery = graphql`
  query WorkPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        workPage {
          work1 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          work2 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          work3 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          work4 {
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
