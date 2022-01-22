import { Component } from 'react';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from '.';
import PropTypes from 'prop-types'; 

export class Searchbar extends Component {
  state = {
    searchedImage: '',
  };
  handleInputChange = (e) => {
    this.setState({ searchedImage: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = (e) => {
    const { searchedImage } = this.state;
    e.preventDefault();
    if (searchedImage.trim() === '') {
      alert('Make sure you are looking for something ;)');
      return;
    }
    this.props.onSubmit(searchedImage.trim());
    this.reset();
  };
  reset = () => {
    this.setState({ searchedImage: '' });
  };
  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <span>Search</span>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            value={this.state.searchedImage}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}