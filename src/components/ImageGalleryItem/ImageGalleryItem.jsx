import { ImageItem, Image } from '.';
import { Modal } from '../Modal';
import PropTypes from 'prop-types'; 

export const ImageGalleryItem = ({ imageForModal,showModal, image, tags, onClick }) => {
  console.log(imageForModal);
  return (
    <>
    <ImageItem>
      <Image src={image} alt={tags} onClick={onClick} />
      
    </ImageItem>
    {/* {showModal && (
      <Modal onClose={onClick}>
        <img src={imageForModal} alt={tags} />
      </Modal>
    )} */}
    </>
  );
};
ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.string,
}