import { ImageGalleryItem } from '../ImageGalleryItem';
import { ImageGalleryList } from '.';
import PropTypes from 'prop-types'; 
import { Modal } from '../Modal';

export const ImageGallery = ({ images, onClick, showModal }) => (
  <ImageGalleryList>
    {images.map(({ id, webformatURL, largeImageURL, tags }, index) => (
      <>
      <ImageGalleryItem
        key={index}
        image={webformatURL}
        tags={tags}
        onClick={onClick}
        showModal={showModal}
        imageForModal={largeImageURL}
      />
      {showModal && (
        <Modal onClose={onClick}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
      </>
    ))}
    
  </ImageGalleryList>
);

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
images: PropTypes.arrayOf(
  PropTypes.shape({
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  })
),
}