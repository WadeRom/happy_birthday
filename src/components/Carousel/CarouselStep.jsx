const CarouselStep = ({ active = false }) => (
  <span
    className={`transition--width w-full w-max--xxs h-max--xxs shrink-1 d-inline--flex radius-xs ${
      active ? "bg-color--yellow grown-4" : "bg-color--white grown-1"
    }`}
  ></span>
);

export default CarouselStep;