import './index.css';
import { useState, useEffect } from 'react';
import poems from "../../api/poems.json";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(''); // Controla la dirección de la animación
  const [isAnimating, setIsAnimating] = useState(false);    // Para controlar la animación

  const nextPoem = () => {
    if (isAnimating) return; // Evita múltiples clics mientras hay una animación
    setSlideDirection('next');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % poems.length);
  };

  const prevPoem = () => {
    if (isAnimating) return;
    setSlideDirection('prev');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + poems.length) % poems.length);
  };

  // useEffect para manejar el inicio y fin de la animación
  useEffect(() => {
    if (isAnimating) {
      const animationTimeout = setTimeout(() => {
        setIsAnimating(false); // Finalizar animación después de 500ms
        setSlideDirection('');  // Resetear dirección de la animación
      }, 500); // Duración de la animación en milisegundos

      return () => clearTimeout(animationTimeout); // Limpiar temporizador si el componente se desmonta
    }
  }, [isAnimating]);

  return (
    <div className={`carousel-container ${slideDirection} ${isAnimating ? 'animating' : ''}`}>
      <div className="poem">
        <h2>{poems[currentIndex].title}</h2>
        <p>{poems[currentIndex].content}</p>
        <p>Author: {poems[currentIndex].author}</p>
        <p>Fecha: {poems[currentIndex].fecha}</p>
      </div>
      <button onClick={prevPoem} disabled={isAnimating}>Previous</button>
      <button onClick={nextPoem} disabled={isAnimating}>Next</button>
    </div>
  );
};

export const SectionTwo = () => {
  return (
    <section id="2" className="w-full  h-full color-white">
      <Carousel/>
    </section>
  );
};
