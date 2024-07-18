import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import classNames from "classnames";
import { Footer, NavBar } from "@/components";
import Providers from "./providers";

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
      <head>
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
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={classNames(myFont.className, "relative h-[100dvh] bg-white")}
      >
        <NavBar />
        <Providers>
          <div className="pt-28">{children}</div>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
