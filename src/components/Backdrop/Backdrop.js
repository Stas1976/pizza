import React from "react";
import { connect } from "react-redux";
import * as action from "../../redux/ItemsCart/items-cart-action";

const Backdrop = ({ toggleModalOff, resetPizzaSize }) => (
  <div
    className="backdrop"
    onClick={() => {
      toggleModalOff();
      resetPizzaSize();
    }}
  ></div>
);

export default connect(null, action)(Backdrop);
