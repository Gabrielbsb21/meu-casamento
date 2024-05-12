/* eslint-disable tailwindcss/no-custom-classname */
import './style.css';

const Hero = () => {
  return (
    <section id="hero">
      <article className="relative py-20">
        <div className="hero-wrapper">
          <h2>Reserve a data</h2>
          <h1 className="hero-title text-white">
            <span>Gabriela</span> <small>&</small> <span>Gabriel</span>
          </h1>
          <p className="hero-subtitle text-white">
            <span>25</span> Agosto de 2024
          </p>
        </div>
      </article>
    </section>
  );
};

export default Hero;
