import { useEffect, useState } from "react";
import { Title } from "../typography/Title";
import { SunflowerIcon } from "../icons/Sunflower";
import { Icon } from "../icons/Icon";

const Poem = ({id, content}) => {
  return (
    <article>
      <button>atras</button>
      <div id={id}>
        <p>{content}</p>
      </div>
      <button>adelante</button>
    </article>
  );
};

export const SectionTwo = () => {
  const [poems, setPoems] = [
    {
      id: 1,
      title: 'Eres como los girasoles',
      author: 'W.R Tolkien',
      content: 'En el jardín de la vida, te veo brillar,como un girasol que siempre busca el sol,tu rostro se ilumina con la luz del día,y en la noche, eres la estrella que guía. \nTus ojos, como pétalos dorados,reflejan la calidez de un verano eterno,y tu sonrisa, un rayo de esperanza,que florece en los corazones, sin tardanza. \nEres fuerte, como el tallo que sostiene,y delicada, como el aroma que desprende, en cada paso, dejas un rastro de amor, como un girasol, sigues al sol con fervor.'
    }
  ];
  
  return (
    <section id="2" className="w-full h-full color-white">
      <Title>{poems.title}</Title>
      <Poem id="1" content={poems.content}/>
      <Icon name="sunflower" size="w-xxl"/>
    </section>
  );
};
