import './index.css';
import { Red_Hat_Display } from 'next/font/google';

const rhd = Red_Hat_Display({
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
      <body className={`m-0 ${rhd.className}`}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
