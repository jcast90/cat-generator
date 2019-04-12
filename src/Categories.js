import React from 'react'
import styled from 'styled-components'

const ListItem = styled.li`
  cursor: pointer;
  transition: .2s all ease-in-out;
  &:hover {
    background-color: rgba(0,0,0,.2);
  }
`
const ListGroup = styled.ul`
  padding-left: 15px;
`

export class Categories extends React.Component {

  handleClick = (category) => {
    this.props.handleSelect(category)
  }

  renderCatList = () => {
    return Object.keys(this.props.catList).map((category, index) => {
      let count = this.props.catList[category].count;
      return (
        <ListItem key={index} className="list-group-item d-flex justify-content-between align-items-center" onClick={() => this.handleClick(category)}>
          {category}
          <span className="badge badge-primary badge-pill">{count}</span>
        </ListItem>)
    })

  }
  render() {

    return (
      <div className="row">
        <ListGroup className="col-md-12 list-group">{this.renderCatList()}</ListGroup>
      </div>
    )
  }
}