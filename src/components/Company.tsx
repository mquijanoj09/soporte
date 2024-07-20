import Image from "next/image";
import logo from "../../public/images/logo.jpg";
import empleados from "../../public/images/soporte-empleados.jpg";

export default function Company() {
  return (
    <div className="bg-main text-white h-screen flex relative">
      <div className="w-2/3 px-28 flex items-center">
        <div className="max-w-lg flex flex-col gap-7">
          <h2 className="font-extrabold text-4xl">
            SOPORTE SA fue fundada en 1995 para ofrecer servicios de calidad a
            los equipos de TI
          </h2>
          <p>
            El propósito de sus Fundadores era el de proveer servicios, no
            vender computadores, sólo servicios.
          </p>
          <p>
            Antes de finalizar el primer año de funcionamiento, el concepto de
            “Centro de Servicio Inmediato Compaq” comenzó en Medellín como
            piloto para Compaq Latinoamérica, poco después, comenzaron las
            operaciones en Cali y Barranquilla. En 2002 el Proyecto de CRC
            (Centro de Reparación del Central) se inicia en Bogotá para la
            atención de las garantías de los equipos del segmento de consumo.
          </p>
          <p>
            Desde noviembre de 2006 y hasta la fecha, Soporte SA fue
            seleccionada como el único servicio autorizado en Colombia para
            ofrecer servicios de garantía para el PSG comercial e ISS. Hoy,
            después de 21 años de operación, Soporte SA cuenta con una cobertura
            de servicios de garantía en 31 ciudades colombianas.
          </p>
          <p>
            En 2007 se inició la Gerecia de Proyectos Especiales con el
            propósito de ofrecer nuevos servicios. (Outsoucing de Servicios de
            TI, entrega, gestión de proyectos, etc)
          </p>
        </div>
      </div>
      <div className="bg-white w-1/3 relative"></div>
      <Image
        src={empleados}
        height={650}
        alt="Soporte SA"
        className="absolute transform -translate-x-36 -translate-y-1/2 top-1/2 left-1/2 animated-images"
      />
    </div>
  );
}
