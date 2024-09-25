import { formatContent } from "../../utils/carouselUtils";

const CarouselContent = ({ content, author, date, animation }) =>{
  
  const formattedContent = formatContent(content);
  return (
    <div className={`color-white w-max--sm font-poppins h-max--75 h-75 overflow-y--auto font-medium ${animation}`}>
      <p className="white-space--pre  text-center flex flex-col gap-xs ">
        {formattedContent}
      </p>
    </div>
  )
};

export default CarouselContent;