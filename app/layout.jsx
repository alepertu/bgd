import './index.css';

export const metadata = {
  title: 'BG Desarrollo',
  description: 'BG Desarrollo is a software development company.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
