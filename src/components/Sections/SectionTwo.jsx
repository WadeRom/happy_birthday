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
      className={`transition--height w-max--xs h-xs ${
        active
          ? "bg-color--yellow radius-full "
          : "bg-color--white radius-xs"
      }`}
    ></span>
  );
};

const CarouselSteps = ({ length = 0, activeIndex = 0 }) => {
  return (
    <div className="w-full w-max--xs h-xs flex justify-between align-center">
      {Array.from({ length }, (_, i) => (
        <CarouselStep key={i} active={i === activeIndex} />
      ))}
    </div>
  );
};

const CarouselTitle = ({title}) => {
  return(
    <h2 className="font-title--lg color-yellow text-center">
      {title}
    </h2>
  )
}

const CarouselContent = ({ content, author, date,  animation }) => {
  return (
    <div className={`color-white w-max--sm font-poppins h-min--55 h-55 overflow-y--auto font-medium ${animation}`}>
      <p className="text-center">{content}</p>
      <p>Author: {author}</p>
      <p>Fecha: {date}</p>
    </div>
  );
};

const CarouselContainer = ({ index, animation }) => {
  const {title, content, author, date} = poems[index];
  return (
    <div className="flex flex-col align-center justify-around w-full w-max--lg h-full p-xs">
      <CarouselTitle  title={title} />
      <CarouselContent content={content} author={author} date={date} animation={animation}/>
      <CarouselSteps length={poems.length} activeIndex={index} />
    </div>
  );
};

export const SectionTwo = () => {
  const { carouselState, setCarouselAnimation } = useCarouselAnimation();
  const nextPoem = () => setCarouselAnimation(next, "slideInFromRight");
  const prevPoem = () => setCarouselAnimation(prev, "slideInFromLeft");

  return (
    <section id="2" className="w-full  h-full">
      <article className="w-max--lg w-min--xs m-auto h-full flex justify-between align-center">
        <CarouselButton
          onClick={prevPoem}
          disabled={carouselState.isAnimating}
          aria-label="Previous Poem"
        >
          <Icon name="arrow-left" size="" />
        </CarouselButton>
        <CarouselContainer
          index={carouselState.index}
          animation={carouselState.animation}
        />
        <CarouselButton
          action={nextPoem}
          disabled={carouselState.isAnimating}
          aria-label="Next Poem"
        >
          <Icon name="arrow-right" size="" />
        </CarouselButton>
      </article>
    </section>
  );
};
