import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const work = ({ data }) => {
  const {
    title, subtitle, quote, backgroundImage, work1, work2, work3Img
  } = data.markdownRemark.frontmatter.workPage
  return (
    <Layout current="Work">
      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Img fluid={backgroundImage.childImageSharp.fluid} className="img-responsive" alt="" />
              <div className="card-container">
                <div className="text-center">
                  <h1 className="h2">{title}</h1>
                </div>
                <p>
                  {subtitle}
                </p>

                <blockquote>
                  <p>
                    "{quote.body}"
                  </p>
                  <small className="pull-right">{quote.author}</small>
                </blockquote>
              </div>
            </div>

            <div className="col-md-8 col-md-offset-2 section-container-spacer">
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <Img fluid={work1.img.childImageSharp.fluid} className="img-responsive" alt="" />
                  <p>{work1.text}</p>
                </div>
                <div className="col-xs-12 col-md-6">
                  <Img fluid={work2.img.childImageSharp.fluid} className="img-responsive" alt="" />
                  <p>{work2.text}</p>
                </div>
              </div>
            </div>

            <div className="col-xs-12">
              <Img fluid={work3Img.childImageSharp.fluid} className="img-responsive" alt="" />
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
          title
          subtitle
          quote{
            body
            author
          }
          backgroundImage  {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          work1 {
            text
            img{
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }}
          }
          work2 {
            text
            img{
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }}
          }
          work3Img {
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
