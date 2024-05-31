'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
import './style.css';
import { FaSearch } from 'react-icons/fa';

import MobileMenu from '../MobileMenu';

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
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/assets/images/header/logo-teste.png"
                alt="Logo do casamento de Gabriel e Gabriela, com as letras 'G' entrelaçadas e detalhes florais."
                width={80}
                height={50}
              />
            </Link>
            <nav className="lg:flex hidden">
              <ul className="flex gap-8">
                <li>
                  <Link href="/" className="font-medium text-xl header-item">
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="font-medium text-xl header-item"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#events"
                    className="font-medium text-xl header-item"
                  >
                    Evento
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#gallery"
                    className="font-medium text-xl header-item"
                  >
                    Galeria
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#rsvp"
                    className="font-medium text-xl header-item"
                  >
                    RSVP
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="font-medium text-xl header-item"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="hidden lg:block">
              <FaSearch />
            </div>
            <div className="lg:hidden block">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
