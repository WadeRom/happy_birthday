import CarouselTitle from "./CarouselTitle";
import CarouselContent from "./CarouselContent";
import CarouselSteps from "./CarouselSteps";

const CarouselContainer = ({ index, animation, data, totalSteps }) => {

  const { title, content, author, date } = data;
  return (
    <div className="flex flex-col align-center justify-between w-full w-max--md h-90 pt-sm pb-sm p-xs">
      <CarouselTitle title={title} />
      <CarouselContent content={content} author={author} date={date} animation={animation} />
      <CarouselSteps steps={totalSteps} activeIndex={index} />
    </div>
  );
};

export default CarouselContainer;