import portrait from "../../assets/images/vangogh_portrait.webp?react";
import { Icon } from "../Icons/Icon";

export const SectionThird = () => {
  return(
    <section className="w-full h-full p-sm w-min--xs align-content--center tornado relative tornado">
      <article className="relative align-content--center w-full h-full">
        <img className=" m-auto w-full h-full object-fit--cover w-max--sm h-80 m-auto" src={portrait} alt="Portrait of Vicent Van Gogh" />
        <h1 className="absolute color-white left-0 right-0 font-rufina text-center bottom-0 font-title--md w-full">Vicent van Gogh</h1>
      </article>
    </section>
  )
}