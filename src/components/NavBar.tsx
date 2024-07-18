"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/images/logo-color.png";

export default function NavBar() {
  const pathname = usePathname();
  const activePage = pathname.split("/")[1];

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 z-30 flex h-28 w-full items-center justify-between py-6 px-28">
        <Link href="/">
          <Image src={logo} alt="logo" width={250} />
        </Link>
        <div className="flex gap-12 text-black items-center text-xl font-bold">
          <Link
            href="/"
            className={`hover:text-main ${activePage === "" && "text-main"}`}
          >
            Inicio
          </Link>
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
            className="bg-main text-white hover:bg-lighterMain rounded-md p-4"
          >
            Contáctanos
          </Link>
        </div>
      </header>
    </>
  );
}
