import React from 'react';
import './index.css';
import { Hanken_Grotesk } from 'next/font/google';

const hanken_grotesk = Hanken_Grotesk({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'BG Desarrollo',
  description: 'BG Desarrollo is a software development company.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`m-0 ${hanken_grotesk.className}`}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
