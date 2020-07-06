import React from "react"
import Layout from "../components/layout"
import ContactForm from '../components/contact'
import {graphql} from 'gatsby'
const contact = ({data}) => {
  const {title, contactForm} = data.markdownRemark.frontmatter.contactPage
  return (
    <Layout current="Contact">
      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="section-container-spacer text-center">
                <h1 className="h2">{title}</h1>
              </div>
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <ContactForm options={contactForm}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contact
export const pageQuery = graphql`
  query ContactPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        contactPage {
          contactForm {
            telephone
            email
            address
            subtitle
            links{
              facebook
              twitter
              linkedin
            }
          }
          title
        }
      }
    }
  }
`