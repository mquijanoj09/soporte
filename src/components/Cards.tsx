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
      "Presencia directa en más de 40 Ciudades y capacidad para llegar a más de 200 Municipios a nivel Nacional.",
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
    url: "/images/card4.jpg",
    title: "Servicio",
    description:
      "Contamos con un equipo de profesionales altamente capacitados para brindar un servicio de calidad.",
    id: 4,
  },
];

export default function Cards() {
  return (
    <div className="flex-col top-0 cursor-default flex relative bg-white px-20 py-44">
      <h3 className="xl:text-5xl lg:text-4xl mb-10 text-main font-extrabold">
        ¿Por qué elegirnos?
      </h3>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 lg:gap-14">
        {cards.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
    </div>
  );
}
