import React from "react";
import { CSSTransition } from "react-transition-group";

const PopUpAddItem = ({ name, pop, pizza, ...otherProps }) => {
  return (
    <CSSTransition
      in={pop}
      classNames="popup"
      timeout={300}
      mountOnEnter
      unmountOnExit
    >
      <div
        className={
          pizza ? "popup-add-item popup-add-item--pizza" : "popup-add-item"
        }
      >
        Pridėta: {name}{" "}
        {otherProps.size === "small"
          ? "25cm"
          : otherProps.size === "medium"
          ? "30cm"
          : otherProps.size === "large"
          ? "35cm"
          : null}
      </div>
    </CSSTransition>
  );
};
export default PopUpAddItem;
