import Masonry from "react-masonry-css"
import React from "react"
import { Component } from "react"
import ImgCard from "./imgCard"

class MY extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: null,
    }
  }

  render() {
    const breakpointColumnsObj = {
      default: 3,
      3000: 3,
      1000: 2,
      600: 1,
    }
    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {this.props.imgs.map(img => {
          return (
            <ImgCard
              img={img}
              title="Vivamus vestibulum"
              description="My Description"
              pageName="project"
            ></ImgCard>
          )
        })}
      </Masonry>
    )
  }
}

export default MY
