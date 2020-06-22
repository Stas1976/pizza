import React, { useState, useEffect } from "react";

import pizza1 from "../../img/pizza1.jpg";
import pizza2 from "../../img/pizza2.jpg";
import pizza3 from "../../img/pizza3.jpg";
import pizza4 from "../../img/pizza4.jpg";
import pizza5 from "../../img/pizza5.jpg";

import ArrowLeft from "../ArrowLeft/ArrowLeft";
import ArrowRight from "../ArrowRight/ArrowRight";

const Header = () => {
  const [current, setCurrent] = useState(0);

  const slidesArray = [pizza1, pizza2, pizza3, pizza4, pizza5];

  const slideForward = () => {
    if (current >= slidesArray.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const slideBack = () => {
    if (current <= 0) {
      setCurrent(slidesArray.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <header className="header">
      <ul className="slider">
        <img
          src={slidesArray[current]}
          alt="pizza"
          className="slider__images slider--active"
        />
        <ArrowLeft clicked={slideBack} />
        <ArrowRight clicked={slideForward} />
      </ul>
    </header>
  );
};

export default Header;
