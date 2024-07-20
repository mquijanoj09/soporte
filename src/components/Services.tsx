"use client";
import Image from "next/image";
import img1 from "../../public/images/pc.jpg";
import img2 from "../../public/images/im2.jpg";
import img3 from "../../public/images/im3.jpg";
import { CommunitySvg, HeadsetSvg, InnovationSvg, StatsUpSvg } from "@/icons";
import { scrollToSection } from "@/utils/scrollTo";

export default function Services() {
  return (
    <div className="bg-white h-screen flex" id="services">
      <div className="w-1/4 h-full bg-secondary flex flex-col p-16 text-white gap-36 justify-center">
        <div className="flex flex-col gap-10">
          <h3 className="font-extrabold text-5xl block-appear">
            Nuestros servicios
          </h3>
          <p>
            Nuestros servicios están diseñados para asegurar que cada
            departamento interno reciba el apoyo necesario y una asistencia
            técnica especializada, optimizando así los procesos tecnológicos en
            las organizaciones.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-9">
          <div>
            <CommunitySvg />
            <h4 className="text-lg font-bold">Colaboración</h4>
            <p className="text-xs">
              Las áreas de la empresa se apoyan mutuamente para un
              funcionamiento eficiente.
            </p>
          </div>
          <div>
            <HeadsetSvg />
            <h4 className="text-lg font-bold">Asistencia</h4>
            <p className="text-xs">
              El equipo de Soporte ofrece asistencia técnica especializada.
            </p>
          </div>
          <div>
            <StatsUpSvg />
            <h4 className="text-lg font-bold">Optimización</h4>
            <p className="text-xs">
              Ayudamos a mejorar los procesos tecnológicos de las
              organizaciones.
            </p>
          </div>
          <div>
            <InnovationSvg />
            <h4 className="text-lg font-bold">Innovación</h4>
            <p className="text-xs">
              Impulsamos la innovación en los procesos de las organizaciones.
            </p>
          </div>
        </div>
      </div>
      <div className="w-3/4 h-full flex justify-between gap-20 px-14 py-28 overflow-hidden">
        <div
          className="bg-lighterGray w-full flex flex-col gap-5 justify-between rounded-md transform transition-transform cursor-pointer duration-300 hover:scale-105 shadow-md"
          onClick={() => scrollToSection("warranty-services")}
        >
          <div className="relative h-2/3">
            <Image
              src={img1}
              alt="services"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md rounded-b-none"
            />
          </div>
          <div className="flex flex-col gap-3 px-10 py-6">
            <h3 className="font-bold text-4xl text-darkerMain">01</h3>
            <h4 className="font-bold text-3xl text-darkerMain">
              HP Warranty Service
            </h4>
            <p>
              Garantía Estándar / Garantía Personalizada / Atención de equipos
              fuera de garantías - Reparación.
            </p>
          </div>
        </div>
        <div
          className="bg-lighterGray w-full flex flex-col gap-5 justify-between rounded-md transform transition-transform cursor-pointer duration-300 hover:scale-105 shadow-md"
          onClick={() => scrollToSection("outsourcing-services")}
        >
          <div className="relative h-2/3">
            <Image
              src={img2}
              alt="services"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md rounded-b-none"
            />
          </div>
          <div className="flex flex-col gap-3 px-10 py-6">
            <h3 className="font-bold text-4xl text-darkerMain">02</h3>
            <h4 className="font-bold text-3xl text-darkerMain">
              IT Outsourcing
            </h4>
            <p>
              Mesa de Ayuda / Soporte en Sitio / Monitoreo / Administrador de
              Redes / Gestión de Activos de TI.
            </p>
          </div>
        </div>
        <div
          className="bg-lighterGray w-full flex flex-col gap-5 justify-between rounded-md transform transition-transform cursor-pointer duration-300 hover:scale-105 shadow-md"
          onClick={() => scrollToSection("delivery-services")}
        >
          <div className="relative h-2/3">
            <Image
              src={img3}
              alt="services"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md rounded-b-none"
            />
          </div>
          <div className="flex flex-col gap-3 px-10 py-6">
            <h3 className="font-bold text-4xl text-darkerMain">03</h3>
            <h4 className="font-bold text-3xl text-darkerMain">
              Project Delivery
            </h4>
            <p>
              Migraciones / Roll Out / Creaciones de Imágenes y Replicaciones
              masivas / Almacenamiento y Continuidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
