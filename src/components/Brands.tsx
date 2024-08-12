import Image from "next/image";
import ibm from "../../public/images/1.png";
import dxc from "../../public/images/2.png";
import toshiba from "../../public/images/3.png";
import hp from "../../public/images/4.png";
import argos from "../../public/images/5.png";

import logo2 from "../../public/images/logo-blanco.png";

export default function Brands() {
  return (
    <>
      <div className="bg-secondary text-white gap-20 w-full flex flex-col justify-center h-full p-28">
        <h3 className="font-extrabold text-5xl text-center">
          Nuestros aliados
        </h3>
        <div className="flex overflow-hidden gap-16">
          <div className="flex animate-loop-scroll  gap-16">
            <div className="border-t border-white absolute top-0 w-screen z-[60]" />
            <div className="border-b border-white absolute bottom-44 w-screen z-[60]" />
            <div className="flex flex-col gap-10">
              <Image
                src={dxc}
                alt="logo"
                className="max-w-none z-50"
                width={250}
                height={250}
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="text-2xl font-extrabold mb-3">DXC</h4>
                <p className="max-w-72">
                  HP Warranty Service y IT outsourcing.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <Image
                src={toshiba}
                alt="logo"
                className="max-w-none z-50"
                width={250}
                height={250}
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="text-2xl font-extrabold mb-3">Toshiba</h4>
                <p className="max-w-72">
                  Atención de Garantías y Mantenimientos de equipos POS a nivel
                  Nacional.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <Image
                src={hp}
                alt="logo"
                className="max-w-none z-50"
                width={250}
                height={250}
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="text-2xl font-extrabold mb-3">HP INC</h4>
                <p className="max-w-72">
                  Atención de Garantías, Migraciones, Roll out, Creaciones de
                  Imágenes y Replicaciones masivas.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <Image
                src={argos}
                alt="logo"
                className="max-w-none z-50"
                width={250}
                height={250}
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="text-2xl font-extrabold mb-3">Argos</h4>
                <p className="max-w-72">
                  Garantia Off Site y para portátiles en impresoras.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <Image
                src={ibm}
                alt="logo"
                className="max-w-none z-50"
                width={250}
                height={250}
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="text-2xl font-extrabold mb-3">IBM</h4>
                <p className="max-w-72">
                  Mesa de Ayuda, Soporte en Sitio, Migraciones, Roll out,
                  Creaciones de Imágenes y Replicaciones masivas.
                </p>
              </div>
            </div>
          </div>
          <div className="flex animate-loop-scroll  gap-16">
            <div className="border-t border-white absolute top-0 w-full z-[60]" />
            <div className="border-b border-white absolute bottom-44 w-full z-[60]" />
            <div className="flex flex-col gap-10">
              <Image
                src={dxc}
                alt="logo"
                className="max-w-none z-50"
                width={250}
                height={250}
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="text-2xl font-extrabold mb-3">DXC</h4>
                <p className="max-w-72">
                  HP Warranty Service y IT outsourcing.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <Image
                src={toshiba}
                alt="logo"
                className="max-w-none z-50"
                width={250}
                height={250}
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="text-2xl font-extrabold mb-3">Toshiba</h4>
                <p className="max-w-72">
                  Atención de Garantías y Mantenimientos de equipos POS a nivel
                  Nacional.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <Image
                src={hp}
                alt="logo"
                className="max-w-none z-50"
                width={250}
                height={250}
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="text-2xl font-extrabold mb-3">HP INC</h4>
                <p className="max-w-72">
                  Atención de Garantías, Migraciones, Roll out, Creaciones de
                  Imágenes y Replicaciones masivas.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <Image
                src={argos}
                alt="logo"
                className="max-w-none z-50"
                width={250}
                height={250}
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="text-2xl font-extrabold mb-3">Argos</h4>
                <p className="max-w-72">
                  Garantia Off Site y para portátiles en impresoras.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <Image
                src={ibm}
                alt="logo"
                className="max-w-none z-50"
                width={250}
                height={250}
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="text-2xl font-extrabold mb-3">IBM</h4>
                <p className="max-w-72">
                  Mesa de Ayuda, Soporte en Sitio, Migraciones, Roll out,
                  Creaciones de Imágenes y Replicaciones masivas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-screen bg-main px-28 flex flex-col items-center justify-center"
        id="clients"
      >
        <h3 className="font-extrabold text-5xl mb-28 text-center text-white">
          Quienes Confían en Nosotros
        </h3>
        <div className="grid grid-cols-4 gap-x-40 gap-y-12">
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
          <Image src={logo2} alt="logo" width={250} className="block-appear" />
        </div>
      </div>
    </>
  );
}
