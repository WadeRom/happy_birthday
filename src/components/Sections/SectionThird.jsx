import portrait from "../../assets/images/vangogh_portrait.webp?react";
import {WrappedSection, SectionBase} from "../Section/Section";

export const SectionThird = WrappedSection(({ innerRef, ...props }) => {
  return(
    <SectionBase ref={innerRef} {...props} id='3' className="w-full h-full p-sm w-min--xs align-content--center tornado tornado mesh-bg--bottom sticky top-0">
      <article className="relative align-content--center w-full h-full">
        <img className=" m-auto w-full h-full object-fit--cover w-max--sm h-70 m-auto" src={portrait} alt="Portrait of Vicent Van Gogh" />
        <h1 className="absolute color-white left-0 right-0 font-rufina text-center bottom-0 font-title--md w-full">Vicent van Gogh</h1>
      </article>
    </SectionBase>
  )
});
