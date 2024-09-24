import { Icon } from "../Icons/Icon";

const CarouselNavigationButton = ({ direction, action, disabled }) => {
  const iconName = direction === 'prev' ? "arrow-left" : "arrow-right";
  return (
    <button 
      className="bg-color--transparent"
      onClick={action}
      disabled={disabled}
      aria-label={`${direction === 'prev' ? "Previous" : "Next"} Poem`}
    >
      <Icon name={iconName} size="icon-arrow" />
    </button>
  );
};

export default CarouselNavigationButton;