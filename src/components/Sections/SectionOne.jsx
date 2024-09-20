import { Icon } from "../icons/Icon";
import { HeartIcon } from "../icons/Heart";
import { Title } from "../typography/Title";

const Icons = () => {
  return (
    <article className="w-full flex flex-col gap-sm fadeIn">
      <div className="w-full flex justify-between">
        <Icon name="heart" color="fill-pink-dark" />
        <Icon name="heart" color="fill-cian" />
        <Icon name="heart" color="fill-yellow" />
        <Icon name="heart" color="fill-pink" />
      </div>
      <div className="w-full flex justify-around">
        <Icon name="heart" color="fill-pink" />
        <Icon name="heart" color="fill-yellow" />
        <Icon name="heart" color="fill-cian" />
        <Icon name="heart" color="fill-pink-dark" />
      </div>
    </article>
  );
};

const Titles = () => {
  return (
    <article className="text-center h-65">
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
    <section className=" w-min--xs w-full h-full p-sm flex flex-col justify-end">
      <Titles />
      <Icons/>
    </section>
  );
};
