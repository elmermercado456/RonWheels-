import "./globals.css";

export const metadata = {
  title: "Ronwheels | Catálogo de Autos a Escala",
  description: "Catálogo e-commerce de Ronwheels. Colecciona autos a escala, Hot Wheels, Mini GT y Dioramas. Entrega inmediata.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@600;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
