import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import { Hanken_Grotesk } from "next/font/google";
import StructuredData from "./_components/StructuredData";

const hanken_grotesk = Hanken_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "Desarrollo Web y Apps en Uruguay | PYA DEVS",
  description:
    "Desarrollo web y de aplicaciones en Uruguay. En PYA.uy creamos sitios web, tiendas online y apps a medida para emprendedores, startups y empresas.",
  keywords: [
    "desarrollo web uruguay",
    "desarrollo de aplicaciones",
    "diseño web uruguay",
    "tiendas online",
    "landing pages",
    "PYA DEVS",
    "programación uruguay",
    "desarrollo web montevideo",
    "apps uruguay",
    "sitios web uruguay",
  ],
  authors: [{ name: "PYA DEVS" }],
  creator: "PYA DEVS",
  publisher: "PYA DEVS",
  metadataBase: new URL("https://pya.uy"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Desarrollo Web y Apps en Uruguay | PYA DEVS",
    description:
      "Desarrollo web y de aplicaciones en Uruguay. Creamos sitios web, tiendas online y apps a medida para emprendedores, startups y empresas.",
    url: "https://pya.uy",
    siteName: "PYA DEVS",
    locale: "es_UY",
    type: "website",
    images: [
      {
        url: "https://pya.uy/Logo.svg",
        width: 1200,
        height: 630,
        alt: "PYA DEVS - Desarrollo Web Uruguay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo Web y Apps en Uruguay | PYA DEVS",
    description:
      "Desarrollo web y de aplicaciones en Uruguay. Creamos sitios web, tiendas online y apps a medida.",
    images: ["https://pya.uy/Logo.svg"],
    creator: "@pya.devs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full" lang="es">
      <body className={`m-0 h-full ${hanken_grotesk.className}`}>
        <StructuredData />
        <div id="root">
          {children}
          <SpeedInsights />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
