"use client";
import Image from "next/image";
import img from "../../public/images/im1.jpeg";
import { MailSvg, PhoneSvg } from "@/icons";

export default function Info() {
  function contactMailAction() {
    window.location.href = "mailto:procesos@soporte.com.co";
  }

  function contactCallAction() {
    window.location.href = "tel:+573184870221";
  }

  return (
    <div className="lg:bg-secondary min-h-[100dvh] text-white flex flex-col md:flex-row relative pt-28 sm:pt-36 pb-12 px-10 xl:px-20 bg-[url('/images/im1.jpeg')] bg-cover gap-10">
      <div className="bg-neutral-950/70 absolute inset-0" />
      <div className="md:w-2/5 flex items-center flex-col h-full gap-48 z-30">
        <div className="flex justify-center flex-col">
          <h3 className="xl:text-4xl lg:text-3xl text-2xl font-extrabold mb-4">
            Centro de Innovación
          </h3>
          <h1 className="xl:text-6xl lg:text-5xl text-4xl font-extrabold max-w-xl">
            Soluciones avanzadas en tecnología
          </h1>
          <h3 className="xl:text-3xl text-2xl lg:mt-20 mt-10 mb-5 font-extrabold">
            Cobertura Nacional
          </h3>
          <h2 className="xl:text-2xl lg:text-xl text-lg max-w-xl">
            Presencia directa en más de 50 Ciudades y capacidad para llegar a
            más de 300 Municipios a nivel Nacional.
          </h2>
          <div className="lg:mt-20 mt-10 mb-5">
            <p className="lg:text-xl text-lg font-extrabold">
              procesos@soporte.com.co
            </p>
            <p className="lg:text-xl text-lg font-extrabold">+57 318 4870221</p>
            <div className="flex gap-5 mt-5">
              <button
                onClick={() => contactCallAction()}
                className="bg-main text-white hover:bg-lighterMain flex justify-center items-center rounded-full p-4 w-fit lg:text-base text-sm"
              >
                <PhoneSvg />
              </button>
              <button
                onClick={() => contactMailAction()}
                className="bg-main text-white hover:bg-lighterMain flex justify-center items-center rounded-full p-4 w-fit lg:text-base text-sm"
              >
                <MailSvg />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-3/5 min-h-full hidden md:block relative">
        <Image
          src={img}
          alt="Hero"
          fill
          style={{ objectFit: "cover" }}
          sizes="100%"
        />
      </div>
    </div>
  );
}
