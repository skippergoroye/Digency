import React from "react";
import "./About.css";
import { chooseData } from "../../constants";

import aboutImg from "../../assets/images/about-us.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">Why Choose US</h6>
            <h2>Specialist in aviding clients on</h2>
            <h2 className="highlight">financial challenges</h2>
            <p className="description about__content-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ad
              consectetur facilis ea, voluptas eligendi expedita vel eius
              possimus consequuntur quos nam aspernatur nihil iusto, sint, fuga
              laudantium perspiciatis mollitia?
            </p>
            <div className="choose__item-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose__us-item" key={index}>
                  <span className="choose__us-icon">
                    <i class={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__img">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
