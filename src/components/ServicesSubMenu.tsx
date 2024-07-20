import React from "react";
import Image from "next/image";
import services from "../../public/images/hero3.jpg";
import ArrowTopRightSvg from "@/icons/ArrowTopRightSvg";
import { scrollToSection } from "@/utils/scrollTo";

interface Props {
  setShowServices: (value: boolean) => void;
}

export default function ServicesSubMenu({ setShowServices }: Props) {
  function handleOnClick(target: string) {
    scrollToSection(target);
    setShowServices(false);
  }

  return (
    <div className="relative w-full h-full rounded-3xl bg-white flex justify-between shadow-custom-xl">
      <div className="flex flex-col w-1/2 h-full p-7 justify-between text-lg">
        <div
          className="hover:bg-zinc-100 cursor-pointer p-3 rounded-lg flex flex-col gap-2"
          onClick={() => handleOnClick("warranty-services")}
        >
          <h3 className="text-main">HP Warranty Service</h3>
          <p className="text-sm">
            Garantía Estándar / Garantía Personalizada / Atención de equipos
            fuera de garantías - Reparación.
          </p>
        </div>
        <div
          className="hover:bg-zinc-100 cursor-pointer p-3 rounded-lg flex flex-col gap-2"
          onClick={() => handleOnClick("outsourcing-services")}
        >
          <h3 className="text-main">IT Outsourcing</h3>
          <p className="text-sm">
            Mesa de Ayuda / Soporte en Sitio / Monitoreo / Administrador de
            Redes / Gestión de Activos de TI.
          </p>
        </div>
        <div
          className="hover:bg-zinc-100 cursor-pointer p-3 rounded-lg flex flex-col gap-2"
          onClick={() => handleOnClick("delivery-services")}
        >
          <h3 className="text-main">Project Delivery</h3>
          <p className="text-sm">
            Migraciones / Roll Out / Creaciones de Imágenes y Replicaciones
            masivas / Almacenamiento y Continuidad.
          </p>
        </div>
      </div>
      <div className="relative w-1/2 m-2 group">
        <div
          className="absolute inset-0  bg-gradient-to-b from-transparent opacity-50 via-black/60 to-black rounded-3xl cursor-pointer z-10"
          onClick={() => handleOnClick("services")}
        />
        <Image
          src={services}
          alt="services"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-3xl transition-shadow duration-300 group-hover:shadow-custom-xl filter grayscale"
        />

        <p className="absolute text-white bottom-0 p-4 z-10 cursor-pointer text-lg font-extrabold flex gap-3 items-center">
          <span className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowTopRightSvg />
          </span>
          Conoce más!
        </p>
      </div>
    </div>
  );
}
