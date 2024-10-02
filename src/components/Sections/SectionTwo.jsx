import poems from "../../api/poems.json";
import CarouselTitle from "../Carousel/CarouselTitle";
import CarouselContainer from "../Carousel/CarouselContainer";
import CarouselNavigationButton from "../Carousel/CarouselButton";
import useCarouselAnimation from "../../hooks/useCarouselAnimation";
import { getNextIndex, getPrevIndex } from "../../utils/carouselUtils";
import {WrappedSection, SectionBase} from "../Section/Section";

export const Section = ({innerRef, ...props}) => {
  const { carouselState, setCarouselAnimation } = useCarouselAnimation();

  const nextPoem = () =>
    setCarouselAnimation(
      (index) => getNextIndex(index, poems.length),
      "slideInFromRight"
    );
  const prevPoem = () =>
    setCarouselAnimation(
      (index) => getPrevIndex(index, poems.length),
      "slideInFromLeft"
    );

  const data = poems[carouselState.index];

  return (
    <SectionBase ref={innerRef} {...props} id="2" className="w-full h-full mesh-bg--left sticky top-0 sunflower-bg">
      <div className="w-full w-min--xs w-max--md h-full m-auto pt-md">
        <CarouselTitle title={data.title} />
        <div className="w-min--xs  w-full flex justify-center h-80 h-max--70 mt-md">
          <CarouselNavigationButton
            direction="prev"
            action={prevPoem}
            disabled={carouselState.isAnimating}
          />
          <CarouselContainer
            steps={poems.length}
            content={data.content}
            active={carouselState.index}
            animation={carouselState.animation}
          />
          <CarouselNavigationButton
            direction="next"
            action={nextPoem}
            disabled={carouselState.isAnimating}
          />
        </div>
      </div>
    </SectionBase>
  );
};

export const SectionTwo = WrappedSection(Section);