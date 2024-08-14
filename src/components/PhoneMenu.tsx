"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import SubmenuServices from "./SubmenuServices";
import { CommunitySvg, HeadsetSvg, HomeSvg, ServicesSvg } from "@/icons";
import { useState } from "react";

interface Props {
  setCelMenu: (value: boolean) => void;
  celMenu: boolean;
}

export default function PhoneMenu({ setCelMenu, celMenu }: Props) {
  const pathname = usePathname();
  const activePage = pathname.split("/")[1];
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function handleClosePhoneMenu(route: string) {
    router.push(route);
    setCelMenu(false);
  }

  return (
    <div
      className={`${
        celMenu ? "opacity-100" : "opacity-0"
      } bg-secondary text-white h-screen z-40 w-full absolute transition-opacity duration-700 ease-in-out`}
    >
      <div className="flex flex-col h-full gap-16 items-center justify-center text-xl font-bold">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div
            className="flex flex-col justify-center items-center gap-2 z-20"
            onClick={() => setOpen(true)}
          >
            <ServicesSvg activePage={activePage} />
            <SubmenuServices open={open} setOpen={setOpen} />
          </div>
        </div>
        <div
          onClick={() => handleClosePhoneMenu("/")}
          className={`sm:hover:text-main cursor-pointer flex flex-col justify-center items-center gap-2 ${
            activePage === "" && "text-main"
          }`}
        >
          <HomeSvg activePage={activePage} />
          Inicio
        </div>
        <div
          onClick={() => handleClosePhoneMenu("/nosotros")}
          className={`sm:hover:text-main cursor-pointer flex flex-col justify-center items-center gap-2 ${
            activePage === "nosotros" && "text-main"
          }`}
        >
          <CommunitySvg activePage={activePage} />
          Nosotros
        </div>
        <div
          onClick={() => handleClosePhoneMenu("/contacto")}
          className={`sm:hover:text-main cursor-pointer flex flex-col justify-center items-center gap-2 ${
            activePage === "contacto" && "text-main"
          }`}
        >
          <HeadsetSvg activePage={activePage} />
          Contacto
        </div>
      </div>
    </div>
  );
}
