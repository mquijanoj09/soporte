"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import services from "../../public/images/hero3.jpg";
import { scrollToSectionInstant } from "@/utils/scrollTo";
import ArrowTopRightSvg from "@/icons/ArrowTopRightSvg";

interface Props {
  newMenu?: boolean;
}

export default function SubmenuServices({ newMenu }: Props) {
  const [open, setOpen] = useState(false);

  function handleOnClick(target: string) {
    setOpen(false);
    scrollToSectionInstant(target);
  }

  return (
    <>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative w-fit h-fit cursor-default"
      >
        <div
          className={`relative transition-all duration-700 ease-in-out ${
            newMenu ? "text-black" : "text-white"
          }`}
        >
          Servicios
          <span
            style={{
              transform: open ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-1 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-main transition-transform duration-300 ease-out"
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ translateX: "-50%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-1/2 top-12 text-black"
            >
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
              <div className="relative lg:w-[800px] md:w-[600px] sm:w-[450px] w-[350px] h-full rounded-3xl bg-white flex justify-between shadow-custom-xl">
                <div className="flex flex-col w-full sm:w-1/2 h-full md:p-7 p-4 justify-between lg:text-lg md:text-base sm:text-sm">
                  <div
                    className="hover:bg-zinc-100 cursor-pointer p-3 rounded-lg flex flex-col gap-2"
                    onClick={() => handleOnClick("warranty-services")}
                  >
                    <h3 className="text-main">HP Warranty Service</h3>
                    <p className="lg:text-sm text-xs">
                      Garantía Estándar / Garantía Personalizada / Atención de
                      equipos fuera de garantías - Reparación.
                    </p>
                  </div>
                  <div
                    className="hover:bg-zinc-100 cursor-pointer p-3 rounded-lg flex flex-col gap-2"
                    onClick={() => handleOnClick("outsourcing-services")}
                  >
                    <h3 className="text-main">IT Outsourcing</h3>
                    <p className="lg:text-sm text-xs">
                      Mesa de Ayuda / Soporte en Sitio / Monitoreo /
                      Administrador de Redes / Gestión de Activos de TI.
                    </p>
                  </div>
                  <div
                    className="hover:bg-zinc-100 cursor-pointer p-3 rounded-lg flex flex-col gap-2"
                    onClick={() => handleOnClick("delivery-services")}
                  >
                    <h3 className="text-main">Project Delivery</h3>
                    <p className="lg:text-sm text-xs">
                      Migraciones / Roll Out / Creaciones de Imágenes y
                      Replicaciones masivas / Almacenamiento y Continuidad.
                    </p>
                  </div>
                </div>
                <div className="relative hidden sm:block w-1/2 m-2 group">
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

                  <p className="absolute text-white bottom-0 p-4 z-10 cursor-pointer lg:text-lg md:text-base sm:text-sm font-extrabold flex gap-3 items-center">
                    <span className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowTopRightSvg />
                    </span>
                    Conoce más!
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
