import React from "react";
import "./index.css";
import { Hanken_Grotesk } from 'next/font/google';

const hanken_grotesk = Hanken_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "Tus ideas hechas realidad | PYA DEVS",
  description:
    "Desarrollamos la web para tu emprendimiento, y hacemos que tus ideas se vuelvan realidad.",
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full" lang="es">
      <body className={`m-0 h-full ${hanken_grotesk.className}`}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
