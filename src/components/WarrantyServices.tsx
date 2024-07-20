import Image from "next/image";
import React from "react";
import hp from "../../public/images/HP.png";
import { CommunitySvg } from "@/icons";

export default function WarrantyServices() {
  return (
    <div className="bg-main h-screen p-28 text-white" id="warranty-services">
      <div className="grid grid-cols-5 w-full gap-x-28 gap-y-16">
        <h2 className="text-6xl font-extrabold col-span-2 block-appear">
          HP WARRANTY SERVICE
        </h2>
        <h3 className="text-4xl font-extrabold max-w-xl col-span-3">
          Cada una de las áreas dentro de la empresa se apoyan en un proceso de
          atención integral
        </h3>
        <h4 className="text-xl xl:max-w-lg col-span-2">
          El servicio de atención de garantías, consiste en la reparación de
          equipos que están dentro del contrato de garantía de HP, a nivel
          nacional dentro de unos niveles de servicio acordados.
        </h4>
        <div className="grid grid-cols-3 gap-x-10 gap-y-5 col-span-3 text-base">
          <h3 className="text-2xl font-extrabold max-w-44">
            Garantía estandar
          </h3>

          <h3 className="text-2xl font-extrabold max-w-44">
            Garantía personalizada
          </h3>

          <h3 className="text-2xl font-extrabold max-w-64">
            Atención de equipos sin garantía
          </h3>
          <p>
            Somos centro autorizado de servicios HP inc a nivel nacional para la
            atención de garantías para servidores, portatiles, desktops e
            impresoras.
          </p>
          <p>
            Administración de Garantía para segmentos especiales de los
            clientes, tales como la educación, la salud y el sector público.
          </p>
          <p>
            Instalación y manejo de extensiones de garantía. Partes para
            computadores laptops, desktops, servidores e impresoras.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <h5 className="text-lg max-w-72 mb-10">
          Instalación y manejo para el extensiones de garantía.
        </h5>
        <div className="flex gap-14">
          <div className="border-r-2">
            <Image
              src={hp}
              alt="HP"
              width={100}
              height={100}
              className="mr-14"
            />
          </div>
          <Image src={hp} alt="HP" width={100} height={100} />
          <Image src={hp} alt="HP" width={100} height={100} />
          <Image src={hp} alt="HP" width={100} height={100} />
        </div>
      </div>
    </div>
  );
}
