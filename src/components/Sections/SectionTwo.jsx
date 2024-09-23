import poems from "../../api/poems.json";
import { Icon } from "../../components/icons/Icon";
import useCarouselAnimation from "../../hooks/useCarouselAnimation";

const next = (index) => (index + 1) % poems.length;
const prev = (index) => (index - 1 + poems.length) % poems.length;

const CarouselButton = ({ action, children, ...otherProps }) => {
  return (
    <button className="bg-color--transparent" onClick={action} {...otherProps}>
      {children}
    </button>
  );
};

const CarouselStep = ({ active = false }) => {
  
  return (
    <span
      className={
        active
          ? "bg-color--yellow w-xs h-xs radius-full "
          : "bg-color--white  w-xs h-xxs  radius-xs"
      }
    ></span>
  );
};

const CarouselSteps = ({length= 0, activeIndex=0}) => {
  
  return Array.from({ length }, (_, i) => (<CarouselStep key={i} active={i === activeIndex} />));
};

const Carousel = ({ index, animation }) => {
  return (
    <div className="overflow-hidden h-75 m-auto">
      <h2 className="font-title--lg color-yellow text-center">
        {poems[index].title}
      </h2>
      <div className={`w-full w-max--md m-auto ${animation}`}>
        <p className="text-center">{poems[index].content}</p>
        <p>Author: {poems[index].author}</p>
        <p>Fecha: {poems[index].fecha}</p>
      </div>
      <div className="w-full h-10 flex">
        <CarouselSteps length={poems.length} activeIndex={index}/>
      </div>
    </div>
  );
};

export const SectionTwo = () => {
  const { carouselState, setCarouselAnimation } = useCarouselAnimation();
  const nextPoem = () => setCarouselAnimation(next, "slideInFromRight");
  const prevPoem = () => setCarouselAnimation(prev, "slideInFromLeft");

  return (
    <section id="2" className="w-full  h-full color-white">
      <article className="w-max--lg w-min--xs m-auto border h-full flex justify-between align-center ">
        <CarouselButton
          onClick={prevPoem}
          disabled={carouselState.isAnimating}
          aria-label="Previous Poem"
        >
          <Icon name="arrow-left" size="2rem" />
        </CarouselButton>
        <Carousel
          index={carouselState.index}
          animation={carouselState.animation}
        />
        <CarouselButton
          action={nextPoem}
          disabled={carouselState.isAnimating}
          aria-label="Next Poem"
        >
          <Icon name="arrow-right" size="2rem" />
        </CarouselButton>
      </article>
    </section>
  );
};
