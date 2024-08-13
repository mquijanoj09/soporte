"use client";
import Image from "next/image";
import img1 from "../../public/images/pc.jpg";
import img2 from "../../public/images/im2.jpg";
import img3 from "../../public/images/im3.jpg";
import { CommunitySvg, HeadsetSvg, InnovationSvg, StatsUpSvg } from "@/icons";
import { scrollToSectionSmooth } from "@/utils/scrollTo";

export default function Services() {
  return (
    <div className="bg-white h-full flex" id="services">
      <div className="xl:w-1/3 lg:w-2/5 min-h-full bg-secondary flex flex-col py-28 lg:px-16 text-white xl:gap-28 lg:gap-16 justify-center">
        <div className="flex flex-col gap-10">
          <h3 className="font-extrabold xl:text-5xl lg:text-4xl">
            Nuestros servicios
          </h3>
          <p className="lg:text-base xl:text-lg">
            Nuestros servicios están diseñados para asegurar que cada
            departamento interno reciba el apoyo necesario y una asistencia
            técnica especializada, optimizando así los procesos tecnológicos en
            las organizaciones.
          </p>
        </div>
        <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-16 lg:gap-8">
          <div>
            <CommunitySvg />
            <h4 className="xl:text-lg lg:text-base mt-2 font-bold">
              Colaboración
            </h4>
            <p className="lg:text-xs xl:text-base mt-1">
              Las áreas de la empresa se apoyan mutuamente para un
              funcionamiento eficiente.
            </p>
          </div>
          <div>
            <HeadsetSvg />
            <h4 className="xl:text-lg lg:text-base mt-2 font-bold">
              Asistencia
            </h4>
            <p className="lg:text-xs xl:text-base mt-1">
              El equipo de Soporte ofrece asistencia técnica especializada.
            </p>
          </div>
          <div>
            <StatsUpSvg />
            <h4 className="xl:text-lg lg:text-base mt-2 font-bold">
              Optimización
            </h4>
            <p className="lg:text-xs xl:text-base mt-1">
              Ayudamos a mejorar los procesos tecnológicos de las
              organizaciones.
            </p>
          </div>
          <div>
            <InnovationSvg />
            <h4 className="xl:text-lg lg:text-base mt-2 font-bold">
              Innovación
            </h4>
            <p className="lg:text-xs xl:text-base mt-1">
              Impulsamos la innovación en los procesos de las organizaciones.
            </p>
          </div>
        </div>
      </div>
      <div className="xl:w-2/3 lg:w-3/5 min-h-full flex flex-col justify-between gap-10 xl:px-32 py-28 lg:px-20 lg:justify-center items-center">
        <div
          className="bg-lighterGray max-h-64 w-full flex justify-between rounded-md transform transition-transform cursor-pointer duration-300 hover:scale-105 shadow-md"
          onClick={() => scrollToSectionSmooth("warranty-services")}
        >
          <div className="relative w-2/5">
            <Image
              src={img1}
              alt="services"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md rounded-r-none"
            />
          </div>
          <div className="flex flex-col gap-3 p-10 w-3/5">
            <h3 className="font-bold xl:text-4xl lg:text-3xl text-darkerMain">
              01
            </h3>
            <h4 className="font-bold xl:text-3xl lg:text-2xl text-darkerMain">
              HP Warranty Service
            </h4>
            <p className="xl:text-base lg:text-sm">
              Garantía Estándar / Garantía Personalizada / Atención de equipos
              fuera de garantías - Reparación.
            </p>
          </div>
        </div>
        <div
          className="bg-lighterGray max-h-64 w-full flex justify-between rounded-md transform transition-transform cursor-pointer duration-300 hover:scale-105 shadow-md"
          onClick={() => scrollToSectionSmooth("outsourcing-services")}
        >
          <div className="relative w-2/5">
            <Image
              src={img2}
              alt="services"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md rounded-r-none"
            />
          </div>
          <div className="flex flex-col gap-3 p-10 w-3/5">
            <h3 className="font-bold xl:text-4xl lg:text-3xl text-darkerMain">
              02
            </h3>
            <h4 className="font-bold xl:text-3xl lg:text-2xl text-darkerMain">
              IT Outsourcing
            </h4>
            <p className="xl:text-base lg:text-sm">
              Mesa de Ayuda / Soporte en Sitio / Monitoreo / Administrador de
              Redes / Gestión de Activos de TI.
            </p>
          </div>
        </div>
        <div
          className="bg-lighterGray max-h-64 w-full flex justify-between rounded-md transform transition-transform cursor-pointer duration-300 hover:scale-105 shadow-md"
          onClick={() => scrollToSectionSmooth("delivery-services")}
        >
          <div className="relative w-2/5">
            <Image
              src={img3}
              alt="services"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md rounded-r-none"
            />
          </div>
          <div className="flex flex-col gap-3 p-10 w-3/5">
            <h3 className="font-bold xl:text-4xl lg:text-3xl text-darkerMain">
              03
            </h3>
            <h4 className="font-bold xl:text-3xl lg:text-2xl text-darkerMain">
              Project Delivery
            </h4>
            <p className="xl:text-base lg:text-sm">
              Migraciones / Roll Out / Creaciones de Imágenes y Replicaciones
              masivas / Almacenamiento y Continuidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
