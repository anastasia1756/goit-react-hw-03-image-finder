
import React, { Component } from "react";
import { ImageGallery } from "../ImageGallery";
import { Searchbar } from "../Searchbar";
import { Button } from "../Button";
import { getImages } from "../../services/imagesApi";
import { Modal } from "../Modal";
import { Loader } from "../Loader";
export class App extends Component {
  state = {
    images: [],
    value: "",
    page: 1,
    error: "",
    loading: false,
    showModal: false,
    imageForModal: "",
  };

  async componentDidUpdate(_, prevState) {
    console.log(prevState);
    console.log(this.state);
    const { value, page, images } = this.state;
    console.log(value);
    console.log(prevState.value);
    // try {
    //   if (prevState.images === images && page !== 1) {
    //     const newImages = await getImages(value, page);
    //     setTimeout(() => {
    //       this.setState({
    //         loading: false,
    //         images: [...prevState.images, ...newImages],
    //       });
    //     }, 2000);
    //   }
    // } catch (error) {
    //   console.log(error.toJSON());
    //   this.setState({
    //     status: "rejected",
    //   });
    // }

    try {
      if (prevState.value !== value) {
        const newImages = await getImages(value, page);
        this.setState({
          loading: true,
        });
        console.log("еще раз");
        // setTimeout(() => {
        this.setState({
          loading: false,
          images: newImages,
        });
        console.log("и еще раз");
        // }, 2000);
      }
    } catch (error) {
      console.log(error.toJSON());
      this.setState({
        error,
      });
    }
    try {
      if (prevState.page !== page && page !== 1) {
        const newImages = await getImages(value, page);
        setTimeout(() => {
          this.setState({
            loading: false,
            images: [...prevState.images, ...newImages],
          });
        }, 2000);
      }
    } catch (error) {
      console.log(error.toJSON());
      this.setState({
        status: "rejected",
      });
    }
  }

  toggleModal = (image) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  loadMoreBtn = async () => {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1,
        loading: true,
      };
    });
  };

  handleFormSubmit = async (image) => {
    this.setState({ page: 1, value: image });
  };

  render() {
    const { images, loading, showModal } = this.state;
    const lengthOfImages = images.length;
    // if (status === 'idle') {
    //   return (
    //     <>
    //       <Searchbar onSubmit={this.handleFormSubmit} />
    //       <p>Enter image name you are looking for.</p>
    //     </>
    //   );
    // }
    // if (status === 'pending' && images.length < 12) {
    //   return <Hearts color="#00BFFF" height={80} width={80} />;
    // }
    // if (status === 'rejected') {
    //   return <p>'error'</p>;
    // }
    return (
      <div>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <p>Ghbdtrb</p>
            {/* <img src={images.largeImageURL} alt="hh" /> */}
          </Modal>
        )}
        {/* {showModal && <Modal />} */}
        <Searchbar onSubmit={this.handleFormSubmit} />
        {lengthOfImages === 0 && !loading && (
          <p>Enter image name you are looking for.</p>
        )}
        {lengthOfImages > 0 && (
          <ImageGallery
            images={images}
            onClick={this.toggleModal}
            showModal={showModal}
          />
        )}
        {/* {images.length > 0 ? (
          <ImageGallery images={images} />
        ) : (
          
        )} */}
        {images.length > 0 && !loading && (
          <Button onClick={this.loadMoreBtn} loading={loading} />
        )}

        {loading && <Loader />}
      </div>
    );
  }
}
