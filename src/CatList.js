import React from 'react'

export class CatList extends React.Component {
  state = {
    catList: []
  }

  componentDidMount() {
    this.setState({ catList: this.props.catList });
  }

  componentDidUpdate(previousProps, previousState) {

    if (previousProps.catList !== this.props.catList) {
      this.setState({ catList: this.props.catList });
    }
  }

  renderCatCategory = () => {
    const selected = this.props.selectedCategory;
    return this.state.catList.filter(cat => {
      return cat.catCategory === selected
    }).map(cat => {
      return <img className="img-thumbnail" width="200px" height="200px" src={cat.catUrl} />
    })

  }
  render() {
    return (
      <div>
        {this.renderCatCategory()}
        TODO - list saved cat images for a category
      </div>
    )
  }
}