import Image from "next/image";
import ibm from "../../public/images/1.png";
import dxc from "../../public/images/2.png";
import toshiba from "../../public/images/3.png";
import hp from "../../public/images/4.png";
import argos from "../../public/images/5.png";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
} from "../../public/images/logos/index";

export default function Brands() {
  return (
    <>
      <div className="bg-secondary text-white gap-20 w-full flex flex-col justify-center h-full py-28">
        <h3 className="font-extrabold xl:text-5xl lg:text-4xl text-center">
          Nuestros aliados
        </h3>
        <div className="flex overflow-hidden gap-32">
          <div className="flex animate-loop-scroll gap-32">
            <div className="border-t border-white absolute top-0 w-[500dvw] z-[60]" />
            <div className="border-b border-white absolute bottom-44 w-[500dvw] z-[60]" />
            <div className="flex flex-col gap-10">
              <Image
                src={dxc}
                alt="logo"
                className="max-w-none z-50 lg:w-52 xl:w-64"
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="xl:text-2xl lg:text-xl font-extrabold mb-3">
                  DXC
                </h4>
                <p className="max-w-72 lg:text-sm">
                  HP Warranty Service y IT outsourcing.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <Image
                src={toshiba}
                alt="logo"
                className="max-w-none z-50 lg:w-52 xl:w-64"
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="xl:text-2xl lg:text-xl font-extrabold mb-3">
                  Toshiba
                </h4>
                <p className="max-w-72 lg:text-sm">
                  Atención de Garantías y Mantenimientos de equipos POS a nivel
                  Nacional.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <Image
                src={hp}
                alt="logo"
                className="max-w-none z-50 lg:w-52 xl:w-64"
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="xl:text-2xl lg:text-xl font-extrabold mb-3">
                  HP INC
                </h4>
                <p className="max-w-72 lg:text-sm">
                  Atención de Garantías, Migraciones, Roll out, Creaciones de
                  Imágenes y Replicaciones masivas.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <Image
                src={argos}
                alt="logo"
                className="max-w-none z-50 lg:w-52 xl:w-64"
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="xl:text-2xl lg:text-xl font-extrabold mb-3">
                  Argos
                </h4>
                <p className="max-w-72 lg:text-sm">
                  Garantia Off Site y para portátiles en impresoras.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <Image
                src={ibm}
                alt="logo"
                className="max-w-none z-50 lg:w-52 xl:w-64"
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="xl:text-2xl lg:text-xl font-extrabold mb-3">
                  IBM
                </h4>
                <p className="max-w-72 lg:text-sm">
                  Mesa de Ayuda, Soporte en Sitio, Migraciones, Roll out,
                  Creaciones de Imágenes y Replicaciones masivas.
                </p>
              </div>
            </div>
          </div>
          <div className="flex animate-loop-scroll gap-32">
            <div className="border-t border-white absolute top-0 w-[100dvw] z-[60]" />
            <div className="border-b border-white absolute bottom-44 w-[500dvw] z-[60]" />
            <div className="flex flex-col gap-10">
              <Image
                src={dxc}
                alt="logo"
                className="max-w-none z-50 lg:w-52 xl:w-64"
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="xl:text-2xl lg:text-xl font-extrabold mb-3">
                  DXC
                </h4>
                <p className="max-w-72 lg:text-sm">
                  HP Warranty Service y IT outsourcing.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <Image
                src={toshiba}
                alt="logo"
                className="max-w-none z-50 lg:w-52 xl:w-64"
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="xl:text-2xl lg:text-xl font-extrabold mb-3">
                  Toshiba
                </h4>
                <p className="max-w-72 lg:text-sm">
                  Atención de Garantías y Mantenimientos de equipos POS a nivel
                  Nacional.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <Image
                src={hp}
                alt="logo"
                className="max-w-none z-50 lg:w-52 xl:w-64"
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="xl:text-2xl lg:text-xl font-extrabold mb-3">
                  HP INC
                </h4>
                <p className="max-w-72 lg:text-sm">
                  Atención de Garantías, Migraciones, Roll out, Creaciones de
                  Imágenes y Replicaciones masivas.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <Image
                src={argos}
                alt="logo"
                className="max-w-none z-50 lg:w-52 xl:w-64"
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="xl:text-2xl lg:text-xl font-extrabold mb-3">
                  Argos
                </h4>
                <p className="max-w-72 lg:text-sm">
                  Garantia Off Site y para portátiles en impresoras.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <Image
                src={ibm}
                alt="logo"
                className="max-w-none z-50 lg:w-52 xl:w-64"
              />
              <div className="flex justify-center flex-col items-center text-center">
                <h4 className="xl:text-2xl lg:text-xl font-extrabold mb-3">
                  IBM
                </h4>
                <p className="max-w-72 lg:text-sm">
                  Mesa de Ayuda, Soporte en Sitio, Migraciones, Roll out,
                  Creaciones de Imágenes y Replicaciones masivas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-main xl:p-28 lg:py-28 lg:px-10 flex flex-col items-center justify-center"
        id="clients"
      >
        <h3 className="font-extrabold xl:text-5xl lg:text-4xl mb-10 text-center text-white">
          Quienes Confían en Nosotros
        </h3>
        <div className="grid xl:grid-cols-6 lg:grid-cols-4 gap-x-10 justify-center items-center">
          <Image src={img1} alt="logo" className="block-appear" />
          <Image src={img2} alt="logo" className="block-appear" />
          <Image src={img3} alt="logo" className="block-appear" />
          <Image src={img4} alt="logo" className="block-appear" />
          <Image src={img5} alt="logo" className="block-appear" />
          <Image src={img6} alt="logo" className="block-appear" />
          <Image src={img7} alt="logo" className="block-appear" />
          <Image src={img8} alt="logo" className="block-appear" />
          <Image src={img9} alt="logo" className="block-appear" />
          <Image src={img11} alt="logo" className="block-appear" />
          <Image src={img12} alt="logo" className="block-appear" />
          <Image src={img13} alt="logo" className="block-appear" />
          <Image src={img14} alt="logo" className="block-appear" />
          <Image src={img15} alt="logo" className="block-appear" />
          <Image src={img16} alt="logo" className="block-appear" />
          <Image src={img17} alt="logo" className="block-appear" />
          <Image src={img18} alt="logo" className="block-appear" />
          <Image src={img19} alt="logo" className="block-appear" />
          <Image src={img20} alt="logo" className="block-appear" />
          <Image src={img21} alt="logo" className="block-appear" />
          <Image src={img22} alt="logo" className="block-appear" />
          <Image src={img23} alt="logo" className="block-appear" />
          <Image src={img24} alt="logo" className="block-appear" />
          <Image src={img25} alt="logo" className="block-appear" />
        </div>
      </div>
    </>
  );
}
