"use client";
import Card from "./Card";

const cards = [
  {
    url: "/images/card1.jpg",
    title: "Experiencia",
    description: "Contamos con más de 29 años de experiencia.",
    id: 1,
  },
  {
    url: "/images/card2.jpg",
    title: "Cobertura",
    description:
      "Presencia directa en más de 50 Ciudades y capacidad para llegar a más de 300 Municipios a nivel Nacional.",
    id: 2,
  },
  {
    url: "/images/card3.jpeg",
    title: "Enfoque",
    description:
      "Nos enfocamos en la satisfacción del cliente, brindando un excelente servicio.",
    id: 3,
  },
  {
    url: "/images/card4.jpeg",
    title: "Servicio",
    description:
      "Contamos con un equipo de profesionales altamente capacitados para brindar un servicio de calidad.",
    id: 4,
  },
];

export default function Cards() {
  return (
    <div className="flex-col top-0 cursor-default flex relative bg-white sm:px-20 px-10 md:pt-44 pt-28 pb-28">
      <h3 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl mb-16 text-main font-extrabold text-center">
        ¿Por qué elegirnos?
      </h3>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-14">
        {cards.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
    </div>
  );
}
