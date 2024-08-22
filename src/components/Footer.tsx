import Image from "next/image";
import logo from "../../public/images/logo-blanco.png";
import Link from "next/link";
import {
  ChatSvg,
  CitySvg,
  CommunitySvg,
  HeadsetSvg,
  HomeSvg,
  InstagramSvg,
} from "@/icons";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="bg-darkerSecondary w-full text-white lg:px-28 sm:px-20 px-14 py-14 flex flex-col">
      <div className="flex lg:flex-row flex-col justify-between lg:gap-0 gap-16">
        <div>
          <Image alt="logo" src={logo} className="xl:w-52 w-48" />
          <div className="mt-4 flex gap-4 items-center">
            <div className="w-4">
              <CitySvg width />
            </div>
            <a
              target="_blank"
              className="xl:text-base lg:text-sm sm:text-base text-sm hover:text-main"
              href="https://www.google.com/maps/place/Soporte+S.A/@6.2122777,-75.5734167,17z/data=!3m1!4b1!4m6!3m5!1s0x8e44282c5803d435:0x589cbe4836d1d77!8m2!3d6.2122724!4d-75.5708418!16s%2Fg%2F11clyfm446?hl=es&entry=ttu"
            >
              Edificio Nelida, Cra. 43B #11-59 Oficina 203, El Poblado,
              Medellín, Antioquia.
            </a>
          </div>
        </div>
        <div className="flex lg:gap-32">
          <div className="sm:w-1/2 w-3/5 flex flex-col gap-3">
            <h2 className="xl:text-xl lg:text-lg sm:text-xl text-lg font-bold">
              Navegación
            </h2>
            <Link
              className="xl:text-base lg:text-sm sm:text-base text-sm hover:text-main flex gap-2 items-center"
              href="/"
            >
              <div className="w-4">
                <HomeSvg width />
              </div>
              <p>Inicio</p>
            </Link>
            <Link
              className="xl:text-base lg:text-sm sm:text-base text-sm hover:text-main flex gap-2 items-center"
              href="/nosotros"
            >
              <div className="w-4">
                <CommunitySvg width />
              </div>
              <p>Nosotros</p>
            </Link>
            <Link
              className="xl:text-base lg:text-sm sm:text-base text-sm hover:text-main flex gap-2 items-center"
              href="/contacto"
            >
              <div className="w-4">
                <HeadsetSvg width />
              </div>
              <p>Contacto</p>
            </Link>
          </div>
          <div className="sm:w-1/2 w-2/5 flex flex-col gap-3">
            <h2 className="xl:text-xl lg:text-lg sm:text-xl text-lg font-bold">
              Social
            </h2>
            <a
              target="_blank"
              className="xl:text-base lg:text-sm sm:text-base text-sm hover:text-main flex gap-2 items-center"
              href="/"
            >
              <div className="w-4">
                <InstagramSvg width />
              </div>
              <p>Instagram</p>
            </a>
            <a
              target="_blank"
              href="https://wa.me/573002133485?text=Hola,%20tengo%20una%20pregunta!"
              className="xl:text-base lg:text-sm sm:text-base text-sm hover:text-main flex gap-2 items-center"
            >
              <div className="w-4">
                <ChatSvg width />
              </div>
              <p>WhatsApp</p>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full mt-16 border-t border-white">
        <div className="xl:text-sm lg:text-xs sm:text-base text-sm mt-4 flex flex-col sm:flex-row justify-between">
          <p>© {currentYear} Soporte SA.</p>
          <p>Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
}
