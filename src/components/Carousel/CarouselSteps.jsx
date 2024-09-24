import CarouselStep from "./CarouselStep";

const CarouselSteps = ({ steps = 0, activeIndex = 0 }) => (
  <div className="w-full h-xxs w-max--xs flex justify-between">
    {Array.from({ length: steps }, (_, i) => (
      <CarouselStep key={i} active={i === activeIndex} />
    ))}
  </div>
);

export default CarouselSteps;