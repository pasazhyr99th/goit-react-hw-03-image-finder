import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarStyle,
  SearchbarForm,
  SearchbarFormBtn,
  SearchbarFormInput,
} from './Searchbar.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleNameChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      toast.warn('To search, please enter a query!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      this.setState({ query: '' });
      return;
    }

    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <SearchbarStyle>
        <SearchbarForm onSubmit={this.handleSubmit}>
          <SearchbarFormBtn type="submit">
            Search
          </SearchbarFormBtn>

          <SearchbarFormInput
            type="text"
            value={this.state.query}
            onChange={this.handleNameChange}
            autocomplete="off"
            autoFocus
            placeholder="What are you looking for?"
          />
        </SearchbarForm>
      </SearchbarStyle>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};