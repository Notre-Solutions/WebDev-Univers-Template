import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
const works = ({ data }) => {
  const { work1, work2, work3 } = data.markdownRemark.frontmatter.worksPage
  console.log(work1)
  return (
    <Layout current='Works'>
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
                        <Link
                          to="/work"
                          title=""
                          className="black-image-project-hover"
                        >
                          <Img
                            fluid={work1.childImageSharp.fluid}
                            alt=""
                            className="img-responsive"
                          />
                        </Link>
                        <div className="card-container card-container-lg">
                          <h4>001/006</h4>
                          <h3>Fringilla sit amet</h3>
                          <p>
                            Nulla facilisi. Vivamus vestibulum, elit in
                            scelerisque ultricies.
                          </p>
                          <a href="/work" title="" className="btn btn-default">
                            Discover
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <Link
                          to="/work"
                          title=""
                          className="black-image-project-hover"
                        >
                          <Img
                            fluid={work2.childImageSharp.fluid}
                            alt=""
                            className="img-responsive"
                          />
                        </Link>
                        <div className="card-container card-container-lg">
                          <h4>002/006</h4>
                          <h3>Nulla scelerisque</h3>
                          <p>
                            Proin pharetra metus id iaculis dignissim. In
                            aliquet lorem ut ex ullamcorper.
                          </p>
                          <Link to="/work" title="" className="btn btn-default">
                            Discover
                          </Link>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <Link
                          to="/work"
                          title=""
                          className="black-image-project-hover"
                        >
                          <Img
                            fluid={work3.childImageSharp.fluid}
                            alt=""
                            className="img-responsive"
                          />
                        </Link>
                        <div className="card-container card-container-lg">
                          <h4>003/006</h4>
                          <h3>Vivamus vestibulum</h3>
                          <p>
                            Fusce sed hendrerit augue, a rhoncus velit. In non
                            lorem mattis, tempor sem sit amet.
                          </p>
                          <Link to="/work" title="" className="btn btn-default">
                            Discover
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* <!--/row--> */}
                  </div>
                  {/* <!--/item--> */}
                  <div className="item">
                    <div className="row">
                      <div className="col-sm-4">
                        <Link to="/work" className="black-image-project-hover">
                          <Img
                            fluid={work2.childImageSharp.fluid}
                            alt="Image"
                            className="img-responsive"
                          />
                        </Link>
                        <div className="card-container">
                          <h4>004/006</h4>
                          <h3>Nulla scelerisque</h3>
                          <p>
                            Proin pharetra metus id iaculis dignissim. In
                            aliquet lorem ut ex ullamcorper.
                          </p>
                          <Link to="/work" className="btn btn-default">
                            Discover
                          </Link>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <Link to="/work" className="black-image-project-hover">
                          <Img
                            fluid={work1.childImageSharp.fluid}
                            alt="Image"
                            className="img-responsive"
                          />
                        </Link>
                        <div className="card-container">
                          <h4>005/006</h4>
                          <h3>Fringilla sit amet</h3>
                          <p>
                            Nulla facilisi. Vivamus vestibulum, elit in
                            scelerisque ultricies.
                          </p>
                          <Link to="/work" className="btn btn-default">
                            Discover
                          </Link>
                        </div>
                      </div>

                      <div className="col-sm-4">
                        <Link to="/work" className="black-image-project-hover">
                          <Img
                            fluid={work3.childImageSharp.fluid}
                            alt="Image"
                            className="img-responsive"
                          />
                        </Link>
                        <div className="card-container">
                          <h4>006/006</h4>
                          <h3>Vivamus vestibulum</h3>
                          <p>
                            Fusce sed hendrerit augue, a rhoncus velit. In non
                            lorem mattis, tempor sem sit amet.
                          </p>
                          <Link to="/work" className="btn btn-default">
                            Discover
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* <!--/row--> */}
                  </div>

                  {/* <!--/item--> */}
                </div>
                {/* <!--/carousel-inner-->  */}
                <Link
                  className="left carousel-control"
                  to="#myCarousel"
                  data-slide="prev"
                >
                  ‹
                </Link>

                <Link
                  className="right carousel-control"
                  to="#myCarousel"
                  data-slide="next"
                >
                  ›
                </Link>
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
