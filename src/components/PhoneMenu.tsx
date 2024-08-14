"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import SubmenuServices from "./SubmenuServices";

interface Props {
  setCelMenu: (value: boolean) => void;
  celMenu: boolean;
}

export default function PhoneMenu({ setCelMenu, celMenu }: Props) {
  const pathname = usePathname();
  const activePage = pathname.split("/")[1];
  const router = useRouter();

  function handleClosePhoneMenu(route: string) {
    setCelMenu(false);
    router.push(route);
  }

  return (
    <div
      className={`${
        celMenu ? "opacity-100" : "opacity-0"
      } bg-secondary text-white h-screen z-40 w-full absolute transition-opacity duration-300 ease-in-out`}
    >
      <div className="flex flex-col h-full gap-16 items-center justify-center text-xl font-bold">
        <div
          onClick={() => handleClosePhoneMenu("/")}
          className={`hover:text-main ${activePage === "" && "text-main"}`}
        >
          Inicio
        </div>
        <SubmenuServices />
        <div
          onClick={() => handleClosePhoneMenu("/nosotros")}
          className={`hover:text-main ${
            activePage === "nosotros" && "text-main"
          }`}
        >
          Nosotros
        </div>
        <div
          onClick={() => handleClosePhoneMenu("/contacto")}
          className="bg-main px-3 py-2 text-white rounded-full items-center sm:text-sm lg:text-base xl:text-lg font-bold hover:bg-lighterMain"
        >
          Contáctanos
        </div>
      </div>
    </div>
  );
}
