import { formatContent } from "../../utils/carouselUtils";
import { useResetScroll } from "../../hooks/useResetScroll";

const CarouselContent = ({ content, animation }) =>{
  const scrollRef = useResetScroll([content]);
  const formattedContent = formatContent(content);
  return (
    <p className={`h-max--90 w-full color-white w-full overflow-y--auto font-poppins font-normal scrollbar-beauty ${animation}`} ref={scrollRef}>
      <em className="white-space--pre text-center flex flex-col gap-xs ">
        {formattedContent}
      </em>
    </p>
  )
};

export default CarouselContent;