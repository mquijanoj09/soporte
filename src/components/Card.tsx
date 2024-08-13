import CardType from "@/types/CardType";
import React from "react";

interface Props {
  card: CardType;
}

export default function Card({ card }: Props) {
  return (
    <div
      key={card.id}
      className="group relative h-96 w-full overflow-hidden bg-neutral-200 rounded-xl"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0"
      ></div>
      <div className="absolute inset-0 z-5 bg-black/50"></div>
      <div className="absolute inset-0 z-10 flex flex-col gap-6 items-center justify-center">
        <p className="absolute lg:text-3xl font-black uppercase text-white top-1/2 duration-200 -translate-y-1/2 group-hover:top-16 group-hover:translate-y-0">
          {card.title}
        </p>
        <p className="absolute text-center text-white text-xl px-5 top-96 group-hover:top-1/2 group-hover:-translate-y-1/2 duration-200">
          {card.description}
        </p>
      </div>
    </div>
  );
}
