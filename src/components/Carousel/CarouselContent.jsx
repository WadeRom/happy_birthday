const CarouselContent = ({ content, author, date, animation }) =>{
  const stanzas = [...String(content).split('.')];
  
  return (
    <div className={`color-white w-max--sm font-poppins h-max--70 h-70 overflow-y--auto font-medium ${animation}`}>
      <p className="text-wrap--balance  text-center flex flex-col gap-xs ">
      {stanzas.map((stanza, id) => <em className="" key={id}>{stanza}</em>)}
      </p>
      <p>Author: {author}</p>
      <p>Fecha: {date}</p>
    </div>
  )
};

export default CarouselContent;