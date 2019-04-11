import React from 'react'

export class Categories extends React.Component {
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

  handleClick = () => {
    this.props.handleSelect(this.category)
  }

  renderCatList = () => {
    let categoryTracker = {};

    this.state.catList.map((cat, index) => {
      let category = cat.catCategory
      categoryTracker[category]
        ? categoryTracker[category] = categoryTracker[category] + 1
        : categoryTracker[category] = 1;
    })

    let entries = Object.entries(categoryTracker);
    return entries.map((category, i) => {
      return <li key={i} onClick={this.handleClick} ref={el => this.category = category[0]}>{category[0]} : {category[1]}</li>
    })
  }
  render() {
    return (
      <div class="row">
        <ul class="col-md-6">{this.renderCatList()}</ul>
      </div>
    )
  }
}