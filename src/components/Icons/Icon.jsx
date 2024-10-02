import "./main.css";
import HeartSVG from "../../assets/icons/heart.svg?react";
import SunflowerSVG from "../../assets/icons/sunflower.svg?react";
import ChevronLeft from "../../assets/icons/ChevronLeft.svg?react";
import ChevronRight from "../../assets/icons/ChevronRight.svg?react";

const icons = {
  heart: {
    alt: "Heart icon",
    Icon: HeartSVG,
  },
  sunflower: {
    alt: "Sunflower icon",
    Icon: SunflowerSVG,
  },
  "arrow-left": {
    alt: "Chevron Left icon",
    Icon: ChevronLeft,
  },
  "arrow-right": {
    alt: "Chevron Right icon",
    Icon: ChevronRight,
  }
};

/* 
*Create icons from attributes and attributes specific to the SVG element type
* @param {string} name - is a key for access to icons object
* @param {className} color - change color fill of svg element
* @param {className} size - control size of container svg element, not applied to SVG elements
*/

export const Icon = ({ name = "heart", size = "icon", color = "fill-blue" }) => {
  const iconData = icons[name];

  if (!iconData) {
    return <div>Icon not found: {name}</div>;
  }

  const { Icon, alt } = iconData;

  return (
    <div className={size}>
      <Icon className={color} alt={alt} />
    </div>
  );
};
