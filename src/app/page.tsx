import {
  Hero,
  Brands,
  Advantages,
  DeliveryServices,
  OutsourcingServices,
  WarrantyServices,
  Services,
  Footer,
  Cards,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cards />
      <Advantages />
      <Brands />
      <Services />
      <WarrantyServices />
      <OutsourcingServices />
      <DeliveryServices />
      <Footer />
    </main>
  );
}
