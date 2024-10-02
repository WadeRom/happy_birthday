// Función para manejar la intersección
export const scrollSnap = () => {
// Seleccionar todas las secciones
const element = document.querySelector('#root')
const sections = element.childNodes;

// Opciones para el Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Obtener la posición de la sección visible
        const top = entry.target.offsetTop;
        
        // Desplazar a la sección visible
        window.scrollTo({
          top: top,
          behavior: 'smooth' // Desplazamiento suave
        });
      }
    });
  }, {
    threshold: 0.5 // 50% visible en el viewport
  });
  
  sections.forEach(section => {
    observer.observe(section);
  });

}
