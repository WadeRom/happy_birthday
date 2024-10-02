import {WrappedSection, SectionBase} from "../Section/Section";
import { ImageGrid } from "../Image/Image";
import { Title } from "../typography/Title";
import "./index.css";

export const SectionFour = WrappedSection(({innerRef, ...props}) => {
  return(
    <SectionBase ref={innerRef} {...props} id='4' className="w-full h-full tornado-2 w-min--xs flex overflow-beauty justify-center mesh-bg--bottom sticky top-0">
    <div className="w-80 flex flex-col">
      <article className="w-max--md mb-md mt-lg mr-auto ml-auto">
        <Title level="1" className="font-title--md color-white">Vicent van Gogh</Title>
        <div className="color-white font-poppins font-normal mt-xs">
          <p>
            Estas son las obras más reconocidas de Van Gogh. Espero que te gusten y que las disfrutes tanto como yo. 🌻✨ Con mucho cariño, Walter.
          </p>
          <p className="mt-sm">
            P.D.: ¡Feliz cumpleaños! 🎂🎉 XOXO 💖
          </p>
        </div>
      </article>
      <ImageGrid/>
    </div>
</SectionBase>
  )
})