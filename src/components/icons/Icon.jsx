import "./main.css";
import HeartSVG from "../../assets/icons/heart.svg?react";
import TornadoSVG from "../../assets/icons/tornado.svg?react";
import SunflowerSVG from "../../assets/icons/sunflower.svg?react";

const icons = {
  heart: {
    alt: "Heart icon",
    Icon: HeartSVG,
  },
  tornado: {
    alt: "Tornado icon",
    Icon: TornadoSVG,
  },
  sunflower: {
    alt: "Sunflower icon",
    Icon: SunflowerSVG,
  },
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
