"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/images/logo-blanco.png";
import React, { useEffect, useState } from "react";
import SubmenuServices from "./SubmenuServices";

const Example = () => {
  const pathname = usePathname();
  const activePage = pathname.split("/")[1];
  const [newMenu, setNewMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
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
    <div className="lg:flex relative w-full hidden">
      <div className="flex w-full items-center justify-between px-20 py-7 absolute z-50">
        <Link href="/">
          <Image src={logo} alt="logo" className="xl:w-64 lg:w-56" priority />
        </Link>
        <div className="flex items-center justify-center">
          <header
            className={`fixed shadow-custom-xl bg-white rounded-full flex items-center justify-between transition-all duration-700 ease-in-out ${
              newMenu
                ? "pl-10 py-1 pr-1 text-black"
                : "px-10 py-3 backdrop-blur-md bg-opacity-40 text-white"
            }`}
          >
            <div className="flex gap-12 items-center lg:text-base xl:text-lg font-bold">
              <Link
                href="/"
                className={`hover:text-main ${
                  activePage === "" && "text-main"
                }`}
              >
                Inicio
              </Link>
              <SubmenuServices newMenu={newMenu} />
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
                className={`bg-main px-3 py-2 text-white rounded-full items-center lg:text-base xl:text-lg font-bold hover:bg-lighterMain ${
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
          className="bg-main px-3 py-2 text-white rounded-full items-center lg:text-base xl:text-lg font-bold hover:bg-lighterMain"
        >
          Contáctanos
        </Link>
      </div>
    </div>
  );
};

export default Example;
