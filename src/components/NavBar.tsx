"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/images/logo-blanco.png";
import React, { useEffect, useState } from "react";
import ServicesSubmenu from "./ServicesSubmenu";

const Example = () => {
  const pathname = usePathname();
  const activePage = pathname.split("/")[1];
  const [newMenu, setNewMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
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
            className={`fixed shadow-custom-xl bg-white rounded-full flex items-center justify-between transition-all duration-700 ease-in-out ${
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
              <ServicesSubmenu newMenu={newMenu} />
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
    </div>
  );
};

export default Example;
