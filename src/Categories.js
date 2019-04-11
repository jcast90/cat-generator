import React from 'react'

export class Categories extends React.Component {
  state = {
    catList: [],
  }
  
  category = [];

  componentDidMount() {
    this.setState({ catList: this.props.catList });
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.catList !== this.props.catList) {
      this.setState({ catList: this.props.catList });
    }
  }

  handleClick = (event, category) => {
    if(event.target.classList.contains('active')){
      event.target.classList = `${event.target.classList} active`
    }else {
      event.target.classList = `${event.target.classList}`
    }
    this.props.handleSelect(this.category[category])
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
      return <li key={i} className="list-group-item d-flex justify-content-between align-items-center" onClick={(e) => this.handleClick(e,category[0])} ref={el => this.category[category[0]] = [category[0],category[1]]}>{category[0]} <span className="badge badge-primary badge-pill">{category[1]}</span></li>
    })
  }
  render() {
    return (
      <div className="row">
        <ul className="col-md-6 list-group">{this.renderCatList()}</ul>
      </div>
    )
  }
}