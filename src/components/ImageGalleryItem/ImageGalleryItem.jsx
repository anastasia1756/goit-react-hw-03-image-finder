import { ImageItem, Image } from '.';
import { Modal } from '../Modal';
import PropTypes from 'prop-types'; 

export const ImageGalleryItem = ({ showModal, image, tags, onClick }) => {
  return (
    <ImageItem>
      <Image src={image} alt={tags} onClick={onClick} />
      {/* <Modal image={image} /> */}
    </ImageItem>
  );
};
ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.string,
}