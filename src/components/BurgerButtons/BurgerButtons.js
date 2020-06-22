import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as action from "../../redux/navigation/navigationAction";

const BurgerButtons = ({ toggleSideDrawer }) => {
  let [position, setPosition] = useState(window.pageYOffset);
  let [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let temporaryPosition = window.pageYOffset;

      setVisible(position > temporaryPosition);
      setPosition(temporaryPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="burger-button">
      <input
        type="checkbox"
        className="burger-button__checkbox"
        id="burger-button-input"
      />
      <label
        onClick={toggleSideDrawer}
        htmlFor="burger-button-input"
        className={
          "burger-button__label " + (!visible && "burger-button__label--hiden")
        }
      >
        <span className="burger-button__icon"></span>
      </label>
    </div>
  );
};

export default connect(null, action)(BurgerButtons);
