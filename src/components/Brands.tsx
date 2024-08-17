import Image from "next/image";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
} from "../../public/images/logos/index";
import BrandsSwiper from "./BrandsSwiper";

export default function Brands() {
  return (
    <>
      <div className="bg-secondary text-white gap-20 w-full flex flex-col justify-center h-full py-28">
        <h3 className="font-extrabold xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-center">
          Nuestros aliados
        </h3>
        <BrandsSwiper />
      </div>
      <div
        className="bg-main xl:p-28 py-28 md:px-10 flex flex-col items-center justify-center"
        id="clients"
      >
        <h3 className="font-extrabold xl:text-5xl lg:text-4xl md:text-3xl text-2xl px-10 sm:px-0 mb-10 text-center text-white">
          Quienes Confían en Nosotros
        </h3>
        <div className="grid xl:grid-cols-6 sm:grid-cols-4 grid-cols-3 md:gap-x-10 px-4 justify-center items-center">
          <Image src={img1} alt="logo" className="block-appear" />
          <Image src={img2} alt="logo" className="block-appear" />
          <Image src={img3} alt="logo" className="block-appear" />
          <Image src={img4} alt="logo" className="block-appear" />
          <Image src={img5} alt="logo" className="block-appear" />
          <Image src={img6} alt="logo" className="block-appear" />
          <Image src={img7} alt="logo" className="block-appear" />
          <Image src={img8} alt="logo" className="block-appear" />
          <Image src={img9} alt="logo" className="block-appear" />
          <Image src={img11} alt="logo" className="block-appear" />
          <Image src={img12} alt="logo" className="block-appear" />
          <Image src={img13} alt="logo" className="block-appear" />
          <Image src={img14} alt="logo" className="block-appear" />
          <Image src={img15} alt="logo" className="block-appear" />
          <Image src={img16} alt="logo" className="block-appear" />
          <Image src={img17} alt="logo" className="block-appear" />
          <Image src={img18} alt="logo" className="block-appear" />
          <Image src={img19} alt="logo" className="block-appear" />
          <Image src={img20} alt="logo" className="block-appear" />
          <Image src={img21} alt="logo" className="block-appear" />
          <Image src={img22} alt="logo" className="block-appear" />
          <Image src={img23} alt="logo" className="block-appear" />
          <Image src={img24} alt="logo" className="block-appear" />
          <Image src={img25} alt="logo" className="block-appear" />
        </div>
      </div>
    </>
  );
}
