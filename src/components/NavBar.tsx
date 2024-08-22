"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/images/logo-blanco.png";
import logo2 from "../../public/images/logo.png";
import React, { useEffect, useState } from "react";
import SubmenuServices from "./SubmenuServices";
import { CloseSvg, HeadsetSvg, MenuSvg } from "@/icons";
import PhoneMenu from "./PhoneMenu";

const Example = () => {
  const pathname = usePathname();
  const activePage = pathname.split("/")[1];
  const isHome = activePage === "";
  const [newMenu, setNewMenu] = useState(false);
  const [celMenu, setCelMenu] = useState(false);

  function handleSetCelMenu() {
    setCelMenu((prev) => !prev);
  }

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

  useEffect(() => {
    celMenu
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [celMenu]);

  return (
    <div className="flex relative w-full">
      <div className="flex w-full items-center justify-between px-6 sm:px-10 lg:px-14 xl:px-20 py-7 absolute z-50">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="xl:w-64 lg:w-56 md:w-40 sm:hidden w-40 md:block block"
            priority
          />
          <Image
            src={logo2}
            alt="logo"
            className="md:hidden sm:w-12 hidden sm:block"
            priority
          />
        </Link>
        <div className="flex items-center justify-center">
          <header
            className={`fixed hidden shadow-custom-xl bg-white rounded-full sm:flex items-center justify-between transition-all duration-700 ease-in-out ${
              newMenu
                ? "pl-10 py-1 pr-1 text-black"
                : "px-10 py-3 backdrop-blur-md bg-opacity-40 text-white"
            }`}
          >
            <div className="flex gap-12 items-center sm:text-sm lg:text-base xl:text-lg font-bold">
              <Link
                href="/"
                className={`hover:text-main ${
                  activePage === "" && "text-main"
                }`}
              >
                Inicio
              </Link>
              {isHome && <SubmenuServices newMenu={newMenu} />}
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
                className={`bg-main px-3 py-2 text-white rounded-full items-center sm:text-sm lg:text-base xl:text-lg font-bold hover:bg-lighterMain ${
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
          className="bg-main px-3 py-2 xl:ml-28 lg:ml-24 hidden md:block text-white rounded-full items-center sm:text-sm lg:text-base xl:text-lg font-bold hover:bg-lighterMain"
        >
          Contáctanos
        </Link>
        <Link
          href={"/contacto"}
          className="bg-main px-3 py-2 xl:ml-28 lg:ml-24 md:hidden sm:block hidden text-white rounded-full items-center sm:text-sm lg:text-base xl:text-lg font-bold hover:bg-lighterMain"
        >
          <HeadsetSvg />
        </Link>
        <div
          className="sm:hidden block cursor-pointer"
          onClick={() => handleSetCelMenu()}
        >
          <div
            className={`${
              celMenu ? "opacity-100" : "opacity-0"
            } absolute right-6 top-9 transition-opacity duration-300 ease-in-out block sm:hidden`}
          >
            <CloseSvg />
          </div>
          <div
            className={`${
              celMenu ? "opacity-0" : "opacity-100"
            } absolute right-6 top-9 transition-opacity duration-300 ease-in-out block sm:hidden`}
          >
            <MenuSvg />
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <PhoneMenu setCelMenu={setCelMenu} celMenu={celMenu} />
      </div>
    </div>
  );
};

export default Example;
