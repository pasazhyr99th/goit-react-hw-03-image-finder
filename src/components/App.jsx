import React, { Component } from 'react';
import axios from 'axios';
import { Container } from './App.styled';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    selectedImage: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query || this.state.page !== prevState.page) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;

    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '35772467-21ed811caf8158e0babf87439';
    const PER_PAGE = 12;

    this.setState({ isLoading: true });

    axios
      .get(
        `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
      )
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
          isLoading: false,
        }));
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        this.setState({ isLoading: false });
      });
  };

  handleSearchSubmit = (query) => {
    this.setState({ query, page: 1, images: [] });
  };

  handleImageClick = (largeImageURL) => {
    this.setState({ selectedImage: largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, isLoading, selectedImage } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {images.length > 0 && images.length % 12 === 0 && (
          <Button onClick={this.fetchImages} />
        )}
        {selectedImage && (
          <Modal
            largeImageURL={selectedImage}
            onClose={this.handleCloseModal}
          />
        )}
      </Container>
    );
  }
}

export default App;