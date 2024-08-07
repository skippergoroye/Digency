import React from "react";
import "./Counter.css";
import { counterData } from "../../constants";

const Counter = () => {
  return (
    <section>
      <div className="container">
        <div className="counter__wrapper">
          {counterData.map((item, index) => (
            <div key={index} className="counter__item">
              <h3 className="counter__number">{item.number}</h3>
              <h4 className="counter__title">{item.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
