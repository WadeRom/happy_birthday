import CarouselSteps from "./CarouselSteps";
import CarouselContent from "./CarouselContent";

const CarouselContainer = ({ active, steps, content, animation }) => {

  return (
    <div className="flex flex-col align-center justify-between w-full">
      <CarouselContent animation={animation} content={content}/>
      <CarouselSteps active={active} steps={steps}/>
    </div>
  );
};

export default CarouselContainer;