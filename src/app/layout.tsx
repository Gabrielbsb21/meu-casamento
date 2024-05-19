import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/globals.css';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>Gabriel &amp; Gabriela</title>
        <meta
          name="description"
          content="Site do casamento da Gabriela e Gabriel"
        />
        <meta name="keywords" content="Casamento" />
        <meta name="author" content="Gabriel Teixeira" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
