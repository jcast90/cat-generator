import React from 'react'
import styled from 'styled-components'

const CategoryHeader = styled.h2`
  padding: .5em 0;
  display: flex;
  justify-content: space-between;
`;

const ImageWrapper = styled.figure`
  @media screen and (min-width: 415px){
    max-height: 200px;
  }
`
const Image = styled.img`
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
`

export class CatList extends React.Component {

  renderImages = () => {
    let category = this.props.catList[this.props.selected];

    // checks if there is a category selected in the parent
    if (category) {
      // Map through our list of images and output them
      return category.url.map((url, index) => {
        return (
          <ImageWrapper key={index} className="col-xs-12 col-sm-6">
            <Image key={index} className="img-thumbnail" width="200px" height="200px" src={url} alt="this is a cat" />
          </ImageWrapper>
        )
      });
    }
  }

  render() {
    return (
      <div className="row">
        {this.props.selected ? (
          <div className="col-md-12">
            <CategoryHeader>
              <span>{this.props.selected}</span>
              <span>{this.props.catList[this.props.selected].count}</span>
            </CategoryHeader>
            <div className="row">
              {this.renderImages()}
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}