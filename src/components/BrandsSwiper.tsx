import Image from "next/image";
import ibm from "../../public/images/1.png";
import dxc from "../../public/images/2.png";
import toshiba from "../../public/images/3.png";
import hp from "../../public/images/4.png";
import argos from "../../public/images/5.png";

const BrandsSwiper = () => {
  return (
    <div className="flex">
      <div className="flex ticker-track">
        <div className="flex flex-col gap-5">
          <Image
            src={dxc}
            alt="logo"
            className="max-w-none z-50 xl:w-96 xl:px-20 md:w-80 md:px-10 px-5 w-60 border-y border-white"
            loading="eager"
          />
          <div className="flex justify-center flex-col items-center text-center md:px-16 px-5">
            <h4 className="xl:text-2xl md:text-xl font-extrabold mb-3">DXC</h4>
            <p className="lg:max-w-72 md:max-w-96 sm:text-sm text-xs md:text-base">
              HP Warranty Service y IT outsourcing.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image
            src={toshiba}
            alt="logo"
            className="max-w-none z-50 xl:w-96 xl:px-20 md:w-80 md:px-10 px-5 w-60 border-y border-white"
            loading="eager"
          />
          <div className="flex justify-center flex-col items-center text-center md:px-16 px-5">
            <h4 className="xl:text-2xl md:text-xl font-extrabold mb-3">
              Toshiba
            </h4>
            <p className="lg:max-w-72 md:max-w-96 sm:text-sm text-xs md:text-base">
              Atención de Garantías y Mantenimientos de equipos POS a nivel
              Nacional.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image
            src={hp}
            alt="logo"
            className="max-w-none z-50 xl:w-96 xl:px-20 md:w-80 md:px-10 px-5 w-60 border-y border-white"
            loading="eager"
          />
          <div className="flex justify-center flex-col items-center text-center md:px-16 px-5">
            <h4 className="xl:text-2xl md:text-xl font-extrabold mb-3">
              HP INC
            </h4>
            <p className="lg:max-w-72 md:max-w-96 sm:text-sm text-xs md:text-base">
              Atención de Garantías, Migraciones, Roll out, Creaciones de
              Imágenes y Replicaciones masivas.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image
            src={argos}
            alt="logo"
            className="max-w-none z-50 xl:w-96 xl:px-20 md:w-80 md:px-10 px-5 w-60 border-y border-white"
            loading="eager"
          />
          <div className="flex justify-center flex-col items-center text-center md:px-16 px-5">
            <h4 className="xl:text-2xl md:text-xl font-extrabold mb-3">
              Argos
            </h4>
            <p className="lg:max-w-72 md:max-w-96 sm:text-sm text-xs md:text-base">
              Garantia Off Site y para portátiles en impresoras.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image
            src={ibm}
            alt="logo"
            className="max-w-none z-50 xl:w-96 xl:px-20 md:w-80 md:px-10 px-5 w-60 border-y border-white"
            loading="eager"
          />
          <div className="flex justify-center flex-col items-center text-center md:px-16 px-5">
            <h4 className="xl:text-2xl md:text-xl font-extrabold mb-3">IBM</h4>
            <p className="lg:max-w-72 md:max-w-96 sm:text-sm text-xs md:text-base">
              Mesa de Ayuda, Soporte en Sitio, Migraciones, Roll out, Creaciones
              de Imágenes y Replicaciones masivas.
            </p>
          </div>
        </div>
      </div>
      <div className="flex ticker-track">
        <div className="flex flex-col gap-5">
          <Image
            src={dxc}
            alt="logo"
            className="max-w-none z-50 xl:w-96 xl:px-20 md:w-80 md:px-10 px-5 w-60 border-y border-white"
            loading="eager"
          />
          <div className="flex justify-center flex-col items-center text-center md:px-16 px-5">
            <h4 className="xl:text-2xl md:text-xl font-extrabold mb-3">DXC</h4>
            <p className="lg:max-w-72 md:max-w-96 sm:text-sm text-xs md:text-base">
              HP Warranty Service y IT outsourcing.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image
            src={toshiba}
            alt="logo"
            className="max-w-none z-50 xl:w-96 xl:px-20 md:w-80 md:px-10 px-5 w-60 border-y border-white"
            loading="eager"
          />
          <div className="flex justify-center flex-col items-center text-center md:px-16 px-5">
            <h4 className="xl:text-2xl md:text-xl font-extrabold mb-3">
              Toshiba
            </h4>
            <p className="lg:max-w-72 md:max-w-96 sm:text-sm text-xs md:text-base">
              Atención de Garantías y Mantenimientos de equipos POS a nivel
              Nacional.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image
            src={hp}
            alt="logo"
            className="max-w-none z-50 xl:w-96 xl:px-20 md:w-80 md:px-10 px-5 w-60 border-y border-white"
            loading="eager"
          />
          <div className="flex justify-center flex-col items-center text-center md:px-16 px-5">
            <h4 className="xl:text-2xl md:text-xl font-extrabold mb-3">
              HP INC
            </h4>
            <p className="lg:max-w-72 md:max-w-96 sm:text-sm text-xs md:text-base">
              Atención de Garantías, Migraciones, Roll out, Creaciones de
              Imágenes y Replicaciones masivas.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image
            src={argos}
            alt="logo"
            className="max-w-none z-50 xl:w-96 xl:px-20 md:w-80 md:px-10 px-5 w-60 border-y border-white"
            loading="eager"
          />
          <div className="flex justify-center flex-col items-center text-center md:px-16 px-5">
            <h4 className="xl:text-2xl md:text-xl font-extrabold mb-3">
              Argos
            </h4>
            <p className="lg:max-w-72 md:max-w-96 sm:text-sm text-xs md:text-base">
              Garantia Off Site y para portátiles en impresoras.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image
            src={ibm}
            alt="logo"
            className="max-w-none z-50 xl:w-96 xl:px-20 md:w-80 md:px-10 px-5 w-60 border-y border-white"
            loading="eager"
          />
          <div className="flex justify-center flex-col items-center text-center md:px-16 px-5">
            <h4 className="xl:text-2xl md:text-xl font-extrabold mb-3">IBM</h4>
            <p className="lg:max-w-72 md:max-w-96 sm:text-sm text-xs md:text-base">
              Mesa de Ayuda, Soporte en Sitio, Migraciones, Roll out, Creaciones
              de Imágenes y Replicaciones masivas.
            </p>
          </div>
        </div>
      </div>
      <div className="flex ticker-track">
        <div className="flex flex-col gap-5">
          <Image
            src={dxc}
            alt="logo"
            className="max-w-none z-50 xl:w-96 xl:px-20 md:w-80 md:px-10 px-5 w-60 border-y border-white"
            loading="eager"
          />
          <div className="flex justify-center flex-col items-center text-center md:px-16 px-5">
            <h4 className="xl:text-2xl md:text-xl font-extrabold mb-3">DXC</h4>
            <p className="lg:max-w-72 md:max-w-96 sm:text-sm text-xs md:text-base">
              HP Warranty Service y IT outsourcing.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image
            src={toshiba}
            alt="logo"
            className="max-w-none z-50 xl:w-96 xl:px-20 md:w-80 md:px-10 px-5 w-60 border-y border-white"
            loading="eager"
          />
          <div className="flex justify-center flex-col items-center text-center md:px-16 px-5">
            <h4 className="xl:text-2xl md:text-xl font-extrabold mb-3">
              Toshiba
            </h4>
            <p className="lg:max-w-72 md:max-w-96 sm:text-sm text-xs md:text-base">
              Atención de Garantías y Mantenimientos de equipos POS a nivel
              Nacional.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image
            src={hp}
            alt="logo"
            className="max-w-none z-50 xl:w-96 xl:px-20 md:w-80 md:px-10 px-5 w-60 border-y border-white"
            loading="eager"
          />
          <div className="flex justify-center flex-col items-center text-center md:px-16 px-5">
            <h4 className="xl:text-2xl md:text-xl font-extrabold mb-3">
              HP INC
            </h4>
            <p className="lg:max-w-72 md:max-w-96 sm:text-sm text-xs md:text-base">
              Atención de Garantías, Migraciones, Roll out, Creaciones de
              Imágenes y Replicaciones masivas.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image
            src={argos}
            alt="logo"
            className="max-w-none z-50 xl:w-96 xl:px-20 md:w-80 md:px-10 px-5 w-60 border-y border-white"
            loading="eager"
          />
          <div className="flex justify-center flex-col items-center text-center md:px-16 px-5">
            <h4 className="xl:text-2xl md:text-xl font-extrabold mb-3">
              Argos
            </h4>
            <p className="lg:max-w-72 md:max-w-96 sm:text-sm text-xs md:text-base">
              Garantia Off Site y para portátiles en impresoras.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image
            src={ibm}
            alt="logo"
            className="max-w-none z-50 xl:w-96 xl:px-20 md:w-80 md:px-10 px-5 w-60 border-y border-white"
            loading="eager"
          />
          <div className="flex justify-center flex-col items-center text-center md:px-16 px-5">
            <h4 className="xl:text-2xl md:text-xl font-extrabold mb-3">IBM</h4>
            <p className="lg:max-w-72 md:max-w-96 sm:text-sm text-xs md:text-base">
              Mesa de Ayuda, Soporte en Sitio, Migraciones, Roll out, Creaciones
              de Imágenes y Replicaciones masivas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsSwiper;
