import React from "react";
import "./Services.css";
import { servicesData } from "../../constants";

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business with</h2>
          <h2 className="highlight"> our best services</h2>
        </div>

        <div className="services__item-wrapper">
         {servicesData.map((item, index) => (
           <div key={index} className="services__item">
           <span className="service__icon">
           <i class={item.icon}></i>
           </span>
           <h3 className="services__title">{item.title}</h3>
           <p className="description">
            {item.desc}
         </p>
         </div>
         ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
