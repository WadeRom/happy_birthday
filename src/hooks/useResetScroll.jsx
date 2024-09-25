import { useEffect, useRef } from "react";

export const useResetScroll = () => {
  const ref = useRef(null);
  
  useEffect(() => {
    const handleScroll = (event) => {
      const current = ref.current;
      // Verificamos que el scroll se está realizando dentro del contenedor padre
      if (current) {
        const { scrollTop, scrollHeight, clientHeight } = current;
        console.log(current);
        
        // Si el usuario intenta hacer scroll hacia arriba cuando ya está en la parte superior o hacia abajo cuando ya está al final,
        // evitamos que el scroll se propague fuera del contenedor.
        const isAtTop = scrollTop === 0 && event.deltaY < 0;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight && event.deltaY > 0;

        if (isAtTop || isAtBottom) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    };

    const currentRef = ref.current;
    currentRef.addEventListener('wheel', handleScroll);

    return () => {
      currentRef.removeEventListener('wheel', handleScroll);
    };
  }, [])

  return ref;
}