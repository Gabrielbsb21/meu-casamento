'use client';

import React from 'react';
import { Slide } from 'react-awesome-reveal';
import sImg1 from '/public/assets/images/event/1.jpg';
import sImg2 from '/public/assets/images/event/2.jpg';
import sImg3 from '/public/assets/images/event/3.jpg';
import Image, { StaticImageData } from 'next/image';

import './style.css';

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
    li1: 'Dia e Horario',
    li2: 'Endereço',
    animation: 1200
  },
  {
    Simg: sImg3,
    title: 'A festa',
    li1: 'Dia e Horario',
    li2: 'Endereço',
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
          <div className="flex" style={{ justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
            {events.map((event, eitem) => (
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3" key={eitem}>
                <Slide direction="up" duration={event.animation} triggerOnce>
                  <div className="wpo-event-item">
                    <div className="wpo-event-img">
                      <div className="wpo-event-img-inner">
                        <Image src={event.Simg} alt="" />
                      </div>
                    </div>
                    <div className="wpo-event-text">
                      <div className="title">
                        <h2>{event.title}</h2>
                      </div>
                      <ul>
                        <li>{event.li1}</li>
                        <li>{event.li2}</li>
                        <li>Link</li>
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
