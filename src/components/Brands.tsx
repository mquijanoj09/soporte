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
        <div className="gap-12 flex-col w-full grid grid-cols-5 h-48 relative border-y">
          <div className="relative">
            <Image src={dxc} layout="fill" objectFit="cover" alt="logo" />
          </div>

          <div className="relative">
            <Image src={toshiba} layout="fill" objectFit="cover" alt="logo" />
          </div>
          <div className="relative">
            <Image src={hp} layout="fill" objectFit="cover" alt="logo" />
          </div>
          <div className="relative">
            <Image src={argos} layout="fill" objectFit="cover" alt="logo" />
          </div>
          <div className="relative">
            <Image src={ibm} layout="fill" objectFit="cover" alt="logo" />
          </div>
        </div>
        <div className="gap-12 flex-col grid grid-cols-5">
          <div>
            <h4 className="text-2xl font-extrabold mb-3">DXC</h4>
            <p className="max-w-72">HP Warranty Service y IT outsourcing.</p>
          </div>
          <div>
            <h4 className="text-2xl font-extrabold mb-3">Toshiba</h4>
            <p className="max-w-72">
              Atención de Garantías y Mantenimientos de equipos POS a nivel
              Nacional.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-extrabold mb-3">HP INC</h4>
            <p className="max-w-72">
              Atención de Garantías, Migraciones, Roll out, Creaciones de
              Imágenes y Replicaciones masivas.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-extrabold mb-3">Argos</h4>
            <p className="max-w-72">
              Garantia Off Site y para portátiles en impresoras.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-extrabold mb-3">IBM</h4>
            <p className="max-w-72">
              Mesa de Ayuda, Soporte en Sitio, Migraciones, Roll out, Creaciones
              de Imágenes y Replicaciones masivas.
            </p>
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
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
          <Image src={logo2} alt="logo" width={250} />
        </div>
      </div>
    </>
  );
}
