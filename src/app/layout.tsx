'use client';

import { Poppins } from 'next/font/google';
import '../styles/globals.css';

/* import components */
import Header from '@/components/Header';
import Preloader from '@/components/Preloader';

const poppins = Poppins({
  weight: ['300', '400', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Gabriel &amp; Gabriela</title>
      </head>
      <body className={poppins.className}>
        <Preloader />
        <div id="wrapper">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
