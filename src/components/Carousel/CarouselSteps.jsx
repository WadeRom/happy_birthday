import CarouselStep from "./CarouselStep";

const CarouselSteps = ({ steps = 0, active = 0 }) => (
  <div className="w-full h-xxs w-max--xs flex justify-between">
    {Array.from({ length: steps }, (_, i) => (
      <CarouselStep key={i} active={i === active} />
    ))}
  </div>
);

export default CarouselSteps;