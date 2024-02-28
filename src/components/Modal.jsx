// components/Modal.js
import PropTypes from 'prop-types';

const Modal = ({ isOpen, closeModal, imageUrl, altText }) => {

    if(isOpen) {
        document.body.classList.add('no-scroll');
    } else{
        document.body.classList.remove('no-scroll');
    }
  return isOpen && (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-modal" onClick={closeModal}>
          &times;
        </button>
        <img
          id="modal-img"
          className="max-w-[300px] max-h-[400px] object-cover"
          src={imageUrl}
          alt={altText}
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default Modal;
