"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/images/logo-color.png";
import { useEffect, useState } from "react";
import { PlusSvg } from "@/icons";
import MinusSvg from "@/icons/MinusSvg";

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
              className={`hover:text-main ${activePage === "" && "text-main"}`}
            >
              Inicio
            </Link>
            <div
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <div className="cursor-pointer flex items-center gap-1">
                Servicios{" "}
                <span>
                  {showServices ? (
                    <MinusSvg color={newMenu ? "#000000" : "#ffffff"} />
                  ) : (
                    <PlusSvg color={newMenu ? "#000000" : "#ffffff"} />
                  )}
                </span>
              </div>
              {showServices && (
                <div>
                  <div className="absolute pt-6 w-full left-0 rounded-xl h-2 z-50" />
                  <div className="absolute mt-6 w-full left-0 rounded-xl h-20 bg-red-500 z-50" />
                </div>
              )}
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
  );
}
