import Image from "next/image";
import React from "react";
import hp from "../../public/images/HP.png";

export default function WarrantyServices() {
  return (
    <div
      className="bg-main p-28 px-10 sm:px-20 lg:px-28 flex justify-center flex-col text-white"
      id="warranty-services"
    >
      <div className="flex xl:flex-row flex-col w-full xl:gap-32 gap-20">
        <div className="flex flex-col xl:gap-20 gap-12 xl:w-2/5">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-extrabold text-center xl:text-left">
            HP WARRANTY SERVICE
          </h2>
          <h4 className="xl:text-xl lg:text-lg sm:text-base text-sm xl:max-w-lg">
            El servicio de atención de garantías, consiste en la reparación de
            equipos que están dentro del contrato de garantía de HP, a nivel
            nacional dentro de unos niveles de servicio acordados.
          </h4>
        </div>
        <div className="flex flex-col xl:gap-20 gap-12 xl:w-3/5">
          <h3 className="lg:text-2xl sm:text-xl font-extrabold">
            Cada una de las áreas dentro de la empresa se apoyan en un proceso
            de atención integral
          </h3>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:grid-flow-col gap-x-10 lg:gap-y-5 gap-y-10 text-base">
            <div>
              <h3 className="xl:text-2xl lg:text-xl sm:text-lg lg:mb-10 mb-5 font-extrabold xl:max-w-44">
                Garantía estandar
              </h3>
              <p className="lg:text-base sm:text-sm text-xs">
                Somos centro autorizado de servicios HP inc a nivel nacional
                para la atención de garantías para servidores, portatiles,
                desktops e impresoras.
              </p>
            </div>
            <div>
              <h3 className="xl:text-2xl lg:text-xl sm:text-lg lg:mb-10 mb-5 font-extrabold xl:max-w-44">
                Garantía personalizada
              </h3>
              <p className="lg:text-base sm:text-sm text-xs">
                Administración de Garantía para segmentos especiales de los
                clientes, tales como la educación, la salud y el sector público.
              </p>
            </div>
            <div>
              <h3 className="xl:text-2xl lg:text-xl sm:text-lg lg:mb-10 mb-5 font-extrabold xl:max-w-64">
                Equipos sin garantía
              </h3>
              <p className="lg:text-base sm:text-sm text-xs">
                Instalación y manejo de extensiones de garantía. Partes para
                computadores laptops, desktops, servidores e impresoras.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-20">
        <h5 className="lg:text-lg max-w-72 mb-10">
          Instalación y manejo para el extensiones de garantía.
        </h5>
        <div className="flex sm:gap-14 gap-6">
          <div className="border-r-2">
            <Image
              src={hp}
              alt="HP"
              className="sm:mr-14 mr-5 xl:w-24 sm:w-16 w-10"
            />
          </div>
          <Image src={hp} alt="HP" className="xl:w-24 sm:w-16 w-10" />
          <Image src={hp} alt="HP" className="xl:w-24 sm:w-16 w-10" />
          <Image src={hp} alt="HP" className="xl:w-24 sm:w-16 w-10" />
        </div>
      </div>
    </div>
  );
}
