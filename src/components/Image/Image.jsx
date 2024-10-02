import React, { useState } from 'react';
import works from "../../api/works.json";
import sunflower from "../../assets/images/sunflowers.webp?react";
import bedroom from "../../assets/images/the_bedroom.webp?react";
import starry from "../../assets/images/starry_night.webp?react";
import drgachet from "../../assets/images/gachet_portrait.webp?react";
import self from "../../assets/images/self_portrait.webp?react";
import nightCoffee from "../../assets/images/night_coffee.webp?react";
import oldman from "../../assets/images/old_man.webp?react";
import thediningrooms from "../../assets/images/the_dining_rooms.webp?react";
import cafeterrace from "../../assets/images/cafe_terrace.webp?react";
import roundprisoners from "../../assets/images/round_prisoners.webp?react";

const ImageModal = ({ isOpen, onClose, imageSrc, imageId }) => {
  const [isClosing, setIsClosing] = useState(false);
  
  // Obtén la obra de arte usando el ID
  const artwork = works[imageId];

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false); // Restablecer el estado de cierre después de la animación
      onClose(); // Llama a la función de cierre
    }, 300); // Coincide con la duración de la transición de CSS
  };

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`} 
      onClick={handleClose}
    >
      <div className="modal-content  color-white font-sm" onClick={(e) => e.stopPropagation()}>
        <span className="close font-poppins mb-xs" onClick={handleClose}>&times;</span>
        {imageSrc && (
          <>
            <h2 className='font-rufina text-center font-title--lg'>{artwork.title}</h2>
            <img className='m-auto mt-sm mb-sm' src={imageSrc} alt={artwork.title} />
            <p className='font-poppins font-xs text-center'>Hecha: {artwork.year}</p>
            <p className='text-center mt-xs font-poppins font-xs w-max--md ml-auto mr-auto'>{artwork.description}</p>  
          </>
        )}
      </div>
    </div>
  );
};

const Image = ({ src, alt, onClick }) => {
  return src ? (
    <div className="flex-item" onClick={onClick}>
      <img src={src} alt={alt} className="hello" />
    </div>
  ) : (
    <div>...Loading</div>
  );
};

export const ImageGrid = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedImageId, setSelectedImageId] = useState('');

  const openModal = (imageSrc, imageId) => {
    setSelectedImage(imageSrc);
    setSelectedImageId(imageId); // Guardamos el ID para acceder a los datos del JSON
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
    setSelectedImageId('');
  };

  return (
    <>
      <div className="flex-container z-10 scrollbar-beauty h-max--full overflow-y--auto">
        <div className="flex-column flex flex-col justify-between gap-sm">
          <Image src={sunflower} alt="Sunflowers" onClick={() => openModal(sunflower, 'sunflower')} />
          <Image src={drgachet} alt="Gachet Portrait" onClick={() => openModal(drgachet, 'drgachet')} />
          <Image src={nightCoffee} alt="Night Coffee" onClick={() => openModal(nightCoffee, 'nightCoffee')} />
        </div>
        <div className="flex-column flex flex-col justify-between gap-sm">
          <Image src={cafeterrace} alt="The Bedroom" onClick={() => openModal(cafeterrace, 'cafeterrace')} />
          <Image src={starry} alt="Starry Night" onClick={() => openModal(starry, 'starry')} />
          <Image src={bedroom} alt="Self Portrait" onClick={() => openModal(bedroom, 'bedroom')} />
          <Image src={roundprisoners} alt="Self Portrait" onClick={() => openModal(roundprisoners, 'roundprisoners')} />
        </div>
        <div className="flex-column flex flex-col justify-between gap-sm">
          <Image src={thediningrooms} alt="The Dining Rooms" onClick={() => openModal(thediningrooms, 'thediningrooms')} />
          <Image src={self} alt="Old Man" onClick={() => openModal(self, 'self')} />
          <Image src={oldman} alt="Old Man" onClick={() => openModal(oldman, 'oldman')} />
        </div>
      </div>
      <ImageModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        imageSrc={selectedImage} 
        imageId={selectedImageId} // Pasamos el ID al modal
      />
    </>
  );
};