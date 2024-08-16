import Image from "next/image";
import img from "../../public/images/im1.jpg";
import Link from "next/link";

export default function Info() {
  return (
    <div className="bg-secondary min-h-screen h-full text-white flex flex-col lg:flex-row relative pt-28 sm:pt-36 pb-20 sm:px-16 px-10 xl:px-20">
      <div className="lg:w-2/5 flex items-center justify-center flex-col h-full gap-48">
        <div className="flex justify-center flex-col lg:text-left text-center items-center lg:items-start">
          <h3 className="xl:text-2xl text-xl font-extrabold mb-2">
            Centro de Innovación
          </h3>
          <h1 className="xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-extrabold">
            Soluciones avanzadas en tecnología
          </h1>
          <h3 className="xl:text-2xl lg:text-xl md:text-lg lg:mt-20 mt-10 mb-5 font-extrabold">
            Cobertura Nacional
          </h3>
          <h2 className="xl:text-xl lg:text-lg md:text-base text-sm xl:max-w-96 lg:max-w-72 md:max-w-xl max-w-80">
            Presencia directa en más de 40 Ciudades y capacidad para llegar a
            más de 200 Municipios a nivel Nacional
          </h2>
          <div className="lg:mt-20 mt-10 mb-5">
            <p className="text-lg font-extrabold">Info@soporte.co</p>
            <p className="text-lg font-extrabold">+57 300 465363</p>
            <Link
              href={"/contacto"}
              className="bg-main text-white hover:bg-lighterMain rounded-full p-4 mt-5 block w-fit lg:text-base text-sm"
            >
              Ponte en contacto
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-3/5 min-h-full h-96 lg:h-auto relative">
        <Image src={img} alt="Hero" fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
}
