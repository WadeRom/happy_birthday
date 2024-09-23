import { useState, useEffect } from "react";

const useCarouselAnimation = (initialIndex = 0, initialIsAnimating = false, initialAnimation = '') => {
  const [carouselState, setCarouselState] = useState({
    index: initialIndex,
    animation: initialAnimation,
    isAnimating: initialIsAnimating,
  });

  // Efecto para manejar la animación
  useEffect(() => {
    if (carouselState.isAnimating) {
      const animationTimeout = setTimeout(() => {
        setCarouselState(prev => ({
          ...prev,
          animation: '',
          isAnimating: false,
        }));
      }, 1000); // Dura 1 segundo la animación

      return () => clearTimeout(animationTimeout);
    }
  }, [carouselState.isAnimating]);

  // Función para controlar el cambio de animación
  const setCarouselAnimation = (action, animation) => {
    
    setCarouselState(prev => ({
      ...prev,
      index: action(prev.index),
      animation: animation,
      isAnimating: true, // Activar la animación
    }));
  };

  // Retornamos el estado actual y la función para actualizarlo
  return {
    carouselState,
    setCarouselAnimation,
  };
};

export default useCarouselAnimation;