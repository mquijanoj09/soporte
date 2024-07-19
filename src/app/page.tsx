import {
  Hero,
  Brands,
  Advantages,
  DeliveryServices,
  OutsourcingServices,
  WarrantyServices,
  Services,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="h-screen bg-white"></div>
      <Advantages />
      <Brands />
      <Services />
      <WarrantyServices />
      <OutsourcingServices />
      <DeliveryServices />
    </main>
  );
}
