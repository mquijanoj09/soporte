import {
  Hero,
  Brands,
  Company,
  Info,
  Advantages,
  Benefits,
  DeliveryServices,
  OutsourcingServices,
  WarrantyServices,
  Services,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <Advantages />
      <Brands />
      <Services />
      <WarrantyServices />
      <OutsourcingServices />
      <DeliveryServices />
    </main>
  );
}
