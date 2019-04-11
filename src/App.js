import React, { Component } from 'react';
import './App.css';
import { CatLoader } from './CatLoader';
import { Categories } from './Categories';
import { CatList } from './CatList';

class App extends Component {
  state = {
    catList: [],
    selectedCategory: ''
  }

  componentDidMount() {
    if (localStorage.getItem('catList')) {
      const catJSON = localStorage.getItem('catList')
      this.setState({ catList: JSON.parse(catJSON) })
    };
  }

  addListItem = (cats) => {
    let catList = [...this.state.catList, cats];
    localStorage.setItem('catList', JSON.stringify(catList));
    this.setState({ catList })
  }

  selectCategory = (cat) => {
    this.setState({ selectedCategory: cat })
  }

  render() {
    return (
      <div className="container">
        <h2>Cat-egory</h2>
        <CatLoader addListItem={this.addListItem} />
        <Categories catList={this.state.catList} handleSelect={this.selectCategory} />
        <CatList catList={this.state.catList} selectedCategory={this.state.selectedCategory} />
      </div>
    );
  }
}

export default App;
