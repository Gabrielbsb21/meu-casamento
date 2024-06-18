'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Slide } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <footer className="relative z-1 bg-primary-color-s3">
      <section>
        <div className="container mx-auto px-4 pt-12 pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-6">
            <article className="mb-8 lg:mb-0 px-4">
              <h2 className="text-2xl font-bold text-gray-950 mb-4">Links</h2>
              <div className="grid grid-cols-2 gap-1">
                <nav>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <Link href="/#about">Sobre</Link>
                    </li>
                    <li>
                      <Link href="/#gallery">Galeria</Link>
                    </li>
                  </ul>
                </nav>
                <nav>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <Link href="/#rsvp">RSVP</Link>
                    </li>
                    <li>
                      <Link href="/gift">Presentes</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </article>
            <article className="mb-8 lg:mb-0 px-4">
              <h2 className="text-2xl font-bold text-gray-950 mb-4">
                Logo do Casal
              </h2>
              <p className="text-gray-950 text-lg">
                Mal podemos esperar para ver todos os nossos queridos amigos e
                parentes em nosso casamento.
              </p>
            </article>
            <article className="mb-8 lg:mb-0 px-4">
              <h2 className="text-2xl font-bold text-gray-950 mb-4">Contato</h2>
              <p className="text-gray-950 text-lg">
                Vem de zap, vem de e-mail, vem de sinal de fumaça, mas vem!
              </p>
            </article>
          </div>
          <article className="text-center mt-12">
            <p className="text-gray-950">
              Desenvolvido por <strong>Gabriel & Gabriela</strong>
            </p>
          </article>
        </div>
      </section>
      <div className="absolute left-0 bottom-0 z-1">
        <Slide direction="left" duration={1000} triggerOnce={true}>
          <Image
            src="/assets/images/footer/footer-shape-1.svg"
            alt=""
            width={160}
            height={110}
          />
        </Slide>
      </div>
      <div className="absolute right-0 top-0 z-1">
        <Slide direction="right" duration={1200} triggerOnce={true}>
          <Image
            src="/assets/images/footer/footer-shape-2.svg"
            alt=""
            width={160}
            height={110}
          />
        </Slide>
      </div>
    </footer>
  );
};

export default Footer;
