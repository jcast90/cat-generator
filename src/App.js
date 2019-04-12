import React, { Component } from 'react';
import styled from 'styled-components'

import './App.css';

import { CatLoader } from './CatLoader';
import { Categories } from './Categories';
import { CatList } from './CatList';

// Styled components
const Container = styled.div`
  max-width: 550px;
  margin: 2em auto;

`;

const MainHeader = styled.h2`
  text-align: center;
`

class App extends Component {
  state = {
    catList: {},
    selectedCategory: ''
  }

  componentDidMount() {
    if (localStorage.getItem('catList')) {
      const catJSON = localStorage.getItem('catList');
      this.setState({ catList: JSON.parse(catJSON) });
    };
  }

  addListItem = (cats) => {
    let updatedList = this.state.catList;
    // Checks if the category exists in our cat list
    if (updatedList[cats.category]) {
      // Update our category counter
      let count = updatedList[cats.category].count + 1;
      // Spread accross our existing url's in this category and add our new url
      let url = [...updatedList[cats.category].url, cats.url];
      // add in our newly updated object back into the list
      updatedList[cats.category] = { count, url };
    } else {
      // Create our category list with the category count and the image url
      updatedList[cats.category] = { count: cats.count, url: [cats.url] };
    }

    // set item in our local storage and stringify
    localStorage.setItem('catList', JSON.stringify(updatedList));
    this.setState({ catList: updatedList })
  }

  selectCategory = (cat) => {
    this.setState({ selectedCategory: cat })
  }

  render() {
    return (
      <Container className="container">
        <MainHeader>Cat-egory</MainHeader>
        <CatLoader addListItem={this.addListItem} catList={this.state.catList} />
        <Categories catList={this.state.catList} handleSelect={this.selectCategory} />
        <CatList catList={this.state.catList} selected={this.state.selectedCategory} />
      </Container>
    );
  }
}

export default App;
