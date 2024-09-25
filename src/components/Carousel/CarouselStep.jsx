const CarouselStep = ({ active = false }) => (
  <span
    className={`transition--width w-full w-max--xxs h-max--xxs shrink-1 d-inline--flex radius-xs ${
      active ? "bg-color--yellow transition--scale" : "bg-color--white"
    }`}
  ></span>
);

export default CarouselStep;