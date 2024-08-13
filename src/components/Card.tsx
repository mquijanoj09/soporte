import CardType from "@/types/CardType";
import React from "react";

interface Props {
  card: CardType;
}

export default function Card({ card }: Props) {
  return (
    <div
      key={card.id}
      className="group relative lg:h-96 md:h-80 sm:h-64 h-56 w-full overflow-hidden bg-neutral-200 rounded-xl"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 group-hover:scale-110 transition-transform duration-400 md:group-hover:scale-100 md:transition-none"
      ></div>
      <div className="absolute inset-0 z-5 bg-black/50"></div>
      <div className="absolute inset-0 z-10 flex flex-col gap-6 items-center justify-center">
        <p className="md:absolute lg:text-3xl md:text-2xl sm:text-xl text-xl font-black uppercase text-white md:top-1/2 md:duration-200 md:-translate-y-1/2 md:group-hover:top-10 md:group-hover:translate-y-0">
          {card.title}
        </p>
        <p className="md:absolute text-center text-white md:text-lg lg:text-xl text-sm px-10 lg:px-5 md:top-96 md:group-hover:top-1/2 md:group-hover:-translate-y-1/2 md:duration-200">
          {card.description}
        </p>
      </div>
    </div>
  );
}
