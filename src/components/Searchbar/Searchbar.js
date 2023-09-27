import { Component } from 'react';
import {
  SearchbarStyle,
  SearchbarForm,
  SearchbarFormBtn,
  SearchbarFormInput,
} from './Searchbar.styled';

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
      alert('To search, please enter a query!');
      this.setState({ query: '' });
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarStyle>
        <SearchbarForm onSubmit={this.handleSubmit}>
          <SearchbarFormBtn type="submit">Search</SearchbarFormBtn>

          <SearchbarFormInput
            type="text"
            name="search"
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
