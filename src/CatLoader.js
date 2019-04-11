import React from 'react'
import { fetchRandomCat } from './catApi'

export class CatLoader extends React.Component {
  state = {
    catUrl: '',
    catCategory: '',
  }
  // TODO, fetchRandomCat
  componentDidMount() {
    fetchRandomCat().then(resp => {
      this.setState({ catUrl: resp.data[0].url })
    });
  }

  fetchNewCat = () => {
    fetchRandomCat().then(resp => {
      this.setState({ catUrl: resp.data[0].url })
    });
  }

  handleSave = () => {
    const listItem = {
      catUrl: this.state.catUrl,
      catCategory: this.state.catCategory
    }

    this.props.addListItem(listItem);
  }

  handleChange = (e) => {
    this.setState({ catCategory: e.target.value });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <figure className="figure-img img-fluid col-md-12">
            <img src={this.state.catUrl} className="img-thumbnail" alt="Featured cat" />
          </figure>
          <input type='text' className="col-md-6" onChange={this.handleChange} />
          <div className="btn-group-vertical col-md-6">
            <button type="button" className="btn btn-dark" onClick={this.fetchNewCat}>Next</button>
            <button type="button" className="btn btn-success" onClick={this.handleSave}>Save</button>
          </div>
        </div>
      </div>
    )
  }
}