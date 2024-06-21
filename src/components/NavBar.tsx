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
      <div className="fixed top-0 z-30 flex h-28 w-full items-center justify-between bg-lighterGray bg-opacity-40 py-6 shadow-md backdrop-blur-md px-28" />
      <header className="fixed top-0 z-30 flex h-28 w-full items-center justify-between py-6 px-28">
        <Link href="/">
          <Image src={logo} alt="logo" width={250} />
        </Link>
        <div className="flex gap-12 text-black items-center text-xl font-bold">
          <Link
            href="/"
            className={`hover:text-main ${activePage === "" && "text-main"}`}
          >
            Home
          </Link>
          <Link
            href={"/servicios"}
            className={`hover:text-main ${
              activePage === "servicios" && "text-main"
            }`}
          >
            Servicios
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
