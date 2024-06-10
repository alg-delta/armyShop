import React, { useState } from "react";
import data from "./data";
import "./Vidguk.css";
export default function Vidguk() {
  const [index, setIndex] = useState(0);
  const review = data[index];

  const next = () => {
    if (index === 5) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const back = () => {
    if (index === 0) {
      setIndex(5);
    } else {
      setIndex(index - 1);
    }
  };

  const random = () => {
    let randomIndex = Math.floor(Math.random() * 6);
    setIndex(randomIndex);
  };

  return (
    <section id="Vidguk">
      <h2 className="vidguktitle"> Відгуки клієнтів </h2>
      <div className="vidguk">
        <img src={review.image} className="vidgukimage" alt="img" />
        <h3> {review.name} </h3>
        <p>{review.job}</p>
        <p>{review.text}</p>
        <button onClick={back} type="button" className="vidguk-btn">
          Попередній
        </button>
        <button onClick={next} type="button" className="vidguk-btn">
          Наступний
        </button>
        <button onClick={random} type="button" className="vidguk-btn">
          Випадковий відгук
        </button>
      </div>
    </section>
  );
}
