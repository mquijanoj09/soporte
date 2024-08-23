import Image from "next/image";
import React from "react";
import dxc from "../../public/images/DXC.png";
import { HeadsetSvg } from "@/icons";

export default function OutsourcingServices() {
  return (
    <div
      className="bg-secondary text-white flex flex-col justify-center p-28 px-10 sm:px-20 lg:px-28"
      id="outsourcing-services"
    >
      <div className="flex xl:flex-row flex-col w-full xl:gap-32 gap-20">
        {/* <div className="xl:flex flex-col gap-20 w-1/2 hidden">
          <h3 className="text-4xl font-extrabold">
            Mediante el Outsourcing de TI ofrecemos una gran ayuda para las
            empresas.
          </h3>
          <div className="grid grid-cols-2 gap-14 xl:max-w-2xl">
            <div>
              <h4 className="text-2xl font-extrabold mb-3">Mesa de ayuda</h4>
              <p>
                Somos centro autorizado de servicios HP inc a nivel nacional
                para la atención de garantías para servidores, portatiles,
                desktops e impresoras.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-extrabold mb-3">Soporte en sitio</h4>
              <p>
                Proveemos personal calificado, con experiencia en la atención de
                incidentes y requerimientos directamente en las instalaciones de
                nuestros clientes a nivel nacional.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-extrabold mb-3">
                Administrador de redes
              </h4>
              <p>
                El objetivo de este servicio es recuperar la conectividad LAN
                según los acuerdos de niveles de servicio definidos o prevenir
                que falle.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-extrabold mb-3">Monitoreo</h4>
              <p>
                Cubre el monitoreo de alarmas que se presentan a través de las
                diferentes herramientas de monitoreo del cliente.
              </p>
            </div>
          </div> 
        </div> */}
        <div className="flex flex-col xl:gap-20 gap-12 xl:w-1/2">
          <h3 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-extrabold text-center xl:text-left">
            IT OUTSOURCING
          </h3>
          <div className="flex flex-col gap-10 lg:text-lg sm:text-base text-sm">
            <p>
              Entre sus más importantes beneficios, está la reducción de costos
              administrativos, la delegación de funciones que permiten a la
              compañía concentrarse en lo fundamental de su negocio.
            </p>
            <p>
              Nuestro enfoque está basado en la siguientes ventajas: Reducción
              de Costos / Enfoque en los principales negocios de la empresa /
              Reducción de riesgos y aumento de eficiencia / Equipo
              especializado.
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:gap-20 gap-12 xl:hidden">
          <h3 className="lg:text-2xl sm:text-xl font-extrabold">
            Mediante el Outsourcing de TI ofrecemos una gran ayuda para las
            empresas.
          </h3>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-14">
            <div>
              <h4 className="xl:text-2xl lg:text-xl sm:text-lg  font-extrabold mb-3">
                Mesa de ayuda
              </h4>
              <p className="lg:text-base sm:text-sm text-xs">
                Somos centro autorizado de servicios HP inc a nivel nacional
                para la atención de garantías para servidores, portatiles,
                desktops e impresoras.
              </p>
            </div>
            <div>
              <h4 className="xl:text-2xl lg:text-xl sm:text-lg  font-extrabold mb-3">
                Soporte en sitio
              </h4>
              <p className="lg:text-base sm:text-sm text-xs">
                Proveemos personal calificado, con experiencia en la atención de
                incidentes y requerimientos directamente en las instalaciones de
                nuestros clientes a nivel nacional.
              </p>
            </div>
            <div>
              <h4 className="xl:text-2xl lg:text-xl sm:text-lg  font-extrabold mb-3">
                Administrador de redes
              </h4>
              <p className="lg:text-base sm:text-sm text-xs">
                El objetivo de este servicio es recuperar la conectividad LAN
                según los acuerdos de niveles de servicio definidos o prevenir
                que falle.
              </p>
            </div>
            <div>
              <h4 className="xl:text-2xl lg:text-xl sm:text-lg  font-extrabold mb-3">
                Monitoreo
              </h4>
              <p className="lg:text-base sm:text-sm text-xs">
                Cubre el monitoreo de alarmas que se presentan a través de las
                diferentes herramientas de monitoreo del cliente.
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
