"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/images/logo-color.png";
import { useEffect, useState } from "react";
import { PlusSvg } from "@/icons";
import MinusSvg from "@/icons/MinusSvg";
import ServicesSubMenu from "./ServicesSubMenu";

export default function NavBar() {
  const pathname = usePathname();
  const activePage = pathname.split("/")[1];
  const [newMenu, setNewMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setNewMenu(true);
      } else {
        setNewMenu(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      <div className="flex w-full items-center justify-between px-20 py-7 absolute z-50">
        <Link href="/">
          <Image src={logo} alt="logo" width={250} />
        </Link>
        <div className="flex items-center justify-center">
          <header
            className={`fixed shadow-xl bg-white rounded-full flex items-center justify-between transition-all duration-700 ease-in-out ${
              newMenu
                ? "pl-10 py-1 pr-1 text-black"
                : "px-10 py-3 backdrop-blur-md bg-opacity-40 text-white"
            }`}
          >
            <div className="flex gap-12 items-center text-lg font-bold">
              <Link
                href="/"
                className={`hover:text-main ${
                  activePage === "" && "text-main"
                }`}
              >
                Inicio
              </Link>
              <div
                className="relative cursor-default flex items-center gap-1 px-1 mr-2"
                onMouseEnter={() => setShowServices(true)}
              >
                Servicios{" "}
                <span
                  className={`absolute -right-5 ${
                    showServices
                      ? "opacity-100 transition-opacity duration-300"
                      : "opacity-0 transition-opacity duration-300"
                  }`}
                >
                  <MinusSvg color={newMenu ? "#000000" : "#ffffff"} />
                </span>
                <span
                  className={`absolute -right-5 ${
                    !showServices
                      ? "opacity-100 transition-opacity duration-300"
                      : "opacity-0 transition-opacity duration-300"
                  }`}
                >
                  <PlusSvg color={newMenu ? "#000000" : "#ffffff"} />
                </span>
              </div>
              <Link
                href={"/nosotros"}
                className={`hover:text-main ${
                  activePage === "nosotros" && "text-main"
                }`}
              >
                Nosotros
              </Link>
              <Link
                href={"/contacto"}
                className={`bg-main px-3 py-2 text-white rounded-full items-center text-lg font-bold hover:bg-lighterMain ${
                  !newMenu && "hidden"
                }`}
              >
                Contáctanos
              </Link>
            </div>
          </header>
        </div>
        <Link
          href={"/contacto"}
          className="bg-main px-3 py-2 text-white rounded-full items-center text-lg font-bold hover:bg-lighterMain"
        >
          Contáctanos
        </Link>
      </div>
      <div
        className={`fixed flex items-center justify-center w-1/2 z-[100] mt-24 transform -translate-x-1/2 left-1/2 ${
          showServices
            ? "opacity-100 transition-opacity duration-500"
            : "opacity-0 transition-opacity duration-500"
        }`}
        onMouseLeave={() => setShowServices(false)}
      >
        <ServicesSubMenu setShowServices={setShowServices} />
      </div>
    </div>
  );
}
