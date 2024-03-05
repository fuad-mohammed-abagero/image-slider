import React, { useState, useEffect } from "react";
import {
  UilArrowCircleLeft,
  UilArrowCircleRight,
} from "@iconscout/react-unicons";

import "./App.css";
import img1 from "./assets/img/car-1.jpg";
import img2 from "./assets/img/car-2.jpg";
import img3 from "./assets/img/car-3.webp";
import img4 from "./assets/img/car-4.jpg";
import img5 from "./assets/img/car-5.jpg";
const images = [img1, img2, img4, img5, img1, img2, img4, img5];

function App() {
  const [indexof, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          return 0; // Reset index to 0 if it reaches the last image
        } else {
          return prevIndex + 1; // Increment index otherwise
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const handleclick = (index) => setIndex(index);
  const previmage = () =>
    setIndex((prevImage) => {
      if (prevImage === 0) return images.length - 1;
      else return prevImage - 1;
    });
  const nextimage = () =>
    setIndex((prevImage) => (prevImage + 1) % images.length);
  return (
    <>
      <div className="div1">
        <div className="img-dev">
          {images.map((element, index) => (
            <img
              key={index}
              src={element}
              alt={`Car ${index + 1}`}
              style={{ translate: `${-100 * indexof}%` }}
            />
          ))}
        </div>
        <div className="cercle">
          {images.map((element, index) => (
            <button
              onClick={() => handleclick(index)}
              key={index}
              className={
                index === indexof ? "selected-cercle-span" : "cercle-span"
              }
            ></button>
          ))}
        </div>

        <button onClick={previmage} className="prev">
          <UilArrowCircleLeft color="#61DAFB" size="35" />
        </button>
        <button onClick={nextimage} className="next">
          <UilArrowCircleRight color="#61DAFB" size="35" />
        </button>
      </div>
    </>
  );
}

export default App;
