import CardType from "@/types/CardType";
import React from "react";

interface Props {
  card: CardType;
}

export default function Card({ card }: Props) {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-xl"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-5 bg-black/50"></div>
      <div className="absolute inset-0 z-10 flex flex-col gap-6 items-center justify-center p-8">
        <p className="text-5xl font-black uppercase text-white rounded-xl">
          {card.title}
        </p>
        <p className="text-white text-xl hidden group-hover:flex">
          {card.description}
        </p>
      </div>
    </div>
  );
}
