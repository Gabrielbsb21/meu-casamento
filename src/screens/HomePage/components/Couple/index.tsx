import Image from 'next/image';
import coupleImg1 from '/public/assets/images/couple/1.jpg';
import coupleImg2 from '/public/assets/images/couple/2.jpg';
import bg from '/public/assets/images/couple/image-bg.svg';

import './style.css';

const Couple = () => {
  return (
    <section className="wpo-couple-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4">
          <article className="couple-item">
            <div className="couple-img-wrap">
              <div className="couple-img">
                <Image src={coupleImg1} alt="" />
              </div>
              <div className="c-shape">
                <Image src={bg} alt="" />
              </div>
            </div>
            <div className="couple-text">
              <h3>Gabriela Lopes</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                orci auctor vitae nisl. Erat fringilla pellentesque amet tempus.
                Commodo mi vitae, sagittis blandit.
              </p>
            </div>
          </article>
          <article className="last-child">
            <div className="couple-item">
              <div className="couple-img-wrap">
                <div className="couple-img">
                  <Image src={coupleImg2} alt="" />
                </div>
                <div className="c-shape">
                  <Image src={bg} alt="" />
                </div>
              </div>
              <div className="couple-text">
                <h3>Gabriel Teixeira</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
                  orci auctor vitae nisl. Erat fringilla pellentesque amet
                  tempus. Commodo mi vitae, sagittis blandit.
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
