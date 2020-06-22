import React, { useState } from "react";
// import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import uniqid from "uniqid";
import * as action from "../../redux/ItemsCart/items-cart-action";

import Button from "../Buttons/Button";
import BtnBlock from "../PizzaBtnBlock/PizzaBtnBlock";
// import Info from "../Info/Info";
import PopUpAddItem from "../PopUpAddItem/PopUpAddItem";

const Modal = ({
  toggleModalOff,
  pizza,
  toggleInfoComponent,
  info,
  addItemToCart,
  currentPizzaSize,
  resetPizzaSize
}) => {
  const [popup, handlePopup] = useState(false);

  if (popup) {
    setTimeout(() => handlePopup(false), 1500);
  }

  return (
    <div className="modal">
      <div className="modal__about-section">
        <i
          onClick={() => {
            toggleModalOff();
            resetPizzaSize();
          }}
          className="far fa-times-circle fa-3x modal__close"
        />
        {/* <i
          onClick={toggleInfoComponent}
          className="fas fa-info-circle fa-3x modal__info"
        >
          <CSSTransition
            in={info}
            classNames="modal__info--show"
            timeout={300}
            mountOnEnter
            unmountOnExit
          >
            <Info />
          </CSSTransition>
        </i> */}
        <h2 className="modal__name">{pizza.name}</h2>
        <img className="modal__image" src={pizza.imgUrl} alt="Pizza img" />
        <div className="modal__ingredients">{pizza.ingredients}</div>
      </div>

      <div className="modal__btn-block">
        <h3 className="modal__price">
          Kaina: {pizza[currentPizzaSize].price}€
        </h3>
        <BtnBlock />

        <PopUpAddItem
          pizza
          name={pizza.name}
          pop={popup}
          size={currentPizzaSize}
        />

        <Button
          clicked={() => {
            addItemToCart({
              name: pizza.name,
              pizzaSize: currentPizzaSize,
              price: pizza[currentPizzaSize].price,
              imgUrl: pizza.imgUrl,
              type: "pizza",
              id: uniqid()
            });
            handlePopup(true);
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const {
    selectedPizza,
    infoComponentState,
    currentPizzaSize
  } = state.itemCartReducer;
  return {
    pizza: selectedPizza,
    info: infoComponentState,
    currentPizzaSize
  };
};

export default connect(mapStateToProps, action)(Modal);
