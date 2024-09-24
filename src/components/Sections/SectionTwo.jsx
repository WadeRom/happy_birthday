
import useCarouselAnimation from "../../hooks/useCarouselAnimation";
import CarouselNavigationButton from "../Carousel/CarouselButton";
import CarouselContainer from "../Carousel/CarouselContainer";
import { getNextIndex, getPrevIndex } from "../../utils/carouselUtils";
import  poems  from "../../api/poems.json";

export const SectionTwo = () => {
  const { carouselState, setCarouselAnimation } = useCarouselAnimation();
  
  const nextPoem = () => setCarouselAnimation((index) => getNextIndex(index, poems.length), "slideInFromRight");
  const prevPoem = () => setCarouselAnimation((index) => getPrevIndex(index, poems.length), "slideInFromLeft");

  return (
    <section id="2" className="w-full h-full">
      <article className="w-max--lg w-min--xs m-auto h-full flex justify-between align-center">
        <CarouselNavigationButton 
          direction="prev" 
          action={prevPoem} 
          disabled={carouselState.isAnimating} 
        />
        <CarouselContainer
          index={carouselState.index}
          animation={carouselState.animation}
          data={poems[carouselState.index]}
          totalSteps={poems.length}
        />
        <CarouselNavigationButton 
          direction="next" 
          action={nextPoem} 
          disabled={carouselState.isAnimating} 
        />
      </article>
    </section>
  );
};