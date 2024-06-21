import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import classNames from "classnames";
import { Footer, NavBar } from "@/components";

const myFont = localFont({ src: "../fonts/NoveraClassicRegular.otf" });

export const metadata: Metadata = {
  title: "Soporte SA - Servicios tecnológicos de alto desempeño.",
  description:
    "Soprte SA es una empresa de servicios tecnológicos de alto desempeño.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={classNames(myFont.className, "relative h-[100dvh] bg-white")}
      >
        <NavBar />
        <div className="pt-28">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
