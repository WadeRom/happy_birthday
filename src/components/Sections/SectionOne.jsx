import { Icon } from "../icons/Icon";
import { Title } from "../typography/Title";

const RowIcon = ({className}) => {
  return (
    <div className={className}>
        <Icon name="heart" color="pulse fill-pink-dark" />
        <Icon name="heart" color="pulse fill-cian" />
        <Icon name="heart" color="pulse fill-yellow" />
        <Icon name="heart" color="pulse fill-pink" />
    </div>
  )
}

const Icons = () => {
  return (
    <article className="fadeIn flex flex-col gap-sm">
      <RowIcon className="w-full flex justify-between"/>
      <RowIcon className="w-full flex justify-around flex-row--reverse"/>
    </article>
  );
};

const Titles = () => {
  return (
    <article className="text-center h-60">
      <Title level="5" className="w-full font-poppins font-light font-title--lg fadeInUp color-white">
        Happy Birthday
      </Title>
      <Title level="1" className="w-full h-auto font-rufina font-bold font-title--xl color-yellow bounceIn">
        Jennifer!
      </Title>
    </article>
  );
};

export const SectionOne = () => {
  return (
    <section className=" w-min--xs w-full h-full p-sm flex justify-end flex-col">
      <Titles />
      <Icons/>
    </section>
  );
};
