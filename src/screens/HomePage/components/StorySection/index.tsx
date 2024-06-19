'use client';

import Image from 'next/image';
import { JackInTheBox } from 'react-awesome-reveal';
import Storys from './storys';
import pin from '/public/assets/images/story/pin.svg';
import ring from '/public/assets/images/story/ring.svg';
import shape1 from '/public/assets/images/story/flower-shape1.svg';
import shape2 from '/public/assets/images/story/flower-shape2.svg';
import shape3 from '/public/assets/images/story/flower-shape3.svg';
import shape4 from '/public/assets/images/story/flower-shape4.svg';
import './style.css';

const StorySection = () => {
  return (
    <section className="wpo-story-section" id='history'>
      <div className="container mx-auto px-4">
        <header className="text-center wpo-section-title">
          <span>Nossa História</span>
          <h2>Como Aconteceu</h2>
        </header>
        <div className="wpo-story-wrap">
          {Storys.map((story, st) => (
            <div className="wpo-story-item" key={st}>
              <div className="row">
                <div className={`col col-lg-6 col-12 ${story.order1}`}>
                  <div className="wpo-story-img">
                    <Image src={story.sImg} alt="" />
                  </div>
                </div>

                <div className={`col col-lg-6 col-12 ${story.order2}`}>
                  <JackInTheBox duration={1000} triggerOnce={true}>
                    <div className="wpo-story-content">
                      <div className="thumb">
                        <span>{story.date}</span>
                        <div className="pin">
                          <Image src={pin} alt="" />
                        </div>
                      </div>
                      <h2>{story.title}</h2>
                      <p>{story.description}</p>
                      <div className="flower">
                        <Image src={story.flower} alt="" />
                      </div>
                    </div>
                  </JackInTheBox>
                </div>

              </div>
              <div className="ring-wrap">
                {Array.from({ length: 10 }, (_, i) => (
                  <div className="ring" key={i}>
                    <Image src={ring} alt="" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flower-shape-1">
        <Image src={shape1} alt="" />
      </div>
      <div className="flower-shape-2">
        <Image src={shape2} alt="" />
      </div>
      <div className="flower-shape-3">
        <Image src={shape3} alt="" />
      </div>
      <div className="flower-shape-4">
        <Image src={shape4} alt="" />
      </div>
    </section>
  );
};

export default StorySection;
