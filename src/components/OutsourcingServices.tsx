import Image from "next/image";
import React from "react";
import dxc from "../../public/images/DXC.png";
import { HeadsetSvg } from "@/icons";

export default function OutsourcingServices() {
  return (
    <div
      className="bg-secondary text-white flex flex-col justify-center px-28 h-screen "
      id="outsourcing-services"
    >
      <div className="flex w-full gap-56">
        <div className="mt-14 flex flex-col gap-20">
          <h3 className="text-4xl font-extrabold max-w-xl">
            Mediante el Outsourcing de TI ofrecemos una gran ayuda para las
            empresas.
          </h3>
          <div className="grid grid-cols-2 gap-14 max-w-2xl">
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
        </div>
        <div className="w-2/5 flex flex-col gap-20">
          <h3 className="text-6xl font-extrabold block-appear">
            IT OUTOURCING
          </h3>
          <div className="flex flex-col gap-10 text-xl">
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
          <div>
            <h5 className="text-lg max-w-72 mb-10">
              Instalación y manejo para el extensiones de garantía.
            </h5>
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
        </div>
      </div>
    </div>
  );
}
