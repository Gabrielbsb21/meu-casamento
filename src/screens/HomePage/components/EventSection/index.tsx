'use client';

import React from 'react';
import { Slide } from 'react-awesome-reveal';
import sImg1 from '/public/assets/images/sitio.jpeg';
import sImg2 from '/public/assets/images/event/2.jpg';
import sImg3 from '/public/assets/images/event/3.jpg';
import Image, { StaticImageData } from 'next/image';

import './style.css';
import Link from 'next/link';

interface Event {
  Simg: StaticImageData;
  title: string;
  li1: string;
  li2: string;
  animation: number;
}

const events: Event[] = [
  {
    Simg: sImg1,
    title: 'A recepção',
    li1: 'Domingo dia 25 de Agosto de 2024',
    li2: 'Núcleo Rural Taguatinga Chacara 29 - Taguatinga, Brasília - DF',
    animation: 1200
  },
  {
    Simg: sImg1,
    title: 'A festa',
    li1: 'Domingo dia 25 de Agosto de 2024',
    li2: 'Núcleo Rural Taguatinga Chacara 29 - Taguatinga, Brasília - DF',
    animation: 1600
  }
];

interface EventSectionProps {
  rClass?: string;
}

const EventSection: React.FC<EventSectionProps> = (props) => {
  return (
    <section
      className={`wpo-event-section section-padding ${props.rClass || ''}`}
      id="event"
    >
      <div className="container mx-auto px-4">
        <header className="text-center wpo-section-title">
          <span>Nosso Casamento</span>
          <h2>Quando & Onde</h2>
        </header>
        <div className="wpo-event-wrap">
          <div
            className="flex"
            style={{ justifyContent: 'center', gap: '2rem' }}
          >
            {events.map((event, eitem) => (
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3" key={eitem}>
                <Slide direction="up" duration={event.animation} triggerOnce>
                  <div className="wpo-event-item">
                    <div className="wpo-event-img">
                      <div className="wpo-event-img-inner">
                        <Image src={event.Simg} alt="" width={400} height={400}/>
                      </div>
                    </div>
                    <div className="wpo-event-text">
                      <div className="title">
                        <h2>{event.title}</h2>
                      </div>
                      <ul>
                        <li>{event.li1}</li>
                        <li>{event.li2}</li>
                        <li>
                          <Link href="https://maps.app.goo.gl/P2cRgAvuiuzkCd3g9" target='_blank'>
                            Localização
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Slide>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
