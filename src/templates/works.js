import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import OverlayCard from "../components/overlapCard"
const works = ({ data }) => {
  const { work1, work2, work3 } = data.markdownRemark.frontmatter.worksPage
  console.log(work1)
  return (
    <Layout current="Works">
      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 section-container-spacer">
              <div className="text-center">
                <h1 className="h2">02 : Works</h1>
                <p>
                  Nulla facilisi. Vivamus vestibulum, elit in scelerisque
                  ultricies, nisl nunc pulvinar ligula, id sodales arcu sapien
                  in nisi. Quisque libero enim, mattis non augue posuere,
                  venenatis dapibus urna.
                </p>
              </div>
            </div>

            <div className="col-md-12">
              <div id="myCarousel" className="carousel slide projects-carousel">
                {/* <!-- Carousel items --> */}
                <div className="carousel-inner">
                  <div className="item active">
                    <div className="row">
                      <div className="col-sm-4">
                        <OverlayCard
                          fluid={work1.childImageSharp.fluid}
                          title="001/006"
                          subtitle="Fringilla sit amet"
                          body="Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies."
                          link={{
                            slug: "work",
                            text: "Discover",
                          }}
                        />
                      </div>
                      <div className="col-sm-4">
                      <OverlayCard
                          fluid={work2.childImageSharp.fluid}
                          title="002/006"
                          subtitle="Nulla scelerisque"
                          body="Proin pharetra metus id iaculis dignissim. In aliquet lorem ut ex ullamcorper."
                          link={{
                            slug: "work",
                            text: "Discover",
                          }}
                        />
                      </div>
                      <div className="col-sm-4">
                      <OverlayCard
                          fluid={work3.childImageSharp.fluid}
                          title="003/006"
                          subtitle="Vivamus vestibulum"
                          body="Fusce sed hendrerit augue, a rhoncus velit. In non lorem mattis, tempor sem sit amet."
                          link={{
                            slug: "work",
                            text: "Discover",
                          }}
                        />
                      </div>
                    </div>
                    {/* <!--/row--> */}
                  </div>

                  {/* <!--/item--> */}
                </div>
                {/* TODO: Add carousel if needed*/}
              </div>

              {/* <!--/myCarousel--> */}
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
        }
      }
    }
  }
`
