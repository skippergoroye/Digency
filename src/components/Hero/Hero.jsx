import React from "react";
import "./hero.css";
import HeroDarkImage from "../../assets/images/hero-img.png";

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero__content">
            <div>
              <h2>We're Creating Perfect</h2>
              <h2>Digital Products </h2>
              <div className="highlight">Promote Your Brand</div>
            </div>
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              excepturi quas eos a ea ratione.
            </p>
            <div className="hero__btns">
              <button className="primary__btn">Get Started Now</button>
              <button className="secondary__btn">Discover More</button>
            </div>
          </div>
          <div className="hero__img">
            <img src={HeroDarkImage} alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
