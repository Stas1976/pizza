import React from "react";
import { connect } from "react-redux";
import * as action from "../../redux/ItemsCart/items-cart-action";

const PizzaBtnBlock = ({ selectPizzaSize, currentPizzaSize }) => {
  return (
    <div className="btn-block">
      <button
        onClick={() => selectPizzaSize("small")}
        className={
          currentPizzaSize === "small"
            ? `btn-block__btn btn-block__btn--select`
            : `btn-block__btn`
        }
      >
        25 cm
      </button>
      <button
        onClick={() => selectPizzaSize("medium")}
        className={
          currentPizzaSize === "medium"
            ? `btn-block__btn btn-block__btn--select`
            : `btn-block__btn`
        }
      >
        30 cm
      </button>
      <button
        onClick={() => selectPizzaSize("large")}
        className={
          currentPizzaSize === "large"
            ? `btn-block__btn btn-block__btn--select`
            : `btn-block__btn`
        }
      >
        35 cm
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { currentPizzaSize: state.itemCartReducer.currentPizzaSize };
};

export default connect(mapStateToProps, action)(PizzaBtnBlock);
