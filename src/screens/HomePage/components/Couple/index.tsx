import Image from 'next/image';
import gabriela from '/public/assets/images/couple/gabriela.jpg';
import gabriel from '/public/assets/images/couple/gabriel.jpg';
import bg from '/public/assets/images/couple/image-bg.svg';

import './style.css';

const Couple = () => {
  return (
    <section className="wpo-couple-section" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4">
          <article className="couple-item">
            <div className="couple-img-wrap">
              <div className="couple-img">
                <Image
                  src={gabriela}
                  alt=""
                  className="w-[514px] h-[458px] object-cover sm:w-[400px] sm:h-[350px] xs:w-[300px] xs:h-[250px]"
                />
              </div>
              <div className="c-shape">
                <Image src={bg} alt="" />
              </div>
            </div>
            <div className="couple-text">
              <h3>Gabriela Lopes</h3>
              <p>
                Gabriela é a luz que ilumina o meu caminho. Seu sorriso
                contagiante e sua bondade são apenas algumas das qualidades que
                a tornam tão especial. Desde o momento em que nos conhecemos,
                ela me ensinou o verdadeiro significado do amor e da parceria.
                Gabriela é não apenas a mulher dos meus sonhos, mas também minha
                melhor amiga e confidente.
              </p>
            </div>
          </article>
          <article className="last-child">
            <div className="couple-item">
              <div className="couple-img-wrap">
                <div className="couple-img">
                  <Image src={gabriel} alt="" className="w-[514px] h-[458px] object-cover sm:w-[400px] sm:h-[350px] xs:w-[300px] xs:h-[250px]"/>
                </div>
                <div className="c-shape">
                  <Image src={bg} alt="" />
                </div>
              </div>
              <div className="couple-text">
                <h3>Gabriel Teixeira</h3>
                <p>
                  Gabriel é o meu porto seguro. Sua sabedoria e seu apoio
                  incondicional me dão forças para enfrentar qualquer desafio.
                  Desde que nos encontramos, ele tem sido meu companheiro fiel,
                  sempre ao meu lado em cada passo da nossa jornada. Gabriel tem
                  um coração generoso e um espírito vibrante, sempre disposto a
                  ajudar e a fazer o bem.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="shape-1">
        <svg
          viewBox="0 0 1920 692"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1">
            <path
              className="stroke-color"
              d="M-11 689C176.333 697 609 669.4 841 495L1111 279C1263.67 154.333 1640.6 -71.0002 1927 24.9998"
              stroke=""
              strokeWidth="2"
            />
            <path
              d="M-11 689C176.333 697 609 669.4 841 495L1111 279C1263.67 154.333 1640.6 -71.0002 1927 24.9998"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="2"
            />
          </g>
          <g opacity="0.1">
            <path
              className="stroke-color"
              d="M1927 689C1739.67 697 1307 669.4 1075 495L805 279C652.333 154.333 275.4 -71.0002 -11 24.9998"
              stroke=""
              strokeWidth="2"
            />
            <path
              d="M1927 689C1739.67 697 1307 669.4 1075 495L805 279C652.333 154.333 275.4 -71.0002 -11 24.9998"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="2"
            />
          </g>
          <path
            className="fill-color"
            d="M879 397C501.4 54.5998 135 31.6665 -1 62.9998V649C579.8 636.2 827.667 475.667 879 397Z"
            fill=""
          />
          <path
            className="fill-color"
            d="M1041 397C1418.6 54.5998 1785 31.6665 1921 62.9998V649C1340.2 636.2 1092.33 475.667 1041 397Z"
            fill=""
          />
        </svg>
      </div>
    </section>
  );
};

export default Couple;
