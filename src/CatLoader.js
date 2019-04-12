import React from 'react';
import styled from 'styled-components'

import { fetchRandomCat } from './catApi'

const FeaturedContainer = styled.figure`
  width: 100%;
  height: 450px;
`

const MainImage = styled.img`
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
`

const FormGroup = styled.div`
  display: flex;
  align-items: center;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`

const TextInput = styled.input`
  margin-top: auto;
  border: 1px solid black;
  padding: 0 5px;
`
const ErrorMessage = styled.p`
  color: red;
`
const Button = styled.button`
  margin-bottom: 5px;
  margin-left: 15px;
  cursor: pointer;
  &:last-of-type {
    margin-bottom: 0;
  }
`

export class CatLoader extends React.Component {
  state = {
    url: '',
    category: '',
    inputError: false,
    duplicateImage: false
  }

  componentDidMount() {
    fetchRandomCat().then(resp => {
      this.setState({ url: resp.data[0].url })
    });
  }

  fetchNewCat = () => {
    fetchRandomCat().then(resp => {
      this.setState({ url: resp.data[0].url, duplicateImage: false })
    });
  }

  handleSave = () => {
    //getting the input category from the catList
    const catItem = this.props.catList[this.state.category];

    // Checks if the user has typed anything in the input
    if (this.state.category === '') {
      this.setState({ inputError: true });
    } else {
      // Checks if that category exists to avoid errors and checks if that image is already in that category
      if (catItem && catItem.url.indexOf(this.state.url) !== -1) {
        // If yes, then we show an error
        this.setState({ duplicateImage: true, inputError: false });
      } else {
        // If no, then we proceed and add that image to our list
        const listItem = {
          url: this.state.url,
          category: this.state.category,
          count: 1
        };

        this.setState({ inputError: false });
        this.props.addListItem(listItem);
      }
    }


  }

  handleChange = (e) => {
    // Removes the duplicate image error message once the input field is empty
    if (e.target.value === '') {
      this.setState({ duplicateImage: false });
    }

    // This sets our category value 
    this.setState({ category: e.target.value });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 no-padding">
          <FeaturedContainer className="figure-img img-fluid col-md-12 featured-image__wrapper">
            <MainImage src={this.state.url} className="img-thumbnail" alt="Featured cat" />
          </FeaturedContainer>
          <FormGroup className="form-group flex-grid col-md-12">
            <InputWrapper className="col-md-6 no-padding">
              {this.state.inputError ? <ErrorMessage>Please Input a caegory to save.</ErrorMessage> : null}
              {this.state.duplicateImage ? <ErrorMessage>This image already exists in this category, please choose another.</ErrorMessage> : null}
              <TextInput type='text' placeholder="Category Name" onChange={this.handleChange} />
            </InputWrapper>
            <div className="btn-group-vertical col-md-6 ">
              <Button type="button" className="btn btn-dark" onClick={this.fetchNewCat}>Next</Button>
              <Button type="button" className="btn btn-success" onClick={this.handleSave}>Save</Button>
            </div>
          </FormGroup>
        </div>
      </div>
    )
  }
}