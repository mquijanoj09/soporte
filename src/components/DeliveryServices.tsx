import Image from "next/image";
import React from "react";
import {
  Delivery1Svg,
  Delivery2Svg,
  Delivery3Svg,
  Delivery4Svg,
  Delivery5Svg,
  Delivery6Svg,
} from "@/icons";
import x from "../../public/images/ex/6.png";
import x2 from "../../public/images/ex/7.png";
import x3 from "../../public/images/ex/8.png";
import x4 from "../../public/images/ex/9.png";

export default function DeliveryServices() {
  return (
    <div
      className="bg-lighterGray flex flex-col justify-center p-28 px-10 sm:px-20 lg:px-28 text-secondary"
      id="delivery-services"
    >
      <div className="flex xl:flex-row flex-col w-full xl:gap-36 gap-20">
        <div className="flex flex-col xl:gap-20 gap-12">
          <h3 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-main font-extrabold text-center xl:text-left">
            Project Delivery
          </h3>
          <div className="flex flex-col xl:gap-10 gap-5 xl:text-xl lg:text-lg sm:text-base text-sm">
            <p>
              Son una serie de servicios relacionados con la entrega de
              servicios masivos a las principales empresas del país.
            </p>
            <p>
              Para estos servicios tenemos personal especializado con
              experiencia en más de 150 mil instalaciones personalizadas,
              clonaciones, migraciones.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-14 xl:gap-x-24 gap-x-10 h-fit">
          <div className="min-w-36">
            <div>
              <div className="mb-3">
                <Delivery2Svg />
              </div>
              <h4 className="xl:text-2xl lg:text-xl sm:text-lg font-extrabold mb-3">
                Entregas Personalizadas
              </h4>
            </div>
            <p className="lg:text-base sm:text-sm text-xs">
              Instalación configuración y entrega de computadores y elementos de
              TI a nivel nacional (Switches, Network Devices, IP Telephony,
              Printers, etc)
            </p>
          </div>
          <div className="min-w-36">
            <div>
              <div className="mb-3">
                <Delivery3Svg />
              </div>
              <h4 className="xl:text-2xl lg:text-xl sm:text-lg font-extrabold mb-3">
                Almacenamiento y Continuidad
              </h4>
            </div>
            <p className="lg:text-base sm:text-sm text-xs">
              Almacenamiento temporal de equipos y administración de la
              continuidad operativa para los clientes a nivel nacional.
            </p>
          </div>
          <div className="min-w-36">
            <div>
              <div className="mb-3">
                <Delivery4Svg />
              </div>
              <h4 className="xl:text-2xl lg:text-xl sm:text-lg font-extrabold mb-3">
                Creación de imágenes y replicaciones masivas
              </h4>
            </div>
            <p className="lg:text-base sm:text-sm text-xs">
              Creación de imágenes a partir de Software base, y replicaciones
              masiva en las instalaciones de los clientes.
            </p>
          </div>
          <div className="min-w-36">
            <div>
              <div className="mb-3">
                <Delivery1Svg />
              </div>
              <h4 className="xl:text-2xl lg:text-xl sm:text-lg font-extrabold mb-3">
                Migraciones Masivas
              </h4>
            </div>
            <p className="lg:text-base sm:text-sm text-xs">
              Actualizaciones masivas de sistema operativo para empresas grandes
              y medias a nivel nacional.
            </p>
          </div>
          <div className="min-w-36">
            <div>
              <div className="mb-3">
                <Delivery5Svg />
              </div>
              <h4 className="xl:text-2xl lg:text-xl sm:text-lg font-extrabold mb-3">
                Mantenimientos Preventivos Especializados
              </h4>
            </div>
            <p className="lg:text-base sm:text-sm text-xs">
              Mantenimiento preventivo para equipos POS a nivel nacional.
              Atención de incidentes y Mantenimientos de UPS a nivel nacional.
            </p>
          </div>
          <div className="min-w-36">
            <div>
              <div className="mb-3">
                <Delivery6Svg />
              </div>
              <h4 className="xl:text-2xl lg:text-xl sm:text-lg font-extrabold mb-3">
                Inventarios Pared a Pared
              </h4>
            </div>
            <p className="lg:text-base sm:text-sm text-xs">
              Inventarios de bienes tecnológicos, con etiquetado y entrega de la
              base de datos.
            </p>
          </div>
        </div>
      </div>
      <div className="sm:mt-20 mt-14 grid xl:grid-cols-2 grid-cols-1 gap-10">
        <Image src={x} alt="logos" className="xl:pr-0 lg:pr-40" />
        <Image src={x2} alt="logos" className="xl:pr-0 lg:pr-40" />
        <Image src={x3} alt="logos" className="xl:pr-0 lg:pr-40" />
        <Image src={x4} alt="logos" className="xl:pr-0 lg:pr-40" />
      </div>
    </div>
  );
}
