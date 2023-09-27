// import React, { Component } from 'react';
// import { Container } from './App.styled';
// import Modal from './Modal';
// import Searchbar from './Searchbar';
// import ImageGallery from './ImageGallery';

// class App extends Component {
//   state = {
//     showModal: false,
//     query: '',
//   };

//   handleFormSubmit = query => {
//     this.setState({ query });
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { showModal } = this.state;

//     return (
//       <Container>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ImageGallery query={this.state.query} />
//         <button type="button" onClick={this.toggleModal}>
//           Open modal
//         </button>
//         {showModal && <Modal onClose={this.toggleModal} />}
//       </Container>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { Container } from './App.styled';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';
import Modal from './Modal';
import { fetchImages } from '../services/api';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    showModal: false,
    modalImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;

    fetchImages(query, page)
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data],
          page: prevState.page + 1,
        }));
      })
      .catch(error => console.error('Error fetching images:', error));
  };

  handleSearchSubmit = query => {
    this.setState({ query, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  handleImageClick = (src, alt) => {
    this.setState({
      showModal: true,
      modalImage: { src, alt },
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      modalImage: '',
    });
  };

  render() {
    const { images, showModal, modalImage } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
              onClick={() =>
                this.handleImageClick(image.largeImageURL, image.tags)
              }
            />
          ))}
        </ImageGallery>
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
        {showModal && (
          <Modal
            src={modalImage.src}
            alt={modalImage.alt}
            onClose={this.handleCloseModal}
          />
        )}
      </Container>
    );
  }
}

export default App;
