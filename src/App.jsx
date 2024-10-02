import { useRef, useEffect } from 'react';
import { SectionOne } from "./components/Sections/SectionOne";
import { SectionTwo } from "./components/Sections/SectionTwo";
import { SectionThird } from "./components/Sections/SectionThird";
import { SectionFour } from "./components/Sections/SectionFour";

export const App = () => {
  const sectionRefs = useRef([]);
  const rootElement = document.getElementById('root'); // Selecciona el contenedor de React
  let currentIndex = 0;

  useEffect(() => {
    const options = {
      threshold: 0.1, // 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = sectionRefs.current.indexOf(entry.target);

          // Desplazamiento hacia abajo
          if (sectionIndex > currentIndex) {
            currentIndex = sectionIndex;
            const nextSection = sectionRefs.current[currentIndex];

            if (nextSection) {
              const top = nextSection.offsetTop;
              rootElement.scrollTo({
                top: top,
                behavior: 'smooth', // Mantener el desplazamiento suave
              });
            }
          }

          // Desplazamiento hacia arriba
          if (sectionIndex < currentIndex) {
            currentIndex = sectionIndex;
            const prevSection = sectionRefs.current[currentIndex];

            if (prevSection) {
              const top = prevSection.offsetTop;
              rootElement.scrollTo({
                top: top,
                behavior: 'smooth', // Mantener el desplazamiento suave
              });
            }
          }
        }
      });
    }, options);

    // Observar todas las secciones
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <SectionOne ref={(el) => (sectionRefs.current[0] = el)} />
      <SectionTwo ref={(el) => (sectionRefs.current[1] = el)} />
      <SectionThird ref={(el) => (sectionRefs.current[2] = el)} />
      <SectionFour ref={(el) => (sectionRefs.current[3] = el)} />
    </>
  );
};