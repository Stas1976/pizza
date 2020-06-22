import React from "react";
import { CSSTransition } from "react-transition-group";

const Info = ({ item, infoPopup, clicked }) => {
  return (
    <>
      <i
        onClick={clicked}
        className="fas fa-info-circle fa-2x item-card__info"
      ></i>
      <CSSTransition
        in={infoPopup}
        classNames="item-card__info--show"
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        <div className="modal__info--show">
          <h6>
            Produkto maistinė
            <p>vertė 100 g</p>
          </h6>
          {/* <div className="modal__info-list">
        <p>
          Kalorijos <span></span>
        </p>
      </div> */}
        </div>
      </CSSTransition>
    </>
  );
};

export default Info;
