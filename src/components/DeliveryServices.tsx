import Image from "next/image";
import React from "react";
import dxc from "../../public/images/DXC.png";

export default function DeliveryServices() {
  return (
    <div
      className="bg-lighterGray flex flex-col justify-center p-28 px-10 sm:px-20 lg:px-28 text-secondary"
      id="delivery-services"
    >
      <div className="flex xl:flex-row flex-col w-full xl:gap-36 gap-20">
        <div className="flex flex-col xl:gap-20 gap-12">
          <h3 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-extrabold text-center xl:text-left">
            PROJECT DELIVERY
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
            <div className="flex gap-6 items-center">
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
            <div className="flex gap-6 items-center">
              <h4 className="xl:text-2xl lg:text-xl sm:text-lg font-extrabold mb-3">
                Entregas Personalizadas - Roll Out
              </h4>
            </div>
            <p className="lg:text-base sm:text-sm text-xs">
              Instalación configuración y entrega de computadores y elementos de
              TI a nivel nacional (Switches, Network Devices, IP Telephony,
              Printers, etc)
            </p>
          </div>
          <div className="min-w-36">
            <div className="flex gap-6 items-center">
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
            <div className="flex gap-6 items-center">
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
            <div className="flex gap-6 items-center">
              <h4 className="xl:text-2xl lg:text-xl sm:text-lg font-extrabold mb-3">
                Inventarios Pared a Pared (W2W)
              </h4>
            </div>
            <p className="lg:text-base sm:text-sm text-xs">
              Inventarios de bienes tecnológicos, con etiquetado y entrega de la
              base de datos.
            </p>
          </div>
          <div className="min-w-36">
            <div className="flex gap-6 items-center">
              <h4 className="xl:text-2xl lg:text-xl sm:text-lg font-extrabold mb-3">
                Creación de imágenes y replicaciones masivas
              </h4>
            </div>
            <p className="lg:text-base sm:text-sm text-xs">
              Creación de imágenes a partir de Software base, y replicaciones
              masiva en las instalaciones de los clientes.
            </p>
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
              src={dxc}
              alt="DXC"
              className="sm:mr-14 mr-5 xl:w-24 sm:w-16 w-10"
            />
          </div>
          <Image src={dxc} alt="DXC" className="xl:w-24 sm:w-16 w-10" />
          <Image src={dxc} alt="DXC" className="xl:w-24 sm:w-16 w-10" />
          <Image src={dxc} alt="DXC" className="xl:w-24 sm:w-16 w-10" />
        </div>
      </div>
    </div>
  );
}
