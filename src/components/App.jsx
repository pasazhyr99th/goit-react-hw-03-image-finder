import React, { Component } from 'react';
import { fetchImages } from '../service/api';
import { Container } from './App.styled';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  fetchImages = async () => {
    const { query, page } = this.state;

    this.setState({ isLoading: true });

    try {
      const data = await fetchImages(query, page);

      if (data.hits.length === 0) {
        this.setState({ loadMore: false, isLoading: false });
        return toast.info('Sorry, no images found. Try something else! 🤔', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        loadMore: page < Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      toast.error(`Error fetching images: ${error} ⛔️`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } finally {
      this.setState({ isLoading: false });
    }
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
        {this.state.loadMore && !isLoading && (
          <Button onClick={this.loadMore} />
        )}
        {selectedImage && (
          <Modal
            largeImageURL={selectedImage}
            onClose={this.handleCloseModal}
          />
        )}
        <ToastContainer />
      </Container>
    );
  }
}

export default App;
