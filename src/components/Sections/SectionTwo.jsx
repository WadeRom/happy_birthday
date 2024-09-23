import poems from "../../api/poems.json";
import useCarouselAnimation from "../../hooks/useCarouselAnimation";


const Carousel = () => {
  const {carouselState, setCarouselAnimation} = useCarouselAnimation()
  const {index, animation} =  carouselState;

  const next = (index) => (index + 1) % poems.length;
  const prev = (index) => (index - 1 + poems.length) % poems.length;

  const nextPoem = () => setCarouselAnimation(next, "slideInFromRight");
  const prevPoem = () => setCarouselAnimation(prev, "slideInFromLeft");

  return (
    <div className="overflow-hidden h-75 m-auto">
      <h2 className="font-title--lg color-yellow text-center">
        {poems[index].title}
      </h2>
      <div
        className={`w-full w-max--md m-auto ${animation}`}
      >
        <p className="text-center">{poems[index].content}</p>
        <p>Author: {poems[index].author}</p>
        <p>Fecha: {poems[index].fecha}</p>
        <button onClick={prevPoem} aria-label="Previous Poem">Prev</button>
        <button onClick={nextPoem} aria-label="Next Poem">Next</button>
      </div>
    </div>
  );
};

export const SectionTwo = () => {
  return (
    <section id="2" className="w-full  h-full color-white">
      <article className="w-max--lg w-min--xs m-auto border h-full flex justify-between align-start ">
        <Carousel />
      </article>
    </section>
  );
};
