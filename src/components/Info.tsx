import Image from "next/image";
import img from "../../public/images/im1.jpg";
import Link from "next/link";

export default function Info() {
  return (
    <div className="bg-secondary min-h-screen h-full text-white flex relative pt-28 sm:pt-44 pb-20 sm:px-16 px-10 lg:px-36 xl:px-28">
      <div className="w-1/3 flex items-center justify-center flex-col h-full gap-48">
        <div className="flex justify-center flex-col">
          <h3 className="text-2xl font-extrabold">Centro de Innovación</h3>
          <h1 className="text-6xl font-extrabold">
            Soluciones avanzadas en tecnología
          </h1>
          <h3 className="text-2xl mt-20 mb-5 font-extrabold">
            Cobertura Nacional
          </h3>
          <h2 className="text-xl ">
            Presencia directa en más de 40 Ciudades y capacidad para llegar a
            más de 200 Municipios a nivel Nacional
          </h2>
          <div className="mt-20">
            <p className="text-lg font-extrabold">Info@soporte.co</p>
            <p className="text-lg font-extrabold">+57 300 465363</p>
            <Link
              href={"/contacto"}
              className="bg-main text-white hover:bg-lighterMain rounded-full p-4 mt-5 block w-fit"
            >
              Ponte en contacto
            </Link>
          </div>
        </div>
      </div>
      <div className="w-2/3 h-full relative">
        <Image src={img} alt="Hero" fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
}
