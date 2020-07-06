import React from "react"

const contact = ({options}) => {
  console.log(options)
  return (
    <form action="" className="reveal-content">
      <div className="row">
        <div className="col-md-7">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Subject"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              rows={5}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-default btn-lg">
            Send
          </button>
        </div>
        <div className="col-md-5 address-container">
          <ul className="list-unstyled">
            <li>
              <span className="fa-icon">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </span>
              {options.telephone}
            </li>
            <li>
              <span className="fa-icon">
                <i className="fa fa-at" aria-hidden="true"></i>
              </span>
              {options.email}
            </li>
            <li>
              <span className="fa-icon">
                <i className="fa fa fa-map-marker" aria-hidden="true"></i>
              </span>
              {options.address}
            </li>
          </ul>
          <h3>{options.subtitle}</h3>
          <a href={`${options.links.facebook}`} title="" className="fa-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href={`${options.links.twitter}`} title="" className="fa-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href={`${options.links.linkedin}`} title="" className="fa-icon">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </form>
  )
}

export default contact
