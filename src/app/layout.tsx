import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import classNames from "classnames";
import { NavBar } from "@/components";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

const myFont = localFont({ src: "../fonts/NoveraClassicRegular.otf" });

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soporte SA - Servicios tecnológicos de alto desempeño.",
  description:
    "Soprte SA es una empresa de servicios tecnólogicos de alto desempeño, HP Warranty Service, IT Outsourcing, Project Delivery. SOPORTE SA fue fundada en 1995 con el fin de ofrecer servicios de calidad para los equipos de TI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="preload"
          href="/fonts/NoveraClassicRegular.otf"
          as="font"
          type="font/otf"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_package_v0.16/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_package_v0.16/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_package_v0.16/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_package_v0.16/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon_package_v0.16/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#2b122b" />
      </head>
      <body
        className={classNames(
          inter.className,
          "relative h-[100dvh] bg-secondary w-[100dvw] overflow-x-hidden"
        )}
      >
        <NavBar />
        <Providers>
          <div>
            {children}
            <Analytics />
          </div>
        </Providers>
      </body>
    </html>
  );
}
