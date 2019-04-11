import React from 'react'

export class CatList extends React.Component {
  state = {
    catList: [],
    selected: ''
  }

  componentDidMount() {
    this.setState({ catList: this.props.catList, selected: this.props.selectedCategory });
  }

  componentDidUpdate(previousProps, previousState) {
    console.log(this.props)
    if (previousProps.catList !== this.props.catList) {
      this.setState({ 
        catList: this.props.catList,
        selected: this.props.selectedCategory
      });
    }
  }

  renderCatCategory = () => {
    const selected = this.props.selectedCategory[0];
    const num = this.props.selectedCategory[1]
    
    const images = this.state.catList.filter(cat => {
      return cat.catCategory === selected
    }).map((cat,index) => {
      return(
        <figure key={index} className="col-sm-12 col-md-6">
          <img key={index} className="img-thumbnail" width="200px" height="200px" src={cat.catUrl} alt="this is a cat"/>
        </figure>
        )
    })
    
    return (
      <div className="col-md-12">
        <h2>{selected} : {num}</h2>
        <div className="row">
          {images}
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="row">
        {this.renderCatCategory()}
        TODO - list saved cat images for a category
      </div>
    )
  }
}