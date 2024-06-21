'use client';

import Image from 'next/image';
import shape1 from '/public/assets/images/slider/shape1.svg';
import shape2 from '/public/assets/images/slider/shape2.svg';
import shape3 from '/public/assets/images/slider/shape3.svg';
import shape4 from '/public/assets/images/slider/shape4.svg';
import shape5 from '/public/assets/images/slider/shape5.svg';
import shape6 from '/public/assets/images/slider/shape6.svg';
import hero1 from '/public/assets/images/slider/hero-1.jpg';
import couple from '/public/assets/images/couple/casal.jpg';
import bgshape from '/public/assets/images/slider/bg-shape.png';
import { Slide } from 'react-awesome-reveal';
import './style.css';

import TimeCountDown from '../TimeCountDown';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="container mx-auto px-4">
            <div className="flex items-center" id="wrap">
              <article className="wpo-static-hero-inner">
                <div className="shape-1">
                  <Slide direction="up" duration={1000} triggerOnce={true}>
                    <Image src={shape1} alt="" />
                  </Slide>
                </div>
                <div className="slide-title">
                  <Slide direction="up" duration={1200} triggerOnce={true}>
                    <h2>Gabriela & Gabriel</h2>
                  </Slide>
                </div>
                <div className="slide-text">
                  <Slide direction="up" duration={1400} triggerOnce={true}>
                    <p>Vamos nos casar em 25 de Agosto de 2024</p>
                  </Slide>
                </div>
                <div className="wpo-wedding-date">
                  <Slide direction="up" duration={1600} triggerOnce={true}>
                    <div className="clock-grids">
                      <div id="clock">
                        <TimeCountDown />
                      </div>
                    </div>
                  </Slide>
                </div>
                <div className="shape-2">
                  <Slide direction="up" duration={1800} triggerOnce={true}>
                    <Image src={shape2} alt="" />
                  </Slide>
                </div>
              </article>
              <article className="static-hero-right">
                <div className="static-hero-img scene" id="scene">
                  <div className="static-hero-img-inner">
                    <Image src={couple} alt="" />
                  </div>
                  <div className="static-hero-shape-1">
                    <span className="layer" data-depth="0.25">
                      <Slide
                        direction="down"
                        duration={1000}
                        triggerOnce={true}
                      >
                        <Image src={shape3} alt="" />
                      </Slide>
                    </span>
                  </div>
                  <div className="static-hero-shape-2">
                    <span className="layer" data-depth="0.45">
                      <Slide
                        direction="down"
                        duration={1200}
                        triggerOnce={true}
                      >
                        <Image src={shape4} alt="" />
                      </Slide>
                    </span>
                  </div>
                  <div className="static-hero-shape-3">
                    <span className="layer" data-depth="0.65">
                      <Slide direction="up" duration={1400} triggerOnce={true}>
                        <Image src={shape5} alt="" />
                      </Slide>
                    </span>
                  </div>
                  <div className="static-hero-shape-4">
                    <Slide direction="right" duration={1600} triggerOnce={true}>
                      <Image src={shape6} alt="" />
                    </Slide>
                  </div>
                </div>
                <div className="static-hero-img-bg">
                  <Image src={bgshape} alt="" />
                </div>
              </article>
            </div>
            <div className="right-shape">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 650 597"
                fill="none"
              >
                <path d="M717 0C717 0 527.91 0 475.696 129.736C423.481 259.472 501.092 358.185 396.683 423.034C292.274 487.902 74.9839 485.573 26.2847 646.096C-22.3947 806.598 11.4538 863 11.4538 863L653.509 803.776L717 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
