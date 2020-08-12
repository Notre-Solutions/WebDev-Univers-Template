import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import OverlayCard from "../components/overlapCard"
const works = ({ data }) => {
  const { cards, title, subtitle } = data.markdownRemark.frontmatter.worksPage
  console.log(cards)
  return (
    <Layout current="Works">
      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 section-container-spacer">
              <div className="text-center">
                <h1 className="h2">{title}</h1>
                <p>{subtitle}</p>
              </div>
            </div>

            <div className="col-md-12">
              <div id="myCarousel" className="carousel slide projects-carousel">
                {/* TODO: Add carousel if needed*/}
                <div className="carousel-inner">
                  <div className="item active">
                    <div className="row">
                      {cards.map(item => {
                        const { card } = item
                        return (
                          <div className="col-sm-4">
                            <OverlayCard
                              fluid={card.img.childImageSharp.fluid}
                              title={card.title}
                              subtitle={card.subtitle}
                              body={card.body}
                              link={{
                                slug: card.link.slug,
                                text: card.link.text,
                              }}
                            />
                          </div>
                        )
                      })}
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

export default works

export const pageQuery = graphql`
  query WorksPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        worksPage {
          title
          subtitle
          cards {
            card {
              title
              subtitle
              body
              link {
                slug
                text
              }
              img {
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
    }
  }
`
