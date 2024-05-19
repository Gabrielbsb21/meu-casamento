'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';
import './style.css';

const Header = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const className = scroll > 80 ? 'fixed-navbar active' : 'fixed-navbar';

  return (
    <header className={className}>
      <div className="bg-transparent">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link href="/">
              <h1>Logo do Casal</h1>
            </Link>
            <nav>
              <ul>
                <li>
                  <Link href="/#home">Home</Link>
                </li>
                <li>
                  <Link href="/#about">Sobre</Link>
                </li>
                <li>
                  <Link href="/#events">Eventos</Link>
                </li>
                <li>
                  <Link href="/#gallery">Galeria</Link>
                </li>
                <li>
                  <Link href="/#rsvp">RSVP</Link>
                </li>
                <li>
                  <Link href="/#contact">Contato</Link>
                </li>
              </ul>
            </nav>
            <p>Login?</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
