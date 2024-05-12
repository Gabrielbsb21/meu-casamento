'use client';

import React from 'react';

import '../styles/globals.css';

/* import components */
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Gabriel &amp; Gabriela</title>
        <meta
          name="description"
          content="Site do casamento da Gabriela e Gabriel"
        />
        <meta name="keywords" content="Casamento" />
        <meta name="author" content="Aspar - Assessoria e Tecnologia" />
      </head>
      <body>
        <Preloader />
        <div id="wrapper">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
