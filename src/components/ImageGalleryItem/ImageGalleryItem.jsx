import { ImageItem, Image } from '.';
import { Modal } from '../Modal';
import PropTypes from 'prop-types'; 

export const ImageGalleryItem = ({ showModal, image, tags, onClick }) => {
  console.log(showModal);
  return (
    <ImageItem>
      <Image src={image} alt={tags} onClick={onClick} />
      {showModal && (
          <Modal onClose={onClick}>
            <img src={image} alt={tags} />
          </Modal>
        )}
    </ImageItem>
  );
};
ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.string,
}