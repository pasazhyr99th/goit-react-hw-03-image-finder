import React, { Component } from 'react';
// import axios from 'axios';
import { fetchImages } from '../service/api';
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
    loadMore: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.fetchImages();
      this.setState(prevState => ({
        page: prevState.page + 1,
      }));
    }
  }

  fetchImages = async () => {
    const { query, page } = this.state;

    // const BASE_URL = 'https://pixabay.com/api/';
    // const API_KEY = '35772467-21ed811caf8158e0babf87439';
    // const PER_PAGE = 12;

    this.setState({ isLoading: true });

    try {
      const data = await fetchImages(query, page);

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        loadMore: this.state.page < Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  

    // використати async await
    // axios
    //   .get(
    //     `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    //   )
    //   .then(response => {
    //     this.setState(prevState => ({
    //       images: [...prevState.images, ...response.data.hits],
    //       // page: prevState.page + 1,
    //       loadMore: this.state.page < Math.ceil(response.data.totalHits / 12),
    //     }));
    //   })
    //   .catch(error => {
    //     console.error('Error fetching images:', error);
    //     // this.setState({ isLoading: false });
    //   })
    //   .finally(() => this.setState({ isLoading: false }));
  };

  handleSearchSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  handleImageClick = largeImageURL => {
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
        {this.state.loadMore && <Button onClick={this.fetchImages} />}
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
