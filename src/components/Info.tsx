import Image from "next/image";
import img from "../../public/images/im1.jpeg";
import Link from "next/link";

export default function Info() {
  return (
    <div className="lg:bg-secondary min-h-screen h-full text-white flex flex-col md:flex-row relative pt-28 sm:pt-36 pb-20 px-10 xl:px-20 bg-[url('/images/im1.jpeg')] bg-fixed bg-center bg-no-repeat bg-cover gap-10">
      <div className="bg-neutral-950/70 absolute inset-0" />
      <div className="md:w-2/5 flex items-center justify-center flex-col h-full gap-48 z-30">
        <div className="flex justify-center flex-col">
          <h3 className="xl:text-4xl lg:text-3xl text-2xl font-extrabold mb-4">
            Centro de Innovación
          </h3>
          <h1 className="xl:text-6xl lg:text-5xl text-4xl font-extrabold max-w-xl">
            Soluciones avanzadas en tecnología
          </h1>
          <h3 className="xl:text-3xl text-2xl lg:mt-20 mt-10 mb-5 font-extrabold">
            Cobertura Nacional
          </h3>
          <h2 className="xl:text-2xl lg:text-xl text-lg max-w-xl">
            Presencia directa en más de 40 Ciudades y capacidad para llegar a
            más de 200 Municipios a nivel Nacional
          </h2>
          <div className="lg:mt-20 mt-10 mb-5">
            <p className="lg:text-xl text-lg font-extrabold">Info@soporte.co</p>
            <p className="lg:text-xl text-lg font-extrabold">+57 300 465363</p>
            <Link
              href={"/contacto"}
              className="bg-main text-white hover:bg-lighterMain rounded-full p-4 mt-5 block w-fit lg:text-base text-sm"
            >
              Ponte en contacto
            </Link>
          </div>
        </div>
      </div>
      <div className="md:w-3/5 min-h-full hidden md:block relative">
        <Image src={img} alt="Hero" fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
}
