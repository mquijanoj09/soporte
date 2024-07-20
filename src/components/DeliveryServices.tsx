import Image from "next/image";
import React from "react";
import dxc from "../../public/images/DXC.png";

export default function DeliveryServices() {
  return (
    <div
      className="bg-lighterGray h-screen flex flex-col justify-center px-28 text-secondary"
      id="delivery-services"
    >
      <div className="flex w-full gap-36">
        <div className="w-5/12 flex flex-col gap-20">
          <h3 className="text-6xl font-extrabold block-appear">
            PROJECT DELIVERY
          </h3>
          <div className="flex flex-col gap-10 text-xl">
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
          <div className="flex gap-14">
            <div className="border-r-2">
              <Image
                src={dxc}
                alt="DXC"
                width={100}
                height={100}
                className="mr-14"
              />
            </div>
            <Image src={dxc} alt="DXC" width={100} height={100} />
            <Image src={dxc} alt="DXC" width={100} height={100} />
            <Image src={dxc} alt="DXC" width={100} height={100} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-14 w-7/12 h-fit">
          <div>
            <div className="flex gap-6 items-center">
              <h4 className="text-2xl font-extrabold mb-3">
                Migraciones Masivas
              </h4>
            </div>
            <p>
              Actualizaciones masivas de sistema operativo para empresas grandes
              y medias a nivel nacional.
            </p>
          </div>
          <div>
            <div className="flex gap-6 items-center">
              <h4 className="text-2xl font-extrabold mb-3">
                Entregas Personalizadas - Roll Out
              </h4>
            </div>
            <p>
              Instalación configuración y entrega de computadores y elementos de
              TI a nivel nacional (Switches, Network Devices, IP Telephony,
              Printers, etc)
            </p>
          </div>
          <div>
            <div className="flex gap-6 items-center">
              <h4 className="text-2xl font-extrabold mb-3">
                Creación de imágenes y replicaciones masivas
              </h4>
            </div>
            <p>
              Creación de imágenes a partir de Software base, y replicaciones
              masiva en las instalaciones de los clientes.
            </p>
          </div>
          <div>
            <div className="flex gap-6 items-center">
              <h4 className="text-2xl font-extrabold mb-3">
                Almacenamiento y Continuidad
              </h4>
            </div>
            <p>
              Almacenamiento temporal de equipos y administración de la
              continuidad operativa para los clientes a nivel nacional.
            </p>
          </div>
          <div>
            <div className="flex gap-6 items-center">
              <h4 className="text-2xl font-extrabold mb-3">
                Inventarios Pared a Pared (W2W)
              </h4>
            </div>
            <p>
              Inventarios de bienes tecnológicos, con etiquetado y entrega de la
              base de datos.
            </p>
          </div>
          <div>
            <div className="flex gap-6 items-center">
              <h4 className="text-2xl font-extrabold mb-3">
                Creación de imágenes y replicaciones masivas
              </h4>
            </div>
            <p>
              Creación de imágenes a partir de Software base, y replicaciones
              masiva en las instalaciones de los clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
