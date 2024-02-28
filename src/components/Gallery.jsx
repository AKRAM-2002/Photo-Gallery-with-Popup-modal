// components/Gallery.js
import { useState } from 'react';
import Modal from './Modal';


const images = [
 "https://images.unsplash.com/photo-1708616748538-bdd66d6a9e25?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 "https://images.unsplash.com/photo-1682687221248-3116ba6ab483?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
 "https://images.unsplash.com/photo-1708616748538-bdd66d6a9e25?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 "https://images.unsplash.com/photo-1682687221248-3116ba6ab483?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
 "https://images.unsplash.com/photo-1708616748538-bdd66d6a9e25?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 "https://images.unsplash.com/photo-1682687221248-3116ba6ab483?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"    
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      

      <div className="p-10 grid grid-cols-3 gap-5">
        {images.map((src, index) => (
          <img
            key={index}
            className="w-full h-full object-cover cursor-pointer"
            src={src}
            alt={`Img ${index + 1}`}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      <Modal
        isOpen={selectedImage !== null}
        closeModal={closeModal}
        imageUrl={selectedImage !== null ? images[selectedImage] : ''}
        altText={`Img ${selectedImage !== null ? selectedImage + 1 : ''}`}
      />
    </div>
  );
};

export default Gallery;
